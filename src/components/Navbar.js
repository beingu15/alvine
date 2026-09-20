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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/About' },
    { name: 'Our Services', href: '/Services' },
    { name: 'Contact Us', href: '/Contact' },
  ];

  return (
    <nav
      className={`w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'fixed bg-[#07101d]/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10' : 'relative bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative flex items-center justify-center shrink-0">
            <Image
              src="/logo.png"
              alt="ALVYNE Logo"
              width={54}
              height={70}
              priority
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(255,215,0,0.25)]"
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
        <div className="hidden lg:flex items-center space-x-8">
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
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#FFD700] focus:outline-none p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD700]/40 transition active:scale-95 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute top-full left-0 w-full lg:hidden bg-[#07101d] text-center shadow-2xl border-b border-white/10 py-5 px-6 space-y-3"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
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
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`tel:${firmInfo.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-[#FFD700] to-yellow-400 text-black font-extrabold text-sm tracking-wide shadow-lg active:scale-95 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <PhoneCall size={16} />
                  <span>Call {firmInfo.contact.phoneDisplay}</span>
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
