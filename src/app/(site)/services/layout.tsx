import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MVP Development and Startup Services | Xyraco",
    description: "Xyraco provides MVP development, AI startup building, product strategy, UI/UX design, software development, AI agents, and zero-upfront startup co-building.",
    keywords: [
        "MVP development",
        "startup development company",
        "AI startup builder",
        "product strategy",
        "UI UX design",
        "custom software development",
        "web app development",
        "mobile app development",
        "AI agents",
        "zero upfront startup development",
    ],
    alternates: {
        canonical: "/services",
    },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
