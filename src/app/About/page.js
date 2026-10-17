import About from "./AboutPage";
import { firmInfo } from "@/data/firmData";

export const metadata = {
  title: "About Us | Founding Partners & Strategic Advisors in Kochi, Kerala",
  description:
    "Learn about ALVYNE Management Consultancy based in Kochi, Kerala. Meet our founding partners Nelson Joseph, Vyshnav Prakash, and strategic advisor Albert Pradeep (CA & US CMA). Delivering excellence in taxation, compliance, and financial advisory.",
  keywords: [
    "About ALVYNE Kochi",
    "Financial Consultants Kochi Kerala",
    "Nelson Joseph Senior Accountant",
    "Vyshnav Prakash Tax Consultant",
    "Albert Pradeep CA Kochi",
    "Chartered Accountant Firm Kochi",
    "Tax Advisory Kochi Kerala",
    "Management Consultants Ernakulam",
  ],
  openGraph: {
    title: `About ${firmInfo.name} | Financial Leadership in Kochi, Kerala`,
    description:
      "Founded in 2024, ALVYNE provides strategic financial guidance, taxation, compliance, and virtual CFO advisory across Kochi, Kerala, and beyond.",
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