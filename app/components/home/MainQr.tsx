'use client';

import Qr from '@/app/components/Qr';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function MainQr() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }, []);

  return (
    <div
      className="pt-[120px] max-sm:pt-[40px]"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="700"
    >
      <Qr />
    </div>
  );
}
