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
  title: "Top Tax Consultant & CA/Accounting Firm in Kochi, Kerala | ALVYNE Management Consultancy",
  description:
    "ALVYNE is a top tax consultant and leading CA/accounting firm in Kochi, Kerala. We provide complete tax solutions, business management consultancy, ITR filing, GST returns, company incorporation, and virtual CFO advisory.",
  keywords: [
    "top tax consultant in kochi kerala",
    "top ca/accounting firms in kochi kerala",
    "ca firms in kochi kerala",
    "accounting firms in kochi kerala",
    "business management consultant",
    "business management consultancy in kochi",
    "complete tax solutions",
    "complete tax solutions in kochi kerala",
    "top tax consultant kochi",
    "chartered accountant kochi kerala",
    "gst registration and return filing kochi",
    "income tax return itr filing kochi",
    "company registration kochi kerala",
    "virtual cfo services kerala",
    "corporate compliance advisory kochi",
    "alvyne management consultancy",
  ],
  openGraph: {
    title: "Top Tax Consultant & CA/Accounting Firm in Kochi, Kerala | ALVYNE",
    description:
      "ALVYNE Management Consultancy: Top tax consultant and CA/accounting firm in Kochi, Kerala delivering complete tax solutions, business management consulting, GST, and corporate compliance.",
    url: "https://alvine-mu.vercel.app",
    siteName: firmInfo.name,
    images: [
      {
        url: "https://alvine-mu.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "ALVYNE Top Tax Consultant and CA Accounting Firm Kochi Kerala",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Tax Consultant & CA Firm in Kochi, Kerala | Complete Tax Solutions",
    description:
      "Complete tax solutions and business management consultancy in Kochi, Kerala. Direct tax, GST, and corporate advisory.",
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
    description: "Top tax consultant and CA/accounting firm in Kochi, Kerala providing complete tax solutions, business management consultancy, statutory compliance, and virtual CFO services.",
    url: "https://alvine-mu.vercel.app",
    logo: "https://alvine-mu.vercel.app/logo.png",
    image: "https://alvine-mu.vercel.app/logo.png",
    foundingDate: `${firmInfo.establishedYear}`,
    slogan: "Complete Tax Solutions & Business Management Consultancy in Kochi, Kerala",
    telephone: firmInfo.contact.phone,
    email: firmInfo.contact.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
    knowsAbout: [
      "Income Tax Return Filing",
      "GST Registration and Compliance",
      "Chartered Accountancy",
      "Accounting and Bookkeeping",
      "Business Management Consulting",
      "Complete Tax Solutions",
      "Company Incorporation",
      "Virtual CFO Services",
      "Tax Audit and Due Diligence",
    ],
    serviceType: [
      "Tax Consultant",
      "Chartered Accountant",
      "Accounting Firm",
      "Business Management Consultant",
      "Tax Preparation Service",
      "Corporate Compliance Advisory",
    ],
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
