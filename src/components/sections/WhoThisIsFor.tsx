"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, LayoutGroup } from "framer-motion";

const processSteps = [
    {
        id: "01",
        title: "DISCOVER",
        description: "Clarity First. We start by understanding the idea — the problem, the market, and whether it should exist. No building without clarity.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "02",
        title: "VALIDATE",
        description: "Make It Make Sense. We test assumptions, refine direction, and ensure the idea has real potential — technically and commercially.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "03",
        title: "BUILD",
        description: "Turn It Real. Design, engineering, and AI come together to create a working product — built to function, not just launch.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "04",
        title: "GROW",
        description: "Reach & Scale. We help take the product to users, validate traction, and evolve it into something that sustains and grows.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    },
];

export default function WhoThisIsFor() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Track active step based on raw scroll position
    const [activeStep, setActiveStep] = useState(0);
    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            if (v < 0.25) setActiveStep(0);
            else if (v < 0.5) setActiveStep(1);
            else if (v < 0.75) setActiveStep(2);
            else setActiveStep(3);
        });
    }, [scrollYProgress]);

    return (
        <section ref={containerRef} className="relative lg:h-[350vh] bg-premium-white font-sans">
            {/* Desktop Sticky View */}
            <div className="hidden lg:flex sticky top-0 h-screen w-full items-center overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    {/* Compact Heading Layout */}
                    <div className="mb-6 md:mb-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/8 pb-5">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl lg:text-[5.5vw] font-medium tracking-tighter text-black leading-[1] md:leading-[0.85] uppercase"
                            >
                                How it works
                            </motion.h2>
                            <span className="text-accent font-bold text-[10px] tracking-[0.4em] uppercase">
                                // PROCESS
                            </span>
                        </div>
                    </div>

                    <LayoutGroup>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        {/* Right Side: Scrubbed Image Animation - Moved to top on mobile */}
                        <div className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2">
                            <div className="relative w-full max-w-sm md:max-w-xl aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/5 bg-white scale-95 md:scale-100">
                                {processSteps.map((step, index) => (
                                    <ScrubbedImage 
                                        key={step.id} 
                                        image={step.image} 
                                        index={index} 
                                        progress={scrollYProgress}
                                        range={[index * 0.25, (index + 1) * 0.25]}
                                    />
                                ))}
                                <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none opacity-30" />
                            </div>
                        </div>

                        <div className="lg:col-span-6 relative order-2 lg:order-1 mt-6 lg:mt-0">
                            <div className="space-y-6 md:space-y-6">
                                {processSteps.map((step, index) => (
                                    <StepItem 
                                        key={step.id} 
                                        step={step} 
                                        index={index} 
                                        activeStep={activeStep}
                                        progress={scrollYProgress}
                                        range={[index * 0.25, (index + 1) * 0.25]}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    </LayoutGroup>
                </div>
            </div>

            {/* Mobile Simple Stacked View */}
            <div className="flex lg:hidden flex-col py-24 px-6 gap-16">
                <div className="flex flex-col gap-4 border-b border-black/8 pb-8 mb-4">
                    <span className="text-accent font-bold text-[10px] tracking-[0.4em] uppercase">
                        // PROCESS
                    </span>
                    <h2 className="text-5xl font-medium tracking-tighter text-black leading-[0.9] uppercase">
                        How it <br /> works
                    </h2>
                </div>

                <div className="flex flex-col gap-12">
                    {processSteps.map((step, i) => (
                        <motion.div 
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="relative aspect-square w-full rounded-[30px] overflow-hidden shadow-xl shadow-black/5 bg-white">
                                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none opacity-30" />
                                <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-accent/20">
                                    {step.id}
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 px-2">
                                <h3 className="text-2xl font-semibold tracking-tight uppercase text-black">
                                    {step.title}
                                </h3>
                                <p className="text-[#888] text-sm font-light leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StepItem({ step, index, activeStep, progress, range }: { step: any, index: number, activeStep: number, progress: any, range: [number, number] }) {
    const isActive = activeStep === index;

    const opacity = useTransform(progress, 
        [range[0] - 0.1, range[0], range[1], range[1] + 0.1], 
        [0.25, 1, 1, 0.25]
    );

    const x = useTransform(progress,
        [range[0] - 0.1, range[0], range[1], range[1] + 0.1],
        [8, 0, 0, -8]
    );

    return (
        <motion.div 
            style={{ opacity, x }}
            className="flex items-start gap-4 group"
        >
            {/* Dot placeholder — always takes up space. Only the active step renders the real dot with layoutId */}
            <div className="w-8 flex-shrink-0 flex justify-center pt-1.5">
                {isActive && (
                    <motion.div
                        layoutId="stepIndicator"
                        className="w-3.5 h-3.5 bg-accent shadow-xl shadow-accent/30"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                )}
            </div>

            <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1.5">
                    <span className={`text-[9px] font-bold tracking-widest transition-colors duration-300 ${isActive ? 'text-accent' : 'text-[#ccc]'}`}>
                        {step.id}
                    </span>
                    <h3 className={`text-xl md:text-2xl font-semibold tracking-tight uppercase transition-colors duration-300 ${isActive ? 'text-black' : 'text-[#aaa]'}`}>
                        {step.title}
                    </h3>
                </div>
                
                <p className="text-[#888] text-sm font-light leading-relaxed max-w-sm">
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
}

function ScrubbedImage({ image, index, progress, range }: { image: string, index: number, progress: any, range: [number, number] }) {
    const isLast = index === 3;

    // All images fade in at step start; all but last fade out at step end.
    // Last image stays at full opacity through scroll = 1.0
    const opacity = useTransform(progress, 
        isLast
            ? [range[0] - 0.05, range[0], range[0] + 0.05, 1.0]
            : [range[0] - 0.05, range[0], range[1] - 0.02, range[1] + 0.03],
        isLast
            ? [0, 1, 1, 1]
            : [0, 1, 1, 0]
    );

    // Scale: zoom in on enter, hold, then shrink slightly on exit
    // Last step: just zoom in and hold at 1.0
    const scale = useTransform(progress,
        isLast
            ? [range[0] - 0.1, range[0], 1.0]
            : [range[0] - 0.1, range[0], range[1], range[1] + 0.1],
        isLast
            ? [1.15, 1.0, 1.0]
            : [1.15, 1.0, 1.0, 0.92]
    );

    // Subtle rotation for cinematic feel — reverses on exit
    const rotate = useTransform(progress,
        [range[0], range[1]],
        [index % 2 === 0 ? -1.5 : 1.5, index % 2 === 0 ? 1.5 : -1.5]
    );

    // Parallax drift
    const translateY = useTransform(progress, [range[0], range[1]], [15, -15]);
    const translateX = useTransform(progress, [range[0], range[1]], [8, -8]);

    return (
        <motion.img
            src={image}
            style={{ 
                opacity, 
                scale, 
                rotate,
                y: translateY,
                x: translateX,
                zIndex: index
            }}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            alt={`Process step ${index + 1}`}
        />
    );
}
