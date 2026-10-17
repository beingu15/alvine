'use client';

import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { firmInfo } from "@/data/firmData";

export default function ConnectSection() {
  return (
    <section className="relative flex justify-center px-4 sm:px-6 py-14 sm:py-20 bg-[#080d16] overflow-hidden border-t border-white/10">
      {/* Animated / Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#FFD700]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative bg-[#101726]/90 backdrop-blur-md text-white px-5 sm:px-8 md:px-14 py-8 sm:py-12 md:py-16 w-full max-w-5xl rounded-2xl sm:rounded-3xl shadow-2xl text-center border border-white/10 hover:border-[#FFD700]/30 transition-all duration-500">
        
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
          <span>{firmInfo.tagline}</span>
          <span>•</span>
          <span>Established {firmInfo.establishedYear}</span>
        </div>

        {/* Heading */}
        <div className="mb-6 sm:mb-8 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Ready to Navigate Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFA500]">
              Financial Success?
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed px-2">
            Connect directly with the partners at <strong className="text-white">{firmInfo.name}</strong>. From income tax filing to virtual CFO advisory, we provide actionable guidance tailored to your goals.
          </p>
        </div>

        {/* Contact Quick Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-10 text-xs sm:text-sm text-gray-300">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <FaPhoneAlt className="text-[#FFD700] w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <a 
              href={`tel:${firmInfo.contact.phone}`} 
              className="hover:text-[#FFD700] transition"
            >
              {firmInfo.contact.phoneDisplay}
            </a>
            <span className="text-gray-500">/</span>
            <a 
              href={`tel:${firmInfo.contact.secondaryPhone}`} 
              className="hover:text-[#FFD700] transition"
            >
              {firmInfo.contact.secondaryPhoneDisplay}
            </a>
          </div>
          <span className="hidden sm:inline text-gray-600">•</span>
          <a 
            href={`mailto:${firmInfo.contact.email}`} 
            className="flex items-center gap-1.5 sm:gap-2 hover:text-[#FFD700] transition"
          >
            <FaEnvelope className="text-[#FFD700] w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{firmInfo.contact.email}</span>
          </a>
          <span className="hidden sm:inline text-gray-600">•</span>
          <a 
            href={firmInfo.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 sm:gap-2 text-green-400 hover:underline transition font-medium"
          >
            <FaWhatsapp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <Link href="/Contact">
            <button className="px-5 py-2.5 sm:px-7 sm:py-3.5 bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-xs sm:text-sm md:text-base rounded-full transition-all shadow-lg transform hover:scale-105 cursor-pointer">
              Schedule Free Consultation →
            </button>
          </Link>
          <Link href="/Services">
            <button className="px-5 py-2.5 sm:px-7 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm md:text-base rounded-full border border-white/20 transition-all cursor-pointer">
              Explore Our Services
            </button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 pt-4 border-t border-white/10">
          <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">Follow Us:</span>
          {[
            { icon: FaLinkedinIn, href: firmInfo.socialLinks.linkedin, name: "LinkedIn" },
            { icon: FaInstagram, href: firmInfo.socialLinks.instagram, name: "Instagram" },
            { icon: FaWhatsapp, href: firmInfo.socialLinks.whatsapp, name: "WhatsApp" },
          ].map((item) => (
            <a 
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-white/5 hover:bg-[#FFD700] text-[#FFD700] hover:text-black transition-all"
              aria-label={item.name}
            >
              <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}