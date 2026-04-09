import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Startup Projects and MVP Builds | Xyraco",
    description: "View Xyraco startup projects, MVP builds, AI-native products, SaaS systems, and startup development work moving from idea to launch.",
    keywords: [
        "startup projects",
        "MVP builds",
        "AI-native products",
        "SaaS development",
        "startup development portfolio",
        "Xyraco projects",
    ],
    alternates: {
        canonical: "/projects",
    },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
