const htmlContent = (
    name: string, 
    email: string, 
    phone: string, 
    message: string, 
    company: string
): string => `
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>New Contact Form Submission - WHOIS Morocco</title>
    <!--[if mso]>
    <style type="text/css">
        body, table, td {font-family: Arial, sans-serif !important;}
    </style>
    <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <!-- Main Container -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #022545 0%, #00E676 100%); padding: 40px 30px; border-radius: 10px 10px 0 0; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; line-height: 1.2;">
                                New Contact Form Submission
                            </h1>
                            <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px; opacity: 0.9;">
                                WHOIS Morocco
                            </p>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 20px 0; color: #022545; font-size: 16px; line-height: 1.6;">
                                You have received a new message from the contact form on <strong>mawhois.com</strong>.
                            </p>

                            <!-- Contact Information Card -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #eff6fd; border-radius: 10px; margin: 30px 0; padding: 25px;">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 20px 0; color: #022545; font-size: 20px; font-weight: 600;">
                                            Contact Information
                                        </h2>
                                        
                                        <!-- Name -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 15px;">
                                            <tr>
                                                <td style="width: 120px; vertical-align: top;">
                                                    <strong style="color: #022545; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Name:</strong>
                                                </td>
                                                <td style="color: #022545; font-size: 15px; font-weight: 500;">
                                                    ${name}
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Email -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 15px;">
                                            <tr>
                                                <td style="width: 120px; vertical-align: top;">
                                                    <strong style="color: #022545; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</strong>
                                                </td>
                                                <td>
                                                    <a href="mailto:${email}" style="color: #00E676; font-size: 15px; font-weight: 500; text-decoration: none; border-bottom: 2px solid #00E676;">
                                                        ${email}
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Phone -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 15px;">
                                            <tr>
                                                <td style="width: 120px; vertical-align: top;">
                                                    <strong style="color: #022545; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone:</strong>
                                                </td>
                                                <td style="color: #022545; font-size: 15px; font-weight: 500;">
                                                    ${phone}
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Company -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="width: 120px; vertical-align: top;">
                                                    <strong style="color: #022545; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Company:</strong>
                                                </td>
                                                <td style="color: #022545; font-size: 15px; font-weight: 500;">
                                                    ${company}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Message Section -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 30px;">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 15px 0; color: #022545; font-size: 20px; font-weight: 600;">
                                            Message
                                        </h2>
                                        <div style="background-color: #f9f9f9; border-left: 4px solid #00E676; padding: 20px; border-radius: 6px; margin-top: 15px;">
                                            <p style="margin: 0; color: #022545; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">
                                                ${message.replace(/\n/g, '<br>')}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <!-- Quick Actions -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 40px; padding-top: 30px; border-top: 2px solid #eff6fd;">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:${email}" style="display: inline-block; background-color: #00E676; color: #022545; text-decoration: none; padding: 12px 30px; border-radius: 26px; font-weight: 600; font-size: 15px; margin: 5px;">
                                            Reply to ${name}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #022545; padding: 30px; border-radius: 0 0 10px 10px; text-align: center;">
                            <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 14px; opacity: 0.9;">
                                This email was sent from the contact form on
                            </p>
                            <p style="margin: 0;">
                                <a href="https://www.mawhois.com" style="color: #00E676; text-decoration: none; font-weight: 600; font-size: 16px;">
                                    www.mawhois.com
                                </a>
                            </p>
                            <p style="margin: 15px 0 0 0; color: #ffffff; font-size: 12px; opacity: 0.7;">
                                WHOIS Morocco - Domain Search & Registration Service
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

export default htmlContent;
