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
        <main className="min-h-screen w-full bg-[#f2f2f2] text-[#0a0a0a] font-sans">
            <AnimatePresence mode="wait">
                {!submitted ? (
                    <motion.div
                        key="contact"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="min-h-screen grid grid-cols-1 lg:grid-cols-2"
                    >
                        {/* LEFT: Heading + Photo */}
                        <div className="flex flex-col px-8 md:px-12 lg:px-16 pt-28 pb-12 bg-[#ebebeb]">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-black leading-[1.05] mb-10">
                                Start a project.
                            </h1>

                            {/* Portrait Photo - fills remaining space */}
                            <div className="relative flex-1 min-h-[320px] rounded-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
                                    alt="Xyraco team"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom tagline */}
                            <div className="mt-8">
                                <p className="text-sm font-medium text-[#777]">
                                    Let{" "}
                                    <span className="text-accent font-semibold italic">Xyraco</span>{" "}
                                    handle{" "}
                                    <span className="text-accent font-semibold italic">it.</span>
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: Tagline + Form */}
                        <div className="flex flex-col px-8 md:px-12 lg:px-16 pt-28 pb-12">
                            {/* Tagline */}
                            <p className="text-xl md:text-2xl text-[#0a0a0a] font-normal leading-snug max-w-sm mb-10">
                                Book a call or send us a message. No preparation needed.
                            </p>

                            {/* Contact Info */}
                            <div className="mb-10">
                                <p className="text-sm text-[#555]">info@xyraco.com</p>
                                <p className="text-sm text-[#555]">Working with teams worldwide.</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="flex flex-col gap-10 flex-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your Name"
                                        className="w-full bg-transparent border-b border-black/15 pb-3 text-lg font-light text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors"
                                    />
                                    <input
                                        type="email"
                                        required
                                        placeholder="Email Address"
                                        className="w-full bg-transparent border-b border-black/15 pb-3 text-lg font-light text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>

                                <input
                                    type="text"
                                    required
                                    placeholder="Project / Startup Name"
                                    className="w-full bg-transparent border-b border-black/15 pb-3 text-lg font-light text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors"
                                />

                                <textarea
                                    required
                                    rows={3}
                                    placeholder="The core problem you're solving..."
                                    className="w-full bg-transparent border-b border-black/15 pb-3 text-lg font-light text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors resize-none"
                                />

                                <div className="pt-2 flex justify-end mt-auto">
                                    <button
                                        type="submit"
                                        className="group flex items-center gap-5"
                                    >
                                        <span className="text-xs font-bold tracking-[0.4em] uppercase text-black/40 group-hover:text-black transition-colors">
                                            Submit Proposal
                                        </span>
                                        <div className="w-14 h-14 rounded-full border border-black/15 flex flex-col items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500 overflow-hidden relative">
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
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
                    >
                        <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center mb-10">
                            <Check className="w-6 h-6 text-black" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase leading-none mb-6">
                            Request Sent.
                        </h2>
                        <p className="text-base text-gray-500 font-light max-w-sm mx-auto">
                            We'll be in touch within 48 hours.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
