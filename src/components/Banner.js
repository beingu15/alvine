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
    <div className="relative w-full h-[500px] sm:h-[540px] md:h-[580px] lg:h-[620px] overflow-hidden bg-black banner-carousel [&_.slick-slider]:mb-0">
      {/* Navigation Buttons */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-2.5 sm:left-6 md:left-8 top-1/2 transform -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-black/40 border border-white/20 text-white hover:bg-[#FFD700] hover:text-black flex items-center justify-center transition-all cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-2.5 sm:right-6 md:right-8 top-1/2 transform -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-black/40 border border-white/20 text-white hover:bg-[#FFD700] hover:text-black flex items-center justify-center transition-all cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[500px] sm:h-[540px] md:h-[580px] lg:h-[620px]">
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
            <div className="absolute inset-0 flex flex-col items-start justify-center pt-14 md:pt-10 px-6 sm:px-12 md:px-20 lg:px-24 max-w-5xl z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/40 text-[#FFD700] text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 md:mb-5"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                <span>{slide.badge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-3xl"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl leading-relaxed"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-4"
              >
                <Link
                  href={slide.primaryHref}
                  className="px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-xs sm:text-sm md:text-base transition-all transform hover:scale-105 shadow-lg flex items-center gap-1.5 sm:gap-2"
                >
                  <span>{slide.primaryBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />
                </Link>

                <Link
                  href={slide.secondaryHref}
                  className="px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm md:text-base border border-white/20 transition-all backdrop-blur-sm"
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