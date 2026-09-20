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
  title: `${firmInfo.name} | ${firmInfo.tagline}`,
  description:
    "ALVYNE Management Consultancy is a premier financial services firm specializing in ITR filing, tax planning, GST, corporate compliance, accounting, and financial advisory.",
  keywords: [
    "ALVYNE Management Consultancy",
    "Tax Planning Kochi",
    "ITR Filing India",
    "GST Registration and Returns",
    "Virtual CFO Services",
    "Company Incorporation",
    "Corporate Compliance ROC",
    "Chartered Accountant Advisory",
    "Startup Financial Guidance",
  ],
  openGraph: {
    title: `${firmInfo.name} | ${firmInfo.tagline}`,
    description:
      "Navigating Growth, Building Resilience. Dedicated financial services firm specializing in Income Tax, GST, accounting, compliance, and virtual CFO advisory.",
    url: "https://alvine-mu.vercel.app",
    siteName: firmInfo.name,
    images: [
      {
        url: "https://alvine-mu.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: `${firmInfo.name} Logo and Branding`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${firmInfo.name} | ${firmInfo.tagline}`,
    description:
      "Strategic financial guidance, tax planning, and statutory compliance for businesses, startups, and individuals.",
    images: ["https://alvine-mu.vercel.app/logo.png"],
  },
  alternates: {
    canonical: "https://alvine-mu.vercel.app/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: firmInfo.name,
    legalName: firmInfo.name,
    description: firmInfo.about.summary,
    url: "https://alvine-mu.vercel.app",
    logo: "https://alvine-mu.vercel.app/logo.png",
    foundingDate: `${firmInfo.establishedYear}`,
    slogan: firmInfo.tagline,
    telephone: firmInfo.contact.phone,
    email: firmInfo.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: firmInfo.contact.address,
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-18:00",
    sameAs: [
      firmInfo.socialLinks.linkedin,
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

      <div className="absolute left-0 w-full z-50">
        <Navbar />
      </div>

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
