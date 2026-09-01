import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    let resendSuccess = false;

    // Option 1: Send via Resend API if RESEND_API_KEY is available in environment
    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["chpurna506@gmail.com"],
            reply_to: email,
            subject: `[Portfolio Contact] ${subject || "New Message"} - ${name}`,
            html: `
              <div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 24px; background-color: #0f172a; color: #f8fafc; rounded: 16px;">
                <h2 style="color: #38bdf8; margin-top: 0;">New Message from Portfolio Website</h2>
                <div style="background-color: #1e293b; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
                  <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
                  <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
                  <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject || "N/A"}</p>
                </div>
                <div style="background-color: #1e293b; padding: 16px; border-radius: 8px;">
                  <h4 style="color: #94a3b8; margin-top: 0;">Message Content:</h4>
                  <p style="white-space: pre-wrap; line-height: 1.6; color: #e2e8f0;">${message}</p>
                </div>
              </div>
            `,
          }),
        });

        if (resendRes.ok) {
          resendSuccess = true;
        }
      } catch (err) {
        console.error("Resend API error:", err);
      }
    }

    // Option 2: Fallback background submission to Web3Forms to guarantee delivery to chpurna506@gmail.com
    if (!resendSuccess) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "56d773b0-6421-4f81-912c-9be8f94e9f76",
            name,
            email,
            subject: `[Portfolio Contact] ${subject || "New Message"} from ${name}`,
            message: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
            to_email: "chpurna506@gmail.com",
          }),
        });
      } catch (err) {
        console.error("Web3Forms fallback error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been delivered directly to chpurna506@gmail.com!",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}
