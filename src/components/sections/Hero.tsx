'use client'

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

// Dynamically import HexagonFloorScene to avoid SSR issues with Three.js
const HexagonFloorScene = dynamic(() => import("../HexagonFloorScene"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black z-0 transition-opacity duration-1000" />
}) as React.ComponentType;

const PRIMARY_COLORS = ["#000c9f", "#7ea800", "#bc020d"];

export default function Hero() {
    const [colorIndex, setColorIndex] = useState(0);

    // Parallax values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoothing the mouse movement
    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);
    const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
    const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

    const handleHeroClick = () => {
        setColorIndex((prev) => (prev + 1) % PRIMARY_COLORS.length);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section
            onClick={handleHeroClick}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex flex-col bg-black overflow-hidden cursor-pointer active:scale-[0.99] transition-transform duration-200"
        >
            {/* Three.js Canvas Layer */}
            <HexagonFloorScene />

            {/* Content Layer */}
            <div className="relative z-10 flex-grow flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-20 pb-20">
                <div className="max-w-[1400px] mx-auto w-full flex flex-col h-full justify-between items-center sm:items-stretch">
                    {/* Main Heading - Staggered/Large Typography */}
                    <div className="mt-12 md:mt-0 w-full flex justify-center">
                        <motion.h1
                            style={{ rotateX, rotateY, x: translateX, y: translateY, perspective: 1000 }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[11vw] sm:text-[8vw] md:text-[7.5vw] lg:text-[5.5vw] font-bold tracking-tighter leading-[1] md:leading-[1.1] text-[#f9faf8] uppercase w-full max-w-[1250px] text-center mx-auto"
                        >
                            <span className="block drop-shadow-2xl">What you Imagine</span>
                            <span className="block mt-2 drop-shadow-2xl">
                                <span className="text-transparent" style={{ WebkitTextStroke: '1px #f9faf8' }}>Should</span> exist in the <span className="text-transparent" style={{ WebkitTextStroke: '1px #f9faf8' }}>real world</span>
                            </span>
                        </motion.h1>
                    </div>

                    {/* Subheading - Bottom Right Alignment */}
                    <div className="flex justify-center sm:justify-end mt-12 sm:mt-24 mb-16 sm:mb-12 lg:mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            className="max-w-[500px] text-center sm:text-right"
                        >
                            <p className="text-base md:text-xl lg:text-2xl text-[#f9faf8] font-light leading-snug tracking-tight opacity-80 px-6 sm:px-0">
                                We validate ideas, design products, and build MVPs that reach real users and revenue — not just launch.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#f9faf8]/40">
                    Scroll
                </span>
                <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1.5px] h-10 bg-[#fd551d]"
                />
            </div>
        </section>
    );
}
