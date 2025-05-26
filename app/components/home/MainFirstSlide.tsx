'use client';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './MainSlider.module.css';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  {
    id: 1,
    src: '/images/slide-banner/somi1234_bbb48bbd-0bfd-4e46-90a9-93bb6ca868f3.jpg',
    alt: '이미지1',
    title: '매거진',
    p: '또다른 차원의 금융, ',
    span: '인공지능 기반 금융',
  },
  {
    id: 2,
    src: '/images/slide-banner/somi1234_63619100-437b-465b-a7e1-d60b3023d5d7.jpg',
    alt: '이미지2',
    title: '매거진',
    p: '디지털자산, ',
    span: '제도권 편입 가속화',
  },
  {
    id: 3,
    src: '/images/slide-banner/somi1234_c641a3e6-e765-4278-8f29-e641a28b4aac.jpg',
    alt: '이미지3',
    title: '매거진',
    p: '지속 가능한 성장과 ',
    span: '녹색 금융',
  },
  {
    id: 4,
    src: '/images/slide-banner/somi1234_cd204d46-ca08-4e2d-babc-a83d926f8820.jpg',
    alt: '이미지4',
    title: '공지사항',
    p: '웹사이트가 ',
    span: '새로워졌어요!',
  },
];

export default function MainFirstSlide() {
  return (
    <div
      className={`grow-0 shrink-0 basis-[49%] ${styles['main-first-slide']}`}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={500}
        spaceBetween={0}
        // swiper flickering when resize
        // resizeObserver 창 크키 조절 시 변화 감지(떨림 현상) 있을 경우 false 하면 없어짐
        // loop, autoplay인 경우 생길 수 있음
        resizeObserver={false}
        slidesPerView={'auto'}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
        }}
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href="">
              <Image
                src={item.src}
                alt={item.alt}
                width={1400}
                height={850}
                className="rounded-[40px] max-w-full h-auto object-cover max-sm:aspect-[1/1.25] max-sm:object-right"
              />
              <div className="text-white absolute left-[40px] top-[40px]">
                <p className="text-[18px] mb-[16px]">{item.title}</p>
                <p className="text-[32px] leading-[44px] font-bold">
                  <span className="block">{item.p}</span>
                  <span>{item.span}</span>
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
