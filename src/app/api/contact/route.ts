import { NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiting (3 submissions per IP per hour)
const ipCache = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_LIMIT = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipCache.get(ip) || [];
  
  // Filter timestamps within the active 1-hour window
  const activeTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW);
  
  if (activeTimestamps.length >= MAX_LIMIT) {
    return true;
  }
  
  activeTimestamps.push(now);
  ipCache.set(ip, activeTimestamps);
  return false;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";
    
    // 1. Rate Limit Filter
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in an hour." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, university, role, subject, message, website } = body;

    // 2. Honeypot check for bots
    if (website && website.trim() !== "") {
      // Silently discard or mock success to fool bots
      return NextResponse.json({ success: true, message: "Message sent successfully" });
    }

    // 3. Server-side Validation
    if (!name || !email || !role || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json({ error: "Name must be between 2 and 100 characters" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address format" }, { status: 400 });
    }

    if (subject.length < 5 || subject.length > 200) {
      return NextResponse.json({ error: "Subject must be between 5 and 200 characters" }, { status: 400 });
    }

    if (message.length < 20 || message.length > 5000) {
      return NextResponse.json({ error: "Message must be between 20 and 5000 characters" }, { status: 400 });
    }

    // 4. Send Emails via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL_TO;

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not defined. Email dispatch skipped.");
      return NextResponse.json(
        { error: "Contact form is misconfigured: RESEND_API_KEY env variable is missing." },
        { status: 500 }
      );
    }

    if (!recipientEmail) {
      console.warn("CONTACT_EMAIL_TO is not defined. Email dispatch skipped.");
      return NextResponse.json(
        { error: "Contact form is misconfigured: CONTACT_EMAIL_TO env variable is missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    // Email 1: Notification to Admin
    const adminEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E7E5E4; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #CC0000; color: #ffffff; padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; letter-spacing: -0.02em;">Lumisync Contact</h1>
          <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.8;">New Form Submission</p>
        </div>
        <div style="padding: 24px; background-color: #FAFAF9;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #57534E; width: 120px;">Name:</td>
              <td style="padding: 8px 0; font-size: 13px; color: #1C1917;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #57534E;">Email:</td>
              <td style="padding: 8px 0; font-size: 13px; color: #1C1917;"><a href="mailto:${email}" style="color: #CC0000; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #57534E;">University:</td>
              <td style="padding: 8px 0; font-size: 13px; color: #1C1917;">${university || "Not Specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #57534E;">Role:</td>
              <td style="padding: 8px 0; font-size: 13px; color: #1C1917; text-transform: capitalize;">${role}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #57534E;">Subject:</td>
              <td style="padding: 8px 0; font-size: 13px; color: #1C1917;">${subject}</td>
            </tr>
          </table>
          
          <div style="background-color: #ffffff; border: 1px solid #E7E5E4; border-radius: 8px; padding: 16px; font-size: 13px; line-height: 1.6; color: #1C1917; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
        <div style="background-color: #F5F5F4; text-align: center; padding: 12px; font-size: 11px; color: #A8A29E; border-t: 1px solid #E7E5E4;">
          This message was submitted via lumisync.app/contact
        </div>
      </div>
    `;

    // Email 2: Confirmation to User
    const userEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E7E5E4; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #1C1917; color: #ffffff; padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; letter-spacing: -0.02em;">Lumisync</h1>
          <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.8;">Thank you for contacting us</p>
        </div>
        <div style="padding: 24px; background-color: #FAFAF9; color: #1C1917; font-size: 13px; line-height: 1.6;">
          <p>Hi ${name},</p>
          <p>Thanks for reaching out to the Lumisync team! We have received your message regarding: <strong>"${subject}"</strong>.</p>
          <p>Lumisync is built to simplify campus life for students, faculty, and IT departments. Our team is reviewing your message, and we will get back to you within 2 to 3 business days.</p>
          <p>In the meantime, feel free to explore our live client application at <a href="https://lumisync.vercel.app" style="color: #CC0000; text-decoration: none;">lumisync.vercel.app</a> or check out our roadmap at <a href="https://lumisync.app/roadmap" style="color: #CC0000; text-decoration: none;">lumisync.app/roadmap</a>.</p>
          <p>Best regards,<br/>The Lumisync Team</p>
        </div>
        <div style="background-color: #F5F5F4; text-align: center; padding: 12px; font-size: 11px; color: #A8A29E; border-t: 1px solid #E7E5E4;">
          Reply directly to this email if you have any questions.
        </div>
      </div>
    `;

    // Trigger Admin Notification
    await resend.emails.send({
      from: "Lumisync Contact <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `[Lumisync Contact] ${subject} - from ${name}`,
      html: adminEmailHtml,
    });

    // Trigger Submitter Confirmation
    await resend.emails.send({
      from: "Lumisync Team <onboarding@resend.dev>",
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: userEmailHtml,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully" });

  } catch (err: any) {
    console.error("Error inside contact route:", err);
    return NextResponse.json(
      { error: "Failed to send message: " + (err.message || err) },
      { status: 500 }
    );
  }
}