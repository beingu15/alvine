


import Services from "@/components/Services";
import SubHeader from "@/components/SubHeader";

import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import BusinessGrowthSection from "@/components/BusinessGrowthSection";
import AboutCompanySection from "@/components/About";
import Link from "next/link";

import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { PulsatingButton } from "@/components/magicui/pulsating-button";




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
        <section className=" flex justify-center  ">
      <div className="bg-[#170c26] l px-6 py-16 w-full  text-center shadow-lg">
        {/* Connect Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-50">Connect with Us</h2>
        <p className="text-slate-50 mt-2">Get in touch with our specialist teams in</p>
        <p className="text-slate-50 font-medium">ALVYNE Consultancy</p>

       
        <Link href="/Contact" className="flex justify-center mt-4">
              <PulsatingButton>
             
              Get in touch
              </PulsatingButton>
              </Link>

        

        <div className="flex justify-center gap-4 mt-6">
          <FaInstagram className="text-slate-50 text-2xl hover:scale-110 transition cursor-pointer" />
          <FaFacebookF className="text-slate-50 text-2xl hover:scale-110 transition cursor-pointer" />
          <FaXTwitter className="text-slate-50 text-2xl hover:scale-110 transition cursor-pointer" />
          <FaLinkedinIn className="text-slate-50 text-2xl hover:scale-110 transition cursor-pointer" />
          <FaYoutube className="text-slate-50 text-2xl hover:scale-110 transition cursor-pointer" />
        </div>
      </div>
    </section>
       
      </main>
    </div>
  );
}
