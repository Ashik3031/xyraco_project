"use client";

import React from "react";
import { motion } from "framer-motion";

const products = [
    {
        title: "Billing Software",
        description: "Enterprise-grade subscription management built for high-scale SaaS.",
        category: "FINTECH",
    },
    {
        title: "EMS / ERP",
        description: "Custom management systems designed for deep business visibility.",
        category: "OPERATIONS",
    },
    {
        title: "E-commerce Build",
        description: "High-performance storefronts with integrated AI personalization.",
        category: "COMMERCE",
    },
];

export default function InternalProducts() {
    return (
        <section className="py-40 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-12">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-bold tracking-super-tight text-black leading-[0.9] uppercase"
                        >
                            INTERNAL <br />
                            <span className="stroke-text">PRODUCTS</span> & BUILDS.
                        </motion.h2>
                    </div>
                    <div className="md:w-1/3">
                        <p className="text-xl text-gray-400 font-light leading-relaxed border-l border-black/10 pl-8 italic">
                            We build proprietary engines that solve real business problems. These are not just prototypes—they are production-ready assets.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5 rounded-[40px] overflow-hidden">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-12 bg-background hover:bg-black/[0.02] transition-colors duration-500 min-h-[400px] flex flex-col justify-between"
                        >
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-8 block font-bold transition-colors group-hover:text-accent">
                                    {product.category}
                                </span>
                                <h3 className="text-4xl font-bold tracking-super-tight text-black mb-8 group-hover:translate-x-4 transition-transform duration-700">
                                    {product.title}
                                </h3>
                            </div>
                            <p className="text-gray-500 text-lg font-light leading-relaxed">
                                {product.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
