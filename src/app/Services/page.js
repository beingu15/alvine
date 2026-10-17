import Services from './ServicesClient';
import { firmInfo } from '@/data/firmData';

export const metadata = {
  title: 'Our Services | Tax, GST, Company Registration & Virtual CFO in Kochi, Kerala',
  description:
    "Explore business setup, taxation, and advisory services by ALVYNE Management Consultancy in Kochi, Kerala: Private Limited Incorporation, GST Registration & Returns, Direct Tax ITR, ROC Compliance, and Virtual CFO Services.",
  keywords: [
    "Company Registration Kochi",
    "Private Limited Incorporation Kerala",
    "GST Registration and Returns Kochi",
    "ITR Filing Services Kochi",
    "Virtual CFO Services Kerala",
    "Corporate ROC Compliance Ernakulam",
    "Tax Audit Support Kerala",
    "Accounting and Bookkeeping Kochi",
    "Business Setup Consultants Kochi",
    "ALVYNE Services Kerala",
  ],
  openGraph: {
    title: `Financial & Corporate Services in Kochi, Kerala | ${firmInfo.name}`,
    description:
      "End-to-end taxation, statutory compliance, business formation, and financial advisory services for startups and enterprises in Kochi, Kerala.",
    url: "https://alvine-mu.vercel.app/Services",
    type: "website",
    images: [
      {
        url: "https://alvine-mu.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: `${firmInfo.name} Services in Kochi, Kerala`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Financial Services in Kochi, Kerala | ${firmInfo.name}`,
    description:
      "Full spectrum taxation, compliance, virtual CFO, and incorporation advisory in Kochi, Kerala.",
    images: ["https://alvine-mu.vercel.app/logo.png"],
  },
};

export default function ServicesPage() {
  return <Services />;
}
