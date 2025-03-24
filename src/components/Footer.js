'use client'; // Add this directive at the top

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#00102B] text-gray-300 py-10 px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10">
        {/* "We Do" Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
          <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About-Us" className="hover:text-white">
                About Us
              </Link>
            </li>
          
            
            
            <li>
              <Link href="/Companies" className="hover:text-white">
                Companies
              </Link>
            </li>
            <li>
              <Link href="/media" className="hover:text-white">
               Media
              </Link>
            </li>
            
            <li>
              <Link href="/Contact-Us" className="hover:text-white">
               Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* "Follow" Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow</h3>
          <ul className="space-y-2">
            <li>
              <Link href="https://instagram.com" className="hover:text-white" target="_blank">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com" className="hover:text-white" target="_blank">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://whatsapp.com" className="hover:text-white" target="_blank">
                WhatsApp
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 whitespace-nowrap" >Stay up to date.</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="bg-[#161b22] text-gray-300 px-4 py-2 rounded-md focus:outline-none md:w-full w-72"
              required
            />
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                className="form-checkbox bg-[#161b22] border-gray-600 text-white focus:ring-white"
              />
              <span className='whitespace-nowrap'>Yes, subscribe </span>
            </label>
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center border-t border-gray-700 pt-4">
        <Image src="/next.svg" alt="Logo" width={50} height={50} className="mx-auto mb-2" />
        
        <p className="text-gray-500 text-xs"></p>
        <p className="text-gray-500 text-xs mt-4">© {new Date().getFullYear()} by LAVIZZA</p>
      
      <Link href="/TermsOfService" className="text-gray-500 text-sm hover:text-blue-400">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
