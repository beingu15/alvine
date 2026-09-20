'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { firmInfo } from '@/data/firmData';

export default function LogoDrawingAnimation() {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll('path, circle, line, polyline, polygon') || [];

    paths.forEach((path) => {
      const length = path.getTotalLength?.() || 0;
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.stroke = '#FFD700';
      path.style.strokeWidth = '1.5';
      path.style.fill = 'none';
    });

    gsap.to(paths, {
      strokeDashoffset: 0,
      duration: 2.2,
      stagger: 0.1,
      ease: 'power2.out',
    });

    return () => gsap.killTweensOf(paths);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-16 bg-[#040810] border-t border-white/5 overflow-hidden">
      <div className="relative p-6 rounded-3xl bg-white/[0.02] border border-[#FFD700]/20 shadow-[0_0_50px_rgba(255,215,0,0.05)]">
        <svg
          ref={svgRef}
          viewBox="0 0 197 255"
          className="w-20 h-auto sm:w-24 md:w-28 opacity-90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M121.5 0L118.078 70.5859L134.047 85.0703L138.867 0H121.5Z" />
          <path d="M102.656 0L100.336 70.5859L116.305 85.0703L120.18 0H102.656Z" />
          <path d="M80.4922 0L77.6094 123.117L93.5781 137.602L98.0156 0H80.4922Z" />
          <path d="M59.0156 0L56.8438 171.18L72.8125 185.664L77.6094 0H59.0156Z" />
          <path d="M0 116.086V136.836L137.672 254.781L144.508 239.781L0 116.086Z" />
          <path d="M0 89.7812V110.531L129.016 224.602L135.852 209.602L0 89.7812Z" />
          <path d="M0 63.4766V84.2266L120.359 194.422L127.195 179.422L0 63.4766Z" />
          <path d="M144.727 0L140.25 92.4297L158.758 110.742L162.5 0H144.727Z" />
          <path d="M163.219 127.281L0 0V21.2148L153.18 136.727L163.219 127.281Z" />
          <path d="M178.984 0L173.82 127.008L196.25 147.742V0H178.984Z" />
        </svg>
      </div>
      <p className="mt-4 text-xs font-semibold tracking-widest text-[#FFD700]/70 uppercase">
        {firmInfo.name} • {firmInfo.tagline}
      </p>
    </div>
  );
}
