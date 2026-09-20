import Contact from "./ContactPage";
import { firmInfo } from "@/data/firmData";

export const metadata = {
  title: "Contact Us",
  description:
    `Get in touch with ${firmInfo.name}. Connect with our partners for income tax filing, GST consultation, accounting, compliance, and virtual CFO advisory.`,
  keywords: [
    "Contact ALVYNE",
    "ALVYNE Management Consultancy Address",
    "Chartered Accountant Contact",
    "Tax Consultation Office",
    "Virtual CFO Consultation",
  ],
  openGraph: {
    title: `Contact ${firmInfo.name} | ${firmInfo.tagline}`,
    description:
      "Schedule a consultation or reach out to our specialist teams for corporate compliance, taxation, and advisory.",
    url: "https://alvine-mu.vercel.app/Contact",
    siteName: firmInfo.name,
    images: [
      {
        url: "https://alvine-mu.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: `${firmInfo.name} Contact`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${firmInfo.name}`,
    description: "Reach our accounting, taxation, and compliance specialists today.",
    images: ["https://alvine-mu.vercel.app/logo.png"],
  },
};

export default function Page() {
  return <Contact />;
}