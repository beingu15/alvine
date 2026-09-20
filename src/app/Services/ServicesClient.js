'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  FaBuilding, 
  FaFileInvoiceDollar, 
  FaShieldAlt, 
  FaChartLine, 
  FaSearch, 
  FaCheck, 
  FaArrowRight,
  FaTimes,
  FaPhoneAlt
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { firmInfo } from '@/data/firmData';
import Link from 'next/link';

const iconMap = {
  incorporation: FaBuilding,
  taxation: FaFileInvoiceDollar,
  compliances: FaShieldAlt,
  advisory: FaChartLine,
};

function ServicesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories and services based on activeCategory and searchQuery
  const filteredCategories = useMemo(() => {
    return firmInfo.serviceCategories
      .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
      .map((cat) => {
        const matchingSubcategories = cat.subcategories
          .map((sub) => {
            const matchingServices = sub.services.filter((svc) =>
              svc.toLowerCase().includes(searchQuery.toLowerCase())
            );

            // Also match if subcategory name matches search query
            if (sub.name.toLowerCase().includes(searchQuery.toLowerCase())) {
              return sub;
            }

            return {
              ...sub,
              services: matchingServices,
            };
          })
          .filter((sub) => sub.services.length > 0);

        return {
          ...cat,
          subcategories: matchingSubcategories,
        };
      })
      .filter((cat) => cat.subcategories.length > 0);
  }, [activeCategory, searchQuery]);

  const totalResults = useMemo(() => {
    return filteredCategories.reduce(
      (acc, cat) =>
        acc +
        cat.subcategories.reduce(
          (subAcc, sub) => subAcc + sub.services.length,
          0
        ),
      0
    );
  }, [filteredCategories]);

  return (
    <div className="relative min-h-screen bg-[#050911] text-white">
      {/* Navbar */}
      <div className="absolute left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[460px] flex items-center justify-center overflow-hidden">
        <Image
          src="/slide1.jpg"
          alt="ALVYNE Services Catalog"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute z-0 brightness-40 contrast-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050911] via-black/60 to-black/75" />

        <div className="relative z-10 text-center text-white px-6 mt-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/15 text-[#FFD700] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4"
          >
            <span>Complete Services Portfolio</span>
            <span>•</span>
            <span>64+ Specialized Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFA500]">Services</span> Directory
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            Structured corporate solutions across business setup, direct & indirect taxation, secretarial compliances, and strategic financial advisory.
          </motion.p>
        </div>
      </div>

      {/* Interactive Controls: Search & Category Tabs */}
      <section className="sticky top-0 z-40 bg-[#050911]/95 backdrop-blur-md border-y border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto space-y-5">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative flex items-center">
              <FaSearch className="absolute left-4 text-gray-400" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 64+ services (e.g. 'Virtual CFO', 'GST', 'TDS', 'ROC', 'Incorporation')..."
                className="w-full pl-12 pr-10 py-3.5 rounded-full bg-[#0d1424] border border-white/15 focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] text-sm sm:text-base text-white placeholder-gray-400 outline-none transition shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-gray-400 hover:text-white"
                  aria-label="Clear search"
                >
                  <FaTimes size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2.5 pb-2 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#FFD700] text-black shadow-lg scale-105'
                  : 'bg-[#0e1626] text-gray-300 hover:text-white hover:bg-[#162238] border border-white/10'
              }`}
            >
              All Divisions
            </button>

            {firmInfo.serviceCategories.map((cat) => {
              const Icon = iconMap[cat.id] || FaBuilding;
              const isSelected = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#FFD700] text-black shadow-lg scale-105'
                      : 'bg-[#0e1626] text-gray-300 hover:text-white hover:bg-[#162238] border border-white/10'
                  }`}
                >
                  <Icon size={14} className={isSelected ? 'text-black' : 'text-[#FFD700]'} />
                  <span>{cat.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Results Listing */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Results Counter / Filter Notice */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/10 text-sm">
          <p className="text-gray-300">
            Showing <strong className="text-[#FFD700] font-bold">{totalResults}</strong> service items{' '}
            {searchQuery && (
              <span>
                matching &ldquo;<span className="text-white font-medium">{searchQuery}</span>&rdquo;
              </span>
            )}
          </p>

          <Link
            href="/Contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#FFD700] hover:underline"
          >
            <span>Need Custom Advisory? Request Consultation</span>
            <FaArrowRight size={10} />
          </Link>
        </div>

        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 bg-[#090f1a] rounded-3xl border border-white/10 max-w-xl mx-auto p-8">
            <FaSearch className="mx-auto text-[#FFD700] text-4xl mb-4 opacity-60" />
            <h3 className="text-xl font-bold text-white mb-2">No Matching Services Found</h3>
            <p className="text-sm text-gray-400 mb-6">
              We couldn&apos;t find anything matching &ldquo;{searchQuery}&rdquo;. Try another term or browse our main divisions.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-6 py-2.5 rounded-full bg-[#FFD700] text-black font-semibold text-sm hover:bg-[#E6C200] transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredCategories.map((category) => {
              const Icon = iconMap[category.id] || FaBuilding;

              return (
                <section key={category.id} className="scroll-mt-36">
                  {/* Category Header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-white/15">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FFD700]/15 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700]">
                          <Icon size={20} />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {category.title}
                        </h2>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">
                        {category.tagline}
                      </p>
                    </div>

                    <Link
                      href={`/Contact?division=${encodeURIComponent(category.title)}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition"
                    >
                      <span>Inquire for {category.shortTitle}</span>
                      <FaArrowRight size={10} />
                    </Link>
                  </div>

                  {/* Subcategories Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.subcategories.map((subcat, sIdx) => (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: sIdx * 0.05 }}
                        className="bg-[#0b121e] border border-white/10 hover:border-[#FFD700]/40 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-bold text-white group-hover:text-[#FFD700]">
                              {subcat.name}
                            </h3>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white/5 text-[#FFD700]">
                              {subcat.services.length} items
                            </span>
                          </div>

                          <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                            {subcat.description}
                          </p>

                          <ul className="space-y-2.5">
                            {subcat.services.map((service, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="group/item flex items-start justify-between gap-2 text-xs sm:text-sm text-gray-300 hover:text-white transition"
                              >
                                <div className="flex items-start gap-2">
                                  <FaCheck
                                    size={12}
                                    className="text-[#FFD700] mt-1 shrink-0 group-hover/item:scale-125 transition-transform"
                                  />
                                  <span className="leading-snug">{service}</span>
                                </div>
                                <Link
                                  href={`/Contact?service=${encodeURIComponent(service)}`}
                                  className="opacity-0 group-hover/item:opacity-100 text-[10px] uppercase font-semibold text-[#FFD700] whitespace-nowrap pl-2 hover:underline transition-opacity shrink-0"
                                >
                                  Inquire
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/10">
                          <Link
                            href={`/Contact?service=${encodeURIComponent(subcat.name)}`}
                            className="w-full py-2 rounded-lg bg-white/5 hover:bg-[#FFD700]/20 text-[#FFD700] text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                          >
                            <span>Book {subcat.name}</span>
                            <FaArrowRight size={10} />
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>

      {/* Bottom Assistance Banner */}
      <section className="bg-[#03060c] border-t border-white/10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#FFD700]/20 border border-[#FFD700]/40 flex items-center justify-center text-[#FFD700] mx-auto">
            <FaPhoneAlt size={18} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Unsure which service package suits your business?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our qualified consultants at <strong className="text-white">{firmInfo.name}</strong> will evaluate your requirements and curate a custom solution matching your statutory and operational goals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/Contact"
              className="px-8 py-3.5 rounded-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-sm transition-all shadow-lg"
            >
              Request Free Assessment
            </Link>
            <a
              href={`tel:${firmInfo.contact.phone}`}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition"
            >
              Call {firmInfo.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Services() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050911] text-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFD700]"></div>
        </div>
      }
    >
      <ServicesContent />
    </Suspense>
  );
}
