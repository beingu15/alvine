import About from "./AboutPage.";

export const metadata = {
  title: "About Us | Alvyne Agency",
  description: "Learn about Alvyne Agency, our expert team, and how we empower businesses and individuals with smart financial services and guidance.",
  keywords: [
    "Alvyne Agency",
    "About Alvyne",
    "Financial Consulting",
    "ITR Filing",
    "Tax Services",
    "Startup Support",
    "Business Advisory"
  ],
  openGraph: {
    title: "About Alvyne Agency | Financial Expertise & Growth Strategies",
    description: "Discover Alvyne Agency's mission, team, and the values that drive our financial consulting and business services.",
    url: "https://alvine-mu.vercel.app/About",
    siteName: "Alvyne Agency",
    images: [
      {
        url: "https://alvine-mu.vercel.app/slide2.jpg",
        width: 1200,
        height: 630,
        alt: "Alvyne Team Photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet the Experts Behind Alvyne Agency",
    description: "We're on a mission to simplify your financial life. Learn about our founders and our goals.",
    images: ["https://alvine-mu.vercel.app/albert.jpg"],
  },
  alternates: {
    canonical: "https://alvine-mu.vercel.app/About",
  },
};

export default function AboutLayout({ children }) {
  return <About/>;
}