"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Bot, MessageSquare, Megaphone, Settings, Box } from "lucide-react";

const aiCapabilities = [
    {
        title: "AUTO-AGENTS",
        description: "Deep integrated LLM agents that handle complex business logic without human intervention.",
        icon: Bot,
    },
    {
        title: "SMART INTERFACES",
        description: "Context-aware chatbots and UI components that adapt to user behavior in real-time.",
        icon: MessageSquare,
    },
    {
        title: "GEN-AI CONTENT",
        description: "Automated high-fidelity content pipelines for marketing and user engagement.",
        icon: Megaphone,
    },
    {
        title: "INTERNAL AI",
        description: "Custom internal dashboards and tools that leverage LLMs to optimize your team&apos;s output.",
        icon: Settings,
    },
    {
        title: "AI MODULES",
        description: "Reusable AI components for billing, ERP, and customer service that drop in and work.",
        icon: Box,
    },
];

export default function AiPage() {
    return (
        <main className="min-h-screen pb-24 bg-white">
            <PageHeader
                title="AI ADVANTAGE"
                description="Deep artificial intelligence systems built into real products—not just wrappers around an API."
            />

            <section className="container mx-auto px-6 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {aiCapabilities.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group p-12 bg-black/[0.02] border border-black/5 rounded-[40px] hover:border-accent/30 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-black/5 border border-black/5 flex items-center justify-center mb-12 group-hover:bg-accent group-hover:text-black transition-all duration-700">
                                <item.icon className="text-black" size={28} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-super-tight text-black uppercase italic">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-lg leading-relaxed font-light group-hover:text-black transition-colors italic">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
