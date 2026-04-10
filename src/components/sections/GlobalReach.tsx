"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlobalReach() {
    const locations = [
        { city: "IND", name: "INDIA" },
        { city: "UAE", name: "UAE" },
        { city: "QAT", name: "QATAR" },
        { city: "UK", name: "UNITED KINGDOM" },
    ];

    return (
        <section className="py-24 md:py-48 bg-vanta relative overflow-hidden font-sans">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-32">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-8 block font-semibold"
                        >
                            Global Network
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[11vw] sm:text-[10vw] md:text-[7.5vw] font-medium tracking-tighter text-white leading-[1] md:leading-[0.85] uppercase"
                        >
                            LOCALLY <br />
                            <span className="stroke-text-white">ROOTED.</span> <br />
                            GLOBALLY <span className="italic">SCALE.</span>
                        </motion.h2>
                    </div>
                    <div className="lg:w-1/3">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-white/40 font-light leading-relaxed border-l border-white/10 pl-8"
                        >
                            Operating from strategic hubs to provide 24/7 co-building velocity and global market insights.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-20 relative">
                    {/* Scan Line Animation */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "100%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-1/4 h-px bg-accent opacity-40 z-10"
                    />

                    {locations.map((location, i) => (
                        <motion.div
                            key={location.city}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            <span className="text-6xl xs:text-7xl md:text-8xl font-bold text-white/5 group-hover:text-accent transition-all duration-1000 block mb-4 tracking-tighter">
                                {location.city}
                            </span>
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_8px_#fd551d]" />
                                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 group-hover:text-white group-hover:font-bold transition-all">
                                    {location.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
