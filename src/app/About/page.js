import About from "./AboutPage";
import { firmInfo } from "@/data/firmData";

export const metadata = {
  title: "About Us",
  description:
    "Learn about ALVYNE Management Consultancy, our founders, our journey since 2024, vision, mission, and commitment to empowering businesses with strategic financial guidance.",
  keywords: [
    "About ALVYNE",
    "ALVYNE Management Consultancy Founders",
    "Albert Pradeep CA",
    "Nelson Joseph Senior Accountant",
    "Vyshnav Prakash Consultant",
    "Financial Advisory Firm",
    "Taxation Experts",
  ],
  openGraph: {
    title: `About ${firmInfo.name} | Navigating Growth, Building Resilience`,
    description:
      "Founded in 2024 by three independent finance professionals, ALVYNE provides strategic financial guidance, taxation, compliance, and virtual CFO advisory.",
    url: "https://alvine-mu.vercel.app/About",
    siteName: firmInfo.name,
    images: [
      {
        url: "https://alvine-mu.vercel.app/albert.jpg",
        width: 1200,
        height: 630,
        alt: "ALVYNE Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Meet the Team at ${firmInfo.name}`,
    description: "Strategic taxation, compliance, and growth advisory led by qualified Chartered Accountants and consultants.",
    images: ["https://alvine-mu.vercel.app/albert.jpg"],
  },
};

export default function AboutPage() {
  return <About />;
}