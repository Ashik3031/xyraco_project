"use client";

import { Playfair_Display } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ServicesScene from "@/components/ServicesScene";
import { ArrowDown } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], style: ["italic", "normal"] });

const serviceCategories = [
    {
        title: "PRODUCT & BUSINESS STRATEGY",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
        services: [
            "Product Strategy",
            "Product Consulting",
            "Idea Validation",
            "Rapid Prototyping",
            "R&D Exploration"
        ],
        description: "We work with founders to shape the right product before writing code. Strategy comes before execution."
    },
    {
        title: "DESIGN & EXPERIENCE",
        image: "https://images.unsplash.com/photo-155865146-d09347e92766?auto=format&fit=crop&q=80&w=2426",
        services: [
            "UI/UX Design",
            "Product Design",
            "Design Systems",
            "Interaction Design"
        ],
        description: "Designing user experiences that are simple, intuitive, and conversion-focused. Usability over visual trends."
    },
    {
        title: "ENGINEERING & BUILD",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2426",
        services: [
            "Software Development",
            "Web Development",
            "Mobile Development",
            "No-Code & Low-Code MVPs"
        ],
        description: "Full-stack software development focused on reliability and scalability. We build production-ready systems."
    },
    {
        title: "AI & GENAI SOLUTIONS",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2426",
        services: [
            "Custom AI Agents",
            "Intelligent Chatbots",
            "GenAI for Content",
            "AI Internal Tools",
            "Reusable AI Modules"
        ],
        description: "Deep artificial intelligence systems built into real products—not just wrappers around an API."
    },
    {
        title: "GO-TO-MARKET & GROWTH",
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=2426",
        services: [
            "Brand Identity",
            "Marketing Strategy",
            "AI-Powered Advertising",
            "Social & Growth Systems"
        ],
        description: "Strategic planning for acquiring users and customers, focusing on channels, messaging, and measurable outcomes."
    },
    {
        title: "PARTNERSHIP MODEL",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2426",
        services: [
            "Startup Co-Building",
            "Zero-Upfront Build",
            "Risk-Sharing Model",
            "Founder Partnership"
        ],
        description: "XYRACO co-builds startups with founders, sharing the risk and staying involved through growth."
    }
];

export default function ServicesPage() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

    const images = serviceCategories.map(cat => cat.image);

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
                            <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-accent">Capabilities / 2026</p>
                            <p className="text-sm md:text-md leading-relaxed font-light text-gray-800 uppercase tracking-wider">
                                WE STRATEGIZE, DESIGN, AND ENGINEER DIGITAL PRODUCTS THAT DEFINE INDUSTRIES THROUGH CLARITY, EMOTION, AND TECHNICAL EXCELLENCE.
                            </p>
                        </motion.div>

                        <div className="hidden lg:block text-right">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="inline-flex items-center gap-4"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30 italic text-black/40">Explore our world</span>
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
                            <span className="block">DIGITAL</span>
                            <div className="flex items-center gap-4 md:gap-8 -mt-2 md:-mt-6">
                                <span className={`${playfair.className} font-normal lowercase tracking-tight stroke-text`}>
                                    & Strategy
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
                                    src={serviceCategories[0].image}
                                    alt="Felix Nieto Style Visual"
                                    className="w-full h-full object-cover grayscale opacity-10 mix-blend-multiply"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#fcfdfa] via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service Categories - Expansive Vertical List */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24 py-48 space-y-96">
                {serviceCategories.map((category, index) => (
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
                            Let&apos;s evolve <br /> together.
                        </h3>
                        <motion.a
                            href="/apply"
                            whileHover={{ scale: 1.05, x: 10 }}
                            className="inline-flex items-center gap-8 group"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.6em] border-b border-white/20 pb-2 group-hover:border-accent group-hover:text-accent transition-all text-white/50">
                                Establish Partnership
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
