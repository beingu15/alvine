import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingSocialButtons from "@/components/FloatingSocialButtons";
import { firmInfo } from "@/data/firmData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://alvine-mu.vercel.app"),
  title: {
    default: `${firmInfo.name} | ${firmInfo.tagline}`,
    template: `%s | ${firmInfo.name}`,
  },
  description: `${firmInfo.name} — Navigating Growth, Building Resilience. Dedicated financial services firm specializing in Income Tax, GST, accounting, compliance, and virtual CFO advisory.`,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
