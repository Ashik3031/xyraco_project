"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
        aspectRatio: "aspect-[3/4]",
        width: "w-[25vw]",
        yOffset: "0"
    },
    {
        src: "https://res.cloudinary.com/dugtxybef/image/upload/v1774777298/148799_zn9zh1.jpg",
        aspectRatio: "aspect-[4/3]",
        width: "w-[35vw]",
        yOffset: "translate-y-24"
    },
    {
        src: "https://res.cloudinary.com/dugtxybef/image/upload/v1774767356/ChatGPT_Image_Mar_29_2026_12_27_47_PM_e1ehu8.png",
        aspectRatio: "aspect-square",
        width: "w-[30vw]",
        yOffset: "-translate-y-12"
    },
    {
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
        aspectRatio: "aspect-[3/5]",
        width: "w-[20vw]",
        yOffset: "translate-y-40"
    },
    {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
        aspectRatio: "aspect-video",
        width: "w-[40vw]",
        yOffset: "0"
    }
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Create a horizontal scroll effect
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    // Parallax effects for typography
    const titleY = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
    const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <main className="bg-[#fcfdfa] text-[#0a0a0a] font-sans selection:bg-accent selection:text-white">

            {/* Massive Hero Section with Horizontal Scroll */}
            <section ref={containerRef} className="relative h-[200vh] bg-[#fcfdfa]">
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                    {/* Centered Typography Lockup (Parallaxing down as we scroll horizontally) */}
                    <motion.div
                        style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
                        className="absolute z-10 text-center pointer-events-none w-full px-4 mix-blend-difference text-white"
                    >
                        <h1 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter uppercase leading-[0.8] mb-4">
                            XYRACO®
                            <br />
                            <span className="text-[10vw] md:text-[7vw]">CO-BUILDING</span>
                            <br />
                            <span className="text-[10vw] md:text-[7vw] font-serif italic">REAL BUSINESSES</span>
                        </h1>
                    </motion.div>

                    {/* Horizontal Scrolling Gallery */}
                    <div className="absolute inset-0 flex items-center pt-32">
                        <motion.div
                            style={{ x }}
                            className="flex gap-8 md:gap-16 px-12 md:px-32 pr-[50vw] items-center"
                        >
                            {galleryImages.map((img, i) => (
                                <div
                                    key={i}
                                    className={`relative flex-shrink-0 ${img.width} ${img.yOffset} group`}
                                >
                                    <div className={`relative w-full overflow-hidden ${img.aspectRatio} bg-gray-100`}>
                                        <motion.img
                                            initial={{ scale: 1.2 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            viewport={{ once: true, margin: "20%" }}
                                            src={img.src}
                                            alt={`Gallery Image ${i + 1}`}
                                            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto"
                                        />
                                    </div>
                                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <p className="text-[10px] uppercase font-bold tracking-widest text-black/40">
                                            Archive / 0{i + 1}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Fixed Timeline / Ruler at bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-12 border-t border-black/10 bg-[#fcfdfa]/80 backdrop-blur-sm z-20 flex" style={{
                        backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 19px, rgba(0,0,0,0.1) 19px, rgba(0,0,0,0.1) 20px)',
                        backgroundSize: '20px 100%'
                    }}>
                        <div className="absolute top-0 left-1/2 w-px h-full bg-black"></div>
                        <div className="absolute bottom-full left-1/2 -ml-3 mb-2 text-[10px] font-bold">2026</div>
                    </div>

                </div>
            </section>

            {/* Minimal Editorial Content Section */}
            {/* Minimal Editorial Content Section */}
            <section className="py-24 md:py-32 bg-[#fcfdfa] relative z-20 border-t border-black/10">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">

                    {/* Manifesto / Statement */}
                    <div className="flex flex-col lg:flex-row gap-16 md:gap-32 mb-32 md:mb-48">
                        <div className="lg:w-2/5 flex flex-col justify-between">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-black/40 mb-8">Manifesto</p>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className="hidden lg:block w-full max-w-[280px] aspect-[1/1] rounded-2xl overflow-hidden mt-12 grayscale hover:grayscale-0 transition-all duration-700 shadow-sm"
                                >
                                    <img
                                        src="https://res.cloudinary.com/dugtxybef/image/upload/v1774777302/2750_x0rddy.jpg"
                                        alt="Manifesto detail"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className="lg:w-3/5">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-3xl md:text-5xl lg:text-6xl font-normal text-black tracking-tight leading-[1.2] pb-12 border-b border-black/10"
                            >
                                NOT A SERVICE PROVIDER. <br />
                                <span className="font-serif italic text-black/60">We co-build businesses.</span>
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-16 space-y-12"
                            >
                                <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed">
                                    XYRACO works with founders, teams, and organizations to move from concept to execution — shaping ideas, validating them, and building products that can operate in the real world.
                                </p>
                                <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                                    Before anything is built, we focus on understanding the problem, the market, and the viability of the idea. From there, we design and develop systems that are not only technically sound, but <span className="italic font-serif">commercially meaningful</span>.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Principles Grid */}
                    <div className="flex flex-col gap-32">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-black/40 mb-16 px-4">Principles</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-24 px-4">
                            {[
                                {
                                    title: "PARTNER, NOT VENDOR",
                                    description: "We don't deliver isolated features. We engage as long-term partners aligned with outcomes, focused on building something that actually works as a business.",
                                },
                                {
                                    title: "CLARITY FIRST",
                                    description: "Before anything is built, we understand the problem, the market, and the viability. Execution follows understanding — not the other way around.",
                                },
                                {
                                    title: "SHARED SUCCESS",
                                    description: "In selected cases, we operate on flexible models including shared success structures — investing in ideas we believe in and growing alongside them.",
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    className="flex flex-col group cursor-default"
                                >
                                    <div className="mb-12 flex items-center justify-between border-b border-black/10 pb-6 group-hover:border-black/30 transition-colors duration-500">
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-black/30">0{index + 1}</span>
                                        <div className="w-2 h-2 rounded-full bg-black/10 group-hover:bg-accent transition-colors duration-500" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-6 tracking-super-tight text-black uppercase">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-500 text-lg leading-relaxed font-light">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/* Origins Section */}
                    <div className="flex flex-col lg:flex-row gap-16 md:gap-32 mt-32 mb-32 items-center">
                        <div className="lg:w-2/5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                className="aspect-[4/5] bg-gray-50 rounded-[40px] overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                                    alt="XYRACO Team"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </motion.div>
                        </div>
                        <div className="lg:w-3/5 space-y-12">
                            <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-black/40">Origins</p>
                            <h3 className="text-3xl md:text-5xl lg:text-5xl font-normal leading-tight tracking-tight">
                                Founded by three professionals with experience across diverse landscapes — XYRACO brings together <span className="font-serif italic text-black/60">product, co-building, and systems thinking</span>.
                            </h3>
                            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
                                Our disciplines shape how we approach every build — focusing on technical rigor while remaining adaptable to the evolving needs of the founders we partner with.
                            </p>
                        </div>
                    </div>

                    {/* Belief Section */}
                    <div className="flex flex-col items-center justify-center py-32 border-t border-black/10 text-center space-y-12">
                         <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase font-bold tracking-[0.6em] text-black/30"
                        >
                            The Core Belief
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[8vw] md:text-[6vw] font-bold uppercase leading-[0.9] tracking-super-tight text-black max-w-5xl"
                        >
                            What gets built should not just launch — <br />
                            <span className="font-serif italic text-black/30 lowercase">it should last.</span>
                        </motion.h2>
                    </div>
                </div>
            </section>
        </main>
    );
}
