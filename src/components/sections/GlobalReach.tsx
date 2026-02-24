"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlobalReach() {
    const locations = [
        { city: "DUB", name: "DUBAI" },
        { city: "LON", name: "LONDON" },
        { city: "NYC", name: "NEW YORK" },
        { city: "SIN", name: "SINGAPORE" },
    ];

    return (
        <section className="py-40 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-32">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[10px] uppercase tracking-[0.5em] text-accent mb-8 block font-semibold"
                        >
                            Presence
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-bold tracking-super-tight text-black leading-[0.9] uppercase"
                        >
                            LOCALLY <br />
                            <span className="stroke-text">ROOTED.</span> <br />
                            GLOBALLY SCALE.
                        </motion.h2>
                    </div>
                    <div className="lg:w-1/3">
                        <p className="text-xl text-gray-500 font-light leading-relaxed border-l border-black/10 pl-8">
                            Operating from strategic hubs to provide 24/7 engineering velocity and global market insights.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-black/5 pt-20">
                    {locations.map((location, i) => (
                        <motion.div
                            key={location.city}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <span className="text-4xl md:text-6xl font-bold text-black/5 group-hover:text-accent transition-colors duration-700 block mb-4 italic">
                                {location.city}
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 group-hover:text-black transition-colors">
                                {location.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
