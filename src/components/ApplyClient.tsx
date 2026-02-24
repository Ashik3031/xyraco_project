"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ApplyClient() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen pb-24 bg-background">
            <PageHeader
                title="APPLY TO PARTNER"
                description="We only build what can become a real business. Submit your idea for validation and partnership."
            />

            <section className="container mx-auto px-6 mt-16 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div className="space-y-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 tracking-super-tight text-black uppercase italic">Who Should Apply</h2>
                            <p className="text-gray-500 text-lg leading-relaxed font-light">
                                Founders who have deep domain expertise, a clear problem they are solving, and the ambition to build a $100M+ business. We value grit, speed, and product-first thinking.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                "Clear problem-solution fit",
                                "Deep domain expertise",
                                "Scalable business model",
                                "Willingness to share risk/reward",
                                "AI as a core differentiator",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-4 group">
                                    <div className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                                        <CheckCircle2 className="text-black group-hover:text-white transition-colors" size={12} />
                                    </div>
                                    <span className="text-gray-400 group-hover:text-black transition-colors uppercase text-xs tracking-widest font-bold">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-12 rounded-[40px] bg-black/[0.02] border border-black/5 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4 text-black uppercase tracking-widest">
                                    Hard Truth
                                </h3>
                                <p className="text-gray-500 font-light leading-relaxed text-sm italic">
                                    We don&apos;t build everything — only what can become a sustainable business. Honesty is our first priority.
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl" />
                        </div>
                    </div>

                    <div className="relative">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-40 bg-black/[0.02] border border-black/5 rounded-[40px]"
                            >
                                <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-12 border border-accent/10">
                                    <CheckCircle2 className="text-accent" size={48} />
                                </div>
                                <h3 className="text-4xl font-bold mb-6 tracking-super-tight text-black uppercase">Application Received</h3>
                                <p className="text-gray-500 font-light max-w-xs mx-auto">We will review your idea and get back to you within 48 hours.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-12">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                                    <div className="space-y-4 border-b border-black/5 pb-4 focus-within:border-accent transition-colors">
                                        <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-transparent text-black text-xl font-light outline-none border-none placeholder:text-black/10"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="space-y-4 border-b border-black/5 pb-4 focus-within:border-accent transition-colors">
                                        <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">Email</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full bg-transparent text-black text-xl font-light outline-none border-none placeholder:text-black/10"
                                            placeholder="jane@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 border-b border-black/5 pb-4 focus-within:border-accent transition-colors">
                                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">Project / Startup Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-transparent text-black text-xl font-light outline-none border-none placeholder:text-black/10"
                                        placeholder="Acme AI"
                                    />
                                </div>
                                <div className="space-y-4 border-b border-black/5 pb-4 focus-within:border-accent transition-colors">
                                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">The Problem You&apos;re Solving</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full bg-transparent text-black text-xl font-light outline-none border-none placeholder:text-black/10 resize-none"
                                        placeholder="Describe the problem in detail..."
                                    />
                                </div>
                                <div className="space-y-4 border-b border-black/5 pb-4 focus-within:border-accent transition-colors">
                                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">Current Stage</label>
                                    <select className="w-full bg-transparent text-black text-xl font-light outline-none border-none cursor-pointer appearance-none">
                                        <option className="bg-background text-black">Idea Stage</option>
                                        <option className="bg-background text-black">Prototype Built</option>
                                        <option className="bg-background text-black">Revenue Generating</option>
                                        <option className="bg-background text-black">SME / Enterprise Project</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-8 rounded-full bg-black text-white text-sm font-bold tracking-super-wide uppercase hover:bg-accent hover:text-black transition-all duration-500 group flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                                >
                                    <span>Submit Application</span>
                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
