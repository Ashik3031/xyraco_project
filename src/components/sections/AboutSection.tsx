"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // The entire path draws itself as the user scrolls
    const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    return (
        <section ref={containerRef} className="py-24 md:py-40 bg-[#f4f5f9] relative overflow-hidden text-black z-10 font-sans">
            {/* SVG Continuous Curve Background */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden h-[110%] top-0">
                <svg
                    className="w-[150%] md:w-full h-full absolute top-0 -left-[25%] md:left-0"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        // A sweeping curve that hits multiple parts of the section
                        d="M -10 10 
                           C 40 20, 80 -10, 50 30 
                           C 20 70, -30 40, 40 65 
                           C 110 90, 120 70, 70 85 
                           C 20 100, -10 90, 50 110"
                        fill="none"
                        stroke="#4151FF"
                        strokeWidth="36" // Thick, rich blue line
                        vectorEffect="non-scaling-stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ pathLength }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col gap-32 md:gap-48">
                {/* 1. Typography and Intro Section */}
                <div className="flex flex-col relative w-full pt-12 md:pt-24">
                    {/* Massive Typography matching reference */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-[13vw] md:text-[8.5vw] font-medium tracking-tighter leading-[0.9] text-black mix-blend-difference z-20"
                    >
                        Beyond Visions<br />
                        Within Reach
                    </motion.h2>

                    {/* Paragraph and CTA placed to the right */}
                    <div className="mt-16 md:mt-24 self-end md:w-[45%] lg:w-[40%] flex flex-col items-start gap-12 z-20">
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-lg md:text-xl text-gray-800 font-normal leading-[1.6]"
                        >
                            Lusion is a digital production studio that brings your ideas to life
                            through visually captivating designs and interactive experiences.
                            With our talented team, we push the boundaries by solving
                            complex problems, delivering tailored solutions that exceed
                            expectations and engage audiences.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-8 py-4 bg-white hover:bg-black hover:text-white transition-all duration-300 rounded-[30px] text-xs font-bold tracking-widest uppercase shadow-sm"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors"></span> ABOUT US
                        </motion.button>
                    </div>
                </div>

                {/* 2. Floating Video Block (Left Aligned) */}
                <div className="w-full flex justify-start">
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateZ: -2 }}
                        whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full md:w-[60%] lg:w-[45%] aspect-[4/3] rounded-[30px] md:rounded-[40px] overflow-hidden relative shadow-2xl z-20"
                    >
                        {/* Blue tint overlay matching reference */}
                        <div className="absolute inset-0 bg-[#4151FF]/40 mix-blend-overlay z-10 pointer-events-none"></div>
                        <div className="absolute inset-0 bg-[#4151FF]/20 mix-blend-color z-10 pointer-events-none"></div>

                        <video
                            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-18961-large.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                {/* 3. Distorted/Skewed Video Block (Right Aligned) */}
                <div className="w-full flex justify-end mt-12 md:mt-24" style={{ perspective: "1000px" }}>
                    <motion.div
                        initial={{ opacity: 0, rotateY: 25, rotateZ: -6, scale: 0.9 }}
                        whileInView={{ opacity: 1, rotateY: 15, rotateZ: -3, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full md:w-[75%] lg:w-[65%] aspect-[16/9] md:aspect-[21/9] rounded-[40px] overflow-hidden relative shadow-2xl z-20 origin-right transition-transform duration-1000 ease-out"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="absolute inset-0 bg-[#4151FF]/30 mix-blend-overlay z-10 pointer-events-none"></div>

                        <video
                            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-video-32627-large.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover origin-center"
                        />
                    </motion.div>
                </div>
            </div>

            {/* 4. Massive Full-Width Player Block at bottom */}
            <div className="w-full px-4 md:px-8 pb-8 pt-24 md:pt-48 relative z-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-full h-[60vh] md:h-[80vh] rounded-[40px] md:rounded-[60px] overflow-hidden relative flex items-center justify-center shadow-2xl group cursor-pointer"
                >
                    <video
                        src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500 z-10"></div>

                    {/* Clean play button replacing PLAY REEL text */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative z-20 w-24 h-24 md:w-36 md:h-36 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] backdrop-blur-md rounded-full flex items-center justify-center"
                    >
                        <svg className="w-8 h-8 md:w-12 md:h-12 text-black ml-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
