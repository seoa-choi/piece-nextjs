'use client';

import GuideSwiperLayout from '@/app/components/guide/GuideSwiperLayout';
import Image from 'next/image';
import { RefObject, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

const activeBtn = [
  {
    txt: '입금',
    slideImage: [
      {
        img: '/images/guide/img_guide_slide_2_1_1.png',
        txt: '자산 탭의 입금하기를 실행해 주세요',
      },
      {
        img: '/images/guide/img_guide_slide_2_1_2.png',
        txt: '연동된 실명계좌에서 가상계좌로 입금해 주세요',
      },
    ],
  },
  {
    txt: '출금',
    slideImage: [
      {
        img: '/images/guide/img_guide_slide_2_2_1.png',
        txt: '자산 탭의 출금하기를 실행해 주세요',
      },
      {
        img: '/images/guide/img_guide_slide_2_2_2.png',
        txt: '금액 입력 후 확인 버튼을 실행해 주세요',
      },
      {
        img: '/images/guide/img_guide_slide_2_2_3.png',
        txt: '출금이 완료되었어요 연동된 계좌에서 확인해 주세요',
      },
    ],
  },
  {
    txt: '거래내역',
    slideImage: [
      {
        img: '/images/guide/img_guide_slide_2_3_1.png',
        txt: '자산 탭의 거래내역을 실행해 주세요',
      },
      {
        img: '/images/guide/img_guide_slide_2_3_2.png',
        txt: '입출금을 포함한 거래내역을 확인해 주세요',
      },
    ],
  },
];

const notice = [
  { txt: 'NH 농협은행 가상계좌로만 입금할 수 있어요.' },
  { txt: '오픈 뱅킹 송금 서비스는 이용할 수 없어요.' },
  { txt: '원화(KRW)만 입출금 할 수 있어요.' },
  {
    txt: '은행 정기 점검시간에는 입출금 할 수 없어요.(매일 23:00~00:40 / 매월 세번째 월요일 23:55~04:00)',
  },
];

export default function Balance({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) {
  const [selectedBtn, setSelectedBtn] = useState('입금');

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
            예치금 입출금하고 거래내역 확인하기
          </p>
        </div>
        <div className="flex justify-center gap-[16px]">
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
      <div className="max-w-[1140px] mx-auto mt-[20px]">
        <ul className="list-disc">
          {notice.map((item) => (
            <li
              key={item.txt}
              className="text-[14px] text-[#757983] leading-[20px] tracking-[-0.03em]"
            >
              {item.txt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
