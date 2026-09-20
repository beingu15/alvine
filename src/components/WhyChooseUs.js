'use client';

import { motion } from 'framer-motion';
import { firmInfo } from '@/data/firmData';
import { 
  FaBrain, 
  FaUserCheck, 
  FaCompass, 
  FaShieldAlt, 
  FaComments, 
  FaLayerGroup, 
  FaHandshake,
  FaCheckCircle
} from 'react-icons/fa';
import Link from 'next/link';

const iconMap = [
  FaBrain,
  FaUserCheck,
  FaCompass,
  FaShieldAlt,
  FaComments,
  FaLayerGroup,
  FaHandshake,
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-[#0d121c] to-black text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold tracking-wide uppercase mb-4"
          >
            <FaCheckCircle className="text-[#FFD700]" />
            Why Choose ALVYNE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            A Strategic Partner for Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFA500]">
              Financial Growth
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed"
          >
            Choosing the right financial partner is about more than technical expertise—it's about having trusted advisors who genuinely understand your real-world challenges and navigate side-by-side with you.
          </motion.p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {firmInfo.whyChooseUs.map((pillar, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            const isLastSingle = index === 6; // Center the 7th item on desktop if needed

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-[#161c28]/90 to-[#0f1420]/80 border border-white/10 hover:border-[#FFD700]/50 shadow-lg hover:shadow-[0_10px_30px_rgba(255,215,0,0.15)] transition-all flex flex-col justify-between ${
                  isLastSingle ? 'lg:col-span-3 lg:max-w-xl lg:mx-auto w-full' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FFD700]/20 to-amber-500/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] group-hover:scale-110 group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:text-[#FFD700] group-hover:border-[#FFD700]/30 transition">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-medium text-[#FFD700]/80">
                  <span>0{index + 1} / 07 Pillar</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#1c2436]/90 via-[#161c28] to-[#1c2436]/90 border border-[#FFD700]/20 max-w-3xl mx-auto">
            <p className="text-gray-200 text-sm sm:text-base text-center sm:text-left">
              Looking for a long-term strategic ally for accounting, tax planning, and statutory compliance?
            </p>
            <Link
              href="/Contact"
              className="whitespace-nowrap px-6 py-2.5 rounded-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-semibold text-sm transition-all shadow-md hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
