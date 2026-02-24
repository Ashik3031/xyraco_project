"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Search, PenTool, Code, Zap, BarChart3, Globe } from "lucide-react";

const services = [
    {
        title: "PRODUCT STRATEGY",
        description: "Idea validation, market positioning, and roadmap architecture. Outcome: A validated product roadmap and market-fit strategy.",
        icon: Search,
    },
    {
        title: "PREMIUM DESIGN",
        description: "High-end UI/UX that prioritizes conversion and premium brand feel. Outcome: Immersive interfaces that build authority.",
        icon: PenTool,
    },
    {
        title: "AI ENGINEERING",
        description: "Deep GenAI, autonomous agents, and scalable backend engines. Outcome: Intelligent systems that automate growth.",
        icon: Code,
    },
    {
        title: "GROWTH LOOPS",
        description: "Go-to-market strategy and automated user acquisition engines. Outcome: Sustainable and scalable user acquisition.",
        icon: Zap,
    },
    {
        title: "DATA INTELLIGENCE",
        description: "Unit economics optimization and predictive analytics. Outcome: Data-driven decisions for long-term health.",
        icon: BarChart3,
    },
    {
        title: "GLOBAL ENGINE",
        description: "Localization and international expansion strategy. Outcome: A product that speaks to the world.",
        icon: Globe,
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen pb-24 bg-white">
            <PageHeader
                title="OUR CAPABILITIES"
                description="We offer an end-to-end building engine designed to turn elite founders into category-defining leaders."
            />

            <section className="container mx-auto px-6 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5 rounded-[40px] overflow-hidden">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group p-12 md:p-24 bg-white hover:bg-black/[0.02] transition-colors duration-500 flex flex-col justify-between min-h-[450px]"
                        >
                            <div>
                                <service.icon className="text-black group-hover:text-accent group-hover:scale-110 transition-all duration-700 mb-12" size={40} />
                                <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-super-tight group-hover:translate-x-4 transition-transform duration-700 text-black uppercase">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-gray-500 text-xl leading-relaxed max-w-md group-hover:text-black transition-colors duration-500 font-light border-l border-black/10 pl-8 italic">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
