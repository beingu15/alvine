import About from "./AboutPage";
import { firmInfo } from "@/data/firmData";

export const metadata = {
  title: "About Us | Top CA/Accounting Firm & Business Management Consultant in Kochi, Kerala",
  description:
    "Learn about ALVYNE Management Consultancy in Kochi, Kerala. Top tax consultant and CA/accounting firm founded by Nelson Joseph, Vyshnav Prakash, and strategic advisor Albert Pradeep (CA & US CMA), delivering complete tax solutions.",
  keywords: [
    "top tax consultant in kochi kerala",
    "top ca/accounting firms in kochi kerala",
    "ca firms in kochi kerala",
    "accounting firms in kochi kerala",
    "business management consultant",
    "complete tax solutions",
    "About ALVYNE Kochi",
    "Nelson Joseph Senior Accountant",
    "Vyshnav Prakash Tax Consultant",
    "Albert Pradeep CA Kochi",
    "Chartered Accountant Firm Kochi",
    "Tax Advisory Kochi Kerala",
    "Management Consultants Ernakulam",
  ],
  openGraph: {
    title: `About ${firmInfo.name} | Top CA & Tax Advisory Firm in Kochi, Kerala`,
    description:
      "ALVYNE is a top tax consultant, CA accounting firm, and business management consultancy in Kochi, Kerala providing complete tax solutions and financial leadership.",
    url: "https://alvine-mu.vercel.app/About",
    siteName: firmInfo.name,
    images: [
      {
        url: "https://alvine-mu.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "ALVYNE Leadership Team Kochi Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Meet the Leadership Team at ${firmInfo.name} Kochi`,
    description: "Strategic taxation, compliance, and growth advisory led by qualified accountants and advisors in Kerala.",
    images: ["https://alvine-mu.vercel.app/logo.png"],
  },
};

export default function AboutPage() {
  return <About />;
}