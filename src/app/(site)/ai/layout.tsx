import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Agents and AI Startup Development | Xyraco",
    description: "Build AI agents, intelligent chatbots, GenAI content systems, internal AI tools, and AI-powered MVPs with Xyraco.",
    keywords: [
        "AI agents",
        "AI startup builder",
        "AI MVP development",
        "custom AI agents",
        "intelligent chatbots",
        "GenAI content",
        "AI internal tools",
        "AI automation for startups",
    ],
    alternates: {
        canonical: "/ai",
    },
};

export default function AiLayout({ children }: { children: React.ReactNode }) {
    return children;
}
