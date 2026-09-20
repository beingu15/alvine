'use client';

import Image from "next/image";
import { NumberTicker } from "./magicui/number-ticker";
import { FaPlus } from "react-icons/fa";
import { firmInfo } from "@/data/firmData";
import Link from "next/link";

export default function BusinessGrowthSection() {
  const stats = [
    { number: 250, label: "Clients Served Across Industries" },
    { number: 500, label: "Tax & Compliance Filings" },
    { number: 10, label: "Years Combined Leadership" },
    { number: 100, label: "% Statutory Compliance Rate" },
  ];

  return (
    <section className="relative bg-[#050911] text-white py-24 overflow-hidden border-y border-white/10">
      {/* Background with dark overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/slide1.jpg"
          alt="Business Growth Background"
          fill
          className="opacity-15 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050911] via-[#050911]/90 to-[#050911]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FFD700] uppercase block">
              Proven Track Record
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              Strategic Financial Solutions Built For{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFA500]">
                Sustainable Growth
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {firmInfo.about.experienceText}
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {firmInfo.about.clientsText}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/Contact"
                className="px-6 py-3 rounded-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-sm transition-all shadow-md"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/About"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-all"
              >
                Our Journey & Team
              </Link>
            </div>
          </div>

          {/* Right Stats Grid (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0e1524] to-[#090e18] p-7 rounded-2xl border border-white/10 hover:border-[#FFD700]/40 shadow-xl transition-all hover:scale-[1.02]"
              >
                <div className="flex items-baseline space-x-1 mb-2">
                  <NumberTicker
                    value={stat.number}
                    duration={2.2}
                    className="text-4xl sm:text-5xl font-black text-[#FFD700]"
                  />
                  <FaPlus className="text-[#FFD700] text-xl font-bold" />
                </div>
                <p className="text-gray-300 text-sm font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
