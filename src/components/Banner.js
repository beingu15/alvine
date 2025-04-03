


'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BannerCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    initialSlide: 0,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
   
    
  };

  const slides = [
    {
      image: '/slide1.jpg',
      title: 'Simplified Tax Filing',
      subtitle: 'Maximize Your Refund with Expert Help',
      buttonText: 'File Now',
      href: '/tax-filing',
    },
    {
      image: '/slide2.jpg',
      title: 'Personalized Financial Planning',
      subtitle: 'Secure Your Future with Smart Investments',
      buttonText: 'Start Planning',
      href: '/financial-planning',
    },
    {
      image: '/slide3.jpg',
      title: 'Business Financial Consulting',
      subtitle: 'Optimize Your Business Growth & Strategy',
      buttonText: 'Consult Now',
      href: '/business-consulting',
    },
  ];

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-opacity-50"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-opacity-50"
      >
        <ChevronRight size={32} />
      </button>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[700px]">
            <Image src={slide.image} alt={slide.title} fill className="object-cover brightness-90" priority />
            
            {/* Gradient Overlay */}

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex flex-col items-start justify-center px-16  sm:px-20 text-white"
            >
              <h3 className="text-lg sm:text-xl font-medium text-[#FFD700] mb-4">{slide.subtitle}</h3>
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 max-w-2xl leading-tight">
                {slide.title}
              </h2>
              <p className="text-base sm:text-lg max-w-xl mb-6 opacity-90">
                Get expert guidance to make informed financial decisions and secure your financial future.
              </p>

              {slide.href && (
                <Link href={slide.href}>
                  <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-black px-6 py-3 rounded-full text-lg">
                    {slide.buttonText}
                  </Button>
                </Link>
              )}
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;