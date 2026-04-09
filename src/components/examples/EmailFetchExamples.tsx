"use client";

export async function sendContactExample() {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: "Founder Name",
            email: "founder@example.com",
            message: "I want to build an AI-powered MVP with Xyraco.",
            recaptchaToken: "", // Placeholder for future reCAPTCHA token.
        }),
    });

    return response.json() as Promise<{ success: boolean; message: string }>;
}

export async function subscribeExample() {
    const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "founder@example.com",
            recaptchaToken: "", // Placeholder for future reCAPTCHA token.
        }),
    });

    return response.json() as Promise<{ success: boolean; message: string }>;
}
