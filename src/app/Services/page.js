import Services from './ServicesClient';
import { firmInfo } from '@/data/firmData';

export const metadata = {
  title: 'Complete Tax Solutions & Business Management Consultancy in Kochi, Kerala | ALVYNE',
  description:
    "Complete tax solutions and business management consultancy in Kochi, Kerala by ALVYNE. As a top tax consultant and leading CA/accounting firm, we provide end-to-end ITR filing, GST returns, company incorporation, and virtual CFO services.",
  keywords: [
    "complete tax solutions",
    "complete tax solutions in kochi kerala",
    "top tax consultant in kochi kerala",
    "top ca/accounting firms in kochi kerala",
    "ca firms in kochi kerala",
    "accounting firms in kochi kerala",
    "business management consultant",
    "business management consultancy in kochi kerala",
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
    title: `Complete Tax Solutions & Business Management Consultancy in Kochi, Kerala | ${firmInfo.name}`,
    description:
      "End-to-end complete tax solutions, corporate statutory compliance, business management consulting, and virtual CFO advisory for businesses in Kochi, Kerala.",
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
