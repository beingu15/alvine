
import Services from './ServicesClient';

export const metadata = {
  title: 'Our Services | Alvyne Financial Solutions',
  description:
    'Discover Alvyne’s wide range of financial services including tax filing, ITR consulting, investment planning, and more for individuals and businesses.',
  keywords: [
    'Tax Filing',
    'ITR Consulting',
    'Financial Planning',
    'Business Registration',
    'Corporate Tax',
    'Accounting Services',
    'Bookkeeping',
    'Audit & Assurance',
    'Investment Advisory',
    'Alvyne Services'
  ],
  openGraph: {
    title: 'Alvyne Financial Services',
    description: 'Comprehensive tax and financial solutions tailored for individuals and businesses.',
    url: 'https://alvine-mu.vercel.app/Services',
    type: 'website',
    images: [
      {
        url: 'https://alvine-mu.vercel.app/logo.png',
        width: 800,
        height: 600,
        alt: 'Alvyne Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Alvyne Financial Services',
    description: 'Tax filing, ITR consulting, corporate planning and more tailored to your financial needs.',
    images: ['https://alvine-mu.vercel.app/logo.png']
  }
};

export default function ServicesPage() {
  return <Services />;
}
