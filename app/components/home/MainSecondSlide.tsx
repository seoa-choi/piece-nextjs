'use client';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './MainSlider.module.css';

const slideVideo = [
  { mp4: '/images/video/mp4_6.mp4', title: '에너지 증권' },
  { mp4: '/images/video/mp4_7.mp4', title: '항공기 증권' },
  { mp4: '/images/video/mp4_5.mp4', title: 'K-콘텐츠 증권' },
  { mp4: '/images/video/mp4_3.mp4', title: '선박 증권' },
  { mp4: '/images/video/mp4_4.mp4', title: '자동차 증권' },
  { mp4: '/images/video/mp4_8.mp4', title: '이커머스 증권' },
  { mp4: '/images/video/mp4_9.mp4', title: '부동산 증권' },
  { mp4: '/images/video/mp4_2.mp4', title: '미술품 증권' },
];

export default function MainSecondSlide({
  pdStyle = {},
}: {
  pdStyle?: React.CSSProperties;
}) {
  return (
    <div className={`${styles['main-second-slide']} `} style={{ ...pdStyle }}>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        allowTouchMove={false}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          stopOnLastSlide: true,
        }}
        breakpoints={{
          320: {
            spaceBetween: 32,
            slidesPerView: 'auto',
          },
          767: {
            spaceBetween: 64,
            slidesPerView: 'auto',
          },
        }}
      >
        {slideVideo.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="w-[340px] aspect-[1] max-sm:w-[200px] max-sm:aspect-[1/1]">
              <video
                src={item.mp4}
                autoPlay
                muted
                loop
                playsInline
                className="w-auto h-full object-cover"
              ></video>
              <p className="text-[28px] text-[#292A2E] text-center font-bold mt-[16px] max-sm:text-[18px]">
                {item.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
