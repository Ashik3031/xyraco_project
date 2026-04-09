import type { NextRequest } from "next/server";

type RateLimitEntry = {
    count: number;
    resetAt: number;
};

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, RateLimitEntry>();

export function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function getClientIp(request: NextRequest) {
    const forwardedFor = request.headers.get("x-forwarded-for");
    return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

export function rateLimit(key: string) {
    const now = Date.now();
    const entry = rateLimitStore.get(key);

    if (!entry || entry.resetAt <= now) {
        rateLimitStore.set(key, { count: 1, resetAt: now + WINDOW_MS });
        return { allowed: true, remaining: MAX_REQUESTS - 1 };
    }

    if (entry.count >= MAX_REQUESTS) {
        return { allowed: false, remaining: 0 };
    }

    entry.count += 1;
    return { allowed: true, remaining: MAX_REQUESTS - entry.count };
}

export function isAllowedOrigin(request: NextRequest) {
    const origin = request.headers.get("origin");
    if (!origin) return true;

    const configuredOrigins = (process.env.ALLOWED_ORIGINS || process.env.NEXT_PUBLIC_SITE_URL || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

    const allowedOrigins = new Set([
        ...configuredOrigins,
        "https://xyraco.com",
        "https://www.xyraco.com",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]);

    return allowedOrigins.has(origin);
}

export async function verifyRecaptcha(_token?: string) {
    // Placeholder for production: verify token with Google when RECAPTCHA_SECRET_KEY is configured.
    // Keep forms working during setup while making the integration point explicit.
    if (process.env.RECAPTCHA_SECRET_KEY) {
        console.info("[email] reCAPTCHA secret configured. Add verification call before production launch.");
    }

    return true;
}
