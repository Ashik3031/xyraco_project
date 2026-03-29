"use client";
 
import { Playfair_Display } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}
 
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], style: ["italic", "normal"] });

const serviceCategories = [
    {
        title: "PRODUCT & BUSINESS STRATEGY",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774775098/578_chpe6i.jpg",
        services: [
            "Product Strategy",
            "Product Consulting",
            "Idea Validation",
            "Rapid Prototyping",
            "R&D Exploration"
        ],
        description: "We work with founders to shape the right product before writing code. Strategy comes before execution."
    },
    {
        title: "DESIGN & EXPERIENCE",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774775777/2151294540_oct0vm.jpg",
        services: [
            "UI/UX Design",
            "Product Design",
            "Design Systems",
            "Interaction Design"
        ],
        description: "Designing user experiences that are simple, intuitive, and conversion-focused. Usability over visual trends."
    },
    {
        title: "ENGINEERING & BUILD",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774775432/60713_z8jpqe.jpg",
        services: [
            "Software Development",
            "Web Development",
            "Mobile Development",
            "No-Code & Low-Code MVPs"
        ],
        description: "Full-stack software development focused on reliability and scalability. We build production-ready systems."
    },
    {
        title: "AI & GENAI SOLUTIONS",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774775432/2151966681_q9o4wx.jpg",
        services: [
            "Custom AI Agents",
            "Intelligent Chatbots",
            "GenAI for Content",
            "AI Internal Tools",
            "Reusable AI Modules"
        ],
        description: "Deep artificial intelligence systems built into real products—not just wrappers around an API."
    },
    {
        title: "GO-TO-MARKET & GROWTH",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1774775431/2151964657_vyegzn.jpg",
        services: [
            "Brand Identity",
            "Marketing Strategy",
            "AI-Powered Advertising",
            "Social & Growth Systems"
        ],
        description: "Strategic planning for acquiring users and customers, focusing on channels, messaging, and measurable outcomes."
    },
    {
        title: "PARTNERSHIP MODEL",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2426",
        services: [
            "Startup Co-Building",
            "Zero-Upfront Build",
            "Risk-Sharing Model",
            "Founder Partnership"
        ],
        description: "XYRACO co-builds startups with founders, sharing the risk and staying involved through growth."
    }
];

export default function ServicesPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // GSAP Animations
    useGSAP(() => {
        // Entrance animation for sidebar
        gsap.from(".sidebar-content > *", {
            x: -50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.5
        });

        // Scroll animations for service titles
        serviceCategories.forEach((_, i) => {
            gsap.from(`#service-${i} h2`, {
                scrollTrigger: {
                    trigger: `#service-${i}`,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "expo.out"
            });

            gsap.from(`#service-${i} .feature-item`, {
                scrollTrigger: {
                    trigger: `#service-${i}`,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                },
                x: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            });
        });

        // Parallax for images
        gsap.utils.toArray<HTMLElement>(".service-image").forEach((img) => {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                },
                y: -100,
                ease: "none"
            });
        });
    }, { scope: containerRef });

    // Observer to track active section
    useEffect(() => {
        const sections = document.querySelectorAll('section[data-index]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index') || '0');
                    setActiveIndex(index);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <main className="min-h-screen w-full bg-[#0a0a0a] text-white font-sans selection:bg-accent selection:text-white">
            <div className="flex flex-col lg:flex-row min-h-screen">
                
                {/* STICKY SIDEBAR (LEFT) */}
                <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[450px] xl:w-[500px] bg-[#0a0a0a] p-8 md:p-12 lg:p-12 pt-20 lg:pt-24 flex flex-col justify-between z-40 lg:border-r lg:border-white/5">
                    <div className="space-y-6 md:space-y-8 sidebar-content">
                        {/* Title Section */}
                        <div className="mb-4">
                            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-super-tight uppercase leading-[0.85] mb-4">
                                CAPA<br />BILI<br />TIES
                            </h1>
                            <p className="text-[10px] md:text-[11px] text-gray-400 font-light leading-relaxed max-w-[260px] uppercase tracking-widest opacity-40">
                                We strategize, design, and engineer digital products that define industries through clarity, emotion, and technical excellence.
                            </p>
                        </div>

                        {/* Vertical Thumbnail Navigation */}
                        <div className="flex flex-col gap-3 lg:gap-4 relative pb-10">
                            <span className="text-[9px] font-bold tracking-[0.6em] uppercase opacity-20 mb-1 lg:block hidden">Service Archive</span>
                            {serviceCategories.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        const el = document.getElementById(`service-${i}`);
                                        el?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="flex items-center gap-4 group text-left relative"
                                >
                                    {/* Moving Square Indicator */}
                                    <div className="w-6 flex-shrink-0 flex justify-center items-center">
                                        {activeIndex === i && (
                                            <motion.div
                                                layoutId="sidebarIndicator"
                                                className="w-2.5 h-2.5 bg-accent shadow-lg shadow-accent/20"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </div>

                                    <div className="relative w-12 h-8 lg:w-14 lg:h-9 rounded overflow-hidden flex-shrink-0 border border-white/5">
                                        <img
                                            src={cat.image}
                                            alt={cat.title}
                                            className={`w-full h-full object-cover transition-all duration-700 ${activeIndex === i ? 'grayscale-0 scale-110 opacity-100' : 'grayscale opacity-20 group-hover:opacity-60'}`}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${activeIndex === i ? 'text-accent' : 'text-white/10'}`}>
                                            0{i + 1}
                                        </span>
                                        <span className={`text-[9px] lg:text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${activeIndex === i ? 'text-white' : 'text-white/5'}`}>
                                            {cat.title}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-12 md:mt-24">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-accent text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest flex items-center justify-between gap-8 min-w-[200px]"
                        >
                            START PARTNERSHIP
                            <span className="text-xl">+</span>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white/5 border border-white/10 text-white w-14 h-14 flex items-center justify-center text-xl hover:bg-white hover:text-black transition-colors"
                        >
                            +
                        </motion.button>
                    </div>
                </aside>

                {/* SCROLLABLE CONTENT (RIGHT) */}
                <div ref={containerRef} className="flex-1 bg-white">
                    {serviceCategories.map((cat, i) => (
                        <section
                            key={i}
                            id={`service-${i}`}
                            data-index={i}
                            className="w-full relative group border-b border-black/5"
                        >
                            <div className="flex flex-col">
                                {/* Large Image Area */}
                                <div className="aspect-[21/9] relative overflow-hidden bg-gray-50">
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="service-image w-full h-[120%] object-cover absolute top-0 left-0"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>

                                {/* Content Area */}
                                <div className="p-8 md:p-16 xl:p-32 bg-white text-black space-y-16 lg:space-y-24">
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4 text-accent">
                                            <span className="text-sm font-bold tracking-[0.5em] uppercase">Service 0{i + 1}</span>
                                            <div className="h-[1px] w-12 bg-accent/30" />
                                        </div>
                                        <h2 className="text-5xl md:text-7xl xl:text-8xl font-bold uppercase tracking-super-tight text-black leading-[0.9]">
                                            {cat.title}
                                        </h2>
                                        <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl italic font-serif">
                                            {cat.description}
                                        </p>
                                    </div>

                                    {/* Detailed Feature List */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-12 border-t border-black/5">
                                        {cat.services.map((service, j) => (
                                            <div key={j} className="feature-item flex items-center gap-6 group/item cursor-default">
                                                <div className="w-8 h-[1px] bg-accent/20 group-hover/item:w-16 group-hover/item:bg-accent transition-all duration-700" />
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-black/20 group-hover/item:text-accent transition-colors">
                                                        {cat.title}
                                                    </span>
                                                    <span className="text-xs font-bold uppercase tracking-widest text-black/60 group-hover/item:text-black transition-colors">
                                                        {service}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Bottom Visual Tag */}
                                    <div className="flex justify-end pt-12">
                                        <span className="text-[10px] font-bold uppercase tracking-[1em] opacity-5">Xyraco Digital Engineering</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            {/* Bottom CTA Section - MOVED OUTSIDE of the Sidebar flex container */}
            <section className="min-h-[80vh] flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-6 relative overflow-hidden z-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 text-center space-y-12"
                >
                    <h3 className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.8] tracking-super-tight">
                        READY TO<br />BUILD THE<br />FUTURE?
                    </h3>
                    <div className="flex flex-col items-center gap-8">
                        <motion.a
                            href="/apply"
                            whileHover={{ scale: 1.05 }}
                            className="px-16 py-6 bg-accent text-white font-bold uppercase tracking-[0.2em] text-sm rounded-full shadow-2xl shadow-accent/20 transition-all hover:bg-white hover:text-black"
                        >
                            Get in Touch
                        </motion.a>
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] opacity-30 italic">Selective Expansion / 2026</span>
                    </div>
                </motion.div>
                
                {/* Background Visual Accent */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#ff5722_0%,transparent_50%)]" />
                </div>
            </section>
        </main>
    );
}
