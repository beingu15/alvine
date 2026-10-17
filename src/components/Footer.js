'use client';

import Image from 'next/image';
import Link from 'next/link';
import { firmInfo } from '@/data/firmData';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#050b14] text-gray-300 border-t border-white/10 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/10">
          {/* Column 1: Brand & Bio (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2.5 sm:space-x-3 group">
              <div className="relative flex items-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="ALVYNE Logo"
                  width={56}
                  height={56}
                  className="h-11 sm:h-14 md:h-16 w-auto rounded-xl object-contain transition-transform duration-300 group-hover:scale-105 shadow-md"
                />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-white tracking-wider">
                  ALVYNE
                </span>
                <p className="text-[10px] sm:text-[11px] font-semibold text-[#FFD700] uppercase tracking-widest -mt-1">
                  Management Consultancy
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-300 max-w-md leading-relaxed">
              <strong className="text-white">{firmInfo.about.headline}</strong> — Founded in {firmInfo.establishedYear}, ALVYNE delivers strategic taxation, compliance, and financial advisory services designed to empower startups, businesses, and entrepreneurs.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 sm:space-x-3 pt-2">
              <a
                href={firmInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition"
              >
                <FaLinkedinIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href={firmInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition"
              >
                <FaInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href={firmInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition"
              >
                <FaWhatsapp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-sm sm:text-base font-bold mb-3 sm:mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFD700]"></span>
              Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Firm & Founders', href: '/About' },
                { name: 'Full Services Catalog', href: '/Services' },
                { name: 'Why Choose Alvyne', href: '/About#why-choose-us' },
                { name: 'Contact & Inquiry', href: '/Contact' },
                { name: 'Terms & Conditions', href: '/Terms' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#FFD700] transition-colors flex items-center gap-1.5"
                  >
                    <FaArrowRight className="text-[#FFD700]/70 w-2.5 h-2.5" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Service Pillars */}
          <div>
            <h3 className="text-white text-sm sm:text-base font-bold mb-3 sm:mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFD700]"></span>
              Core Pillars
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              {firmInfo.serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/Services?category=${cat.id}`}
                    className="hover:text-[#FFD700] transition-colors flex items-center gap-1.5"
                  >
                    <FaArrowRight className="text-[#FFD700]/70 w-2.5 h-2.5" />
                    <span>{cat.shortTitle}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/Services"
                  className="text-xs text-[#FFD700] underline font-semibold hover:text-yellow-300 block pt-1"
                >
                  View All 64+ Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h3 className="text-white text-sm sm:text-base font-bold mb-3 sm:mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFD700]"></span>
              Get in Touch
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#FFD700] mt-1 shrink-0 w-3.5 h-3.5" />
                <span className="text-gray-300 text-xs leading-relaxed">
                  {firmInfo.contact.address}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="text-[#FFD700] mt-1 shrink-0 w-3 h-3" />
                <div className="flex flex-col gap-0.5 text-xs font-medium">
                  <a
                    href={`tel:${firmInfo.contact.phone}`}
                    className="hover:text-[#FFD700] transition"
                  >
                    {firmInfo.contact.phoneDisplay}
                  </a>
                  <a
                    href={`tel:${firmInfo.contact.secondaryPhone}`}
                    className="hover:text-[#FFD700] transition text-gray-400 hover:text-[#FFD700]"
                  >
                    {firmInfo.contact.secondaryPhoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#FFD700] shrink-0 w-3 h-3" />
                <a
                  href={`mailto:${firmInfo.contact.email}`}
                  className="hover:text-[#FFD700] transition text-xs break-all"
                >
                  {firmInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-green-400 shrink-0 w-3.5 h-3.5" />
                <a
                  href={firmInfo.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline transition text-xs font-semibold"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-gray-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {firmInfo.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span>Established {firmInfo.establishedYear}</span>
            <span className="text-[#FFD700]">•</span>
            <span>Tagline: {firmInfo.tagline}</span>
            <span className="text-[#FFD700]">•</span>
            <Link href="/Terms" className="hover:text-[#FFD700] transition">
              Terms & Conditions
            </Link>
            <span className="text-[#FFD700]">•</span>
            <Link href="/Contact" className="hover:text-[#FFD700] transition">
              Client Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
