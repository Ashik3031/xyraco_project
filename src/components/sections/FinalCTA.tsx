"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("../HeroScene"), {
    ssr: false,
    loading: () => null
}) as React.ComponentType<{ primaryColor: string }>;

export default function FinalCTA() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // SVG Path Length Animation
    const pathLength = useSpring(useTransform(scrollYProgress, [0.4, 0.9], [0, 1]), {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Content fade and scale as square completes - adjusted timing
    const contentOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const contentScale = useTransform(scrollYProgress, [0.6, 0.8], [0.85, 1]);

    // Text splitting logic for "Let's BUILD History."
    const x1 = useTransform(scrollYProgress, [0, 1], [200, 0]);
    const x2 = useTransform(scrollYProgress, [0, 1], [-200, 0]);

    return (
        <section
            ref={containerRef}
            className="h-[300vh] bg-black relative"
        >
            {/* Background Text Like Reference */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.05] select-none">
                <div className="absolute top-[10%] left-[-5%] whitespace-nowrap">
                    <h1 className="text-[30vw] font-bold text-white leading-none tracking-tighter uppercase italic">
                        <span>XYRACO</span>
                    </h1>
                </div>
                <div className="absolute bottom-[15%] right-[-5%] whitespace-nowrap">
                    <h1 className="text-[25vw] font-bold text-white leading-none tracking-tighter uppercase">
                        <span>BUILD</span>
                    </h1>
                </div>
            </div>

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* 3D Jelly Animation Background */}
                <HeroScene primaryColor="#ec4899" />

                <div className="relative w-[85vw] h-[85vw] md:w-[75vh] md:h-[75vh] max-w-[600px] max-h-[600px] flex items-center justify-center">
                    {/* SVG Square Reveal - positioned absolute inset-0 */}
                    <svg
                        viewBox="0 0 100 100"
                        className="absolute inset-0 w-full h-full -rotate-90 z-0"
                    >
                        <defs>
                            <linearGradient id="cta-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#9333ea" />
                                <stop offset="50%" stopColor="#ec4899" />
                                <stop offset="100%" stopColor="#f97316" />
                            </linearGradient>
                        </defs>
                        <motion.rect
                            x="1.5"
                            y="1.5"
                            width="97"
                            height="97"
                            rx="1"
                            stroke="url(#cta-grad)"
                            strokeWidth="0.3"
                            fill="transparent"
                            style={{ pathLength }}
                        />
                    </svg>

                    {/* Text Content Reveal - shifted up significantly to be 'above' the square */}
                    <motion.div
                        style={{ opacity: contentOpacity, scale: contentScale }}
                        className="relative z-10 text-center px-6 w-[120%] md:w-[160%] pointer-events-none translate-y-[-5%] md:translate-y-[-10%]"
                    >
                        <div className="overflow-visible mb-16">
                            <motion.h2
                                style={{ x: x1 }}
                                className="text-[14vw] md:text-[9vw] font-medium tracking-tighter text-white leading-none uppercase whitespace-nowrap mb-[-0.1em] relative z-20 drop-shadow-2xl"
                            >
                                <span>Let&apos;s BUILD</span>
                            </motion.h2>
                            <motion.h2
                                style={{ x: x2 }}
                                className="text-[14vw] md:text-[9vw] font-medium tracking-tighter stroke-text-white leading-[0.75] uppercase relative z-10"
                            >
                                <span>History.</span>
                            </motion.h2>
                        </div>

                        <motion.div className="pointer-events-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 rounded-full bg-accent text-white text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden transition-all duration-700"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start Partnership
                                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                                </span>
                                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Gradient Glow in Background - wrapped to prevent overflow without breaking sticky */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-purple-900/10 blur-[150px] rounded-full" />
            </div>
        </section>
    );
}
