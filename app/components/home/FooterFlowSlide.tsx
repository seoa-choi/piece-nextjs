'use client';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import styles from './MainSlider.module.css';

// 슬라이더 멈춤으로 같은 내용 x2
const imgs = [
  {
    id: 1,
    src: '/images/footer-slide/footer_slide_1.png',
    alt: '이미지1',
  },
  {
    id: 2,
    src: '/images/footer-slide/footer_slide_2.png',
    alt: '이미지2',
  },
  {
    id: 3,
    src: '/images/footer-slide/footer_slide_3.png',
    alt: '이미지3',
  },
  {
    id: 4,
    src: '/images/footer-slide/footer_slide_4.png',
    alt: '이미지4',
  },
  {
    id: 5,
    src: '/images/footer-slide/footer_slide_5.png',
    alt: '이미지5',
  },
  {
    id: 6,
    src: '/images/footer-slide/footer_slide_6.png',
    alt: '이미지6',
  },

  {
    id: 7,
    src: '/images/footer-slide/footer_slide_1.png',
    alt: '이미지1',
  },
  {
    id: 8,
    src: '/images/footer-slide/footer_slide_2.png',
    alt: '이미지2',
  },
  {
    id: 9,
    src: '/images/footer-slide/footer_slide_3.png',
    alt: '이미지3',
  },
  {
    id: 10,
    src: '/images/footer-slide/footer_slide_4.png',
    alt: '이미지4',
  },
  {
    id: 11,
    src: '/images/footer-slide/footer_slide_5.png',
    alt: '이미지5',
  },
  {
    id: 12,
    src: '/images/footer-slide/footer_slide_6.png',
    alt: '이미지6',
  },
];

export default function FooterFlowSlide() {
  return (
    <div className="w-full relative max-w-[1420px] h-[160px] py-[48px] mx-auto before:absolute before:left-0 before:top-0 before:w-full before:h-[1px] before:border-t-[1px] before:border-t-[#292A2E] max-sm:h-[128px]">
      <div className={`w-full absolute left-0 ${styles['footer-flow']}`}>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          loopAdditionalSlides={3}
          // observer={true}
          // observeParents={true}
          // mousewheel={false}
          // simulateTouch={false}
          // grabCursor={false}
          allowTouchMove={false}
          speed={12000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            stopOnLastSlide: true,
          }}
          breakpoints={{
            320: {
              spaceBetween: 40,
              slidesPerView: 'auto',
            },
            767: {
              spaceBetween: 120,
              slidesPerView: 'auto',
            },
          }}
        >
          {imgs.map((img) => (
            <SwiperSlide key={img.id}>
              <Image
                src={img.src}
                alt={img.alt}
                width={780}
                height={256}
                className="w-auto h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
