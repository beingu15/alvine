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
    <footer className="bg-[#050b14] text-gray-300 border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Bio (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="relative flex items-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="ALVYNE Logo"
                  width={50}
                  height={65}
                  className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(255,215,0,0.25)]"
                />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white tracking-wider">
                  ALVYNE
                </span>
                <p className="text-[11px] font-semibold text-[#FFD700] uppercase tracking-widest -mt-1">
                  Management Consultancy
                </p>
              </div>
            </Link>

            <p className="text-sm text-gray-300 max-w-md leading-relaxed">
              <strong className="text-white">{firmInfo.about.headline}</strong> — Founded in {firmInfo.establishedYear}, ALVYNE delivers strategic taxation, compliance, and financial advisory services designed to empower startups, businesses, and entrepreneurs.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-xs font-semibold text-[#FFD700]">
                Tagline: {firmInfo.tagline}
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={firmInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href={firmInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href={firmInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition"
              >
                <FaWhatsapp size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD700]"></span>
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Firm & Founders', href: '/About' },
                { name: 'Full Services Catalog', href: '/Services' },
                { name: 'Why Choose Alvyne', href: '/About#why-choose-us' },
                { name: 'Contact & Inquiry', href: '/Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-[#FFD700] transition-colors flex items-center gap-1.5"
                  >
                    <FaArrowRight size={10} className="text-[#FFD700]/70" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Service Pillars */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD700]"></span>
              Core Pillars
            </h3>
            <ul className="space-y-2.5 text-sm">
              {firmInfo.serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/Services?category=${cat.id}`}
                    className="hover:text-[#FFD700] transition-colors flex items-center gap-1.5"
                  >
                    <FaArrowRight size={10} className="text-[#FFD700]/70" />
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
            <h3 className="text-white text-base font-bold mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD700]"></span>
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-[#FFD700] mt-1 shrink-0" size={14} />
                <span className="text-gray-300 text-xs leading-relaxed">
                  {firmInfo.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-[#FFD700] shrink-0" size={13} />
                <a 
                  href={`tel:${firmInfo.contact.phone}`} 
                  className="hover:text-[#FFD700] transition text-xs font-medium"
                >
                  {firmInfo.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-[#FFD700] shrink-0" size={13} />
                <a 
                  href={`mailto:${firmInfo.contact.email}`} 
                  className="hover:text-[#FFD700] transition text-xs"
                >
                  {firmInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaWhatsapp className="text-green-400 shrink-0" size={14} />
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
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {firmInfo.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Established {firmInfo.establishedYear}</span>
            <span className="text-[#FFD700]">•</span>
            <span>Tagline: {firmInfo.tagline}</span>
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
