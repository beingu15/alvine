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
    <div className="bg-[#050911] text-white min-h-screen">
      {/* Navbar */}
      <div className="absolute left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[420px] md:h-[480px] flex items-center justify-center overflow-hidden">
        <Image
          src="/slide2.jpg"
          alt="ALVYNE Management Consultancy"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute z-0 brightness-90 contrast-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050911] via-black/60 to-black/70" />

        <div className="relative z-10 text-center text-white mt-16 px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/15 text-[#FFD700] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 mt-8"
          >
            <span>Estd. {firmInfo.establishedYear}</span>
            <span>•</span>
            <span>{firmInfo.tagline}</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight"
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
            className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            We believe financial success begins with clarity, trust, and proactive guidance. Discover how ALVYNE empowers organizations to thrive.
          </motion.p>
        </div>
      </div>

      {/* Main Narrative / About Firm */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold text-[#FFD700] uppercase tracking-widest block">
              About the Firm
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              A Dedicated Financial Services Firm Built on <span className="text-[#FFD700]">Trust & Precision</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {firmInfo.about.summary}
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {firmInfo.about.approach}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-2xl sm:text-3xl font-black text-[#FFD700] block">{firmInfo.establishedYear}</span>
                <span className="text-xs text-gray-400">Year Founded</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-2xl sm:text-3xl font-black text-[#FFD700] block">{firmInfo.clientsServed}</span>
                <span className="text-xs text-gray-400">Clients Served</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-2xl sm:text-3xl font-black text-[#FFD700] block">64+</span>
                <span className="text-xs text-gray-400">Specialized Services</span>
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
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/15">
              <Image
                src="/slide3.jpg"
                alt="ALVYNE Strategy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#090e18]/90 backdrop-blur-md border border-[#FFD700]/30">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#FFD700]">Our Philosophy</p>
                <p className="text-sm sm:text-base font-bold text-white mt-1">
                  "Guidance should empower organizations and act as catalysts for growth."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-[#070d18] border-y border-white/10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#10192b] to-[#0a101d] border border-white/10 hover:border-[#FFD700]/40 shadow-xl transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] mb-6">
              <FaBullseye size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {firmInfo.vision}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#10192b] to-[#0a101d] border border-white/10 hover:border-[#FFD700]/40 shadow-xl transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] mb-6">
              <FaRocket size={26} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {firmInfo.mission}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey & Founder Story */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0d1424] via-[#090f1a] to-[#0d1424] border border-white/10"
          >
            <span className="text-xs font-bold text-[#FFD700] uppercase tracking-widest block mb-2">
              The Evolution
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Our Journey
            </h2>
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed max-w-5xl whitespace-pre-line">
              {firmInfo.about.journey}
            </div>
          </motion.div>

          {/* Founder Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0d1424] via-[#090f1a] to-[#0d1424] border border-[#FFD700]/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-4">
                Origin Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                The Brainchild of Three Visionary Partners
              </h2>
              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed max-w-5xl whitespace-pre-line">
                {firmInfo.about.founderStory}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership & Founders Section */}
      <section className="py-20 bg-[#070b14] border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#FFD700] uppercase tracking-widest block mb-2">
              Founders & Team
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFA500]">Founding Partners</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              Seasoned professionals combining chartered accountancy, management accounting, statutory compliance, and corporate finance expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firmInfo.founders.map((founder, index) => (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-[#0d1424] border border-white/10 hover:border-[#FFD700]/50 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo / Portrait Header */}
                  <div className="relative w-full h-80 bg-gradient-to-b from-[#162035] to-[#0d1424] overflow-hidden flex items-center justify-center">
                    {founder.image ? (
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-6 text-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#FFD700]/20 to-yellow-500/30 border-2 border-[#FFD700]/40 flex items-center justify-center text-[#FFD700] text-3xl font-black mb-3 shadow-inner">
                          {founder.fallbackInitials}
                        </div>

                        <span className="text-xs uppercase tracking-widest text-[#FFD700] font-semibold">
                          Founding Partner
                        </span>

                        <span className="text-sm font-medium text-gray-300 mt-1">
                          {firmInfo.name}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent" />
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700]">
                        {founder.experience}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-[#FFD700] transition">
                      {founder.name}
                    </h3>

                    <p className="text-sm font-semibold text-[#FFD700] mt-1">
                      {founder.designation}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {founder.qualifications.map((q, qIdx) => (
                        <span key={qIdx} className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300">
                          {q}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                        Specialization:
                      </p>
                      <p className="text-xs text-gray-300 leading-relaxed mb-4">
                        {founder.specialization}
                      </p>

                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-6 group-hover:line-clamp-none transition-all">
                        {founder.bio}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/Contact"
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#FFD700] text-gray-200 hover:text-black font-semibold text-xs tracking-wider uppercase transition flex items-center justify-center gap-2 border border-white/10 hover:border-[#FFD700]"
                  >
                    <span>Consult with {founder.name.split(' ')[0]}</span>
                    <FaArrowRight size={10} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment & Experience Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c1322] to-[#070c16] border border-white/10"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] mb-4">
              <FaShieldAlt size={22} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Commitment</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {firmInfo.about.commitment}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c1322] to-[#070c16] border border-white/10"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] mb-4">
              <FaBriefcase size={22} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Practical Experience</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {firmInfo.about.experienceText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7 Pillars of Why Choose Alvyne */}
      <section id="why-choose-us" className="py-20 bg-[#050911] border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#FFD700] uppercase tracking-widest block mb-2">
              Our Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Why Choose <span className="text-[#FFD700]">Alvyne?</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              Seven distinct strengths that set our financial advisory and compliance practice apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {firmInfo.whyChooseUs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`p-7 rounded-2xl bg-[#0d1424] border border-white/10 hover:border-[#FFD700]/50 shadow-lg transition-all ${index === 6 ? 'lg:col-span-3 lg:max-w-xl lg:mx-auto w-full' : ''
                  }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFD700] px-2.5 py-1 rounded bg-[#FFD700]/10 border border-[#FFD700]/30">
                    {item.badge}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">0{index + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Connect CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/Contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-base transition-all shadow-xl hover:scale-105"
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
