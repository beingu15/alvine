'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useState } from 'react';
import { FaFileInvoiceDollar, FaCalculator, FaBuilding, FaChartLine, FaUserTie, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  { 
    title: 'Tax Filing Assistance', 
    content: 'Get expert guidance to file your taxes accurately and on time, maximizing deductions and ensuring compliance with the latest tax regulations.',
    image: '/slide1.jpg'
  },
  { 
    title: 'Financial Planning', 
    content: 'Plan for a secure future with personalized financial strategies, covering investments, savings, and retirement planning.',
    image: '/slide2.jpg'
  },
  { 
    title: 'Accounting & Bookkeeping', 
    content: 'Stay on top of your finances with professional bookkeeping, payroll management, and financial record-keeping services.',
    image: '/slide3.jpg'
  },
  { 
    title: 'Business Tax Consultation', 
    content: 'Optimize your business tax strategy with expert insights, minimizing liabilities and ensuring compliance with tax laws.',
    image: '/slide2.jpg'
  }
];


export default function Services() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="absolute left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <Image src="/bg-about.jpg" alt="Financial Services" layout="fill" objectFit="cover" className="absolute z-0" />
        <div className="relative z-10 text-center text-white px-6 mt-20">
          <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our Services
          </motion.h1>
          <motion.p initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-base sm:text-lg md:text-xl mt-2">
            Expert financial solutions tailored for individuals and businesses.
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Comprehensive <span className="text-[#FFD700]">Financial Services</span>
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 text-center">
          We offer a wide range of financial services to help you manage your tax, compliance, and business growth efficiently.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Tax Filing & Compliance", desc: "Accurate and timely tax filing services.", icon: <FaFileInvoiceDollar className="text-4xl mb-2" /> },
            { title: "ITR Consulting", desc: "Expert guidance on Income Tax Returns.", icon: <FaCalculator className="text-4xl mb-2" /> },
            { title: "Business Registration", desc: "Helping startups register with ease.", icon: <FaBuilding className="text-4xl mb-2" /> },
            { title: "Investment Advisory", desc: "Smart financial planning strategies.", icon: <FaChartLine className="text-4xl mb-2" /> },
            { title: "Corporate Tax Planning", desc: "Optimize profits and reduce liabilities.", icon: <FaUserTie className="text-4xl mb-2" /> },
            { title: "Audit & Assurance", desc: "Ensuring financial accuracy and compliance.", icon: <FaShieldAlt className="text-4xl mb-2" /> },
          ].map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="shadow-lg rounded-lg p-6 flex flex-col items-center text-center bg-white hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FFB700] p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#FFD700] mt-2">{service.title}</h3>
              <p className="text-gray-700 mt-2 text-base">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

     
      <section className="bg-white py-12 px-6 md:px-24">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-20">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible space-x-3 md:space-x-0 md:space-y-4 pb-4 md:pb-0 w-full md:w-1/3">
            {services.map((service, index) => (
             <button 
             key={index} 
             onClick={() => setSelected(index)} 
             className={`py-3 px-4 md:py-4 md:px-6 font-semibold text-sm md:text-base transition-all border-2 border-[#FFD700] 
             ${selected === index ? 'bg-[#FFD700] text-black' : 'bg-transparent text-black hover:bg-[#FFD700]'}`}>
             {service.title}
           </button>
           
            ))}
          </div>
          {/* Content */}
          <motion.div key={selected} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full md:w-2/3">
            <Image src={services[selected].image} alt={services[selected].title} width={700} height={400} className="rounded-lg object-cover w-full" />
            <div className="mt-6 max-w-2xl">
              <h3 className="text-xl font-bold text-[#FFD700]">{services[selected].title}</h3>
              <p className="mt-2 text-gray-700">{services[selected].content}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
