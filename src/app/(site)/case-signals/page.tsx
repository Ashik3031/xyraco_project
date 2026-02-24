"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

const cases = [
    {
        title: "Proprietary Billing Platform",
        client: "AI SAAS STARTUP",
        outcome: "Validated MVP in 3 weeks, handled $50k in first month revenue.",
        description: "Built a complex multi-tenant billing engine with integrated credit tracking and usage-based pricing.",
    },
    {
        title: "Custom EMS for Global Logistics",
        client: "ENTERPRISE CLIENT",
        outcome: "30% reduction in operational overhead via AI automation.",
        description: "A deep operations engine that uses LLMs to parse and categorize logistics data at scale.",
    },
    {
        title: "AI Marketing Content Engine",
        client: "E-COMMERCE BRAND",
        outcome: "10x content output with 40% higher engagement rate.",
        description: "Developed an autonomous agent that generates brand-specific media across multiple platforms.",
    },
];

export default function CaseSignalsPage() {
    return (
        <main className="min-h-screen pb-40 bg-white">
            <PageHeader
                title="CASE SIGNALS"
                description="Proof of impact. Raw results from our selected building partnerships."
            />

            <section className="container mx-auto px-6 mt-32">
                <div className="space-y-px bg-black/5 border border-black/5 rounded-[40px] overflow-hidden">
                    {cases.map((caseItem, index) => (
                        <motion.div
                            key={caseItem.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="group p-12 md:p-24 bg-white hover:bg-black/[0.02] transition-colors duration-700 flex flex-col md:flex-row gap-12 md:gap-24"
                        >
                            <div className="md:w-1/2">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-accent mb-8 block font-bold">
                                    CASE STUDY: {caseItem.client}
                                </span>
                                <h3 className="text-4xl md:text-6xl font-bold tracking-super-tight text-black mb-8 group-hover:translate-x-4 transition-transform duration-700 uppercase">
                                    {caseItem.title}
                                </h3>
                                <div className="p-6 rounded-2xl bg-black/5 border border-black/5 inline-block">
                                    <p className="text-black font-bold text-sm tracking-widest uppercase italic">{caseItem.outcome}</p>
                                </div>
                            </div>
                            <div className="md:w-1/2 border-l border-black/5 pl-12 md:pl-24 pt-10">
                                <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed group-hover:text-black transition-colors italic">
                                    &quot;{caseItem.description}&quot;
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
