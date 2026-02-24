"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-60 bg-background relative overflow-hidden border-t border-black/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-[14vw] font-bold tracking-super-tight text-black leading-[0.8] uppercase mb-20"
                    >
                        Let&apos;s BUILD <br />
                        <span className="stroke-text">History.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <button className="group relative px-20 py-10 rounded-full bg-black text-white text-xl font-bold tracking-super-wide uppercase overflow-hidden hover:bg-accent hover:text-black transition-all duration-700 active:scale-95">
                            <span className="relative z-10 flex items-center gap-6">
                                Start Partnership
                                <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform duration-700" />
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Lines */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-black/[0.02]" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-black/[0.02]" />
        </section>
    );
}
