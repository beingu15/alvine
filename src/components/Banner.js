'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { firmInfo } from '@/data/firmData';

const BannerCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    initialSlide: 0,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  const slides = [
    {
      image: '/slide1.jpg',
      badge: `Estd. ${firmInfo.establishedYear} • ${firmInfo.tagline}`,
      title: 'Navigating Growth, Building Resilience',
      description:
        'We combine deep technical expertise with practical solutions in ITR filing, GST, accounting, statutory compliance, and strategic financial advisory.',
      primaryBtn: 'Explore Services',
      primaryHref: '/Services',
      secondaryBtn: 'About Firm',
      secondaryHref: '/About',
    },
    {
      image: '/slide2.jpg',
      badge: 'Direct Tax & GST Solutions',
      title: 'Taxation & Compliance Simplified',
      description:
        'Transform complicated statutory requirements into streamlined clarity. Proactive tax planning, litigation support, and comprehensive GST health checks.',
      primaryBtn: 'View Tax Services',
      primaryHref: '/Services?category=taxation',
      secondaryBtn: 'Book Consultation',
      secondaryHref: '/Contact',
    },
    {
      image: '/slide3.jpg',
      badge: 'Executive Advisory & Growth',
      title: 'Virtual CFO & Strategic Business Advisory',
      description:
        'Empower your business with financial modelling, working capital optimization, investor pitch readiness, and transaction due diligence.',
      primaryBtn: 'Consult Our Experts',
      primaryHref: '/Contact',
      secondaryBtn: 'Discover Advisory',
      secondaryHref: '/Services?category=advisory',
    },
  ];

  return (
    <div className="relative w-full h-[650px] md:h-[720px] overflow-hidden bg-black">
      {/* Navigation Buttons */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 border border-white/20 text-white hover:bg-[#FFD700] hover:text-black flex items-center justify-center transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 border border-white/20 text-white hover:bg-[#FFD700] hover:text-black flex items-center justify-center transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[650px] md:h-[720px]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover brightness-75 contrast-105"
              priority={index === 0}
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-start justify-center px-8 sm:px-16 md:px-24 max-w-5xl z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/40 text-[#FFD700] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5"
              >
                <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                {slide.badge}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-3xl"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-5 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href={slide.primaryHref}
                  className="px-8 py-3.5 rounded-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-sm sm:text-base transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  <span>{slide.primaryBtn}</span>
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href={slide.secondaryHref}
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all backdrop-blur-sm"
                >
                  {slide.secondaryBtn}
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;