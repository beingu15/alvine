
import Footer from "@/components/Footer";

import Services from "@/components/Services";
import SubHeader from "@/components/SubHeader";

import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import BusinessGrowthSection from "@/components/BusinessGrowthSection";
import AboutCompanySection from "@/components/About";



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
        <Footer />
      </main>
    </div>
  );
}
