'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { firmInfo } from '@/data/firmData';
import {
  FaArrowLeft,
  FaArrowRight,
  FaAward,
  FaUserGraduate,
  FaBriefcase,
  FaChartLine,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaQuoteLeft,
  FaBalanceScale
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AlbertPageClient() {
  const advisor = firmInfo.strategicAdvisor;

  const competencies = [
    {
      title: 'Corporate Taxation & GST Strategy',
      icon: FaBalanceScale,
      desc: 'Deep expertise in direct & indirect taxation, structuring compliant corporate tax frameworks, and mitigating statutory risks for scaling businesses.'
    },
    {
      title: 'Strategic Business Advisory',
      icon: FaChartLine,
      desc: 'Providing high-level financial oversight, strategic planning, performance benchmarking, and commercial guidance for startups and established enterprises.'
    },
    {
      title: 'Management Accounting & US CMA',
      icon: FaAward,
      desc: 'Applying rigorous international management accounting standards to enhance capital allocation, cost control, and organizational profitability.'
    },
    {
      title: 'Professional Education & Mentorship',
      icon: FaUserGraduate,
      desc: 'Active CMA Faculty and mentor, equipping aspiring finance professionals and executive teams with practical, industry-aligned knowledge.'
    }
  ];

  const highlights = [
    { label: 'Qualifications', value: 'CA & US CMA' },
    { label: 'Experience', value: advisor.experience },
    { label: 'Role at ALVYNE', value: 'Strategic Advisor - Consultant' },
    { label: 'Location', value: `${firmInfo.contact.city}, Kerala` },
  ];

  return (
    <div className="bg-[#050911] text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Breadcrumb Bar */}
      <div className="pt-28 sm:pt-32 pb-4 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-[#FFD700] transition">Home</Link>
          <span>/</span>
          <Link href="/About" className="hover:text-[#FFD700] transition">About Us</Link>
          <span>/</span>
          <span className="text-[#FFD700] font-medium">{advisor.name}</span>
        </div>
      </div>

      {/* Hero Showcase Section */}
      <section className="pb-14 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0e172a] via-[#0d1424] to-[#070b14] border border-[#FFD700]/30 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Ambient light glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Portrait Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative flex justify-center items-center py-4"
            >
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none h-[340px] sm:h-[420px] md:h-[460px] lg:h-[490px]">
                {/* Decorative Modern Gold Contour Frame */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 border-2 border-[#FFD700]/40 transition-transform duration-700 hover:rotate-1 shadow-[0_0_35px_rgba(255,215,0,0.18)]"
                  style={{
                    borderRadius: '58% 42% 38% 62% / 42% 38% 62% 58%',
                  }}
                />

                {/* Second subtle outer ambient contour */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 sm:-inset-3 border border-white/10 -rotate-2 transition-transform duration-700 pointer-events-none"
                  style={{
                    borderRadius: '62% 38% 45% 55% / 48% 52% 48% 52%',
                  }}
                />

                {/* Main Sculpted Photo Container */}
                <div
                  className="absolute inset-2 sm:inset-3 overflow-hidden shadow-2xl bg-gradient-to-b from-[#162035] via-[#10192b] to-[#0d1424]"
                  style={{
                    borderRadius: '58% 42% 38% 62% / 42% 38% 62% 58%',
                  }}
                >
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw"
                    className="object-cover object-[center_20%] transition-transform duration-700 hover:scale-105 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/15 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/10 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Role Pill */}
                <div className="absolute -top-3 left-4 sm:left-6 z-10">

                </div>

                {/* Bottom Experience Badge */}
                <div className="absolute -bottom-3 right-4 sm:right-6 z-10 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#090e18]/95 backdrop-blur-md border border-white/15 shadow-2xl flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs sm:text-sm font-bold text-white">{advisor.experience}</span>
                  <span className="text-[10px] text-gray-400">| CA & US CMA</span>
                </div>
              </div>
            </motion.div>

            {/* Profile Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 space-y-5 sm:space-y-6"
            >
              <div>


                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                  {advisor.name}
                </h1>

                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#FFD700] mt-1.5">
                  {advisor.designation}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                  {advisor.role}
                </p>
              </div>

              {/* Qualification Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {advisor.qualifications.map((q, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-200 font-medium"
                  >
                    <FaCheckCircle className="text-[#FFD700] w-3 h-3" />
                    <span>{q}</span>
                  </span>
                ))}
              </div>

              {/* Specialization Box */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">
                  Core Specialization
                </span>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                  {advisor.specialization}
                </p>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {highlights.map((h, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-gray-400 block">{h.label}</span>
                    <span className="text-xs sm:text-sm font-bold text-white block mt-0.5 truncate">{h.value}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap gap-3">
                <Link
                  href="/Contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-xs uppercase tracking-wider transition shadow-lg hover:scale-[1.02]"
                >
                  <span>Consult with Albert Pradeep</span>
                  <FaArrowRight size={12} />
                </Link>

                <a
                  href={firmInfo.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider transition border border-white/10 hover:border-[#FFD700]/40"
                >
                  <FaWhatsapp className="text-green-400 w-4 h-4" />
                  <span>Quick WhatsApp</span>
                </a>

                <Link
                  href="/About"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-white/5 text-gray-300 hover:text-white font-medium text-xs tracking-wider transition"
                >
                  <FaArrowLeft size={10} />
                  <span>Back to About</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}
