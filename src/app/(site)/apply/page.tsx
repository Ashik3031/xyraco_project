import type { Metadata } from "next";
import ApplyClient from "@/components/ApplyClient";

export const metadata: Metadata = {
    title: "Apply for Zero-Upfront Startup Development | Xyraco",
    description: "Apply to build your startup with Xyraco. Submit your idea for AI startup building, MVP development, validation, and co-building partnership.",
    keywords: [
        "apply startup builder",
        "zero upfront startup development",
        "build startup without funding",
        "MVP development application",
        "Xyraco apply",
    ],
    alternates: {
        canonical: "/apply",
    },
};

export default function ApplyPage() {
    return <ApplyClient />;
}
