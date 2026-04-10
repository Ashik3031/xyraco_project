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
    title: "Xyraco | Co-Building & Scaling Digital Businesses",
    description: "Xyraco is a startup development partner in the UAE helping founders build and scale startups with product development, digital transformation, brand strategy, and go-to-market support.",
    keywords: [
        "Xyraco",
        "Xyraco UAE",
        "Xyraco Sharjah",
        "startup development partner",
        "startup builder",
        "startup co-builder",
        "AI startup builder",
        "MVP development",
        "MVP development company",
        "AI MVP development",
        "startup development company",
        "build and scale startup",
        "startup tech partner",
        "product development company UAE",
        "digital transformation company",
        "brand strategy agency UAE",
        "go to market strategy services",
        "how to scale a startup fast",
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
        title: "Xyraco | Co-Building & Scaling Digital Businesses",
        description: "Startup development partner in the UAE for founders who want to build and scale startups with product, brand, and go-to-market support.",
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
        title: "Xyraco | Co-Building & Scaling Digital Businesses",
        description: "Startup development partner helping founders build and scale startups in the UAE.",
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
            description: "Xyraco helps founders build and scale startups through product development, digital transformation, brand strategy, and go-to-market execution.",
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
            description: "Startup development partner and product development company in the UAE.",
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
            serviceType: "Startup development partner, product development company UAE, digital transformation company, brand strategy agency UAE, go-to-market strategy services",
            areaServed: "Worldwide",
            description: "Xyraco helps founders validate ideas, build products, shape brands, plan go-to-market strategy, and scale startups faster.",
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
