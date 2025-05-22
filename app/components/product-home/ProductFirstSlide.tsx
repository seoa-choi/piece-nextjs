'use client';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from '../home/Style.module.css';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

export default function ProductFirstSlide() {
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 스와이퍼 슬라이드 제거
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // 종료 데이터 제외
  const filteredProductHome =
    productHome?.filter((produc) => produc.id <= 5) || [];

  // console.log(filteredProductHome);

  return (
    <div className="px-[20px] pb-[40px]">
      {isPending && (
        <p className="text-center text-[#8C919F] text-[12px] p-[40px]">
          로딩 중 ...
        </p>
      )}
      {isError && <p>{error.message}</p>}
      <div className={`h-[540px] ${styles['product-slide']}`}>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          // loop 트루면 슬라이드 처음으로 안돌아감
          loop={true}
          speed={500}
          // 오토플레이 공통 없으면 적용 안되는 거 같음
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              spaceBetween: 12,
              slidesPerView: 1,
              loop: false,
              allowTouchMove: true,
              speed: 500,
              autoplay: {
                delay: 3000,
                pauseOnMouseEnter: false,
              },
            },
            767: {
              spaceBetween: 120,
              slidesPerView: 'auto',
              loop: true,
              allowTouchMove: false,
              speed: 7000,
              autoplay: {
                delay: 0,
                pauseOnMouseEnter: true,
              },
            },
          }}
        >
          {filteredProductHome?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={`${styles['up-down']}`}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={320}
                  height={400}
                  priority
                />
                <div className="absolute left-0 top-0 pt-[24px] px-[24px] pb-[32px] flex flex-col justify-between w-full h-[400px] max-sm:h-full">
                  <span className="text-[14px] text-[#4A4D55] leading-[20px] bg-white rounded-[14px] py-[4px] px-[10px] w-fit max-sm:ml-[24px]">
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
          {/* 768이하 제거 */}
          {!isMobile &&
            filteredProductHome?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={`${styles['up-down']}`}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={320}
                    height={400}
                    priority
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
