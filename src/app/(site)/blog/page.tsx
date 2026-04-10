"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
    {
        title: "The Death of the Agency Model",
        excerpt: "Why traditional outsourcing is failing founders and why the co-builder model is the only answer for AI-first startups.",
        date: "Feb 2026",
        slug: "death-of-agency-model",
    },
    {
        title: "Building Autonomous Agents",
        excerpt: "How we implement autonomous business logic that goes beyond simple chatbot interfaces.",
        date: "Jan 2026",
        slug: "autonomous-agents",
    },
    {
        title: "Unit Economics of AI",
        excerpt: "Optimizing your token usage and compute costs to ensure your AI startup remains profitable at scale.",
        date: "Dec 2025",
        slug: "unit-economics-ai",
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen pb-40 bg-white">
            <PageHeader
                title="INSIGHTS"
                description="Raw thoughts on co-building, AI economics, and the future of business building."
            />

            <section className="container mx-auto px-6 mt-32">
                <div className="space-y-px bg-black/5 border border-black/5 rounded-[40px] overflow-hidden">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="p-12 md:p-24 bg-white hover:bg-black/[0.02] transition-colors duration-700 flex flex-col md:flex-row md:items-center justify-between gap-12"
                            >
                                <div className="max-w-2xl">
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-6 block font-bold transition-colors group-hover:text-accent">
                                        {post.date}
                                    </span>
                                    <h3 className="text-4xl md:text-6xl font-bold tracking-super-tight text-black mb-6 group-hover:translate-x-4 transition-transform duration-700 uppercase">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-lg group-hover:text-black transition-colors italic">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-black/10 group-hover:text-black transition-colors">
                                    <span className="text-xs uppercase tracking-[0.3em] font-bold">Read Post</span>
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={24} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
