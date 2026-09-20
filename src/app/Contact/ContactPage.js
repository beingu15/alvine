'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsGeoAlt, BsEnvelopeOpen, BsPhoneVibrate, BsArrowRight } from "react-icons/bs";
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaClock, FaMapMarkedAlt } from "react-icons/fa";
import ContactForm from '@/components/ContactForm';
import { firmInfo } from '@/data/firmData';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ContactContent() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get('service') || searchParams.get('division') || '';

  const contactItems = [
    { 
      icon: BsGeoAlt, 
      label: 'Office Address', 
      info: firmInfo.contact.address,
      actionText: 'View on Google Maps',
      actionHref: firmInfo.contact.googleBusinessLink,
      badge: 'Headquarters'
    },
    { 
      icon: BsEnvelopeOpen, 
      label: 'Email Inquiries', 
      info: firmInfo.contact.email,
      actionText: 'Send Email',
      actionHref: `mailto:${firmInfo.contact.email}`,
      badge: 'Official Desk'
    },
    { 
      icon: BsPhoneVibrate, 
      label: 'Direct Phone', 
      info: firmInfo.contact.phoneDisplay,
      actionText: 'Call Now',
      actionHref: `tel:${firmInfo.contact.phone}`,
      badge: 'Mon-Sat 9AM-6PM'
    },
    { 
      icon: FaWhatsapp, 
      label: 'WhatsApp Advisory', 
      info: firmInfo.contact.whatsappDisplay,
      actionText: 'Start WhatsApp Chat',
      actionHref: firmInfo.socialLinks.whatsapp,
      badge: 'Fast Response'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050911] text-white overflow-hidden">
      {/* Navbar */}
      <div className="absolute left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[460px] flex items-center justify-center overflow-hidden">
        <Image
          src="/slide3.jpg"
          alt="Contact ALVYNE"
          fill
          style={{ objectFit: "cover" }} 
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
            <span>Estd. {firmInfo.establishedYear}</span>
            <span>•</span>
            <span>{firmInfo.tagline}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
          >
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFA500]">Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            Schedule a strategic consultation with the partners at {firmInfo.name} for tax filing, business compliance, or virtual CFO leadership.
          </motion.p>
        </div>
      </div>

      {/* Main Grid: Form + Contact Info */}
      <div className="container mx-auto px-6 py-20 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm initialService={prefilledService} />
          </div>

          {/* Right: Contact Information & Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0e1626] p-8 rounded-3xl border border-white/10 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-[#FFD700] uppercase tracking-widest block mb-1">
                  Firm Coordinates
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {firmInfo.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {firmInfo.subTagline}
                </p>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 text-sm">
                <FaClock className="text-[#FFD700] shrink-0" size={16} />
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Business Hours</span>
                  <span className="text-white font-semibold text-xs sm:text-sm">{firmInfo.contact.workingHours}</span>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a 
                      key={index}
                      href={item.actionHref}
                      target={item.actionHref.startsWith('http') ? '_blank' : undefined}
                      rel={item.actionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.01 }}
                      className="block p-5 rounded-2xl bg-[#080d16] border border-white/5 hover:border-[#FFD700]/40 transition group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition shrink-0">
                          <Icon size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                              {item.label}
                            </span>
                            <span className="text-[10px] font-bold text-[#FFD700] px-2 py-0.5 rounded bg-white/5">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-white mt-1 break-words">
                            {item.info}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-[#FFD700] mt-2 font-medium group-hover:underline">
                            <span>{item.actionText}</span>
                            <BsArrowRight size={12} />
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Google Business Profile Action */}
              <div className="pt-2">
                <a
                  href={firmInfo.contact.googleBusinessLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#1c263c] to-[#121a2c] hover:from-[#24314c] hover:to-[#1a253d] border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 transition"
                >
                  <FaMapMarkedAlt className="text-[#FFD700]" size={16} />
                  <span>View Google Business Profile</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3 text-center">
                  Connect on Social Media
                </p>
                <div className="flex justify-center gap-3">
                  {[
                    { icon: FaLinkedinIn, href: firmInfo.socialLinks.linkedin, label: "LinkedIn" },
                    { icon: FaInstagram, href: firmInfo.socialLinks.instagram, label: "Instagram" },
                    { icon: FaWhatsapp, href: firmInfo.socialLinks.whatsapp, label: "WhatsApp" },
                  ].map((s, idx) => (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#FFD700] hover:bg-[#FFD700] text-[#FFD700] hover:text-black flex items-center justify-center transition"
                    >
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050911] text-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFD700]"></div>
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}