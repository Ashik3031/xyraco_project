"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, MessageSquare, Megaphone, Settings } from "lucide-react";

const advantages = [
    {
        title: "Custom AI Agents",
        description: "Action-taking agents that automate operations, sales, and internal workflows.",
        icon: Bot,
    },
    {
        title: "Intelligent Chatbots",
        description: "CRM-connected, data-aware interfaces that perform business actions.",
        icon: MessageSquare,
    },
    {
        title: "Gen-AI Media",
        description: "Automated content and marketing assets at scale with brand consistency.",
        icon: Megaphone,
    },
    {
        title: "AI Internal Tools",
        description: "Accelerated MVP building, research, and testing via custom AI systems.",
        icon: Settings,
    },
];

export default function AiAdvantage() {
    return (
        <section className="py-24 md:py-48 bg-white relative overflow-hidden font-sans">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-32">
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10vw] md:text-[6.5vw] font-medium tracking-tighter text-black leading-[0.85] uppercase"
                        >
                            INTELLIGENCE AS <br />
                            <span className="stroke-text">A CORE</span> ENGINE.
                        </motion.h2>
                    </div>
                    <div className="lg:w-1/3">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 font-light leading-relaxed border-l border-black/10 pl-8"
                        >
                            Deep artificial intelligence systems built into real products—not just wrappers around an API.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={adv.title}
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group p-10 bg-white border border-black/5 rounded-[40px] hover:border-black/10 hover:shadow-2xl hover:shadow-black/5 transition-all duration-700"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#f8f9fa] border border-black/5 flex items-center justify-center mb-10 group-hover:bg-black group-hover:text-white transition-all duration-700">
                                <adv.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 tracking-tight text-black">
                                {adv.title}
                            </h3>
                            <p className="text-gray-400 font-light text-base leading-relaxed">
                                {adv.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
