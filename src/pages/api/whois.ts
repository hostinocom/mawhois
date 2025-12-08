import type { APIRoute } from "astro";
import { connect } from "cloudflare:sockets";
import { parseWhois } from "../../utils/whoisUtils";

async function whois(domain: string): Promise<string> {
  const host = domain.endsWith(".ma")
    ? "whois.registre.ma"
    : "whois.verisign-grs.com";

  console.log(`Connecting to ${host}:43 for domain: ${domain}`);

  // Cloudflare Workers TCP Socket
  const socket = connect({
    hostname: host,
    port: 43,
  });

  const chunks: Uint8Array[] = [];

  try {
    // Get writer and reader
    const writer = socket.writable.getWriter();
    const reader = socket.readable.getReader();

    // Send domain query (WHOIS protocol requires \r\n)
    const query = domain + "\r\n";
    console.log(`Sending query: ${query.trim()}`);
    await writer.write(new TextEncoder().encode(query));
    // Don't close writer yet - keep connection open for reading
    console.log("Query sent, starting to read...");

    // Read all data from the stream
    // WHOIS servers send data and then close the connection
    try {
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          console.log("Stream ended (done=true)");
          break;
        }

        if (value && value.length > 0) {
          chunks.push(value);
          console.log(`Received chunk of ${value.length} bytes`);
        }
      }
    } catch (readError: any) {
      console.error("Error reading stream:", readError);
      // Continue - we might have some data already
    } finally {
      reader.releaseLock();
      // Close writer after reading is complete
      try {
        await writer.close();
      } catch (e) {
        // Writer might already be closed, ignore
        console.log("Writer close error (ignored):", e);
      }
    }

    // Combine all chunks
    if (chunks.length === 0) {
      throw new Error("No data received from WHOIS server");
    }

    const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
    const combined = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
      combined.set(chunk, offset);
      offset += chunk.length;
    }

    const data = new TextDecoder().decode(combined);
    console.log(`WHOIS data received, total length: ${data.length} bytes`);
    console.log("First 200 chars:", data.substring(0, 200));
    
    return data;
  } catch (err: any) {
    console.error("WHOIS error:", err);
    throw new Error("WHOIS TCP error: " + (err.message || String(err)));
  } finally {
    try {
      socket.close();
    } catch (e) {
      // Socket might already be closed
    }
  }
}

export const GET: APIRoute = async ({ url }) => {
  const domain = url.searchParams.get("domain");

  if (!domain) {
    return new Response(
      JSON.stringify({ error: "Missing domain" }),
      { status: 400 }
    );
  }

  try {
    const raw = await whois(domain);
    console.log("raw", raw);

    const available =
      raw.includes("No Object Found") ||
      raw.includes("No entries found") ||
      raw.includes("No match") ||
      raw.includes("Object does not exist");

    const info = available ? {} : parseWhois(raw);
    console.log("info", info);

    return new Response(
      JSON.stringify({ domain, available, raw, info }),
      { headers: { "Content-Type": "application/json" } }
    );

  } catch (e: any) {
    const ErrorMessage = e?.message || "Unknown error";

    return new Response(
      JSON.stringify({ error: "WHOIS lookup failed", details: ErrorMessage }),
      { status: 500 }
    );
  }
};
