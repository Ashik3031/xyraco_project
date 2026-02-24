"use client";

import React from "react";
import { Search, PenTool, Code, Zap, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "PRODUCT STRATEGY",
        description: "Idea validation, market positioning, and roadmap architecture.",
        icon: Search,
    },
    {
        title: "ELITE DESIGN",
        description: "High-end UI/UX that prioritizes conversion and premium brand feel.",
        icon: PenTool,
    },
    {
        title: "AI ENGINEERING",
        description: "Deep GenAI, autonomous agents, and scalable backend engines.",
        icon: Code,
    },
    {
        title: "GROWTH LOOPS",
        description: "Go-to-market strategy and automated user acquisition engines.",
        icon: Zap,
    },
    {
        title: "DATA INTELLIGENCE",
        description: "Unit economics optimization and predictive analytics.",
        icon: BarChart3,
    },
];

export default function WhatWeDo() {
    return (
        <section className="py-40 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold tracking-super-tight text-black uppercase leading-[0.9]"
                    >
                        END-TO-END <br />
                        <span className="stroke-text">BUILDING</span> ENGINE.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5 rounded-[40px] overflow-hidden">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-12 bg-background hover:bg-black/[0.02] transition-colors duration-500"
                        >
                            <service.icon className="text-black group-hover:text-accent transition-colors mb-12" size={32} />
                            <h3 className="text-2xl font-bold mb-4 tracking-super-tight text-black uppercase">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed font-light mb-8">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="group p-12 bg-black text-white flex flex-col justify-between hover:bg-accent hover:text-black transition-all duration-700"
                    >
                        <div>
                            <h3 className="text-3xl font-bold mb-4 tracking-super-tight uppercase italic">
                                Need <br /> more?
                            </h3>
                            <p className="opacity-60 font-light">
                                We offer bespoke engineering for complex AI requirements.
                            </p>
                        </div>
                        <ArrowRight className="group-hover:translate-x-4 transition-transform duration-700" size={48} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
