"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LazyVideo from "@/components/LazyVideo";

export default function ZeroUpfrontModel() {
    return (
        <section className="py-32 md:py-56 bg-[#fcfcfc] relative overflow-hidden font-sans">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-50/50 to-transparent blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gray-100/50 to-transparent blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-block px-4 py-1.5 mb-8 rounded-full bg-black/[0.03] border border-black/[0.08]"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">Performance First</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-[12vw] md:text-[7vw] lg:text-[6vw] font-medium tracking-tighter text-black leading-[0.9] text-black mb-10"
                        >
                            BUILD FIRST. <br />
                            PAY <span className="stroke-text uppercase tracking-normal">LATER.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-16 max-w-xl"
                        >
                            We eliminate the upfront barrier by sharing risk. Our partners succeed when the product succeeds. It&apos;s a pure performance-driven partnership.
                        </motion.p>

                        <div className="grid sm:grid-cols-1 gap-8">
                            {[
                                { title: "Risk Sharing", desc: "Equity or revenue share models based on milestones." },
                                { title: "Growth Aligned", desc: "We only win when your business scales." },
                                { title: "Performance Driven", desc: "Development costs tied directly to success." }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                                    className="group relative pl-6 border-l border-black/5"
                                >
                                    <h4 className="text-sm font-bold text-black mb-1 uppercase tracking-widest">{item.title}</h4>
                                    <p className="text-gray-400 font-light text-sm leading-relaxed">{item.desc}</p>
                                    <div className="absolute left-[-1px] top-0 h-0 w-[1px] bg-black transition-all duration-500 group-hover:h-full" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="aspect-[4/5] md:aspect-square rounded-[40px] md:rounded-[80px] bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-black/[0.03] flex items-center justify-center relative overflow-hidden group"
                        >
                            {/* Sophisticated Growth Animation */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path
                                        d="M100 300C100 300 150 280 180 220C210 160 250 160 300 100"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                                    />
                                    <motion.circle
                                        cx="300"
                                        cy="100"
                                        r="6"
                                        fill="black"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 2.2 }}
                                    />
                                    {/* Decorative Grid */}
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5" strokeOpacity="0.03" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#grid)" />
                                </svg>
                            </div>

                            {/* Center Content / GIF Option */}
                            <div className="relative z-10 text-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-40 h-40 md:w-64 md:h-64 rounded-[40px] overflow-hidden bg-gray-50 flex items-center justify-center border border-black/5 shadow-inner mb-8 relative group/video">
                                        <LazyVideo
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-all duration-700 group-hover/video:opacity-100 group-hover/video:scale-105"
                                            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-minimalist-business-background-42407-large.mp4"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    <div className="space-y-1">
                                        <motion.h3
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 1.2 }}
                                            className="text-2xl font-medium text-black tracking-tight"
                                        >
                                            Zero Risk.
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 1.4 }}
                                            className="text-xs uppercase tracking-[0.4em] text-gray-400 font-bold"
                                        >
                                            Partnership Growth
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.6 }}
                                className="absolute top-10 left-10 py-3 px-5 rounded-2xl bg-white/80 backdrop-blur-md border border-black/5 shadow-lg shadow-black/[0.02]"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">Stage 01</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.8 }}
                                className="absolute bottom-10 right-10 py-3 px-5 rounded-2xl bg-black text-white shadow-xl shadow-black/10"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-widest">Scaling Now</span>
                            </motion.div>

                            <div className="absolute top-12 md:top-20 right-[-20px] p-5 rounded-full bg-white border border-black/5 shadow-xl shadow-black/5 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                <span className="text-[9px] font-bold uppercase tracking-widest text-black whitespace-nowrap px-4 italic">Qualified founders only.</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
