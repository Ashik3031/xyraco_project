import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://xyraco.com"),
    title: "Build Startups Without Upfront Cost | Xyraco",
    description: "Xyraco helps founders build and launch startups with AI, MVP development, product strategy, and zero-upfront startup co-building.",
    keywords: [
        "Xyraco",
        "Xyraco UAE",
        "Xyraco Sharjah",
        "startup builder",
        "startup co-builder",
        "AI startup builder",
        "MVP development",
        "MVP development company",
        "AI MVP development",
        "startup development company",
        "build startup without funding",
        "build startup without upfront cost",
        "zero upfront startup development",
        "startup product development",
        "AI agents for startups",
        "custom software development UAE",
        "web app development UAE",
        "mobile app development UAE",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Build Startups Without Upfront Cost | Xyraco",
        description: "AI startup builder for founders who need MVP development, startup strategy, and launch support without upfront cost.",
        url: "https://xyraco.com",
        siteName: "Xyraco",
        images: [
            {
                url: "/logo.png",
                width: 512,
                height: 512,
                alt: "Xyraco logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Build Startups Without Upfront Cost | Xyraco",
        description: "AI startup builder and MVP development partner for founders.",
        images: ["/logo.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const structuredData = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Xyraco",
            url: "https://xyraco.com",
            logo: "https://xyraco.com/logo.png",
            description: "Xyraco helps founders build startups from idea to MVP and launch using AI, product strategy, and zero-upfront co-building.",
            email: "info@xyraco.com",
            telephone: "+971544692469",
            sameAs: [
                "https://linkedin.com/company/xyraco",
                "https://www.instagram.com/xyraco.in",
            ],
            address: {
                "@type": "PostalAddress",
                streetAddress: "Tower 400, Office No: 1004, Al Soor Street",
                addressLocality: "Sharjah",
                addressCountry: "AE",
            },
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    telephone: "+971544692469",
                    contactType: "sales",
                    areaServed: "AE",
                    availableLanguage: ["English"],
                },
                {
                    "@type": "ContactPoint",
                    telephone: "+919497411513",
                    contactType: "WhatsApp",
                    areaServed: "Worldwide",
                    availableLanguage: ["English"],
                },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Xyraco",
            url: "https://xyraco.com",
            description: "AI startup builder, MVP development company, and startup co-building partner.",
            inLanguage: "en",
        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Xyraco",
            image: "https://xyraco.com/logo.png",
            url: "https://xyraco.com",
            email: "info@xyraco.com",
            telephone: "+971544692469",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Tower 400, Office No: 1004, Al Soor Street",
                addressLocality: "Sharjah",
                addressCountry: "AE",
            },
            areaServed: ["United Arab Emirates", "India", "Worldwide"],
            priceRange: "$$",
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Startup Builder and MVP Development",
            provider: {
                "@type": "Organization",
                name: "Xyraco",
                url: "https://xyraco.com",
            },
            serviceType: "Startup development, MVP development, AI agents, product strategy, web app development, mobile app development",
            areaServed: "Worldwide",
            description: "Xyraco helps founders validate ideas, design products, build MVPs, create AI agents, and launch startups without upfront cost for selected projects.",
        },
    ];

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </head>
            <body className={`${inter.className} antialiased selection:bg-accent selection:text-white`}>
                <SmoothScroll>
                    <Preloader />
                    <CustomCursor />
                    <Header />
                    <PageTransition>
                        {children}
                    </PageTransition>
                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    );
}
