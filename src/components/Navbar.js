'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav
      className={`w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'fixed bg-black shadow-md' : 'relative bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png" // 🔹 Replace with actual logo path
            alt="Alvyne Logo"
            width={isScrolled ? 40 : 50} // 🔺 Increased Logo Size
            height={isScrolled ? 40 : 50}
            className="transition-all duration-300"
          />
          <span
            className={`ml-2 text-3xl font-bold uppercase transition-all duration-300  ${
              isScrolled ? 'text-[#FFD700] text-2xl' : 'text-white'
            }`}
          >
            ALVYNE
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#FFD700] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          {[
            { name: 'Home', href: '/' },
            { name: 'About Us', href: '/About' },
            { name: 'Our Services', href: '/Services' },
            { name: 'Contact Us', href: '/Contact' },
            { name: 'One Page', href: '/one-page' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mx-6 font-light ${
                pathname === item.href
                  ? 'text-[#FFD700] border-b-2 border-[#FFD700]' // Gold with underline (Active)
                  : isScrolled
                  ? 'text-[#B0B0B0]' // Silver when scrolled
                  : 'text-white'
              } hover:text-[#FFD700]`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute top-full left-0 w-full lg:hidden bg-black text-center shadow-md"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/About' },
                { name: 'Our Services', href: '/Services' },
                { name: 'Contact Us', href: '/Contact' },
                
              ].map((item) => (
                <li key={item.href} className="border-b border-gray-200  pt-4">
                  <Link
                    href={item.href}
                    className={`block py-2 px-4 ${
                      pathname === item.href ? 'text-[#FFD700]' : 'text-white'
                    } hover:text-[#FFD700]`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
