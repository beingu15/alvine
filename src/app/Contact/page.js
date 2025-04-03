'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsGeoAlt, BsEnvelopeOpen, BsPhoneVibrate, BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import ContactForm from '@/components/ContactForm';
import { useState } from 'react';

export default function About() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const contactItems = [
    { 
      icon: BsGeoAlt, 
      label: 'Our Office', 
      info: 'Alvine, Main Street',
      hoverColor: 'from-purple-500 to-pink-500'
    },
    { 
      icon: BsEnvelopeOpen, 
      label: 'Email Us', 
      info: 'contact@Alvine.com',
      hoverColor: 'from-blue-500 to-teal-400'
    },
    { 
      icon: BsPhoneVibrate, 
      label: 'Call Us', 
      info: '+1 000 000 0000',
      hoverColor: 'from-green-500 to-emerald-400'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Navbar */}
      <div className="absolute left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/slide1.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="absolute animate-zoom-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4"
          >
            Let's <span className="text-[#FFD700]">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl mt-2 drop-shadow-lg max-w-2xl mx-auto"
          >
            We'd love to hear from you! Reach out for inquiries, collaborations, or just to say hello.
          </motion.p>
          
         
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">

      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How Can We <span className="text-[#FFD700]">Help You?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you have questions about our services or want to discuss a potential project, our team is ready to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          
            <div className="absolute "></div>

              
              <ContactForm />
            
          

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-300">
                  Contact Information
                </span>
              </h2>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    onHoverStart={() => setHoveredItem(index)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className={`relative overflow-hidden p-5 rounded-xl transition-all cursor-pointer ${hoveredItem === index ? 'bg-gray-700' : 'bg-gray-800'}`}
                  >
                    {hoveredItem === index && (
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-r ${item.hoverColor} opacity-20`}
                        layoutId="contactItemBg"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                    <div className="relative z-10 flex items-center gap-5">
                      <div className={`p-4 rounded-full ${hoveredItem === index ? `bg-gradient-to-br ${item.hoverColor} text-white` : 'bg-gray-700'}`}>
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h6 className="text-lg font-semibold">{item.label}</h6>
                        <p className="text-gray-300">{item.info}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="overflow-hidden rounded-2xl shadow-2xl border-2 border-[#FFD700]"
            >
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-[#FFD700]/30"></div>
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=your-map-url"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                  loading="lazy"
                />
              </div>
              <div className="bg-gray-800 p-4 text-center">
                <button className="text-[#FFD700] font-medium hover:underline flex items-center justify-center gap-2 mx-auto">
                  Open in Google Maps <BsArrowRight />
                </button>
              </div>
            </motion.div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
  <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Follow Us</h4>
  <div className="flex justify-center gap-4">
    {[
      { icon: FaFacebookF, link: "https://facebook.com" },
      { icon: FaTwitter, link: "https://twitter.com" },
      { icon: FaInstagram, link: "https://instagram.com" },
      { icon: FaLinkedinIn, link: "https://linkedin.com" },
    ].map(({ icon: Icon, link }, i) => (
      <motion.a
        key={i}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 bg-gray-100 rounded-full hover:bg-[#FFD700] transition-colors text-gray-800 hover:text-white flex items-center justify-center w-12 h-12"
      >
        <Icon size={20} />
      </motion.a>
    ))}
  </div>
</div>
          </motion.div>
        </div>
      </div>

      
    </div>
  );
}