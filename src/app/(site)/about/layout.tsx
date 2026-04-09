import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Xyraco | AI Startup Builder in UAE",
    description: "Learn about Xyraco, an AI startup builder and startup development company in Sharjah, UAE helping founders turn ideas into MVPs and real businesses.",
    keywords: [
        "about Xyraco",
        "Xyraco UAE",
        "AI startup builder UAE",
        "startup development company Sharjah",
        "startup co-builder",
    ],
    alternates: {
        canonical: "/about",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
