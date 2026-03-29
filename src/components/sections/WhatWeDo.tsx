"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Search, Code, Zap, BarChart3, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Product Strategy",
        description: "Strategy before code: problem definition, user research, and goal alignment.",
        icon: Search,
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774775098/578_chpe6i.jpg",
        bg: "#1c1608",
        tag: "Discovery",
        href: "/services#service-0",
    },
    {
        num: "02",
        title: "AI Advantage",
        description: "Action-taking AI agents and intelligent systems that automate workflows.",
        icon: Code,
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774775432/2151966681_q9o4wx.jpg",
        bg: "#071422",
        tag: "Intelligence",
        href: "/services#service-3",
    },
    {
        num: "03",
        title: "Engineering & Build",
        description: "Reliable, scalable, and production-ready full-stack systems.",
        icon: Zap,
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774775432/60713_z8jpqe.jpg",
        bg: "#081a0d",
        tag: "Development",
        href: "/services#service-2",
    },
    {
        num: "04",
        title: "Growth Systems",
        description: "Strategic GTM planning and automated user acquisition engines.",
        icon: BarChart3,
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774775431/2151964657_vyegzn.jpg",
        bg: "#16091e",
        tag: "Scale",
        href: "/services#service-4",
    },
];

const ACCENT = "#fd551d";

export default function WhatWeDo() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });

    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const amount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - amount : scrollLeft + amount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-24 md:py-40 bg-vanta relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[11vw] sm:text-[9vw] md:text-[7vw] font-medium tracking-tighter text-white leading-[1] md:leading-[0.85] uppercase"
                    >
                        END-TO-END<br />
                        <span className="stroke-text-white">BUILDING</span> ENGINE
                    </motion.h2>
                </div>

                {/* Scroll Strip */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-5 pb-12 no-scrollbar snap-x snap-mandatory"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link key={service.title} href={service.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="flex-shrink-0 w-[85vw] xs:w-[320px] md:w-[400px] snap-start rounded-[28px] overflow-hidden relative flex flex-col group cursor-pointer"
                                style={{
                                    background: service.bg,
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    boxShadow: "0 4px 40px rgba(0,0,0,0.4)",
                                }}
                            >
                                {/* Header row */}
                                <div className="px-7 pt-7 pb-5 flex items-start justify-between">
                                    <div className="flex flex-col gap-1">
                                        <span
                                            className="text-xs font-bold tracking-[0.3em] uppercase"
                                            style={{ color: ACCENT }}
                                        >
                                            {service.num}
                                        </span>
                                        <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-white/25">
                                            {service.tag}
                                        </span>
                                    </div>
                                    {/* Icon badge */}
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: "rgba(253,85,29,0.10)",
                                            border: "1px solid rgba(253,85,29,0.22)",
                                        }}
                                    >
                                        <Icon size={17} color={ACCENT} />
                                    </div>
                                </div>

                                {/* Image thumbnail */}
                                <div className="mx-5 rounded-[18px] overflow-hidden aspect-[16/9] relative">
                                    <img
                                        src={service.image}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        alt={service.title}
                                    />
                                    {/* Bottom fade into card bg */}
                                    <div
                                        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                                        style={{
                                            background: `linear-gradient(to top, ${service.bg}dd, transparent)`,
                                        }}
                                    />
                                </div>

                                {/* Body */}
                                <div className="px-7 pt-5 pb-7 flex flex-col gap-3 flex-1 justify-between">
                                    <div>
                                        <h3 className="text-[1.2rem] font-semibold tracking-tight text-white leading-snug">
                                            {service.title}
                                        </h3>
                                        <p className="mt-2 text-[13px] leading-relaxed text-white/40 font-light">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Bottom row with line + arrow */}
                                    <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                                        <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-medium">
                                            Learn more
                                        </span>
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#fd551d]"
                                            style={{
                                                background: "rgba(253,85,29,0.12)",
                                                border: "1px solid rgba(253,85,29,0.25)",
                                            }}
                                        >
                                            <ArrowUpRight size={14} color={ACCENT} className="group-hover:text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover inner glow */}
                                <div
                                    className="absolute inset-0 rounded-[28px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ boxShadow: "inset 0 0 80px rgba(253,85,29,0.05)" }}
                                />
                            </motion.div>
                            </Link>
                        );
                    })}

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="flex-shrink-0 w-[82vw] md:w-[400px] snap-start rounded-[28px] overflow-hidden relative flex flex-col justify-between p-7 cursor-pointer group"
                        style={{
                            background: "linear-gradient(135deg, #fd551d 0%, #c43d10 55%, #1c0a04 100%)",
                            border: "1px solid rgba(253,85,29,0.35)",
                            boxShadow: "0 4px 60px rgba(253,85,29,0.15)",
                        }}
                    >
                        {/* Top */}
                        <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/50">
                                Let&apos;s Work
                            </span>
                            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white transition-all duration-400">
                                <ChevronRight size={18} className="text-white group-hover:text-[#fd551d] transition-colors" />
                            </div>
                        </div>

                        {/* Big text */}
                        <div>
                            <h3 className="text-4xl md:text-[2.8rem] font-semibold tracking-tight text-white leading-[1.05] mb-3">
                                Ready<br />to Build?
                            </h3>
                            <p className="text-white/65 text-sm leading-relaxed font-light">
                                Elite engineering for high-growth AI startups.
                            </p>
                            <div className="mt-5 flex gap-2">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/25" />
                                ))}
                            </div>
                        </div>

                        {/* Decorative glow */}
                        <div className="absolute -bottom-12 -left-8 w-52 h-52 rounded-full bg-white/10 blur-3xl pointer-events-none" />
                    </motion.div>
                </div>

                {/* Controls */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 w-full h-[2px] bg-white/5 relative rounded-full overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-accent origin-left w-full"
                            style={{ scaleX }}
                        />
                    </div>
                    <div className="flex items-center gap-12">
                        <div className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30 whitespace-nowrap">
                            Scroll to explore
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => scroll("left")}
                                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 text-white"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 text-white"
                                aria-label="Scroll right"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
}
