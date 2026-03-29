"use client";

import { Playfair_Display } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Columns, Filter, LayoutGrid, Maximize2, Rows, Terminal } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], style: ["italic", "normal"] });

const aiFeatures = [
    {
        title: "Autonomous Agents",
        subtitle: "Operations & Workflows",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774779031/2151675043_aop0qo.jpg",
        description: "Action-taking systems engineered to automate complex business logic and repetitive digital tasks at scale.",
        tags: ["Workflow", "Automation", "Scale"],
        stats: "12+ Deployed"
    },
    {
        title: "Enterprise Chatbots",
        subtitle: "Context-Aware Logic",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774779030/2151675020_d2ytqr.jpg",
        description: "Intelligent conversational interfaces connected directly to your proprietary data for precise, localized knowledge retrieval.",
        tags: ["LLM", "Data-Sync", "Support"],
        stats: "500k+ Queries"
    },
    {
        title: "Gen-AI Content",
        subtitle: "Asset Generation",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774779031/2151420212_plokym.jpg",
        description: "Automated media generation pipelines that maintain brand consistency while scaling asset production across channels.",
        tags: ["Media", "Brand-Safe", "Speed"],
        stats: "10k+ Assets"
    },
    {
        title: "Technical Tooling",
        subtitle: "Developer Velocity",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774779032/2152006116_jiiziv.jpg",
        description: "Internal AI utilities designed to accelerate product development cycles and founder-led rapid experimentation.",
        tags: ["Internal", "MVP", "DevOps"],
        stats: "2x Velocity"
    },
    {
        title: "Modular Frameworks",
        subtitle: "Reusable Intelligence",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774779030/518_qp1tcs.jpg",
        description: "Standardized AI components that reduce complexity and time-to-market for multi-product ecosystems.",
        tags: ["Framework", "API", "Standard"],
        stats: "8+ Modules"
    }
];

export default function AiPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);
    const [activeFilter, setActiveFilter] = useState("All Work");
    const [activeThumb, setActiveThumb] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Technical Watermark Transforms (Toned down for Hero)
    const watermarkX = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);

    useGSAP(() => {
        if (horizontalRef.current) {
            const container = horizontalRef.current;
            const scrollWidth = container.scrollWidth;
            const amountToScroll = scrollWidth - window.innerWidth;

            gsap.to(container, {
                x: -amountToScroll,
                ease: "none",
                scrollTrigger: {
                    trigger: ".horizontal-container",
                    pin: true,
                    scrub: 1,
                    // end: () => `+=${amountToScroll}`
                    end: () => `+=${container.offsetWidth}`
                }
            });
        }
    }, { scope: containerRef });

    return (
        <main ref={containerRef} className="bg-[#fafafa] text-[#111] font-sans selection:bg-[#ff5722] selection:text-white overflow-x-hidden min-h-screen relative">
            
            {/* NOISE - ULTRA SUBTLE */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.012] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <motion.div 
                style={{ x: watermarkX }}
                className="fixed top-1/2 left-0 -translate-y-1/2 text-[40vw] md:text-[30vw] font-black tracking-tighter text-black/[0.008] md:text-black/[0.015] pointer-events-none select-none z-0 whitespace-nowrap leading-none transition-all duration-700"
            >
                STRATUM_V8
            </motion.div>

            {/* SECTION 1: 'OUR CRAFT' INSPIRED HERO */}
            <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 relative z-10">
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-8xl lg:text-[7vw] font-medium tracking-tight leading-[0.9] md:leading-none"
                    >
                        Applied Intelligence
                    </motion.h1>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="space-y-2"
                    >
                        <p className="text-sm md:text-lg text-black/40 font-normal tracking-tight">50+ autonomous agents deployed.</p>
                        <p className="text-sm md:text-lg text-black/40 font-normal tracking-tight">500M+ intelligence queries delivered.</p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: 3D PARALLAX PROJECT GALLERY */}
            <section className="horizontal-container bg-[#fafafa] relative overflow-hidden py-12 md:py-24">
                <div ref={horizontalRef} className="flex h-[80vh] w-max items-center px-6 md:px-12 lg:px-24 gap-8 md:gap-20">
                    {aiFeatures.map((feat, i) => (
                        <div key={i} className="project-card flex-shrink-0 w-[85vw] md:w-[65vw] lg:w-[48vw] h-full group relative">
                            {/* Card Media Wrapper (The "Window") */}
                            <div className="w-full h-[60vh] bg-white overflow-hidden relative shadow-[0_25px_80px_-20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-1000">
                                
                                {/* Inner Parallax Image */}
                                <motion.img 
                                    src={feat.image} 
                                    initial={{ scale: 1.15 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 1.8, ease: "circOut" }}
                                    className="w-full h-full object-cover grayscale-0 opacity-100 group-hover:scale-105 transition-all duration-[2000ms] pointer-events-none" 
                                    alt={feat.title} 
                                />

                                {/* TECHNICAL SCAN OVERLAY */}
                                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                     <div className="absolute top-0 left-0 right-0 h-px bg-[#ff5722]/40 animate-scan" />
                                     <div className="absolute inset-x-8 top-8 flex justify-between">
                                         <span className="text-[8px] font-mono text-[#ff5722]">TARGET_AQUISITION</span>
                                         <span className="text-[8px] font-mono text-[#ff5722]">00{i+1}_SYNC</span>
                                     </div>
                                </div>
                                
                                {/* Precision Border */}
                                <div className="absolute inset-0 border border-black/[0.03] group-hover:border-[#ff5722]/10 transition-colors" />
                            </div>

                            {/* Minimal Metadata Footer */}
                            <div className="mt-8 space-y-3">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-none">{feat.title}</h3>
                                        <p className="text-black/40 text-[13px] md:text-sm font-light max-w-sm pt-2">{feat.description}</p>
                                    </div>
                                    <span className="text-[10px] font-mono opacity-20">0{i+1}</span>
                                </div>
                                <div className="flex flex-wrap gap-6 pt-4">
                                     {feat.tags.map((t, idx) => (
                                         <span key={idx} className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30 group-hover:opacity-100 group-hover:text-[#ff5722] transition-all">
                                             {t}
                                         </span>
                                     ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* CTA CARD */}
                    <div className="project-card flex-shrink-0 w-[85vw] md:w-[65vw] lg:w-[40vw] h-[60vh] flex flex-col items-center justify-center bg-white border border-black/[0.04] p-12 md:p-24 relative group overflow-hidden shadow-2xl">
                         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,87,34,0.06),transparent)]" />
                         </div>
                         
                         <div className="relative z-10 text-center space-y-12">
                             <div className="space-y-4">
                                 <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Launch with <br /> Precision</h2>
                                 <p className="text-black/40 text-sm font-light max-w-xs mx-auto">Enterprise AI architecture built for the modern technical visionary.</p>
                             </div>
                             <button className="group/nav flex items-center gap-6 px-10 py-5 bg-[#111] text-white text-[10px] font-bold uppercase tracking-[0.3em] active:scale-95 transition-all">
                                Initialize Sync
                                <ArrowRight className="w-4 h-4 group-hover/nav:translate-x-1 transition-transform" />
                             </button>
                         </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: INTERACTIVE ARCHITECTURE GRID */}
            <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-white relative">
                 <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-16 md:mb-24 gap-8 md:gap-12">
                        <div className="space-y-4 md:space-y-6 text-left">
                             <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#ff5722]">Systems Logic</span>
                             <h2 className="text-5xl md:text-8xl font-medium tracking-tight leading-[0.8]">Topology_V4</h2>
                        </div>
                        <p className="max-w-md text-black/50 font-light leading-relaxed text-base md:text-lg pt-2 md:pt-12 text-left">
                            Deep-embedded intelligence tailored for elite technical ecosystems. We re-architect autonomy from the core.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.05] border border-black/[0.05]">
                         {[
                            { title: "LLM Orchestration", val: "99.4%", tag: "READY", color: "bg-green-500" },
                            { title: "Vector Pipelines", val: "0.2ms", tag: "OPTIMIZED", color: "bg-green-500" },
                            { title: "Safety Guardrails", val: "L-12", tag: "SHIELDED", color: "bg-blue-500" },
                            { title: "Latency Ops", val: "48ms", tag: "ACTIVE", color: "bg-[#ff5722]" },
                         ].map((node, i) => (
                             <div key={i} className="bg-white p-12 space-y-12 group hover:bg-[#fafafa] transition-colors duration-700 cursor-default">
                                  <div className="flex justify-between items-start">
                                       <span className="text-[9px] font-mono opacity-20 tracking-tighter">NODE_0{i+1}</span>
                                       <div className={`w-1.5 h-1.5 rounded-full ${node.color} animate-pulse`} />
                                  </div>
                                  <div className="space-y-4">
                                       <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-black/30 group-hover:text-black transition-colors">{node.title}</h4>
                                       <div className="flex items-baseline gap-4">
                                            <span className="text-5xl font-medium tracking-tighter">{node.val}</span>
                                            <span className="text-[10px] font-bold text-[#ff5722] opacity-0 group-hover:opacity-100 transition-opacity tracking-widest">{node.tag}</span>
                                       </div>
                                  </div>
                                  <div className="pt-8 border-t border-black/[0.05]">
                                       <div className="w-full h-px bg-black/[0.05] relative group-hover:bg-[#ff5722]/10 transition-all">
                                            <div className="absolute top-0 left-0 h-full w-1/3 bg-[#ff5722]/30 group-hover:w-full transition-all duration-1000" />
                                       </div>
                                  </div>
                             </div>
                         ))}
                    </div>
                </div>
            </section>

            {/* REFINED DATA-DRIVEN FOOTER */}
            <footer className="py-24 px-6 md:px-12 lg:px-24 bg-[#fafafa] border-t border-black/[0.04]">
                <div className="max-w-7xl mx-auto space-y-16 opacity-30">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                         <div className="space-y-4">
                            <span className="text-[9px] font-bold tracking-[0.6em] uppercase">Intelligence_Fabric_V4</span>
                            <h2 className="text-4xl font-bold tracking-tighter uppercase leading-none">XYR.04</h2>
                         </div>
                         <div className="flex gap-24 items-end">
                              <div className="space-y-1 text-right">
                                  <span className="text-[8px] font-mono tracking-widest uppercase block mb-1">Status</span>
                                  <span className="text-xl font-bold">OPERATIONAL</span>
                              </div>
                              <div className="space-y-1 text-right">
                                  <span className="text-[8px] font-mono tracking-widest uppercase block mb-1">Sync</span>
                                  <span className="text-xl font-bold">L-82.04</span>
                              </div>
                         </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-12">
                         <span className="text-[9px] font-mono tracking-widest uppercase">© 2026 XYRACO INTELLIGENCE SYSTEMS</span>
                         <div className="flex gap-12">
                              {["Network", "Autonomy", "Infrastructure", "Contact"].map((l) => (
                                  <span key={l} className="text-[9px] font-bold uppercase tracking-[0.4em] hover:text-[#ff5722] cursor-pointer transition-colors">{l}</span>
                              ))}
                         </div>
                         <span className="text-[9px] font-mono tracking-widest uppercase">SYST_HEALTH_OK_0x2A</span>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
                body {
                    background: #fafafa;
                }
                @keyframes scan {
                    from { top: 0% }
                    to { top: 100% }
                }
                .animate-scan {
                    animation: scan 4s linear infinite;
                }
            `}</style>
        </main>
    );
}

// NOTE: Fully refined AI Advantage page with sophisticated UI: parallax project cards, technical watermarks, and high-density precision elements.
