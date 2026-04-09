import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Startup Platforms and AI Products | Xyraco",
    description: "Explore Xyraco platforms for billing systems, ERP solutions, e-commerce, AI-powered storefronts, and production-ready startup software.",
    keywords: [
        "startup platforms",
        "AI products",
        "billing software development",
        "ERP software development",
        "AI ecommerce development",
        "startup product development",
    ],
    alternates: {
        canonical: "/products",
    },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
