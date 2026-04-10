"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogDetailClient({ params }: { params: { slug: string } }) {
    // In a real app, you'd fetch based on slug. Here we just show a template.
    const title = params.slug.replace(/-/g, " ").toUpperCase();

    return (
        <main className="min-h-screen pb-40 bg-background">
            <div className="container mx-auto px-6 pt-32 pb-12">
                <Link href="/blog" className="inline-flex items-center gap-4 text-gray-400 hover:text-black transition-colors mb-12 group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                    <span className="text-xs uppercase tracking-[0.3em] font-bold">Back to Insights</span>
                </Link>
            </div>

            <PageHeader
                title={title}
                description="An in-depth analysis of the intersection between co-building, economics, and artificial intelligence in the modern startup landscape."
            />

            <article className="container mx-auto px-6 mt-32 max-w-4xl">
                <div className="prose prose-slate prose-lg max-w-none">
                    <p className="text-2xl text-gray-500 font-light leading-relaxed mb-12 italic">
                        The landscape of business building is changing fundamentally. As AI move from a peripheral tool to a core engine, the way we validate and build products must adapt. This post explores the core shifts we are seeing in the market.
                    </p>

                    <h2 className="text-4xl font-bold tracking-super-tight text-black mt-20 mb-10 uppercase italic">The First Shift: Velocity</h2>
                    <p className="text-gray-500 font-light leading-relaxed mb-12">
                        In the pre-AI era, validation took months. Now, it takes weeks. Our engine allows us to iterate on product-market fit with a precision that was previously impossible. This isn&apos;t just about speed; it&apos;s about the quality of the feedback loop.
                    </p>

                    <h2 className="text-4xl font-bold tracking-super-tight text-black mt-20 mb-10 uppercase italic">The Second Shift: Alignment</h2>
                    <p className="text-gray-500 font-light leading-relaxed mb-12">
                        Agencies are built for billable hours. Co-builders are built for equity. This alignment changes every decision made in the co-building process. We don't build for the sake of building; we build for the sake of winning.
                    </p>

                    <div className="p-12 rounded-[40px] bg-black/[0.02] border border-black/5 mt-32">
                        <h3 className="text-xl font-bold mb-6 text-black uppercase tracking-widest italic">Key Takeaways</h3>
                        <ul className="space-y-4 text-gray-500 font-light">
                            <li className="flex gap-4">
                                <span className="text-accent font-bold">01.</span>
                                AI is the new infrastructure layer.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-accent font-bold">02.</span>
                                Alignment is more important than velocity.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-accent font-bold">03.</span>
                                The best products are built by partners, not vendors.
                            </li>
                        </ul>
                    </div>
                </div>
            </article>

            <section className="container mx-auto px-6 mt-60 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-black mb-12 tracking-super-tight uppercase font-light">Want more insights like this?</h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="px-8 py-6 rounded-full bg-black/[0.02] border border-black/10 text-black outline-none focus:border-accent transition-colors w-full sm:w-auto min-w-[300px]"
                        />
                        <button className="px-12 py-6 rounded-full bg-black text-white font-bold tracking-widest uppercase hover:bg-accent hover:text-black transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
