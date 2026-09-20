import Services from './ServicesClient';
import { firmInfo } from '@/data/firmData';

export const metadata = {
  title: 'Our Services',
  description:
    "Explore the comprehensive services catalog of ALVYNE Management Consultancy: Business Incorporation, Direct Tax, GST, Corporate Compliance, Virtual CFO, and Strategic Advisory.",
  keywords: [
    "Incorporation Services",
    "Company Registration India",
    "Direct Tax Planning",
    "GST Filing and Reconciliation",
    "Virtual CFO Services",
    "ROC Compliance",
    "Internal Audit Support",
    "Startup Pitch Deck Advisory",
    "ALVYNE Services",
  ],
  openGraph: {
    title: `Services | ${firmInfo.name}`,
    description:
      "End-to-end taxation, corporate compliance, business formation, and financial advisory services for individuals, startups, and growing enterprises.",
    url: "https://alvine-mu.vercel.app/Services",
    type: "website",
    images: [
      {
        url: "https://alvine-mu.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: `${firmInfo.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Financial Services | ${firmInfo.name}`,
    description:
      "Full spectrum taxation, compliance, virtual CFO, and incorporation advisory.",
    images: ["https://alvine-mu.vercel.app/logo.png"],
  },
};

export default function ServicesPage() {
  return <Services />;
}
