'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for mobile menu
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav
      className={`w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'fixed bg-white shadow-md' : 'relative bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl font-bold uppercase ${
            isScrolled ? 'text-green-600' : 'text-white'
          }`}
        >
          Finance Business
        </Link>

        {/* Mobile Menu Button with Rotation Effect */}
        <button
          className="lg:hidden text-green-600 focus:outline-none"
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
            { name: 'About Us', href: '/about' },
            { name: 'Our Services', href: '/services' },
            { name: 'Contact Us', href: '/contact' },
            { name: 'One Page', href: '/one-page' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mx-6 font-light ${
                pathname === item.href
                  ? 'text-green-600 border-b-2 border-green-600' // ✅ Green with underline (Desktop)
                  : isScrolled
                  ? 'text-black'
                  : 'text-white'
              } hover:text-green-600`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute top-full left-0 w-full lg:hidden bg-white text-center shadow-md"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'One Page', href: '/one-page' },
              ].map((item) => (
                <li key={item.href} className="border-b border-gray-200 last:border-b-0 pt-4">
                  <Link
                    href={item.href}
                    className={`block py-2 px-4 ${
                      pathname === item.href
                        ? 'text-green-600' // ✅ Green (Mobile) but NO underline
                        : 'text-gray-800'
                    } hover:text-green-600`}
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
