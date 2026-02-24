"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

const values = [
    {
        title: "RADICAL CANDOR",
        description: "We don&apos;t sugarcoat. If an idea won&apos;t work, we tell you day one. It save time, money, and reputations.",
    },
    {
        title: "ELITE ENGINEERING",
        description: "We are a small, high-density team of engineers. We build for performance, scale, and long-term stability.",
    },
    {
        title: "RISK ALIGNMENT",
        description: "We aren&apos;t an agency. We are partners. We share the downside to ensure we maximize the upside.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen pb-40 bg-white">
            <PageHeader
                title="WHO WE ARE"
                description="A group of engineers and builders obsessed with one thing: turnings ideas into world-class businesses."
            />

            <section className="container mx-auto px-6 mt-32">
                <div className="flex flex-col lg:flex-row gap-24 mb-60">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-bold text-black tracking-super-tight uppercase leading-tight mb-12 italic">
                            WE ARE NOT AN AGENCY. <br />
                            <span className="stroke-text" style={{ WebkitTextStroke: '2px rgba(0,0,0,0.1)' }}>WE ARE PARTNERS.</span>
                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-12">
                            Traditional agencies charge for time. We charge for value. We align our engineering engine with your business goals, ensuring every line of code contributes to your unit economics.
                        </p>
                        <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed italic">
                            Founded on the belief that AI should be at the core of new businesses, we provide the elite technical infrastructure founders need to compete globally.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5 rounded-[40px] overflow-hidden">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-12 md:p-20 bg-white hover:bg-black/[0.02] transition-colors duration-500"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-super-tight text-black uppercase italic">
                                {value.title}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-light group-hover:text-black transition-colors duration-500 italic">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
