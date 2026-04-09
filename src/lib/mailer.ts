import nodemailer from "nodemailer";
import type { SendMailOptions, Transporter } from "nodemailer";

const FROM_NAME = "Xyraco";
const REPLY_TO = "info@xyraco.com";

let transporter: Transporter | null = null;

export class EmailConfigError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "EmailConfigError";
    }
}

function getSmtpPort() {
    const port = Number(process.env.SMTP_PORT || 587);
    return Number.isFinite(port) ? port : 587;
}

function requireEmailConfig() {
    const { EMAIL_USER, EMAIL_PASS, SMTP_HOST } = process.env;
    const SMTP_PORT = getSmtpPort();

    if (!EMAIL_USER || !EMAIL_PASS || !SMTP_HOST) {
        throw new EmailConfigError("Missing SMTP configuration. Set EMAIL_USER, EMAIL_PASS, SMTP_HOST, and SMTP_PORT in .env.local.");
    }

    return {
        EMAIL_USER,
        EMAIL_PASS,
        SMTP_HOST,
        SMTP_PORT,
    };
}

export function getTransporter() {
    if (transporter) return transporter;

    const { EMAIL_USER, EMAIL_PASS, SMTP_HOST, SMTP_PORT } = requireEmailConfig();

    transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });

    return transporter;
}

export async function sendMail(options: SendMailOptions) {
    const { EMAIL_USER } = requireEmailConfig();

    return getTransporter().sendMail({
        from: `"${FROM_NAME}" <${EMAIL_USER}>`,
        replyTo: REPLY_TO,
        ...options,
    });
}
