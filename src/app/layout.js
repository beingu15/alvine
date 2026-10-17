
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import FloatingSocialButtons from "@/components/FloatingSocialButtons";
import { firmInfo } from "@/data/firmData";

const SITE_URL = "https://www.alvyne.in";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: "ALVYNE",

  title: {
    default:
      "ALVYNE | ITR Filing, Tax Planning & GST Services in Kerala",
    template: `%s | ${firmInfo.name}`,
  },

  description:
    "ALVYNE Management Consultancy provides income tax return filing, tax planning, GST services, accounting, compliance, and financial advisory for individuals and businesses in Kerala.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: firmInfo.name,
    title:
      "ALVYNE | ITR Filing, Tax Planning & GST Services in Kerala",
    description:
      "Professional income tax return filing, tax planning, GST, accounting, compliance, and financial advisory for individuals and businesses.",
    url: "/",
    images: [
      {
        url: "/logo.png",
        alt: "ALVYNE Management Consultancy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ALVYNE | Tax, GST & Accounting Services",
    description:
      "ITR filing, tax planning, GST services, accounting, compliance, and financial advisory in Kerala.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
        <Footer />
        <FloatingSocialButtons />
      </body>
    </html>
  );
}
