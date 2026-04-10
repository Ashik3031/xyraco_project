import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How Xyraco Builds Startups | Idea to MVP Process",
    description: "See how Xyraco helps founders build and scale startups through strategy, product development, digital transformation, and go-to-market execution.",
    keywords: [
        "how to build a startup",
        "how to scale a startup fast",
        "startup validation process",
        "idea to MVP",
        "MVP development process",
        "build and scale startup",
        "go to market strategy services",
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
