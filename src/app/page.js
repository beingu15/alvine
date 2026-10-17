
import Script from "next/script";

import Services from "@/components/Services";
import SubHeader from "@/components/SubHeader";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import BusinessGrowthSection from "@/components/BusinessGrowthSection";
import AboutCompanySection from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ConnectSection from "@/components/ConnectSection";
import { firmInfo } from "@/data/firmData";

const SITE_URL = "https://www.alvyne.in";
const LOGO_URL = `${SITE_URL}/logo.png`;

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "ALVYNE | ITR Filing, Tax Planning & GST Services in Kerala",
    template: "%s | ALVYNE",
  },

  description:
    "ALVYNE Management Consultancy provides income tax return filing, tax planning, GST services, accounting, compliance, and financial advisory for individuals and businesses in Kerala.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: firmInfo.name,
    title:
      "ALVYNE | Tax, GST & Accounting Services in Kerala",
    description:
      "Professional ITR filing, tax planning, GST services, accounting, compliance, and financial advisory for individuals and businesses in Kerala.",
    images: [
      {
        url: LOGO_URL,
        alt: "ALVYNE Management Consultancy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ALVYNE | ITR Filing, Tax Planning & GST Services",
    description:
      "ITR filing, tax planning, GST, accounting, compliance, and financial advisory in Kerala.",
    images: [LOGO_URL],
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

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "ALVYNE",
        alternateName: firmInfo.name,
        url: `${SITE_URL}/`,
      },
      {
        "@type": "AccountingService",
        "@id": `${SITE_URL}/#organization`,
        name: firmInfo.name,
        legalName: firmInfo.name,
        url: `${SITE_URL}/`,
        logo: LOGO_URL,
        image: LOGO_URL,
        description:
          "ALVYNE Management Consultancy provides income tax return filing, tax planning, GST services, accounting, compliance, and financial advisory for individuals and businesses.",
        slogan: firmInfo.tagline,

        ...(firmInfo.establishedYear
          ? {
            foundingDate: String(firmInfo.establishedYear),
          }
          : {}),

        ...(firmInfo.contact.phone
          ? {
            telephone: firmInfo.contact.phone,
          }
          : {}),

        ...(firmInfo.contact.email
          ? {
            email: firmInfo.contact.email,
          }
          : {}),

        address: {
          "@type": "PostalAddress",
          streetAddress: firmInfo.contact.address,
          addressLocality: "Kochi",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },

        areaServed: [
          {
            "@type": "City",
            name: "Kochi",
          },
          {
            "@type": "AdministrativeArea",
            name: "Kerala",
          },
        ],

        sameAs: [
          firmInfo.socialLinks.instagram,
        ].filter(
          (url) =>
            typeof url === "string" &&
            url.trim().length > 0
        ),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black">
      <Script
        id="alvyne-home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
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
