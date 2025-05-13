'use client';

import { Autoplay } from 'swiper/modules';
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
};

export default function ProductFirstSlide() {
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
      {isPending && <p>로딩 중 ...</p>}
      {isError && <p>{error.message}</p>}
      <div className={`h-[480px] ${styles['product-slide']}`}>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          allowTouchMove={false}
          speed={7000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            stopOnLastSlide: true,
          }}
          breakpoints={{
            320: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
            767: {
              spaceBetween: 120,
              slidesPerView: 'auto',
            },
          }}
        >
          {productHome?.map((item) => (
            <SwiperSlide key={item.id}>
              <Image
                src={item.img}
                alt={item.title}
                width={320}
                height={400}
                className="rounded-[30px]"
              />
            </SwiperSlide>
          ))}
          {productHome?.map((item) => (
            <SwiperSlide key={item.id}>
              <Image
                src={item.img}
                alt={item.title}
                width={320}
                height={400}
                className="rounded-[30px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
