'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { firmInfo } from '@/data/firmData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer whenever navigation route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open to prevent background scroll interference
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // High-performance scroll listener with hysteresis deadband
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || 0;
          setIsScrolled((prev) => {
            if (!prev && scrollY > 40) return true;
            if (prev && scrollY < 15) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/About' },
    { name: 'Our Services', href: '/Services' },
    { name: 'Contact Us', href: '/Contact' },
  ];

  const hasSubHeader = pathname === '/';
  const topClass = hasSubHeader && !isScrolled ? 'top-0 md:top-10' : 'top-0';

  // Determine header background without causing layout shifts
  let headerBgClass = 'bg-[#07101d]/85 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-white/5 md:border-transparent';
  if (isOpen) {
    headerBgClass = 'bg-[#07101d] border-b border-white/10 shadow-2xl';
  } else if (isScrolled) {
    headerBgClass = 'bg-[#07101d]/95 backdrop-blur-md shadow-xl border-b border-white/10';
  }

  return (
    <header
      className={`fixed left-0 w-full z-50 transition-[top,background-color,border-color,box-shadow] duration-250 ease-out ${topClass} ${headerBgClass} py-3 md:py-3.5`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative flex items-center justify-center shrink-0">
            <Image
              src="/logo.png"
              alt="ALVYNE Logo"
              width={56}
              height={56}
              priority
              className="h-11 sm:h-12 md:h-13 w-auto rounded-xl object-contain transition-transform duration-300 group-hover:scale-105 shadow-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white group-hover:text-[#FFD700] transition-colors leading-tight">
              ALVYNE
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-[#FFD700] uppercase -mt-0.5">
              Management Consultancy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Desktop Navigation">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors tracking-wide ${
                pathname === item.href
                  ? 'text-[#FFD700] border-b-2 border-[#FFD700] pb-1'
                  : 'text-gray-200 hover:text-[#FFD700]'
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Quick Call Action */}
          <a
            href={`tel:${firmInfo.contact.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FFD700]/40 bg-gradient-to-r from-[#FFD700]/15 to-amber-500/10 hover:from-[#FFD700] hover:to-yellow-400 text-[#FFD700] hover:text-black font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(255,215,0,0.3)] transform hover:scale-105 active:scale-95"
          >
            <PhoneCall size={14} />
            <span>{firmInfo.contact.phoneDisplay}</span>
          </a>
        </nav>

        {/* Mobile Menu Button - Stable crossfade animation without DOM node replacement */}
        <button
          type="button"
          className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD700]/40 text-[#FFD700] transition active:scale-95 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <Menu
              size={22}
              className={`absolute transition-all duration-200 ease-in-out ${
                isOpen ? 'opacity-0 rotate-90 scale-75 pointer-events-none' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              size={22}
              className={`absolute transition-all duration-200 ease-in-out ${
                isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75 pointer-events-none'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu - Directly attached to header with clean height accordion animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden w-full overflow-hidden bg-[#07101d] border-b border-white/10 shadow-2xl"
          >
            <div className="px-6 pt-4 pb-6 space-y-2.5 text-center">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 rounded-xl text-base font-medium transition-all ${
                    pathname === item.href
                      ? 'bg-[#FFD700]/15 text-[#FFD700] font-bold'
                      : 'text-gray-200 hover:text-[#FFD700] hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={`tel:${firmInfo.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-[#FFD700] to-yellow-400 text-black font-extrabold text-sm tracking-wide shadow-lg active:scale-95 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <PhoneCall size={16} />
                  <span>Call {firmInfo.contact.phoneDisplay}</span>
                </a>
                <a
                  href={`tel:${firmInfo.contact.secondaryPhone}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm tracking-wide hover:bg-white/20 active:scale-95 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <PhoneCall size={16} />
                  <span>Call {firmInfo.contact.secondaryPhoneDisplay}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
