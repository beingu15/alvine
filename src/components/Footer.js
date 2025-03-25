'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[var(--footer-bg)] text-gray-300 py-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/About-Us' },
              { name: 'Companies', href: '/Companies' },
              { name: 'Media', href: '/media' },
              { name: 'Contact Us', href: '/Contact-Us' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[var(--primary-color)] transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow</h3>
          <ul className="space-y-2">
            {[
              { name: 'Instagram', href: 'https://instagram.com' },
              { name: 'LinkedIn', href: 'https://linkedin.com' },
              { name: 'WhatsApp', href: 'https://whatsapp.com' },
            ].map((social) => (
              <li key={social.href}>
                <Link href={social.href} className="hover:text-[var(--primary-color)] transition" target="_blank" aria-label={`Follow us on ${social.name}`}>
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Stay up to date</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="bg-[var(--input-bg)] text-gray-300 px-4 py-2 rounded-md focus:outline-none md:w-full w-72"
              required
            />
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="form-checkbox border-gray-600 focus:ring-white" />
              <span>Yes, subscribe</span>
            </label>
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center border-t border-gray-700 pt-4">
        <Image src="/next.svg" alt="Logo" width={50} height={50} className="mx-auto mb-2" />
        <p className="text-gray-500 text-xs">© {new Date().getFullYear()} by LAVIZZA</p>
        <Link href="/TermsOfService" className="text-gray-500 text-sm hover:text-[var(--primary-color)]">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
