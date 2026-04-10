import type { Metadata } from "next";
import ApplyClient from "@/components/ApplyClient";

export const metadata: Metadata = {
    title: "Apply for Zero-Upfront Startup Development | Xyraco",
    description: "Apply to work with Xyraco, a startup development partner helping founders build and scale startups with product, brand, and go-to-market support.",
    keywords: [
        "apply startup builder",
        "startup development partner",
        "startup tech partner",
        "build and scale startup",
        "product development company UAE",
        "go to market strategy services",
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
