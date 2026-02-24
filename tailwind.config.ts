import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/(site)/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                vanta: "#050505",
                paper: "#F8F8F8",
                accent: {
                    DEFAULT: "#00E5FF",
                    purple: "#9D00FF",
                },
                glass: "rgba(0, 0, 0, 0.03)",
                charcoal: "#EFEFEF",
                nearblack: "#F0F0F0",
            },
            letterSpacing: {
                "super-tight": "-0.05em",
                "super-wide": "0.2em",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-gradient": "linear-gradient(135deg, #00E5FF 0%, #9D00FF 100%)",
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out forwards",
                "slide-up": "slideUp 0.5s ease-out forwards",
                "blur-in": "blurIn 0.5s ease-out forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                blurIn: {
                    "0%": { filter: "blur(10px)", opacity: "0" },
                    "100%": { filter: "blur(0)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
