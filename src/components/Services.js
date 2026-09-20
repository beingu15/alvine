'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { firmInfo } from '@/data/firmData';
import {
  FaBuilding,
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaChartLine,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';

const iconComponents = {
  FaBuilding,
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaChartLine
};

export default function ServicesSection() {
  return (
    <section className="py-10 bg-black text-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold tracking-widest text-[#FFD700] uppercase block mb-2"
          >
            Our Core Specializations
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFA500]">Financial & Business</span> Solutions
          </motion.h2>
          <motion.p
            className="mt-4 text-base sm:text-lg text-gray-400"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From business incorporation to proactive taxation, statutory compliance, and strategic Virtual CFO advisory—we empower organizations at every stage of their journey.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {firmInfo.serviceCategories.map((category, index) => {
            const Icon = iconComponents[category.iconName] || FaBuilding;
            const topServices = category.subcategories.flatMap(s => s.services).slice(0, 5);
            const totalCount = category.subcategories.reduce((acc, curr) => acc + curr.services.length, 0);

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#0b1019] border border-white/10 hover:border-[#FFD700]/50 rounded-2xl p-8 flex flex-col justify-between shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FFD700]/20 to-yellow-500/5 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-colors duration-300">
                      <Icon size={26} />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FFD700]">
                      {totalCount}+ Services
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#FFD700] transition">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {category.tagline}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {topServices.map((service, sIndex) => (
                      <div key={sIndex} className="flex items-center gap-2.5 text-sm text-gray-300">
                        <FaCheck size={12} className="text-[#FFD700] shrink-0" />
                        <span className="line-clamp-1">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    <span>{category.subcategories.length} Specialized Divisions</span>
                  </div>
                  <Link
                    href={`/Services?category=${category.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFD700] hover:text-white transition group-hover:translate-x-1"
                  >
                    <span>Explore All Services</span>
                    <FaArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-16 text-center">
          <Link
            href="/Services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-base transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>View Complete 64+ Services Directory</span>
            <FaArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
