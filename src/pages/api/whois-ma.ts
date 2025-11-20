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

function parseWhois(raw: string) {
  const lines = raw.split("\n").map(l => l.trim()).filter(l => l.length > 0);

  const data: Record<string, any> = {
    nameServers: [],
    status: [],
  };

  for (const line of lines) {
    if (line.startsWith("Domain Name:"))
      data.domain = line.replace("Domain Name:", "").trim();

    else if (line.startsWith("Creation Date:"))
      data.creationDate = line.replace("Creation Date:", "").trim();

    else if (line.startsWith("Updated Date:"))
      data.updatedDate = line.replace("Updated Date:", "").trim();

    else if (line.startsWith("Registry Expiry Date:"))
      data.expiryDate = line.replace("Registry Expiry Date:", "").trim();

    else if (line.startsWith("Registrar:"))
      data.registrar = line.replace("Registrar:", "").trim();

    else if (line.startsWith("Registrant Name:"))
      data.registrant = line.replace("Registrant Name:", "").trim();

    else if (line.startsWith("Admin Email:"))
      data.adminEmail = line.replace("Admin Email:", "").trim();

    else if (line.startsWith("Admin Phone:"))
      data.adminPhone = line.replace("Admin Phone:", "").trim();

    else if (line.startsWith("Name Server:"))
      data.nameServers.push(line.replace("Name Server:", "").trim());

    else if (line.startsWith("Domain Status:"))
      data.status.push(line.replace("Domain Status:", "").trim());
  }

  return data;
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
