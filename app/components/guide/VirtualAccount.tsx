'use client';

import GuideSwiperLayout from '@/app/components/guide/GuideSwiperLayout';
import Image from 'next/image';
import { RefObject } from 'react';
import { SwiperSlide } from 'swiper/react';

const slideTop = [
  {
    img: '/images/guide/img_guide_slide_1_1.png',
    txt: '연동할 은행을 선택하세요',
  },
  {
    img: '/images/guide/img_guide_slide_1_2.png',
    txt: '고객님의 계좌번호를 입력해 주세요',
  },
  {
    img: '/images/guide/img_guide_slide_1_3.png',
    txt: '발급된 가상계좌를 확인하세요',
  },
];

// ref로 받기
export default function VirtualAccount({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      className="bg-[#f2f3f4] py-[120px] px-[20px] max-sm:py-[40px]"
      ref={ref}
    >
      <div className="mb-[40px] max-sm:mb-[20px]">
        <p className="text-[32px] text-[#131313] text-center leading-[44px] font-bold max-sm:text-[22px] max-sm:leading-[28px] max-sm:font-semibold tracking-[-0.03em] max-sm:max-w-[180px] max-sm:mx-auto max-sm:break-keep">
          계좌 연동하고 가상계좌 발급하기
        </p>
      </div>
      <GuideSwiperLayout>
        {slideTop.map((item) => (
          <SwiperSlide key={item.img}>
            <Image
              src={item.img}
              alt={item.txt}
              width={400}
              height={400}
              priority
            />
            <p className="text-[28px] text-[#292a2e] text-center font-semibold leading-[40px] tracking-[-0.03em] break-keep whitespace-pre-wrap max-sm:text-[18px] max-sm:leading-[24px]">
              {item.txt}
            </p>
          </SwiperSlide>
        ))}
      </GuideSwiperLayout>
    </div>
  );
}
