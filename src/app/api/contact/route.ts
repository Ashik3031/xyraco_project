import { NextResponse, type NextRequest } from "next/server";
import { escapeHtml, getClientIp, isAllowedOrigin, isValidEmail, rateLimit, verifyRecaptcha } from "@/lib/email-security";
import { EmailConfigError, sendMail } from "@/lib/mailer";

const OWNER_EMAIL = "info@xyraco.com";

type ContactBody = {
    name?: unknown;
    email?: unknown;
    message?: unknown;
    recaptchaToken?: unknown;
};

function normalize(value: unknown) {
    return typeof value === "string" ? value.trim() : "";
}

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
    try {
        if (!isAllowedOrigin(request)) {
            return NextResponse.json({ success: false, message: "Request origin is not allowed." }, { status: 403 });
        }

        const ip = getClientIp(request);
        const limited = rateLimit(`contact:${ip}`);
        if (!limited.allowed) {
            return NextResponse.json({ success: false, message: "Too many requests. Please try again shortly." }, { status: 429 });
        }

        const body = (await request.json()) as ContactBody;
        const name = normalize(body.name);
        const email = normalize(body.email).toLowerCase();
        const message = normalize(body.message);
        const recaptchaToken = normalize(body.recaptchaToken);

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, message: "Name, email, and message are required." }, { status: 400 });
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 });
        }

        if (name.length > 120 || email.length > 254 || message.length > 5000) {
            return NextResponse.json({ success: false, message: "Submitted content is too long." }, { status: 400 });
        }

        const recaptchaOk = await verifyRecaptcha(recaptchaToken);
        if (!recaptchaOk) {
            return NextResponse.json({ success: false, message: "reCAPTCHA verification failed." }, { status: 400 });
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

        await Promise.all([
            sendMail({
                to: OWNER_EMAIL,
                subject: `New Xyraco contact message from ${name}`,
                replyTo: email,
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
                        <h2>New Xyraco contact message</h2>
                        <p><strong>Name:</strong> ${safeName}</p>
                        <p><strong>Email:</strong> ${safeEmail}</p>
                        <p><strong>Message:</strong></p>
                        <div style="padding: 16px; background: #f6f6f6; border-radius: 12px;">${safeMessage}</div>
                    </div>
                `,
            }),
            sendMail({
                to: email,
                subject: "We received your message - Xyraco",
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111;">
                        <h2>Hi ${safeName},</h2>
                        <p>Thanks for reaching out to Xyraco. We received your message and our team will review it soon.</p>
                        <p>We love hearing from founders and teams building ambitious ideas. If there is a strong fit, we will follow up with next steps.</p>
                        <p><strong>Your submitted message:</strong></p>
                        <div style="padding: 16px; background: #f6f6f6; border-radius: 12px;">${safeMessage}</div>
                        <p>Talk soon,<br /><strong>Team Xyraco</strong></p>
                    </div>
                `,
            }),
        ]);

        console.info(`[email] Contact email sent for ${email} from ${ip}`);
        return NextResponse.json({ success: true, message: "Message sent successfully." });
    } catch (error) {
        console.error("[email] Contact API failed:", error);
        if (error instanceof EmailConfigError) {
            return NextResponse.json({ success: false, message: "Email service is not configured yet. Add SMTP values in .env.local and restart the dev server." }, { status: 503 });
        }

        return NextResponse.json({ success: false, message: "Unable to send message right now. Please try again later." }, { status: 500 });
    }
}
