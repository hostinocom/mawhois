import type { APIRoute } from "astro";
import { connect } from "cloudflare:sockets";
import { distWhois } from "../../config/dist.whois";

// Helper function to validate domain and get WHOIS server URI
function getWhoisServer(domain: string): { host: string; port: number } {
  // 1. Check if domain is valid
  // Simple regex for domain validation
  const domainRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
  
  if (!domain || !domainRegex.test(domain)) {
    throw new Error("Invalid domain name");
  }

  // 2. Loop over extensions to find match
  let matchedUri: string | null = null;
  let longestMatchLength = 0;

  for (const config of distWhois) {
    for (const ext of config.extensions) {
      if (domain.endsWith(ext)) {
        // We want the longest matching extension (e.g. .co.uk over .uk)
        if (ext.length > longestMatchLength) {
          longestMatchLength = ext.length;
          matchedUri = config.uri;
        }
      }
    }
  }

  if (!matchedUri) {
    throw new Error(`Extension not supported for domain: ${domain}`);
  }

  // Parse URI (remove socket:// and handle port)
  // Format is usually socket://hostname:port or socket://hostname
  const cleanUri = matchedUri.replace("socket://", "");
  const [host, portStr] = cleanUri.split(":");
  const port = portStr ? parseInt(portStr, 10) : 43;

  return { host, port };
}

async function whois(domain: string, host: string, port: number = 43): Promise<string> {
  console.log(`Connecting to ${host}:${port} for domain: ${domain}`);

  // Cloudflare Workers TCP Socket
  const socket = connect({
    hostname: host,
    port: port,
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
    // Validate domain and get the correct WHOIS server
    const { host, port } = getWhoisServer(domain);
    
    // Perform WHOIS lookup
    const raw = await whois(domain, host, port);
    console.log("raw", raw);

    const available =
      raw.includes("No Object Found") ||
      raw.includes("No entries found") ||
      raw.includes("No match") ||
      raw.includes("Object does not exist") ||
      raw.includes("Domain not found") ||
      raw.includes("NOT FOUND") ||
      raw.includes("Status: AVAILABLE") ||
      raw.includes("Status: free") ||
      raw.includes("is free");
      // Note: Availability checks might need to be refined based on specific registry responses
      // currently hardcoded in dist.whois.ts but not fully utilized here yet except generally.
      // Ideally, we should use the 'available' string from distWhois to check.

    return new Response(
      JSON.stringify({ domain, available, raw}),
      { headers: { "Content-Type": "application/json" } }
    );

  } catch (e: any) {
    const ErrorMessage = e?.message || "Unknown error";
    
    // Check if it's our validation error
    const status = ErrorMessage.includes("Invalid domain") || ErrorMessage.includes("Extension not supported") ? 400 : 500;

    return new Response(
      JSON.stringify({ error: "WHOIS lookup failed", details: ErrorMessage }),
      { status: status }
    );
  }
};
