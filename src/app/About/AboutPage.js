'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useState } from 'react';
import {
  FaBullseye,
  FaRocket,
  FaUserGraduate,
  FaBriefcase,
  FaAward,
  FaHandshake,
  FaCheckCircle,
  FaShieldAlt,
  FaBrain,
  FaCompass,
  FaArrowRight
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { firmInfo } from '@/data/firmData';
import Link from 'next/link';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="bg-[#050911] text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] flex items-center justify-center overflow-hidden">
        <Image
          src="/slide2.jpg"
          alt="ALVYNE Management Consultancy"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute z-0 brightness-90 contrast-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050911] via-black/60 to-black/70" />

        <div className="relative z-10 text-center text-white mt-12 sm:mt-16 px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/15 text-[#FFD700] text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 mt-6 sm:mt-8"
          >
            <span>Estd. {firmInfo.establishedYear}</span>
            <span>•</span>
            <span>{firmInfo.tagline}</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
          >
            Navigating Growth, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFA500]">
              Building Resilience
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed px-2"
          >
            We believe financial success begins with clarity, trust, and proactive guidance. Discover how ALVYNE empowers organizations to thrive.
          </motion.p>
        </div>
      </div>

      {/* Main Narrative / About Firm */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-4 sm:space-y-6"
          >
            <span className="text-[10px] sm:text-xs font-bold text-[#FFD700] uppercase tracking-widest block">
              About the Firm
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              A Dedicated Financial Services Firm Built on <span className="text-[#FFD700]">Trust & Precision</span>
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {firmInfo.about.summary}
            </p>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {firmInfo.about.approach}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center sm:text-left">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#FFD700] block">{firmInfo.establishedYear}</span>
                <span className="text-[10px] sm:text-xs text-gray-400">Founded</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center sm:text-left">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#FFD700] block">{firmInfo.clientsServed}</span>
                <span className="text-[10px] sm:text-xs text-gray-400">Clients</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center sm:text-left">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#FFD700] block">64+</span>
                <span className="text-[10px] sm:text-xs text-gray-400">Services</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[280px] sm:h-[360px] md:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15">
              <Image
                src="/slide3.jpg"
                alt="ALVYNE Strategy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#090e18]/90 backdrop-blur-md border border-[#FFD700]/30">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#FFD700]">Our Philosophy</p>
                <p className="text-xs sm:text-sm md:text-base font-bold text-white mt-1">
                  &ldquo;Guidance should empower organizations and act as catalysts for growth.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-12 sm:py-16 bg-[#070d18] border-y border-white/10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#10192b] to-[#0a101d] border border-white/10 hover:border-[#FFD700]/40 shadow-xl transition-all"
          >
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] mb-4 sm:mb-6">
              <FaBullseye className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Our Vision</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {firmInfo.vision}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#10192b] to-[#0a101d] border border-white/10 hover:border-[#FFD700]/40 shadow-xl transition-all"
          >
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] mb-4 sm:mb-6">
              <FaRocket className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Our Mission</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {firmInfo.mission}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey & Founder Story */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0d1424] via-[#090f1a] to-[#0d1424] border border-white/10"
          >
            <span className="text-[10px] sm:text-xs font-bold text-[#FFD700] uppercase tracking-widest block mb-2">
              The Evolution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">
              Our Journey
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-5xl whitespace-pre-line">
              {firmInfo.about.journey}
            </div>
          </motion.div>

          {/* Founder Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0d1424] via-[#090f1a] to-[#0d1424] border border-[#FFD700]/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
                Origin Story
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">
                The Brainchild of Three Visionary Partners
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-5xl whitespace-pre-line">
                {firmInfo.about.founderStory}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership & Founders Section */}
      <section className="py-14 sm:py-20 bg-[#070b14] border-t border-white/10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold text-[#FFD700] uppercase tracking-widest block mb-2">
              Founders & Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFA500]">Founding Partners</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-300 px-2">
              Seasoned professionals combining chartered accountancy, management accounting, statutory compliance, and corporate finance expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {firmInfo.founders.map((founder, index) => (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-[#0d1424] border border-white/10 hover:border-[#FFD700]/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Organic Blob — Founder Portrait Header */}
                  <div className="relative h-[280px] sm:h-[340px] md:h-[380px] w-full overflow-hidden bg-gradient-to-br from-[#162035] via-[#10192b] to-[#0d1424]">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-6 top-4 bottom-0 border border-[#FFD700]/40 transition-transform duration-700 group-hover:rotate-2 sm:inset-x-10 sm:top-6"
                      style={{
                        borderRadius: '58% 42% 35% 65% / 40% 35% 65% 60%',
                      }}
                    />

                    {founder.image ? (
                      <div
                        className="absolute inset-x-8 top-2.5 bottom-2.5 overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-[1.02] sm:inset-x-12 sm:top-5 sm:bottom-4"
                        style={{
                          borderRadius: '58% 42% 35% 65% / 40% 35% 65% 60%',
                        }}
                      >
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/10 to-transparent" />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-transparent"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                        <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-2 border-[#FFD700]/40 bg-gradient-to-tr from-[#FFD700]/20 to-yellow-500/30 text-2xl sm:text-3xl font-black text-[#FFD700] shadow-inner">
                          {founder.fallbackInitials}
                        </div>
                        <span className="mt-3 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#FFD700]">
                          Founding Partner
                        </span>
                        <span className="mt-1 text-xs sm:text-sm font-medium text-gray-300">
                          {firmInfo.name}
                        </span>
                      </div>
                    )}

                    {/* Partner badge */}
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
                      <span className="inline-flex items-center rounded-full border border-[#FFD700]/30 bg-[#090e18]/80 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-[#FFD700] shadow-lg backdrop-blur-md">
                        Founding Partner
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-7">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700]">
                        {founder.experience}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FFD700] transition">
                      {founder.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-[#FFD700] mt-1">
                      {founder.designation}
                    </p>

                    <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5">
                      {founder.qualifications.map((q, qIdx) => (
                        <span key={qIdx} className="text-[10px] sm:text-[11px] px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300">
                          {q}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10">
                      <p className="text-[10px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                        Specialization:
                      </p>
                      <p className="text-xs text-gray-300 leading-relaxed mb-3 sm:mb-4">
                        {founder.specialization}
                      </p>

                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {founder.bio}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-7 pt-0">
                  <Link
                    href="/Contact"
                    className="w-full py-2.5 sm:py-3 rounded-xl bg-white/5 hover:bg-[#FFD700] text-gray-200 hover:text-black font-semibold text-xs tracking-wider uppercase transition flex items-center justify-center gap-1.5 sm:gap-2 border border-white/10 hover:border-[#FFD700]"
                  >
                    <span>Consult with {founder.name.split(' ')[0]}</span>
                    <FaArrowRight size={10} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Strategic Advisor Section */}
          {firmInfo.strategicAdvisor && (
            <div className="mt-14 sm:mt-20 pt-12 sm:pt-16 border-t border-white/10">
              <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                <span className="text-[10px] sm:text-xs font-bold text-[#FFD700] uppercase tracking-widest block mb-2">
                  Advisory Leadership
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                  Strategic Advisor <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFA500]">- Consultant</span>
                </h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-300 px-2">
                  Providing strategic oversight, corporate financial governance, and high-level business advisory.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto bg-gradient-to-br from-[#0e172a] via-[#0d1424] to-[#080d16] border border-[#FFD700]/30 hover:border-[#FFD700]/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-stretch"
              >
                {/* Advisor Photo */}

                <div className="relative w-full md:w-5/12 h-[300px] sm:h-[380px] md:h-auto md:min-h-[450px] bg-gradient-to-b from-[#162035] to-[#0d1424] overflow-hidden">
                  <Image
                    src={firmInfo.strategicAdvisor.image}
                    alt={firmInfo.strategicAdvisor.name}
                    fill
                    sizes="(max-width: 767px) 100vw, 42vw"
                    className="object-cover object-[center_25%] hover:scale-105 transition-transform duration-500"
                    priority={false}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424]/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0d1424]/80" />

                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#FFD700]/40 text-[#FFD700] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      Strategic Advisor
                    </span>
                  </div>
                </div>


                {/* Advisor Details */}
                <div className="md:w-7/12 p-5 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/30 text-[#FFD700]">
                        {firmInfo.strategicAdvisor.experience}
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-400 font-medium">
                        Associate & Faculty
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                      {firmInfo.strategicAdvisor.name}
                    </h4>

                    <p className="text-xs sm:text-sm font-semibold text-[#FFD700] mt-1">
                      {firmInfo.strategicAdvisor.designation}
                    </p>

                    <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5">
                      {firmInfo.strategicAdvisor.qualifications.map((q, qIdx) => (
                        <span key={qIdx} className="text-[10px] sm:text-[11px] px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300">
                          {q}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10">
                      <p className="text-[10px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                        Specialization:
                      </p>
                      <p className="text-xs text-gray-300 leading-relaxed mb-3 sm:mb-4">
                        {firmInfo.strategicAdvisor.specialization}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {firmInfo.strategicAdvisor.bio}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10">
                    <Link
                      href="/Contact"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-xs uppercase tracking-wider transition shadow-lg transform hover:scale-[1.02] w-full sm:w-auto"
                    >
                      <span>Consult with {firmInfo.strategicAdvisor.name.split(' ')[0]}</span>
                      <FaArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Our Commitment & Experience Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1322] to-[#070c16] border border-white/10"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] mb-3 sm:mb-4">
              <FaShieldAlt className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Our Commitment</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {firmInfo.about.commitment}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1322] to-[#070c16] border border-white/10"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] mb-3 sm:mb-4">
              <FaBriefcase className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Our Practical Experience</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {firmInfo.about.experienceText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7 Pillars of Why Choose Alvyne */}
      <section id="why-choose-us" className="py-14 sm:py-20 bg-[#050911] border-t border-white/10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold text-[#FFD700] uppercase tracking-widest block mb-2">
              Our Value Proposition
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Why Choose <span className="text-[#FFD700]">Alvyne?</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-300 px-2">
              Seven distinct strengths that set our financial advisory and compliance practice apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {firmInfo.whyChooseUs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`p-5 sm:p-7 rounded-2xl bg-[#0d1424] border border-white/10 hover:border-[#FFD700]/50 shadow-lg transition-all ${index === 6 ? 'lg:col-span-3 lg:max-w-xl lg:mx-auto w-full' : ''
                  }`}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#FFD700] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#FFD700]/10 border border-[#FFD700]/30">
                    {item.badge}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-500">0{index + 1}</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Connect CTA */}
          <div className="mt-10 sm:mt-16 text-center">
            <Link
              href="/Contact"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-xs sm:text-sm md:text-base transition-all shadow-xl hover:scale-105"
            >
              <span>Connect with Our Leadership</span>
              <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
