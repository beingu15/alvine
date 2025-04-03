'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useState } from 'react';
import { FaFileInvoiceDollar, FaCalculator, FaBuilding, FaChartLine, FaUserTie, FaShieldAlt, FaHandshake, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
const services = [
  { 
    title: 'Market Analysis', 
    content: 'Vivamus sed feugiat elit. Pellentesque pretium, massa at placerat vehicula, neque turpis pulvinar tortor, eget convallis lorem odio non tortor.',
    image: '/slide1.jpg'
  },
  { 
    title: 'Financial Data', 
    content: 'Proin eu molestie risus. Etiam suscipit pretium odio, at consectetur nisl. Sed ut dolor in augue cursus ultrices.',
    image: '/slide2.jpg'
  },
  { 
    title: 'Accounting Service', 
    content: 'Vivamus mauris turpis, auctor vel facilisis in, tincidunt vel diam. Sed vitae scelerisque orci.',
    image: '/slide3.jpg'
  },
  { 
    title: 'Overall Evaluation', 
    content: 'Nunc non magna orci. Aliquam commodo mauris ante.',
    image: '/bg-about.jpg'
  }
];

export default function Services() {
 
  const [selected, setSelected] = useState(0);
  return (
    <div>
      {/* Navbar */}
      <div className="absolute left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center bg-black">
        <Image
          src="/bg-about.jpg"
          alt="Financial Services"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="relative z-10 text-center text-white mt-20 px-6">
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
  initial={{ opacity: 0, y: 20 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.6, ease: "easeInOut" }}
  viewport={{ once: true }}
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
        initial={{ opacity: 0, y: 0 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.4, ease: "easeInOut", delay: index * 0.1 }}
        viewport={{ once: true }}
        className="shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center bg-white hover:shadow-2xl transition-all duration-300"
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
      <div className="bg-black text-white py-12 px-4 sm:px-6 md:px-12">
      
      {/* Wrapper for Responsive Layout */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        
        {/* Tabs (Compact on Mobile, Vertical on Desktop) */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible space-x-3 md:space-x-0 md:space-y-4 pb-4 md:pb-0 w-full md:w-1/3">
          {services.map((service, index) => (
            <button 
              key={index} 
              onClick={() => setSelected(index)} 
              className={`flex-shrink-0 text-left py-2 px-3 sm:py-3 sm:px-4 font-semibold text-sm sm:text-base rounded-lg transition-all 
                w-32 sm:w-40 md:w-full
                ${selected === index ? 'bg-green-500 text-white' : 'bg-green-300 text-black hover:bg-green-400'}`}
            >
              {service.title} <span className="float-right hidden md:inline">›</span>
            </button>
          ))}
        </div>

        {/* Content (Image + Text) */}
        <motion.div 
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-2/3 flex flex-col items-center"
        >
          {/* Image (Takes Full Width) */}
          <Image 
            src={services[selected].image} 
            alt={services[selected].title} 
            width={700} 
            height={400} 
            className="rounded-lg object-cover w-full md:w-[700px]"
          />

          {/* Text (Centered Below Image) */}
          <div className="text-center mt-6 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold">{services[selected].title}</h3>
            <p className="mt-2 text-gray-300 text-base sm:text-lg">{services[selected].content}</p>
          </div>
        </motion.div>

      </div>
    </div>
      
    </div>
  );
}
