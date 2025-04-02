'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useState } from 'react';
import { FaFileInvoiceDollar, FaCalculator, FaBuilding, FaChartLine, FaUserTie, FaShieldAlt, FaHandshake, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Services() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className="absolute left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center bg-black">
        <Image
          src="/slide1.jpg"
          alt="Financial Services"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="relative z-10 text-center text-white mt-20">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="text-base sm:text-lg md:text-xl mt-2"
          >
            Expert financial solutions tailored for individuals and businesses.
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="container mx-auto px-6 py-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Comprehensive <span className="text-[#FFD700]">Financial Services</span>
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 text-center">
          We offer a wide range of financial services to help you manage your tax, compliance, and business growth efficiently.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Tax Filing & Compliance", desc: "Accurate and timely tax filing services for individuals and businesses.", icon: <FaFileInvoiceDollar className="text-4xl mb-2" /> },
            { title: "ITR Consulting", desc: "Expert guidance on Income Tax Returns to ensure compliance and maximum benefits.", icon: <FaCalculator className="text-4xl mb-2" /> },
            { title: "Business Registration", desc: "Helping startups and entrepreneurs register their businesses with ease.", icon: <FaBuilding className="text-4xl mb-2" /> },
            { title: "Investment Advisory", desc: "Smart financial planning strategies to grow your wealth effectively.", icon: <FaChartLine className="text-4xl mb-2" /> },
            { title: "Corporate Tax Planning", desc: "Tailored tax strategies to optimize business profits and reduce liabilities.", icon: <FaUserTie className="text-4xl mb-2" /> },
            { title: "Audit & Assurance", desc: "Comprehensive audit solutions ensuring financial accuracy and compliance.", icon: <FaShieldAlt className="text-4xl mb-2" /> },
          ].map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center bg-white hover:shadow-2xl transform transition-all duration-300"
            >
              {/* Icon with Gradient Background */}
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FFB700] p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FFD700] mt-2">
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2 text-base sm:text-lg">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      
    </div>
  );
}
