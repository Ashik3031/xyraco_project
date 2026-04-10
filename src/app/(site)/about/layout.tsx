import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Xyraco | AI Startup Builder in UAE",
    description: "Learn about Xyraco, a startup development partner in Sharjah, UAE helping founders build and scale startups with product, brand, and go-to-market execution.",
    keywords: [
        "about Xyraco",
        "Xyraco UAE",
        "AI startup builder UAE",
        "startup development company Sharjah",
        "startup co-builder",
        "startup development partner",
        "startup tech partner",
        "product development company UAE",
        "brand strategy agency UAE",
    ],
    alternates: {
        canonical: "/about",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
