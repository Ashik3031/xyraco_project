"use client";

import React from "react";
import { XCircle } from "lucide-react";
import { motion } from "framer-motion";

const points = [
    "Founders looking for a standard agency-vendor relationship.",
    "Projects without a clear path to high-scale profitability.",
    "Simple 'AI wrappers' without deep business logic.",
    "Teams unwilling to share risk and equity in the build.",
    "Slow-moving corporate bureaucracies.",
];

export default function WhoWeAreNotFor() {
    return (
        <section className="py-40 bg-background relative overflow-hidden border-t border-black/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-24 items-start">
                    <div className="lg:w-1/2 relative">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-6xl md:text-8xl font-bold tracking-super-tight text-black uppercase leading-[0.9] relative z-10"
                        >
                            WE ARE <br />
                            <span className="stroke-text">NOT FOR</span> <br />
                            EVERYONE.
                        </motion.h2>

                        {/* Background Accent */}
                        <div className="absolute top-0 -left-10 text-[15vw] font-bold text-black/[0.02] select-none pointer-events-none -translate-y-1/2 tracking-tighter">
                            SELECTIVE
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-16 italic">
                            We are a high-performance engine. We only partner with those who move with the same velocity and precision as we do.
                        </p>

                        <div className="space-y-8">
                            {points.map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <XCircle className="text-black/20 group-hover:text-black transition-colors shrink-0 mt-1" size={24} />
                                    <span className="text-gray-500 group-hover:text-black transition-colors text-lg md:text-xl font-light">
                                        {point}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
