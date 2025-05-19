'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import styles from '../home/Style.module.css';

export default function GuideSwiperLayout({
  children,
}: {
  children: React.ReactNode | undefined;
}) {
  return (
    <div className={`${styles['guide-layout']} `}>
      <div className="max-w-[1180px] bg-white mx-auto py-[80px] pr-[72px] pl-[80px] rounded-[40px] max-sm:py-[40px] max-sm:pr-[40px] max-sm:pl-[44px] max-sm:rounded-[32px]">
        <div className="max-w-[400px] mx-auto relative max-sm:max-w-[240px]">
          <Image
            src="/images/guide/img_guide_mockup.png"
            alt="guide"
            width={400}
            height={400}
            priority
            className="absolute top-[200px] left-[50%] translate-[-50%] z-5 max-sm:top-[100px]"
          />
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={500}
            pagination={{ clickable: true, type: 'bullets' }}
            autoplay={{
              delay: 3000,
            }}
          >
            {children}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
