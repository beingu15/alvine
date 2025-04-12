'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'Tax Planning & Compliance',
    description: 'Our expert Financial Consultants ensure that your business stays compliant with tax regulations while optimizing tax-saving strategies.',
    image: '/slide1.jpg',
  },
  {
    title: 'Business Advisory',
    description: 'We provide strategic financial guidance, helping businesses make informed decisions to maximize profitability and growth.',
    image: '/slide3.jpg',
  },
  {
    title: 'Auditing & Assurance',
    description: 'Comprehensive auditing services to ensure financial transparency, mitigate risks, and maintain regulatory compliance.',
    image: '/slide2.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-black text-white text-center">
      
      <motion.h2 
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Financial<span className="text-[#FFD700]"> Services</span>
      </motion.h2>
      <motion.p 
        className="mt-2 text-[#B0B0B0]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Expert solutions in taxation, auditing, and business growth strategies
      </motion.p>

      <div className="mt-10 grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="text-black rounded-lg shadow-lg shadow-[#AFAFAF] overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-60">
              <Image src={service.image} alt={service.title} fill className='object-cover' />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-[#B0B0B0]">{service.description}</p>
              <Link href={'/About'}>
                <motion.button 
                  className="mt-4 text-sm border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black px-4 py-1 rounded-3xl font-bold transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  KNOW MORE
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
