import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How Xyraco Builds Startups | Idea to MVP Process",
    description: "See how Xyraco validates ideas, designs products, builds MVPs, adds AI systems, and helps founders launch startups without upfront cost.",
    keywords: [
        "how to build a startup",
        "startup validation process",
        "idea to MVP",
        "MVP development process",
        "build startup without funding",
        "startup co-building process",
    ],
    alternates: {
        canonical: "/how-it-works",
    },
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
    return children;
}
