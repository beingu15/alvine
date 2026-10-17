
"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { firmInfo } from "@/data/firmData";

const BannerCarousel = () => {
  const sliderRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const settings = {
    dots: true,
    initialSlide: 0,
    infinite: false,
    speed: reduceMotion ? 0 : 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: !reduceMotion,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    pauseOnFocus: true,
    accessibility: true,
  };

  const slides = [
    {
      image: "/slide1.jpg",
      badge: `Estd. ${firmInfo.establishedYear} • ${firmInfo.tagline}`,
      title: "Tax Consultancy, ITR Filing & GST Services",
      description:
        "ALVYNE Management Consultancy helps individuals and businesses with income tax return filing, tax planning, GST services, accounting, compliance, and financial advisory.",
      primaryBtn: "Explore Our Services",
      primaryHref: "/Services",
      secondaryBtn: "About ALVYNE",
      secondaryHref: "/About",
      imageAlt:
        "ALVYNE Management Consultancy tax and financial services",
    },
    {
      image: "/slide2.jpg",
      badge: "Income Tax & Tax Planning",
      title: "Expert ITR Filing & Smart Tax Planning",
      description:
        "Simplify your income tax returns with professional assistance, tax planning guidance, and support for your tax compliance requirements.",
      primaryBtn: "Explore Tax Services",
      primaryHref: "/Services?category=taxation",
      secondaryBtn: "Book a Consultation",
      secondaryHref: "/Contact",
      imageAlt:
        "Income tax return filing and tax planning services",
    },
    {
      image: "/slide3.jpg",
      badge: "GST, Accounting & Financial Advisory",
      title: "Reliable GST, Accounting & Financial Advisory",
      description:
        "Manage GST returns, bookkeeping, accounting, statutory compliance, and financial decisions with professional support for your business.",
      primaryBtn: "Talk to Our Experts",
      primaryHref: "/Contact",
      secondaryBtn: "Explore Services",
      secondaryHref: "/Services?category=advisory",
      imageAlt:
        "GST compliance, accounting, and financial advisory services",
    },
  ];

  return (
    <section
      aria-label="ALVYNE core services"
      className="banner-carousel relative h-[500px] w-full overflow-hidden bg-black sm:h-[540px] md:h-[580px] lg:h-[620px] [&_.slick-slider]:mb-0"
    >
      {/* Previous slide */}
      <button
        type="button"
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-2.5 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-[#FFD700] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFD700] sm:left-6 sm:h-11 sm:w-11 md:left-8 md:h-12 md:w-12"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Next slide */}
      <button
        type="button"
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-2.5 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-[#FFD700] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFD700] sm:right-6 sm:h-11 sm:w-11 md:right-8 md:h-12 md:w-12"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.title}>
            <div className="relative h-[500px] w-full sm:h-[540px] md:h-[580px] lg:h-[620px]">
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover brightness-100 contrast-105"
              />

              {/* Image overlays */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"
                aria-hidden="true"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"
                aria-hidden="true"
              />

              {/* Slide content */}
              <div className="absolute inset-0 z-10 flex max-w-5xl flex-col items-start justify-center px-6 pt-14 sm:px-12 md:px-20 md:pt-10 lg:px-24">
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 20 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                  }}
                  className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#FFD700]/40 bg-[#FFD700]/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#FFD700] sm:mb-4 sm:text-xs md:mb-5 md:text-sm"
                >
                  <span
                    className="h-2 w-2 rounded-full bg-[#FFD700]"
                    aria-hidden="true"
                  />
                  <span>{slide.badge}</span>
                </motion.div>

                {index === 0 ? (
                  <motion.h1
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, y: 30 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.8,
                      delay: reduceMotion ? 0 : 0.1,
                    }}
                    className="max-w-3xl text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    {slide.title}
                  </motion.h1>
                ) : (
                  <motion.h2
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, y: 30 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.8,
                      delay: reduceMotion ? 0 : 0.1,
                    }}
                    className="max-w-3xl text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    {slide.title}
                  </motion.h2>
                )}

                <motion.p
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 30 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.8,
                    delay: reduceMotion ? 0 : 0.2,
                  }}
                  className="mt-3 max-w-2xl text-xs leading-relaxed text-gray-300 sm:mt-4 sm:text-sm md:mt-5 md:text-base lg:text-lg"
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 30 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.8,
                    delay: reduceMotion ? 0 : 0.3,
                  }}
                  className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-4"
                >
                  <Link
                    href={slide.primaryHref}
                    className="flex items-center gap-2 rounded-full bg-[#FFD700] px-5 py-2.5 text-xs font-bold text-black shadow-lg transition-colors hover:bg-[#E6C200] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:px-7 sm:py-3.5 sm:text-sm md:text-base"
                  >
                    <span>{slide.primaryBtn}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href={slide.secondaryHref}
                    className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFD700] sm:px-7 sm:py-3.5 sm:text-sm md:text-base"
                  >
                    {slide.secondaryBtn}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BannerCarousel;
