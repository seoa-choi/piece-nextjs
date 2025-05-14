'use client';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from '../home/Style.module.css';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

type ProductHome = {
  id: number;
  title: string;
  txt: string;
  tit1: string;
  tit2: string;
  img: string;
  content: string;
  color: string;
};

export default function ProductFirstSlideTablet() {
  const {
    isPending,
    data: productHome,
    isError,
    error,
  } = useQuery<ProductHome[]>({
    queryKey: ['productHome'],
    queryFn: () => {
      return fetch('http://localhost:9090/productHome').then((res) =>
        res.json()
      );
    },
  });

  return (
    <div>
      {isPending && <p>데이터 로딩 중 ...</p>}
      {isError && <p>{error.message}</p>}
      <div className={`${styles['product-slide-tablet']}`}>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          allowTouchMove={true}
          slidesPerView={'auto'}
          spaceBetween={12}
          speed={500}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {productHome?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={`${styles['up-down']}`}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={320}
                  height={400}
                />
                <div className="absolute left-0 top-0 pt-[24px] px-[24px] pb-[32px] flex flex-col justify-between w-full h-[400px]">
                  <span className="text-[14px] text-[#4A4D55] leading-[20px] bg-white rounded-[14px] py-[4px] px-[10px] w-fit">
                    {item.title}
                  </span>
                  <div
                    className="text-center"
                    style={{ color: item.color ? item.color : '#fff' }}
                  >
                    <p className="text-[14px] leading-[20px] mb-[16px]">
                      {item.txt}
                    </p>
                    <p className="text-[22px] leading-[28px] font-semibold">
                      {item.tit1}
                    </p>
                    <p className="text-[32px] leading-[44px] font-bold">
                      {item.tit2}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {productHome?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={`${styles['up-down']}`}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={320}
                  height={400}
                />
                <div className="absolute left-0 top-0 pt-[24px] px-[24px] pb-[32px] flex flex-col justify-between w-full h-[400px]">
                  <span className="text-[14px] text-[#4A4D55] leading-[20px] bg-white rounded-[14px] py-[4px] px-[10px] w-fit">
                    {item.title}
                  </span>
                  <div
                    className="text-center"
                    style={{ color: item.color ? item.color : '#fff' }}
                  >
                    <p className="text-[14px] leading-[20px] mb-[16px]">
                      {item.txt}
                    </p>
                    <p className="text-[22px] leading-[28px] font-semibold">
                      {item.tit1}
                    </p>
                    <p className="text-[32px] leading-[44px] font-bold">
                      {item.tit2}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
