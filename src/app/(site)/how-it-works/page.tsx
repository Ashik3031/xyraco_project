"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

const steps = [
    {
        step: "01",
        title: "VALIDATION",
        description: "We deep-dive into the problem, market size, and unit economics. Most ideas die here. We only build the ones with $100M+ potential.",
    },
    {
        step: "02",
        title: "MVP ARCHITECTURE",
        description: "Rapid engineering focused on core value. We build the functional engine, not just a pretty shell.",
    },
    {
        step: "03",
        title: "FIRST TRACTION",
        description: "We help you reach your first users or revenue. Our marketing engine kicks in to prove the growth loop.",
    },
    {
        step: "04",
        title: "SCALE & PARTNERSHIP",
        description: "Long-term engineering and strategy support. We share the risk and the reward as the business grows.",
    },
];

export default function HowItWorks() {
    return (
        <main className="min-h-screen pb-40 bg-white">
            <PageHeader
                title="THE PROCESS"
                description="A high-velocity engineering engine designed to turn raw ideas into category leaders."
            />

            <section className="container mx-auto px-6 mt-32">
                <div className="space-y-40">
                    {steps.map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-12 md:gap-24 items-start"
                        >
                            <div className="md:w-1/3">
                                <span className="text-8xl md:text-[12vw] font-bold text-black/5 tracking-tighter block leading-none select-none">
                                    {item.step}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-bold text-black mt-12 tracking-super-tight uppercase italic">{item.title}</h3>
                            </div>
                            <div className="md:w-2/3 border-l border-black/5 pl-12 md:pl-24 pt-10">
                                <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-2xl group-hover:text-black transition-colors italic">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-6 mt-60 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="p-20 rounded-[80px] bg-black/[0.02] border border-black/5 inline-block"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 tracking-super-tight uppercase">Ready to Start Step 01?</h2>
                    <button className="px-12 py-6 rounded-full bg-black text-white font-bold tracking-widest uppercase hover:bg-accent hover:text-black transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                        Apply Now
                    </button>
                </motion.div>
            </section>
        </main>
    );
}
