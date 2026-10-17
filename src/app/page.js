import Services from "@/components/Services";
import SubHeader from "@/components/SubHeader";
import FlowerAnimation from "@/components/FlowerAnimation";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import BusinessGrowthSection from "@/components/BusinessGrowthSection";
import AboutCompanySection from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ConnectSection from "@/components/ConnectSection";
import Script from "next/script";
import { firmInfo } from "@/data/firmData";

export const metadata = {
  title: `${firmInfo.name} | Tax, GST & Financial Consultants in Kochi, Kerala`,
  description:
    "ALVYNE Management Consultancy in Kochi, Kerala. Expert chartered accountancy, ITR filing, GST registration & returns, company incorporation, statutory compliance, and Virtual CFO advisory.",
  keywords: [
    "Tax Consultant Kochi",
    "Chartered Accountant Kochi Kerala",
    "GST Registration Kochi",
    "GST Return Filing Kerala",
    "Income Tax Return Filing Kochi",
    "Company Registration Kochi Kerala",
    "Business Incorporation Ernakulam",
    "Virtual CFO Services Kerala",
    "Accounting and Bookkeeping Firm Kochi",
    "Startup Financial Advisory Kerala",
    "Corporate ROC Compliance Kochi",
    "ALVYNE Management Consultancy Kochi",
  ],
  openGraph: {
    title: `${firmInfo.name} | Tax & Financial Advisory in Kochi, Kerala`,
    description:
      "Navigating Growth, Building Resilience. Premier financial services firm in Kochi, Kerala specializing in Income Tax, GST, accounting, corporate compliance, and virtual CFO advisory.",
    url: "https://alvine-mu.vercel.app",
    siteName: firmInfo.name,
    images: [
      {
        url: "https://alvine-mu.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: `${firmInfo.name} Kochi Kerala Logo and Branding`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${firmInfo.name} | Financial & Tax Consultants in Kochi, Kerala`,
    description:
      "Strategic financial guidance, tax planning, GST, and statutory compliance for businesses and startups in Kochi, Kerala.",
    images: ["https://alvine-mu.vercel.app/logo.png"],
  },
  alternates: {
    canonical: "https://alvine-mu.vercel.app/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: firmInfo.name,
    legalName: firmInfo.name,
    description: firmInfo.about.summary,
    url: "https://alvine-mu.vercel.app",
    logo: "https://alvine-mu.vercel.app/logo.png",
    image: "https://alvine-mu.vercel.app/logo.png",
    foundingDate: `${firmInfo.establishedYear}`,
    slogan: firmInfo.tagline,
    telephone: firmInfo.contact.phone,
    email: firmInfo.contact.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: firmInfo.contact.address,
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.9816",
      longitude: "76.2999",
    },
    areaServed: [
      { "@type": "City", name: "Kochi" },
      { "@type": "City", name: "Ernakulam" },
      { "@type": "AdministrativeArea", name: "Kerala" },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      firmInfo.socialLinks.instagram,
      firmInfo.socialLinks.whatsapp,
    ],
  };

  return (
    <div className="bg-black min-h-screen">
      <Script
        id="ld-json-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <SubHeader />

      <Navbar />

      <main className="relative z-10">
        <Banner />
        <Services />
        <BusinessGrowthSection />
        <AboutCompanySection />
        <WhyChooseUs />
        <ConnectSection />

      </main>
    </div>
  );
}
