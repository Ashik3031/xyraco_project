import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Startup and AI Insights | Xyraco Blog",
    description: "Read Xyraco insights on AI startups, MVP development, autonomous agents, startup economics, and building startups without upfront cost.",
    keywords: [
        "AI startup blog",
        "MVP development insights",
        "startup building blog",
        "autonomous agents",
        "AI startup economics",
        "Xyraco blog",
    ],
    alternates: {
        canonical: "/blog",
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
