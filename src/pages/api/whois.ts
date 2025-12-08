import type { APIRoute } from "astro";
import { connect } from "cloudflare:sockets";
import { parseWhois } from "../../utils/whoisUtils";

async function whois(domain: string): Promise<string> {
  const host = domain.endsWith(".ma")
    ? "whois.registre.ma"
    : "whois.verisign-grs.com";

  // Cloudflare Workers TCP Socket
  const socket = connect({
    hostname: host,
    port: 43,
  });

  let data = "";

  // Send domain query
  const writer = socket.writable.getWriter();
  await writer.write(new TextEncoder().encode(domain + "\r\n"));
  await writer.close();

  // Read WHOIS data
  const reader = socket.readable;

  try {
    for await (const chunk of reader) {
      data += new TextDecoder().decode(chunk);
    }
  } catch (err: any) {
    throw new Error("WHOIS TCP error: " + err.message);
  }

  socket.close();
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

  try {
    const raw = await whois(domain);

    const available =
      raw.includes("No Object Found") ||
      raw.includes("No entries found") ||
      raw.includes("No match") ||
      raw.includes("Object does not exist");

    const info = available ? {} : parseWhois(raw);

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
