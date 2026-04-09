import type { Metadata } from "next";
import BlogDetailClient from "@/components/BlogDetailClient";

export const metadata: Metadata = {
    title: "Startup Building Insights | Xyraco",
    description: "Xyraco insights on startup validation, MVP development, AI startup building, autonomous agents, and zero-upfront co-building.",
    keywords: [
        "startup validation",
        "MVP building",
        "AI startup strategy",
        "autonomous agents",
        "startup co-builder",
    ],
};

export default function BlogPostDetail({ params }: { params: { slug: string } }) {
    return <BlogDetailClient params={params} />;
}
