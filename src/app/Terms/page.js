import TermsPage from './TermsPage';
import { firmInfo } from '@/data/firmData';

const SITE_URL = 'https://www.alvyne.in';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Terms and Conditions | ALVYNE Management Consultancy',
  description:
    'Read the terms and conditions governing the financial advisory, tax filing, GST, accounting, and corporate compliance services provided by ALVYNE Management Consultancy.',
  alternates: {
    canonical: '/Terms',
  },
  openGraph: {
    title: `Terms & Conditions | ${firmInfo.name}`,
    description:
      'Terms of engagement, client responsibilities, confidentiality, and legal guidelines for ALVYNE Management Consultancy services in Kerala, India.',
    url: `${SITE_URL}/Terms`,
    siteName: firmInfo.name,
    type: 'website',
    images: [
      {
        url: '/logo.png',
        alt: `${firmInfo.name} Terms and Conditions`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Terms & Conditions | ${firmInfo.name}`,
    description:
      'Terms and conditions governing professional advisory and compliance services at ALVYNE Management Consultancy.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return <TermsPage />;
}
