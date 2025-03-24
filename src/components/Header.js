'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold uppercase text-white transition-colors duration-300 ${isScrolled ? 'text-green-600' : 'text-white'}">
          Finance Business
        </Link>
        
        <button
          className="md:hidden text-green-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>

        <ul
          className={`absolute top-full left-0 w-full bg-white md:static md:flex md:items-center md:w-auto transition-all duration-300 ${
            isOpen ? 'block' : 'hidden'
          } md:flex-row md:space-x-6`}
        >
          {[
            { name: 'Home', href: '/' },
            { name: 'About Us', href: '/about' },
            { name: 'Our Services', href: '/services' },
            { name: 'Contact Us', href: '/contact' },
            { name: 'One Page', href: '/one-page' },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-2 px-4 text-gray-800 hover:text-green-600 md:py-0"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
