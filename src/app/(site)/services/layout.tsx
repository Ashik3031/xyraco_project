import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MVP Development and Startup Services | Xyraco",
    description: "Xyraco provides startup development, product development, digital transformation, brand strategy, and go-to-market services for founders building in the UAE and beyond.",
    keywords: [
        "MVP development",
        "startup development company",
        "startup development partner",
        "build and scale startup",
        "AI startup builder",
        "product strategy",
        "product development company UAE",
        "startup tech partner",
        "digital transformation company",
        "brand strategy agency UAE",
        "go to market strategy services",
        "UI UX design",
        "custom software development",
        "web app development",
        "mobile app development",
        "AI agents",
        "how to scale a startup fast",
    ],
    alternates: {
        canonical: "/services",
    },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
