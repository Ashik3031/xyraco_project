"use client";

import { Playfair_Display } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ServicesScene from "@/components/ServicesScene";
import { ArrowDown } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], style: ["italic", "normal"] });

const aiFeatures = [
    {
        title: "CUSTOM AI AGENTS",
        services: [
            "Autonomous Workflows",
            "Sales Operations",
            "Customer Support",
            "Internal Automation"
        ],
        description: "We build AI agents that automate real business workflows. Action-taking AI, not demos."
    },
    {
        title: "AI CHATBOTS",
        services: [
            "CRM Integration",
            "Data-Aware Logic",
            "Action Execution",
            "Contextual Memory"
        ],
        description: "Intelligent chatbots that are connected to your data and capable of performing actions, not just answering questions."
    },
    {
        title: "GEN-AI CONTENT",
        services: [
            "Content Automation",
            "Video Generation",
            "Ad Copy Creation",
            "Brand Safety"
        ],
        description: "Using generative models to create and automate media assets at scale while maintaining perfect brand consistency."
    },
    {
        title: "INTERNAL TOOLS",
        services: [
            "Fast MVP Building",
            "Automated Research",
            "Testing Automation",
            "Rapid Iteration"
        ],
        description: "Internal AI systems used to accelerate development, research, and iteration, giving founders massive speed advantages."
    },
    {
        title: "REUSABLE MODULES",
        services: [
            "AI Frameworks",
            "Cross-Product APIs",
            "Cost Optimization",
            "Scalable Architectures"
        ],
        description: "Developing reusable AI components that can be adapted across multiple products, drastically reducing time to market."
    },
    {
        title: "R&D EXPLORATION",
        services: [
            "Emerging Tech",
            "Novel Problem Solving",
            "Deep Exploration",
            "Innovation Strategy"
        ],
        description: "Deep exploration of new technologies and technical approaches to solve novel problems for innovation-focused products."
    }
];

export default function AiPage() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

    const heroImage = "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2426";

    return (
        <main className="min-h-screen w-full bg-[#fcfdfa] text-[#0a0a0a] font-sans selection:bg-accent selection:text-white">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <ServicesScene scrollYProgress={scrollYProgress} />
            </div>

            {/* Hero Section - Felix Nieto Inspired */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xs mb-12 md:mb-0"
                        >
                            <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-accent">Intelligence / 2026</p>
                            <p className="text-sm md:text-md leading-relaxed font-light text-gray-800 uppercase tracking-wider">
                                WE BUILD DEEP ARTIFICIAL INTELLIGENCE SYSTEMS INTO REAL PRODUCTS, AUTOMATING RELIABLE WORKFLOWS AND UNLOCKING NEW CAPABILITIES.
                            </p>
                        </motion.div>

                        <div className="hidden lg:block text-right">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="inline-flex items-center gap-4"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30 italic text-black/40">Discover AI</span>
                                <div className="h-[1px] w-12 bg-black/20" />
                            </motion.div>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-8xl md:text-[14vw] lg:text-[16vw] font-bold tracking-super-tight leading-[0.75] uppercase flex flex-col items-start"
                        >
                            <span className="block">APPLIED</span>
                            <div className="flex items-center gap-4 md:gap-8 -mt-2 md:-mt-6">
                                <span className={`${playfair.className} font-normal lowercase tracking-tight stroke-text`}>
                                    & Autonomy
                                </span>
                            </div>
                        </motion.h1>

                        {/* Asymmetric Visual Element */}
                        <motion.div
                            style={{ opacity, scale }}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2, ease: "circOut" }}
                            className="absolute right-0 -bottom-1/4 w-full md:w-3/5 lg:w-1/2 aspect-[4/3] z-[-1] pointer-events-none"
                        >
                            <div className="relative w-full h-full p-12 bg-[#fcfdfa]">
                                <img
                                    src={heroImage}
                                    alt="Applied AI Visual"
                                    className="w-full h-full object-cover grayscale opacity-20 mix-blend-multiply"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#fcfdfa] via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service Categories - Expansive Vertical List */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24 py-48 space-y-96">
                {aiFeatures.map((category, index) => (
                    <section key={category.title} className="relative grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-end">
                        <div className="lg:col-span-2 hidden lg:block">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-8"
                            >
                                <span className="text-4xl font-bold opacity-5 italic font-serif">
                                    0{index + 1}
                                </span>
                                <div className="h-64 w-[1px] bg-black/5 mx-auto" />
                            </motion.div>
                        </div>

                        <div className="lg:col-span-6">
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <h2 className="text-5xl md:text-8xl lg:text-[7vw] font-bold tracking-super-tight uppercase mb-12">
                                    {category.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl italic font-serif">
                                    {category.description}
                                </p>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-4 pb-2">
                            <ul className="space-y-8">
                                {category.services.map((service, i) => (
                                    <motion.li
                                        key={service}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 + 0.5 }}
                                        className="flex flex-col gap-2 group cursor-default"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-[1px] bg-accent/30 group-hover:w-16 group-hover:bg-accent transition-all duration-700" />
                                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-black/40 group-hover:text-black transition-colors">
                                                {service}
                                            </span>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </section>
                ))}
            </div>

            {/* Expansive Footer Bridge */}
            <section className="py-96 bg-black text-white px-6 overflow-hidden relative">
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                    >
                        <h3 className={`${playfair.className} text-7xl md:text-9xl lg:text-[14vw] italic mb-16 leading-tight`}>
                            Automate the <br /> impossible.
                        </h3>
                        <motion.a
                            href="/apply"
                            whileHover={{ scale: 1.05, x: 10 }}
                            className="inline-flex items-center gap-8 group"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.6em] border-b border-white/20 pb-2 group-hover:border-accent group-hover:text-accent transition-all text-white/50">
                                Start Your Implementation
                            </span>
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
                                <ArrowDown className="w-4 h-4 -rotate-90 group-hover:text-black transition-colors" />
                            </div>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_50%_120%,#00ffc2_0%,transparent_50%)]" />
                </div>
            </section>
        </main>
    );
}
