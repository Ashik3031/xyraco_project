'use client'

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import HeroScene to avoid SSR issues with Three.js
const HeroScene = dynamic(() => import("../HeroScene"), {
    ssr: false,
    loading: () => null
}) as React.ComponentType<{ primaryColor: string }>;

const PRIMARY_COLORS = ["#000c9f", "#7ea800", "#bc020d"];

export default function Hero() {
    const [colorIndex, setColorIndex] = useState(0);

    const handleHeroClick = () => {
        setColorIndex((prev) => (prev + 1) % PRIMARY_COLORS.length);
    };

    return (
        <section
            onClick={handleHeroClick}
            className="relative min-h-screen flex flex-col bg-background overflow-hidden cursor-pointer active:scale-[0.99] transition-transform duration-200"
        >
            {/* Three.js Canvas Layer */}
            <HeroScene primaryColor={PRIMARY_COLORS[colorIndex]} />

            {/* Content Layer */}
            <div className="relative z-10 flex-grow flex flex-col justify-end pb-8 px-6 sm:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-24 w-full">
                    {/* Logo/Brand Side */}
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-24">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-[15vw] lg:text-[10vw] font-bold tracking-super-tight leading-[0.8] text-[#f9faf8]"
                        >
                            XYRACO
                        </motion.h1>
                    </div>

                    {/* Slogan/Description Side */}
                    <div className="w-full lg:w-1/2 lg:pb-4">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="text-2xl md:text-3xl lg:text-4xl text-[#f9faf8] font-light leading-[1.1] tracking-tight max-w-[500px]"
                        >
                            We build businesses and create elite technical infrastructure that scales globally
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-12 flex items-center justify-between border-t border-[#f9faf8]/10 pt-12">
                <div className="flex items-center gap-12 w-full max-w-7xl mx-auto">
                    <span className="text-xl font-light text-[#f9faf8]/20">+</span>
                    <div className="flex-grow flex justify-center">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#f9faf8]/40">
                            Scroll to explore
                        </span>
                    </div>
                    <span className="text-xl font-light text-[#f9faf8]/20">+</span>
                </div>
            </div>

            {/* Additional decorative marks */}
            <div className="absolute bottom-[20%] left-6 sm:left-12 lg:left-20">
                <span className="text-xl font-light text-[#f9faf8]/20">+</span>
            </div>
            <div className="absolute bottom-[20%] right-6 sm:right-12 lg:right-20">
                <span className="text-xl font-light text-[#f9faf8]/20">+</span>
            </div>
        </section>
    );
}
