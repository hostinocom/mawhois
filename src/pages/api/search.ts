// src/pages/api/search.ts
export const prerender = false; // this page becomes SSR

import type { APIRoute } from 'astro';
import { SignJWT } from 'jose';

export const POST: APIRoute = async ({ request }) => {
    try {      
        const data = await request.json();
        const { fullDomain } = data;

        const secret = import.meta.env.DOMAIN_SECRET_KEY || 'aaaaa39';
        const secretKey = new TextEncoder().encode(secret);

        // Create a secure signature (Hash of domain + secret)
        const signature = await new SignJWT({ domain: fullDomain })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('40s') // The crucial part: Token expires after 40 seconds
        .sign(secretKey);

        // Return JSON with signature
        return new Response(
            JSON.stringify({ success: true, signature }), 
            { 
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    } catch (error) {
        console.error('Error in search API:', error);
        return new Response(JSON.stringify({ success: false, error: 'Internal server error' }), { status: 500 });
    }
}