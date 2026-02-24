"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, MessageSquare, Megaphone, Settings } from "lucide-react";

const advantages = [
    {
        title: "CUSTOM AI AGENTS",
        description: "Autonomous workers integrated into your core business logic.",
        icon: Bot,
    },
    {
        title: "ACTION CHATBOTS",
        description: "Conversational interfaces that actually perform transactions.",
        icon: MessageSquare,
    },
    {
        title: "GEN-AI MARKETING",
        description: "Automated content engines that scale with your brand voice.",
        icon: Megaphone,
    },
    {
        title: "INTERNAL TOOLING",
        description: "AI-powered dashboards for extreme operational efficiency.",
        icon: Settings,
    },
];

export default function AiAdvantage() {
    return (
        <section className="py-40 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-32">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-bold tracking-super-tight text-black leading-[0.9] uppercase"
                        >
                            INTELLIGENCE AS <br />
                            <span className="stroke-text">A CORE</span> ENGINE.
                        </motion.h2>
                    </div>
                    <div className="lg:w-1/3">
                        <p className="text-xl text-gray-400 font-light leading-relaxed border-l border-black/10 pl-8">
                            Deep artificial intelligence systems built into real products—not just wrappers around an API.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5 rounded-[40px] overflow-hidden">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={adv.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-12 bg-background hover:bg-black/[0.02] transition-colors duration-500"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-black/[0.02] border border-black/5 flex items-center justify-center mb-12 group-hover:bg-accent group-hover:text-black transition-all duration-700">
                                <adv.icon size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 tracking-super-tight text-black uppercase italic">
                                {adv.title}
                            </h3>
                            <p className="text-gray-500 font-light text-sm leading-relaxed">
                                {adv.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
