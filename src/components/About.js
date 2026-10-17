'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { firmInfo } from '@/data/firmData';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function AboutCompanySection() {
  return (
    <section className="relative bg-black text-white py-14 sm:py-20 md:py-24 mx-auto px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
        {/* Left Image Section */}
        <motion.div 
          className="lg:w-1/2 relative w-full h-[260px] sm:h-[360px] md:h-[440px] lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/slide2.jpg"
            alt="ALVYNE Management Consultancy"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0b1019]/90 backdrop-blur-md border border-white/10">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-[#FFD700] uppercase tracking-wider">Established {firmInfo.establishedYear}</p>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mt-0.5 sm:mt-1">{firmInfo.name}</h4>
              </div>
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#FFD700]/20 text-[#FFD700] text-[10px] sm:text-xs font-bold whitespace-nowrap">
                {firmInfo.tagline}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Text Section */}
        <motion.div 
          className="lg:w-1/2 text-left space-y-4 sm:space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 text-[#FFD700] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            Who We Are
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            {firmInfo.about.headline}
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            {firmInfo.about.summary}
          </p>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            {firmInfo.about.approach}
          </p>

          {/* Key Advantages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2">
            {[
              "Direct Tax & ITR Filing Solutions",
              "End-to-End GST Advisory & Health Checks",
              "ROC, Secretarial & Labour Law Compliance",
              "Virtual CFO & Startup Financial Structuring",
              "Audit Support & Statutory Reconciliations",
              "Comprehensive Services Under One Roof",
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                <FaCheckCircle className="text-[#FFD700] shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="leading-snug">{point}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/About">
              <motion.button 
                className="px-5 py-2.5 sm:px-7 sm:py-3.5 bg-[#FFD700] text-black font-bold rounded-full hover:bg-[#E6C200] transition shadow-lg flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Read Full Story & Founders</span>
                <FaArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </motion.button>
            </Link>

            <Link href="/Contact">
              <button className="px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/20 transition cursor-pointer">
                Consult With Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
