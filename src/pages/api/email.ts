// src/pages/api/email.ts
export const prerender = false; // this page becomes SSR

import type { APIRoute } from 'astro';
import { sendEmailWithBrevo } from '../../utils/email';
import htmlContent from '../../config/htmlContent';

export const POST: APIRoute = async ({ request, locals }) => {
    try {      
        const data = await request.json();
        const { name, email, phone, message, company } = data as { 
            name: string, 
            email: string, 
            phone?: string, 
            message: string, 
            company?: string 
        };

        // Validate required fields
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ 
                    success: false, 
                    error: 'Name, email, and message are required fields.' 
                }), 
                { 
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }

        // Send email to admin
        const emailResponse = await sendEmailWithBrevo({
            to: 'ali.rami@hostino.com',
            subject: `New Contact Form Submission from ${name} - WHOIS Morocco`,
            htmlContent: htmlContent(name, email, phone || 'Not provided', message, company || 'Not provided'),
            locals
        });

        return new Response(
            JSON.stringify({ success: true, message: 'Your message has been sent successfully!' }), 
            { 
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    } catch (error) {
        console.error('Error in email API:', error);
        const ErrorMessage = error instanceof Error ? error.message : 'Internal server error';
        return new Response(
            JSON.stringify({ 
                success: false, 
                error: ErrorMessage || 'An error occurred while sending your message. Please try again later.' 
            }), 
            { 
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
}