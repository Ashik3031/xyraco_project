import { NextResponse, type NextRequest } from "next/server";
import { escapeHtml, getClientIp, isAllowedOrigin, isValidEmail, rateLimit, verifyRecaptcha } from "@/lib/email-security";
import { EmailConfigError, sendMail } from "@/lib/mailer";

const OWNER_EMAIL = "info@xyraco.com";

type SubscribeBody = {
    email?: unknown;
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
        const limited = rateLimit(`subscribe:${ip}`);
        if (!limited.allowed) {
            return NextResponse.json({ success: false, message: "Too many requests. Please try again shortly." }, { status: 429 });
        }

        const body = (await request.json()) as SubscribeBody;
        const email = normalize(body.email).toLowerCase();
        const recaptchaToken = normalize(body.recaptchaToken);

        if (!email) {
            return NextResponse.json({ success: false, message: "Email is required." }, { status: 400 });
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 });
        }

        if (email.length > 254) {
            return NextResponse.json({ success: false, message: "Email address is too long." }, { status: 400 });
        }

        const recaptchaOk = await verifyRecaptcha(recaptchaToken);
        if (!recaptchaOk) {
            return NextResponse.json({ success: false, message: "reCAPTCHA verification failed." }, { status: 400 });
        }

        const safeEmail = escapeHtml(email);

        await Promise.all([
            sendMail({
                to: OWNER_EMAIL,
                subject: "New Xyraco newsletter subscriber",
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
                        <h2>New newsletter subscriber</h2>
                        <p><strong>Email:</strong> ${safeEmail}</p>
                    </div>
                `,
            }),
            sendMail({
                to: email,
                subject: "Welcome to Xyraco",
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111;">
                        <h2>Welcome to Xyraco.</h2>
                        <p>You are subscribed. We will send thoughtful updates on startup building, MVP launches, AI systems, and product growth.</p>
                        <p>No noise. Just useful signals from the team building what should exist in the real world.</p>
                        <p><strong>Team Xyraco</strong></p>
                    </div>
                `,
            }),
        ]);

        console.info(`[email] Subscribe email sent for ${email} from ${ip}`);
        return NextResponse.json({ success: true, message: "Subscription confirmed." });
    } catch (error) {
        console.error("[email] Subscribe API failed:", error);
        if (error instanceof EmailConfigError) {
            return NextResponse.json({ success: false, message: "Email service is not configured yet. Add SMTP values in .env.local and restart the dev server." }, { status: 503 });
        }

        return NextResponse.json({ success: false, message: "Unable to subscribe right now. Please try again later." }, { status: 500 });
    }
}
