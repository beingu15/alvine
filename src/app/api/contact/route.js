import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceCategory, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: 'Please provide all required fields (Name, Email, Phone, and Message).' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === 'your_resend_api_key_here') {
      console.error('RESEND_API_KEY is missing or unconfigured.');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service configuration incomplete. Please set a valid RESEND_API_KEY in your environment.' 
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const recipientEmail = process.env.CONTACT_TO_EMAIL || 'alvyne500@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'ALVYNE Inquiries <onboarding@resend.dev>';

    // Format current timestamp
    const now = new Date();
    const formattedDate = now.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    // Clean phone number for WhatsApp link
    const cleanPhone = phone.replace(/[^0-9]/g, '');

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Business Inquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 24px; color: #1a202c;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
    
    <!-- Brand Header -->
    <tr>
      <td style="background-color: #07101d; padding: 28px 32px; border-bottom: 3px solid #FFD700; text-align: left;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 1px;">
          ALVYNE
        </h1>
        <p style="margin: 4px 0 0 0; font-size: 11px; font-weight: 600; color: #FFD700; text-transform: uppercase; letter-spacing: 1.5px;">
          Management Consultancy • Navigating Growth
        </p>
      </td>
    </tr>

    <!-- Notification Title -->
    <tr>
      <td style="padding: 28px 32px 12px 32px;">
        <span style="display: inline-block; background-color: #fff9db; color: #b7791f; border: 1px solid #f6e05e; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.5px;">
          New Website Lead
        </span>
        <h2 style="margin: 12px 0 6px 0; font-size: 20px; font-weight: 700; color: #0d1424;">
          New Consultation Inquiry Received
        </h2>
        <p style="margin: 0; font-size: 13px; color: #718096;">
          Received on ${formattedDate} (IST) via alvyne.in Contact Form
        </p>
      </td>
    </tr>

    <!-- Client Details Card -->
    <tr>
      <td style="padding: 12px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7; width: 35%; font-size: 12px; font-weight: 600; color: #718096; text-transform: uppercase;">
              Prospect Name
            </td>
            <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7; font-size: 14px; font-weight: 700; color: #1a202c;">
              ${escapeHtml(name)}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7; font-size: 12px; font-weight: 600; color: #718096; text-transform: uppercase;">
              Email Address
            </td>
            <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #2b6cb0;">
              <a href="mailto:${escapeHtml(email)}" style="color: #2b6cb0; text-decoration: underline;">
                ${escapeHtml(email)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7; font-size: 12px; font-weight: 600; color: #718096; text-transform: uppercase;">
              Phone / WhatsApp
            </td>
            <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7; font-size: 14px; font-weight: 600; color: #1a202c;">
              <a href="tel:${escapeHtml(phone)}" style="color: #1a202c; text-decoration: none;">
                ${escapeHtml(phone)}
              </a>
              ${cleanPhone ? `
                <span style="margin-left: 8px;">
                  <a href="https://wa.me/${cleanPhone}" target="_blank" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; font-size: 10px; font-weight: bold; padding: 2px 8px; border-radius: 4px;">
                    WhatsApp
                  </a>
                </span>
              ` : ''}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 12px; font-weight: 600; color: #718096; text-transform: uppercase;">
              Area of Interest
            </td>
            <td style="padding: 8px 0; font-size: 14px; font-weight: 700; color: #d69e2e;">
              ${escapeHtml(serviceCategory || 'General Inquiry')}
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Message Content -->
    <tr>
      <td style="padding: 16px 32px;">
        <h3 style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #718096; letter-spacing: 0.5px;">
          Client's Message
        </h3>
        <div style="background-color: #ffffff; border-left: 4px solid #FFD700; border: 1px solid #e2e8f0; border-left-width: 4px; border-left-color: #FFD700; border-radius: 6px; padding: 16px; font-size: 14px; line-height: 1.6; color: #2d3748; white-space: pre-wrap;">
${escapeHtml(message)}
        </div>
      </td>
    </tr>

    <!-- Quick Action Button -->
    <tr>
      <td style="padding: 16px 32px 28px 32px; text-align: center;">
        <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent('Re: Consultation Inquiry with ALVYNE Management Consultancy')}" 
           style="display: inline-block; background-color: #FFD700; color: #000000; font-size: 13px; font-weight: 700; padding: 12px 28px; border-radius: 9999px; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px;">
          Reply to ${escapeHtml(name)}
        </a>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #f7fafc; padding: 16px 32px; text-align: center; border-top: 1px solid #edf2f7; font-size: 11px; color: #a0aec0;">
        <p style="margin: 0;">
          This email was generated automatically by the ALVYNE website contact form and forwarded to <strong>${escapeHtml(recipientEmail)}</strong>.
        </p>
      </td>
    </tr>

  </table>
</body>
</html>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email,
      subject: `New Inquiry: ${name} (${serviceCategory || 'Consultation'})`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: error.message || 'Failed to dispatch email via Resend.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry successfully transmitted.', id: data?.id },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
