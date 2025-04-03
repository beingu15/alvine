'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutCompanySection() {
  return (
    <section className="relative bg-black text-white py-16 flex flex-col md:flex-row items-center mx-auto px-6 md:px-12 overflow-hidden">
    
      {/* Left Image Section */}
      <motion.div 
        className="md:w-1/2 relative w-full h-96 md:h-[500px]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <Image
          src="/slide1.jpg" // Change to a relevant image
          alt="Chartered Accountants"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>

      {/* Right Text Section */}
      <motion.div 
        className="md:w-1/2 md:pl-12 mt-10 md:mt-0 text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <h4 className="text-sm uppercase tracking-wider text-gray-400">
          WHO WE ARE
        </h4>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Trusted <span className="text-[#FFD700]">Financial Solutions</span> for Your Business
        </h2>
        <p className="mt-4 text-gray-300">
          We are a team of <strong>certified Financial Consultants</strong> specializing in tax planning, auditing, financial consulting, and business advisory services. With years of experience, we help businesses stay compliant, optimize their financial health, and achieve sustainable growth.
        </p>
        <p className="mt-4 text-gray-300">
          Our services are tailored to meet the needs of individuals, startups, and established enterprises. We provide strategic financial planning, <strong>corporate tax solutions, bookkeeping, payroll management, and investment consulting</strong> to help you focus on growing your business.
        </p>

       

        {/* Bullet Points Section */}
        <ul className="mt-4 text-gray-300 list-disc list-inside">
          <li>✅ Tax Compliance & Planning</li>
          <li>✅ Auditing & Assurance Services</li>
          <li>✅ Business Growth & Financial Strategy</li>
          <li>✅ Risk Management & Investment Advisory</li>
          <li>✅ Payroll, Bookkeeping & Accounting Solutions</li>
          <li>✅ Legal Entity Structuring & Corporate Finance</li>
        </ul>

        <Link href={'/Services'}>
          <motion.button 
            className="mt-6 px-6 py-2 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#E6C200] transition shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
