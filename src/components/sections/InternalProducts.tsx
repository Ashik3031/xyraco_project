"use client";

import React from "react";
import { motion } from "framer-motion";

const products = [
    {
        title: "Billing Software",
        description: "Enterprise-grade subscription management built for high-scale SaaS.",
        category: "FINTECH",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "EMS / ERP",
        description: "Custom management systems designed for deep business visibility.",
        category: "OPERATIONS",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
        title: "E-commerce Build",
        description: "High-performance storefronts with integrated AI personalization.",
        category: "COMMERCE",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2632&auto=format&fit=crop"
    },
];

export default function InternalProducts() {
    return (
        <section className="py-24 md:py-48 bg-white relative overflow-hidden font-sans">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-12">
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10vw] md:text-[7vw] font-medium tracking-tighter text-black leading-[0.85] uppercase"
                        >
                            INTERNAL <br />
                            <span className="stroke-text">PRODUCTS</span> & BUILDS.
                        </motion.h2>
                    </div>
                    <div className="md:w-1/3">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 font-light leading-relaxed border-l border-black/10 pl-8 italic"
                        >
                            We build proprietary engines that solve real business problems. These are not just prototypes—they are production-ready assets.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="group p-12 bg-[#f8f9fa] border border-black/5 rounded-[50px] hover:bg-white hover:border-black/10 hover:shadow-2xl hover:shadow-black/5 transition-all duration-700 min-h-[480px] flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex flex-row gap-6 relative mb-8">
                                    <div className="[writing-mode:vertical-lr] rotate-180 text-[10px] uppercase tracking-[0.4em] text-gray-300 font-bold">
                                        {product.category}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-medium tracking-tighter text-black group-hover:translate-x-2 transition-transform duration-700 leading-none">
                                        {product.title}
                                    </h3>
                                </div>

                                <div className="mb-8 w-full h-32 rounded-3xl overflow-hidden bg-gray-50 border border-black/5 shadow-md group-hover:scale-[1.02] transition-transform duration-700">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-[280px]">
                                {product.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
