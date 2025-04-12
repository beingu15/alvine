

import Services from "@/components/Services";
import SubHeader from "@/components/SubHeader";
import FlowerAnimation from "@/components/FlowerAnimation";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import BusinessGrowthSection from "@/components/BusinessGrowthSection";
import AboutCompanySection from "@/components/About";
import ConnectSection from "@/components/ConnectSection";
import Script from "next/script";

export const metadata = {
  title: "Home | Alvyne Agency",
  description:
    "Welcome to Alvyne Agency — Empowering businesses through creative design, smart strategy, and powerful visual storytelling.",
  keywords: [
    "Alvyne Agency",
    "Business Growth",
    "Creative Services",
    "Brand Strategy",
    "Web Design",
    "Digital Marketing",
  ],
  openGraph: {
    title: "Alvyne Agency | Creative Business Solutions",
    description:
      "Explore our unique services to help your brand grow — from web design to business strategy.",
    url: "https://alvine-mu.vercel.app",
    siteName: "Alvyne Agency",
    images: [
      {
        url: "https://alvine-mu.vercel.app/slide1.jpg",
        width: 1200,
        height: 630,
        alt: "Banner showing creative digital services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvyne Agency | Digital Innovation Meets Strategy",
    description: "We craft digital solutions for real business growth.",
    images: ["https://alvine-mu.vercel.app/slide1.jpg"],
  },
  alternates: {
    canonical: "https://alvine-mu.vercel.app/",
  },
};

export default function Home() {
  return (
    <div>
      <Script
        id="ld-json-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Alvyne Agency",
            url: "https://alvine-mu.vercel.app",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://alvine-mu.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <SubHeader />

      <div className="absolute left-0 w-full z-50">
        <Navbar />
      </div>

      <main className="relative z-10">
        <Banner />
        <Services />
        <BusinessGrowthSection />
        <AboutCompanySection />
        <ConnectSection />
        <FlowerAnimation />
      </main>
    </div>
  );
}
