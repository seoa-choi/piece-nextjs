import MainSecondSlide from '@/app/components/home/MainSecondSlide';
import React from 'react';

export default function ProductSecondSlide() {
  return (
    <div className="py-[80px]">
      <p className="text-center text-[32px] text-[#131313] leading-[44px] font-bold">
        PIECE와 함께하는
        <br />
        성공 STO 라인업을 소개할게요
      </p>
      <MainSecondSlide pdStyle={{ padding: '0' }} />
    </div>
  );
}
