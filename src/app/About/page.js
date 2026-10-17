
import About from "./AboutPage";
import { firmInfo } from "@/data/firmData";

const SITE_URL = "https://www.alvyne.in";
const PAGE_URL = `${SITE_URL}/About`;
const LOGO_URL = `${SITE_URL}/logo.png`;

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title:
    "About ALVYNE | Founders & Tax Consultants in Kerala",

  description:
    "Meet Nelson Joseph, Vyshnav Prakash, and strategic advisor Albert Pradeep at ALVYNE Management Consultancy. Learn about our expertise in ITR filing, tax planning, GST, accounting, compliance, and financial advisory.",

  alternates: {
    canonical: "/About",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: firmInfo.name,
    title:
      "About ALVYNE | Founders & Financial Advisory Team",
    description:
      "Meet the people behind ALVYNE Management Consultancy and discover our approach to taxation, GST, accounting, compliance, and financial advisory.",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "ALVYNE Management Consultancy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About ALVYNE | Founders & Advisory Team",
    description:
      "Meet the ALVYNE team and learn about our tax, GST, accounting, compliance, and financial advisory services.",
    images: [LOGO_URL],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <About />;
}
