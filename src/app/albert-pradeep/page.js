import AlbertPageClient from './AlbertPageClient';
import { firmInfo } from '@/data/firmData';

const SITE_URL = 'https://www.alvyne.in';
const advisor = firmInfo.strategicAdvisor;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${advisor.name} | ${advisor.role} | ALVYNE Management Consultancy`,
  description:
    `Profile of ${advisor.name}, ${advisor.designation} serving as Strategic Advisor - Consultant at ${firmInfo.name}. Specializing in taxation, management accounting, and corporate financial advisory.`,
  alternates: {
    canonical: '/albert-pradeep',
  },
  openGraph: {
    title: `${advisor.name} | ${advisor.designation} | ${firmInfo.name}`,
    description: advisor.bio,
    url: `${SITE_URL}/albert-pradeep`,
    siteName: firmInfo.name,
    type: 'profile',
    images: [
      {
        url: advisor.image,
        width: 800,
        height: 1000,
        alt: `${advisor.name} - ${advisor.role} at ${firmInfo.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${advisor.name} | ${advisor.role}`,
    description: `${advisor.designation} - ${advisor.specialization}`,
    images: [advisor.image],
  },
};

export default function Page() {
  return <AlbertPageClient />;
}
