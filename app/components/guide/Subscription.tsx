'use client';

import GuideSwiperLayout from '@/app/components/guide/GuideSwiperLayout';
import Image from 'next/image';
import { RefObject, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

const activeBtn = [
  {
    txt: '신청 준비',
    slideImage: [
      {
        img: '/images/guide/img_guide_slide_3_1_1.png',
        txt: '청약 전 오픈 알림 받기를 신청할 수 있어요',
      },
      {
        img: '/images/guide/img_guide_slide_3_1_2.png',
        txt: '투자성향 진단분석을 미리 완료해 주세요',
      },
      {
        img: '/images/guide/img_guide_slide_3_1_3.png',
        txt: '예치금을 입금해 주세요',
      },
    ],
  },
  {
    txt: '청약 신청',
    slideImage: [
      {
        img: '/images/guide/img_guide_slide_3_2_1.png',
        txt: '청약 상세내용을 확인 후 청약 신청하기 버튼을 실행해 주세요',
      },
      {
        img: '/images/guide/img_guide_slide_3_2_2.png',
        txt: '투자계약서 및 투자설명서를 확인하고 동의해 주세요',
      },
      {
        img: '/images/guide/img_guide_slide_3_2_3.png',
        txt: '청약 신청 수량을 입력해 주세요',
      },
      {
        img: '/images/guide/img_guide_slide_3_2_4.png',
        txt: '입력 내용이 맞는지 확인해 주세요요',
      },
      {
        img: '/images/guide/img_guide_slide_3_2_5.png',
        txt: '간편 비밀번호를 입력해 주세요',
      },
      {
        img: '/images/guide/img_guide_slide_3_2_6.png',
        txt: '청약 신청이 완료되었어요',
      },
    ],
  },
  {
    txt: '신청 취소',
    slideImage: [
      {
        img: '/images/guide/img_guide_slide_3_3_1.png',
        txt: '나의 청약내역에서 신청을 취소할 수 있어요',
      },
      {
        img: '/images/guide/img_guide_slide_3_3_2.png',
        txt: '취소할 청약내역이 맞는지 확인해 주세요',
      },
      {
        img: '/images/guide/img_guide_slide_3_3_3.png',
        txt: '확인 버튼을 실행하면 청약 신청이 취소돼요',
      },
      {
        img: '/images/guide/img_guide_slide_3_3_4.png',
        txt: '청약 신청 취소가 완료되었어요',
      },
    ],
  },
];

export default function Subscription({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) {
  const [selectedBtn, setSelectedBtn] = useState('신청 준비');

  function handleActive(activeTxt: string) {
    setSelectedBtn(activeTxt);
  }

  return (
    <div
      className="bg-[#f2f3f4] py-[120px] px-[20px] max-sm:py-[40px]"
      ref={ref}
    >
      <div className="mb-[40px]">
        <div className="mb-[40px]">
          <p className="text-[32px] text-[#131313] text-center leading-[44px] font-bold max-sm:text-[22px] max-sm:leading-[28px] max-sm:font-semibold tracking-[-0.03em] max-sm:max-w-[180px] max-sm:mx-auto max-sm:break-keep">
            청약 신청하고 취소하기
          </p>
        </div>
        <div className="flex justify-center gap-[16px] max-sm:gap-x-[8px]">
          {activeBtn.map((item) => (
            <button
              key={item.txt}
              type="button"
              className={`h-[48px] rounded-[24px] py-[12px] px-[20px] text-[16px] leading-[22px] tracking-[-0.03em] ${
                selectedBtn === item.txt
                  ? 'bg-[#131313] text-white'
                  : ' text-[#131313] bg-white'
              } max-sm:py-[9px] max-sm:px-[16px] max-sm:text-[16px] max-sm:max-w-max shrink-0`}
              onClick={() => handleActive(item.txt)}
            >
              {item.txt}
            </button>
          ))}
        </div>
      </div>
      <GuideSwiperLayout>
        {activeBtn
          .filter((item) => item.txt === selectedBtn)
          .flatMap((item) =>
            item.slideImage.map((subItem) => (
              <SwiperSlide key={subItem.txt}>
                <Image
                  src={subItem.img}
                  alt={subItem.txt}
                  width={400}
                  height={400}
                  priority
                />
                <p className="text-[28px] text-[#292a2e] text-center font-semibold leading-[40px] tracking-[-0.03em] break-keep whitespace-pre-wrap mx-[40px] max-sm:mx-0 max-sm:text-[18px] max-sm:leading-[24px]">
                  {subItem.txt}
                </p>
              </SwiperSlide>
            ))
          )}
      </GuideSwiperLayout>
    </div>
  );
}
