'use client';

import TidingsFirst from '@/app/components/home/TidingsFirst';
import TidingsSeconde from '@/app/components/home/TidingsSeconde';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function MainTidings() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }, []);

  return (
    <div
      className="py-[120px] max-sm:py-[40px]"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="400"
    >
      <h3 className="text-[#1A202C] text-[48px] font-bold leading-[64px] mb-[40px] max-sm:text-[22px] max-sm:leading-[28px] max-sm:mb-[20px]">
        PIECE에 관한
        <br />
        모든 소식
      </h3>
      <TidingsFirst />
      <TidingsSeconde />
    </div>
  );
}
