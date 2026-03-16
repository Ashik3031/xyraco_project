"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function ApplyClient() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen w-full bg-[#fcfdfa] text-[#0a0a0a] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-32">
            <div className="container mx-auto max-w-7xl">

                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start"
                        >
                            <div className="lg:col-span-5">
                                <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-black/40 mb-12">Partnership</p>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
                                    START THE <br />
                                    <span className="font-serif italic text-black/60 font-normal">Dialogue.</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-md">
                                    We partner solely with founders building sustainable, massively scalable businesses. Pitch us your technical vision.
                                </p>
                            </div>

                            <div className="lg:col-span-7 w-full">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-12 w-full">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                required
                                                placeholder="Your Name"
                                                className="w-full bg-transparent border-b border-black/10 pb-4 text-2xl md:text-3xl font-light text-black placeholder:text-black/20 focus:outline-none focus:border-black transition-colors"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                required
                                                placeholder="Email Address"
                                                className="w-full bg-transparent border-b border-black/10 pb-4 text-2xl md:text-3xl font-light text-black placeholder:text-black/20 focus:outline-none focus:border-black transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <input
                                            type="text"
                                            required
                                            placeholder="Project / Startup Name"
                                            className="w-full bg-transparent border-b border-black/10 pb-4 text-2xl md:text-3xl font-light text-black placeholder:text-black/20 focus:outline-none focus:border-black transition-colors"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <textarea
                                            required
                                            rows={2}
                                            placeholder="The core problem you're solving..."
                                            className="w-full bg-transparent border-b border-black/10 pb-4 text-2xl md:text-3xl font-light text-black placeholder:text-black/20 focus:outline-none focus:border-black transition-colors resize-none overflow-hidden"
                                        />
                                    </div>

                                    <div className="pt-8 flex justify-end">
                                        <button
                                            type="submit"
                                            className="group flex items-center gap-6"
                                        >
                                            <span className="text-xs font-bold tracking-[0.4em] uppercase text-black/50 group-hover:text-black transition-colors">
                                                Submit Proposal
                                            </span>
                                            <div className="w-16 h-16 rounded-full border border-black/10 flex flex-col items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500 overflow-hidden relative">
                                                <ArrowRight className="w-5 h-5 text-black group-hover:text-white absolute transition-transform duration-500 -translate-x-10 group-hover:translate-x-0" />
                                                <ArrowRight className="w-5 h-5 text-black group-hover:text-white absolute transition-transform duration-500 translate-x-0 group-hover:translate-x-10" />
                                            </div>
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center justify-center text-center py-32"
                        >
                            <div className="w-24 h-24 rounded-full border border-black/10 flex items-center justify-center mb-12">
                                <Check className="w-8 h-8 text-black" />
                            </div>
                            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-8">
                                RECEIVED.
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-md mx-auto italic font-serif">
                                We will review your proposal and initiate contact within 48 hours.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </main>
    );
}
