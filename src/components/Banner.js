// 'use client';

// import Slider from 'react-slick';
// import Image from 'next/image';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Button } from '@/components/ui/button';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useRef } from 'react';
// import Link from 'next/link';

// const BannerCarousel = () => {
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//   };

//   const slides = [
//     {
//       image: '/slide1.jpg',
//       title: 'Financial Analysis & Consulting',
//       subtitle: 'We are ready to help you',
//       buttonText: 'Contact Us',
//       href: '/Contact',
//     },
//     {
//       image: '/slide2.jpg',
//       title: 'Expert Business Solutions',
//       subtitle: 'Your growth, our priority',
//       buttonText: 'Learn More',
//       href: '/About',
//     },
//     {
//       image: '/slide3.jpg',
//       title: 'Strategic Financial Planning',
//       subtitle: 'Tailored solutions for your needs',
//       buttonText: 'Get Started',
//       href: '/Services',
//     },
//   ];

//   return (
//     <div className="relative w-full h-[650px] xl:h-[700px] lg:h-[600px] md:h-[500px] sm:h-[400px] overflow-hidden">
//       {/* Custom Navigation Buttons */}
//       <button
//         onClick={() => sliderRef.current?.slickPrev()}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-opacity-80"
//       >
//         <ChevronLeft size={32} />
//       </button>

//       <button
//         onClick={() => sliderRef.current?.slickNext()}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-opacity-80"
//       >
//         <ChevronRight size={32} />
//       </button>

//       {/* Slider */}
//       <Slider ref={sliderRef} {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative w-full h-[750px] xl:h-[700px] lg:h-[600px] md:h-[500px] sm:h-[400px]">
//             <Image
//               src={slide.image}
//               alt={slide.title}
//               fill
//               className="object-cover brightness-100"
//               priority
//             />

//             <div className="absolute inset-0 flex flex-col items-start justify-center px-15 xl:px-24 lg:px-24 md:px-18 sm:px-20 text-[#C0C0C0]">
//               <h3 className="text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl font-semibold text-[#FFD700] mb-8 xl:mb-1.5 lg:mb-1 md:mb-1 sm:mb-0.5">
//                 {slide.subtitle}
//               </h3>
//               <h2 className="text-amber-50 text-3xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-4xl font-bold max-w-3xl mb-8 xl:mb-3 lg:mb-2 md:mb-2 sm:mb-1">
//                 {slide.title}
//               </h2>
//               <p className="text-lg xl:text-lg lg:text-base md:text-sm sm:text-xs max-w-xl mb-8 xl:mb-5 lg:mb-4 md:mb-3 sm:mb-2">
//                 SUBTITLE SPACE
//               </p>

//               {/* Ensure button is wrapped in Link if href exists */}
//               {slide.href ? (
//                 <Link href={slide.href}>
//                   <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-black px-10 xl:px-8 lg:px-6 md:px-4 py-3 lg:py-2 md:py-1 rounded-full text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs">
//                     {slide.buttonText}
//                   </Button>
//                 </Link>
//               ) : (
//                 <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-black px-10 xl:px-8 lg:px-6 md:px-4 py-3 lg:py-2 md:py-1 rounded-full text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs">
//                   {slide.buttonText}
//                 </Button>
//               )}
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default BannerCarousel;


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
    fade: true,
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
              className="absolute inset-0 flex flex-col items-start justify-center px-16 md:px-10 sm:px-20 text-white"
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