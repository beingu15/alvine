


import Services from "@/components/Services";
import SubHeader from "@/components/SubHeader";

import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import BusinessGrowthSection from "@/components/BusinessGrowthSection";
import AboutCompanySection from "@/components/About";
import Link from "next/link";

import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import ConnectSection from "@/components/ConnectSection";




export default function Home() {
  return (
    <div>
      {/* SubHeader stays at the top and scrolls away */}
      <SubHeader />

      {/* Navbar is positioned absolutely at the top */}
      <div className="absolute left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Content starts from the very top */}
      <main className="relative z-10">
        <Banner/>
        <Services/>
        <BusinessGrowthSection/>
        <AboutCompanySection/>
        <ConnectSection/>
      </main>
    </div>
  );
}
