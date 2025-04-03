'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsGeoAlt, BsEnvelopeOpen, BsPhoneVibrate } from "react-icons/bs";
import ContactForm from '@/components/ContactForm';

export default function About() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Navbar */}
      <div className="absolute left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center ">
        <Image
          src="/slide1.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
        <div className="relative z-10 text-center text-white px-6 mt-20 ">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold drop-shadow-lg"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-lg md:text-xl mt-2 drop-shadow-lg"
          >
            Feel free to send us a message now!
          </motion.p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-[#FFD700] "
          >
            <h2 className="text-3xl font-bold text-[#FFD700] mb-6 text-center">Get in Touch</h2>
            <div className="space-y-6">
              {[{ icon: BsGeoAlt, label: 'Our Office', info: 'Alvine, Main Street' },
                { icon: BsEnvelopeOpen, label: 'Email Us', info: 'contact@Alvine.com' },
                { icon: BsPhoneVibrate, label: 'Call Us', info: '+1 000 000 0000' }].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 hover:scale-105 transition-transform">
                    <div className="p-4 bg-[#FFD700] text-black rounded-full shadow-lg">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h6 className="text-lg font-semibold text-[#FFD700]">{item.label}</h6>
                      <p className="text-gray-700">{item.info}</p>
                    </div>
                  </div>
              ))}

              {/* Map */}
              <div className="mt-6 overflow-hidden rounded-xl shadow-lg border border-[#FFD700]">
                <iframe
                  className="w-full h-60"
                  src="https://www.google.com/maps/embed?pb=your-map-url"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
