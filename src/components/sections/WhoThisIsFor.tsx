"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const partners = [
    {
        id: "01",
        title: "IDEA-STAGE Founders",
        description: "Launch your vision without the internal tech barrier.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "02",
        title: "NON-TECH LEADERS",
        description: "We handle the build, you handle the market.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "03",
        title: "SME INNOVATION",
        description: "AI transformation for established growth engines.",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "04",
        title: "ENTERPRISE LABS",
        description: "Rapid experimentation with elite engineering talent.",
        image: "https://images.unsplash.com/photo-1614850523296-e8c0a003dc74?auto=format&fit=crop&q=80&w=1200",
    },
];

export default function WhoThisIsFor() {
    const [activeIndex, setActiveIndex] = useState(1); // Default to "Build" position for parity with image

    return (
        <section className="py-24 md:py-48 bg-[#f4f5f9] relative overflow-hidden font-sans">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-24 md:mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[8vw] md:text-[5vw] font-normal tracking-tight leading-tight text-black mb-6"
                    >
                        We handle <span className="stroke-text">everything</span> so you don't have to.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed"
                    >
                        Your growth system — integrated intelligence systems that drive attention, and turn attention into revenue.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                    {/* Left Side: Navigation */}
                    <div className="flex flex-col gap-4">
                        {partners.map((partner, index) => (
                            <button
                                key={partner.id}
                                onClick={() => setActiveIndex(index)}
                                className="relative group text-left py-6 px-8 rounded-3xl transition-all duration-500 ease-out"
                            >
                                {/* Active Background */}
                                {activeIndex === index && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-black/[0.04] rounded-[32px] md:rounded-[40px] z-0"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}

                                <div className="relative z-10 flex items-start gap-4">
                                    <span className={`text-[3.5rem] md:text-[5rem] font-normal leading-none transition-all duration-500 tracking-tighter ${activeIndex === index ? 'text-black italic serif-font' : 'text-gray-300 group-hover:text-gray-400'}`}>
                                        {partner.title.split(' ')[0]}
                                    </span>
                                    <span className="text-[10px] font-bold tracking-widest text-gray-400 mt-2">
                                        {partner.id}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right Side: Content & Image */}
                    <div className="flex flex-col gap-12 pt-8">
                        <div className="relative aspect-[1.4/1] md:aspect-[1.6/1] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl shadow-black/5">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeIndex}
                                    src={partners[activeIndex].image}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt={partners[activeIndex].title}
                                />
                            </AnimatePresence>
                            {/* Artistic Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                        </div>

                        <div className="flex flex-col items-start gap-8 px-4 md:px-0">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h3 className="text-xl font-bold mb-4 tracking-tight text-black">
                                        {partners[activeIndex].title}
                                    </h3>
                                    <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                        {partners[activeIndex].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            <motion.button
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2 group text-sm font-bold tracking-widest text-black/80 hover:text-black transition-colors"
                            >
                                <span className="flex items-center justify-center -rotate-90">
                                    <ArrowUpRight size={16} />
                                </span>
                                BOOK A CALL
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;1,400&display=swap');
                
                .serif-font {
                    font-family: 'Crimson Pro', serif;
                }
            `}</style>
        </section>
    );
}
