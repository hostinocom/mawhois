import type { APIRoute } from "astro";
import net from "net";

function whoisMA(domain: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const socket = net.createConnection(43, "whois.registre.ma");
    let data = "";

    socket.write(domain + "\r\n");

    socket.on("data", (chunk) => (data += chunk.toString()));
    socket.on("end", () => resolve(data));
    socket.on("error", (err) => reject(err));
  });
}

function parseWhois(rawData: string): any {
  const result: any = {};
  
  // 1. Split by new lines (handles \r\n and \n)
  const lines = rawData.split(/\r?\n/);

  for (const line of lines) {
    const trimmedLine = line.trim();

    // 2. Skip empty lines, comments (>>>), or lines without a colon
    // We limit the key length check to avoid parsing long disclaimer sentences as keys
    const separatorIndex = trimmedLine.indexOf(':');
    if (
      !trimmedLine || 
      trimmedLine.startsWith('>>>') || 
      separatorIndex === -1 ||
      separatorIndex > 60 // Heuristic: Keys usually aren't sentences
    ) {
      continue;
    }

    // 3. Extract Key and Value
    const key = trimmedLine.substring(0, separatorIndex).trim();
    const value = trimmedLine.substring(separatorIndex + 1).trim();

    // 4. Handle Duplicate Keys (e.g., 'Name Server')
    if (result[key]) {
      // If key exists, ensure it is an array and push the new value
      if (Array.isArray(result[key])) {
        (result[key] as string[]).push(value);
      } else {
        // Convert existing string to array containing both
        result[key] = [result[key] as string, value];
      }
    } else {
      // 5. New Key
      result[key] = value;
    }
  }

  return result;
}

export const GET: APIRoute = async ({ url }) => {
  const domain = url.searchParams.get("domain");

  if (!domain) {
    return new Response(
      JSON.stringify({ error: "Missing domain" }),
      { status: 400 }
    );
  }

  // Query WHOIS server
  let raw = await whoisMA(domain);
  console.log('raw', raw);

  // Basic availability detection
  const available =
    raw.includes("No Object Found") ||
    raw.includes("The queried object does not exist") ||
    raw.includes("No entries found") ||
    raw.includes("No match");

  let info: any = {};
  if (!available) {
    info = parseWhois(raw);
  }
  // delay of 20 seconds after the response is sent
  await new Promise(resolve => setTimeout(resolve, 5000));

  return new Response(
    JSON.stringify({
      domain,
      available,
      raw,
      info,
    }),
    { status: 200 }
  );
};
