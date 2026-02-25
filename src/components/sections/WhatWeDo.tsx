"use client";

import React, { useRef } from "react";
import { Search, PenTool, Code, Zap, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const services = [
    {
        title: "Product Strategy",
        description: "Idea validation, market positioning, and roadmap architecture.",
        icon: Search,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
        bgColor: "bg-[#E5D5C5]", // Beige
        textColor: "text-black",
    },
    {
        title: "Elite Design",
        description: "High-end UI/UX that prioritizes conversion and premium brand feel.",
        icon: PenTool,
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
        bgColor: "bg-[#B8C8BE]", // Sage
        textColor: "text-black",
    },
    {
        title: "AI Engineering",
        description: "Deep GenAI, autonomous agents, and scalable backend engines.",
        icon: Code,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
        bgColor: "bg-[#0A0A0A]", // Vanta
        textColor: "text-white",
    },
    {
        title: "Growth Loops",
        description: "Go-to-market strategy and automated user acquisition engines.",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1543286386-713bdd54867e?auto=format&fit=crop&q=80&w=1200",
        bgColor: "bg-[#F0EEEB]", // Bone
        textColor: "text-black",
    },
    {
        title: "Data Intelligence",
        description: "Unit economics optimization and predictive analytics.",
        icon: BarChart3,
        image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=1200",
        bgColor: "bg-[#EFEFEF]", // Charcoal
        textColor: "text-black",
    },
];

export default function WhatWeDo() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });

    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 md:py-40 bg-paper relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10vw] md:text-[7vw] font-medium tracking-tighter text-black leading-[0.85] uppercase"
                    >
                        END-TO-END<br />
                        <span className="stroke-text">BUILDING</span> ENGINE
                    </motion.h2>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 pb-12 no-scrollbar snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex-shrink-0 w-[85vw] md:w-[480px] aspect-[0.75/1] md:aspect-[0.8/1] rounded-[60px] overflow-hidden relative snap-start ${service.bgColor} ${service.textColor} p-10 md:p-14 flex flex-col justify-between group`}
                        >
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                                    {service.title}
                                </h3>

                                <div className="mt-8 aspect-[1.2/1] rounded-[40px] overflow-hidden transition-all duration-700 shadow-xl group-hover:scale-[1.02]">
                                    <img src={service.image} className="w-full h-full object-cover" alt="" />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <p className="text-base md:text-lg leading-relaxed opacity-60 font-light max-w-[400px]">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Final Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0 w-[85vw] md:w-[480px] aspect-[0.75/1] md:aspect-[0.8/1] rounded-[60px] bg-vanta text-white p-10 md:p-14 flex flex-col justify-between group snap-start border border-white/5"
                    >
                        <h3 className="text-3xl md:text-4xl font-medium tracking-tighter italic uppercase leading-[0.9]">
                            Ready <br /> to Build?
                        </h3>
                        <div className="flex flex-col gap-8">
                            <p className="opacity-60 text-lg font-light leading-relaxed">
                                Elite engineering for high-growth AI startups.
                            </p>
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center self-end hover:bg-white hover:text-black transition-all duration-500 group">
                                <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Controls Area */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 w-full h-[2px] bg-black/5 relative rounded-full overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-black origin-left w-full"
                            style={{ scaleX }}
                        />
                    </div>

                    <div className="flex items-center gap-12">
                        <div className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30 whitespace-nowrap">
                            Scroll to explore
                        </div>

                        {/* Scroll Buttons moved to bottom */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 shadow-sm"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 shadow-sm"
                                aria-label="Scroll right"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
