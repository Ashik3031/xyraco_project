import type { Metadata } from "next";
import BlogDetailClient from "@/components/BlogDetailClient";

export const metadata: Metadata = {
    title: "Blog Detail | AI Startup Co-Builder",
    description: "Deep dive into startup validation, MVP building, and AI strategies.",
};

export default function BlogPostDetail({ params }: { params: { slug: string } }) {
    return <BlogDetailClient params={params} />;
}
