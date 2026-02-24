"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ZeroUpfrontModel() {
    return (
        <section className="py-40 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-6xl md:text-8xl font-bold tracking-super-tight text-black uppercase leading-[0.9] mb-12"
                        >
                            BUILD FIRST. <br />
                            <span className="stroke-text">PAY LATER.</span>
                        </motion.h2>
                        <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-12">
                            We eliminate the upfront barrier by sharing risk. Our partners succeed when the product succeeds. It&apos;s a pure performance model.
                        </p>

                        <div className="space-y-12">
                            {[
                                { title: "Risk Sharing", desc: "Equity or revenue share models based on milestones." },
                                { title: "Growth Aligned", desc: "We only win when your business scales." },
                                { title: "Fixed Costs", desc: "Capped development costs with deferred payments." }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="border-l border-black/10 pl-8"
                                >
                                    <h4 className="text-xl font-bold text-black mb-2 uppercase tracking-tighter">{item.title}</h4>
                                    <p className="text-gray-400 font-light italic">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="aspect-square rounded-[80px] bg-black/[0.02] border border-black/5 flex items-center justify-center relative overflow-hidden">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="w-2/3 h-2/3 border-2 border-dashed border-black/5 rounded-full flex items-center justify-center"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <span className="text-[10vw] font-bold text-black flex items-center justify-center leading-none tracking-tighter">
                                        0<span className="text-accent">$</span>
                                    </span>
                                    <p className="text-xs uppercase tracking-[0.5em] font-bold text-gray-400">Upfront Capital</p>
                                </div>
                            </div>

                            {/* Decorative labels */}
                            <div className="absolute top-12 left-12 p-4 rounded-3xl bg-background border border-black/5 shadow-2xl shadow-black/5">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-black">Selected founders only.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
