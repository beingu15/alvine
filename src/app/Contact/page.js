import Contact from "./ContactPage";
import { firmInfo } from "@/data/firmData";

export const metadata = {
  title: "Contact Us | Office in Kochi, Kerala | ALVYNE Management Consultancy",
  description:
    `Get in touch with ${firmInfo.name} corporate office in Kochi, Kerala. Connect with our chartered accountant consultants for Income Tax filing, GST advisory, company formation, and Virtual CFO support.`,
  keywords: [
    "Contact ALVYNE Kochi",
    "Tax Consultant Office Kochi",
    "Chartered Accountant Office Ernakulam",
    "GST Consultation Phone Number Kerala",
    "Company Registration Office Kochi",
    "Virtual CFO Consultation Kochi",
    "ALVYNE Address Kochi Kerala",
  ],
  openGraph: {
    title: `Contact ${firmInfo.name} | Corporate Office in Kochi, Kerala`,
    description:
      "Schedule a consultation or reach out to our specialist teams in Kochi, Kerala for corporate compliance, taxation, and advisory.",
    url: "https://alvine-mu.vercel.app/Contact",
    siteName: firmInfo.name,
    images: [
      {
        url: "https://alvine-mu.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: `${firmInfo.name} Contact Office Kochi Kerala`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${firmInfo.name} in Kochi, Kerala`,
    description: "Reach our accounting, taxation, and corporate compliance consultants in Kochi, Kerala today.",
    images: ["https://alvine-mu.vercel.app/logo.png"],
  },
};

export default function Page() {
  return <Contact />;
}