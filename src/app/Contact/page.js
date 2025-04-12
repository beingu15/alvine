// app/contact/page.js (Server Component - no 'use client')

import Contact from "./ContactPage";


export const metadata = {
  title: "Contact | Alvyne Agency",
  description:
    "Welcome to Alvyne Agency — Empowering businesses through creative design, smart strategy, and powerful visual storytelling.",
  keywords: [
    "Alvyne Agency",
    "Business Growth",
    "Creative Services",
    "Brand Strategy",
    "Web Design",
    "Digital Marketing",
  ],
  openGraph: {
    title: "Alvyne Agency | Creative Business Solutions",
    description:
      "Explore our unique services to help your brand grow — from web design to business strategy.",
    url: "https://alvine-mu.vercel.app",
    siteName: "Alvyne Agency",
    images: [
      {
        url: "https://alvine-mu.vercel.app/slide1.jpg",
        width: 1200,
        height: 630,
        alt: "Banner showing creative digital services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvyne Agency | Digital Innovation Meets Strategy",
    description: "We craft digital solutions for real business growth.",
    images: ["https://alvine-mu.vercel.app/slide1.jpg"],
  },
  alternates: {
    canonical: "https://alvine-mu.vercel.app/",
  },
};

export default function Page() {
  return <Contact/>;
}