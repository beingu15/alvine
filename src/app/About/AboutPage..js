
  

  'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useState } from 'react';
import { FaUsers, FaCheckCircle, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className="absolute left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center bg-black overflow-hidden">
        <Image
          src="/slide1.jpg"
          alt="Hero Background"
          fill
          style={{objectFit:"cover"}}
          className="absolute z-0"
        />
        <div className="relative z-10 text-center text-white mt-20 px-6">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="text-base sm:text-lg md:text-xl mt-2"
          >
            Empowering your financial future with expert guidance.
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="md:w-1/2 text-gray-700">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Get to know about <span className="text-[#FFD700]">Alvyne</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed">
            Alvyne is a trusted financial services firm specializing in tax filing, ITR consulting, and other financial advisory services. With over 2 years of experience, we help businesses and individuals navigate the complexities of taxation and financial management.
          </p>
          {showMore && (
            <div className="mt-4 text-base sm:text-lg leading-relaxed">
              <p>
                Our expert team is dedicated to providing personalized solutions tailored to your financial needs. Whether you are a startup or an established company, we are here to support your growth with innovative strategies.
              </p>
              <p className="mt-4">
                Our mission is to simplify financial complexities, ensuring you remain tax-efficient while making informed financial decisions. From reducing liabilities to increasing profitability, we are here to guide you every step of the way.
              </p>
            </div>
          )}

          <button 
            className="mt-4 px-6 py-2 bg-[#FFD700] text-white font-semibold rounded-lg hover:bg-yellow-500 transition"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
        <div className="md:w-1/2">
          <Image src="/slide3.jpg" alt="About Us" width={500} height={300} className="rounded-lg" />
        </div>
      </motion.div>

      {/* Team Section */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our team <span className="text-[#FFD700]">members</span>
          </h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="mt-6 flex flex-wrap justify-center gap-8"
          >
            {[{name: "Albert Pradeep", role: "Founder", image: "/albert.jpg", desc: "Leading our vision and growth strategies."},
              {name: "Vaishnav Prakash", role: "Founder", image: "/slide1.jpg", desc: "Driving our brand and outreach efforts."},
              {name: "Nelson Joseph", role: "Founder", image: "/slide3.jpg", desc: "Ensuring sound financial strategies."}].map((member, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white shadow-md rounded-lg overflow-hidden w-96"
                >
                  <Image src={member.image} alt={member.name} width={384} height={240} className="w-full h-72 object-cover" />
                  <div className="p-6 text-left">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-[#FFD700] font-medium text-lg">{member.role}</p>
                    <p className="text-gray-600 mt-2 text-base sm:text-lg">{member.desc}</p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>

      {/* Why Choose Alvyne Section */}
      <div className="relative py-12">
      <Image
  src="/bg-about.jpg"
  alt="Background Image"
  fill
  style={{ objectFit: 'cover' }}
  className="absolute"
/>
        <div className="container mx-auto relative z-10 px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50">
            Why Choose <span className="text-[#FFD700]">Alvyne?</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-amber-50 leading-relaxed">
            We provide exceptional financial services tailored to your needs. Our expertise in tax filing, ITR consulting, and financial strategy ensures that you stay ahead in the industry.
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[{title: "Expert Guidance", desc: "Our team comprises experienced financial professionals who provide top-notch advisory services.", icon: <FaUsers className=" text-4xl mb-2" />}, 
              {title: "Reliable Solutions", desc: "We ensure accuracy and compliance in all financial dealings to maximize your benefits.", icon: <FaCheckCircle className=" text-4xl mb-2" />}, 
              {title: "Client Satisfaction", desc: "We prioritize customer experience and tailor our solutions to fit your unique needs.", icon: <FaHandshake className=" text-4xl mb-2" />}].map((item, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.05 }}
                  className=" shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out flex flex-col items-center p-6 hover:shadow-2xl"
                >
                  {/* Icon with Gradient Background */}
                  <div className="bg-gradient-to-r from-[#FFD700] to-[#FFB700] p-4 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FFD700] mt-2 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-white mt-2 text-base sm:text-lg text-center">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
