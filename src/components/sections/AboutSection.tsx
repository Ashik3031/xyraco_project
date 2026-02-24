"use client";

import React from "react";
import { motion } from "framer-motion";

const values = [
    {
        title: "RADICAL CANDOR",
        description: "We don't sugarcoat. If an idea won't work, we tell you day one. It save time, money, and reputations.",
    },
    {
        title: "ELITE ENGINEERING",
        description: "We are a small, high-density team of engineers. We build for performance, scale, and long-term stability.",
    },
    {
        title: "RISK ALIGNMENT",
        description: "We aren't an agency. We are partners. We share the downside to ensure we maximize the upside.",
    },
];

export default function AboutSection() {
    return (
        <section className="py-40 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-24 mb-60">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-bold text-black tracking-super-tight uppercase leading-[0.9] italic"
                        >
                            WE ARE NOT AN AGENCY. <br />
                            <span className="stroke-text" style={{ WebkitTextStroke: '2px rgba(0,0,0,0.1)' }}>WE ARE PARTNERS.</span>
                        </motion.h2>
                    </div>
                    <div className="lg:w-1/2">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-12"
                        >
                            Traditional agencies charge for time. We charge for value. We align our engineering engine with your business goals, ensuring every line of code contributes to your unit economics.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed italic"
                        >
                            Founded on the belief that AI should be at the core of new businesses, we provide the elite technical infrastructure founders need to compete globally.
                        </motion.p>
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
                            className="group p-12 md:p-20 bg-background hover:bg-black/[0.02] transition-colors duration-500"
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
            </div>
        </section>
    );
}
