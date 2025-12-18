
// Helper function to get Brevo config from environment variables
function getBrevoConfig(locals?: any) {
  const BREVO_API_KEY = locals?.runtime?.env?.BREVO_API_KEY || import.meta.env.BREVO_API_KEY;
  const BREVO_SENDER_EMAIL = locals?.runtime?.env?.BREVO_SENDER_EMAIL || import.meta.env.BREVO_SENDER_EMAIL || "ali.rami@hostino.com";
  const BREVO_TO_EMAIL = locals?.runtime?.env?.BREVO_TO_EMAIL || import.meta.env.BREVO_TO_EMAIL || "ali.rami@hostino.com";
  const BREVO_SENDER_NAME = locals?.runtime?.env?.BREVO_SENDER_NAME || import.meta.env.BREVO_SENDER_NAME || "Hostino";
  
  if (!BREVO_API_KEY) {
    throw new Error("BREVO_API_KEY environment variable is not set");
  }
  
  return { BREVO_API_KEY, BREVO_SENDER_EMAIL, BREVO_SENDER_NAME, BREVO_TO_EMAIL };
}

export async function sendEmailWithBrevo({ 
    subject, 
    htmlContent, 
    locals 
  }: {
    subject: string;
    htmlContent: string;
    locals?: any;
  }) {
    const { BREVO_API_KEY, BREVO_SENDER_EMAIL, BREVO_SENDER_NAME, BREVO_TO_EMAIL } = getBrevoConfig(locals);
    
    const url = 'https://api.brevo.com/v3/smtp/email';
    const body: any = {
      sender: { name: BREVO_SENDER_NAME, email: BREVO_SENDER_EMAIL },
      to: [{ email: BREVO_TO_EMAIL }],
      subject: subject || 'New Contact Form Submission - WHOIS Morocco',
      htmlContent,
    };
  
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(body),
    });
  
    const data = await res.json();
    console.log(`Brevo send email data is : ${JSON.stringify(data)}`);
    if (!res.ok) {
      throw new Error('Brevo send failed: ' + JSON.stringify(data));
    }
    return data;
  }