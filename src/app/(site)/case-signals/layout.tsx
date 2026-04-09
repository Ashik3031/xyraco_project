import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Startup Case Studies and MVP Results | Xyraco",
    description: "Xyraco case signals show MVP development, AI automation, SaaS billing systems, and startup launches with measurable outcomes.",
    keywords: [
        "startup case studies",
        "MVP case studies",
        "AI automation case study",
        "SaaS billing platform",
        "startup launch results",
    ],
    alternates: {
        canonical: "/case-signals",
    },
};

export default function CaseSignalsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
