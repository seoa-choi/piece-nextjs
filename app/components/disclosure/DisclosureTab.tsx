'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../home/Style.module.css';
import { useState } from 'react';

const magazineList = [{ title: '투자공시' }, { title: '경영공시' }];

export default function DisclosureTab() {
  const [selectedBtn, setSelectedBtn] = useState('투자공시');

  function handleSelectedBtn(tit: string) {
    setSelectedBtn(tit);
  }
  return (
    <div className={`${styles['magazine-list']}`}>
      <Swiper>
        {magazineList.map((item) => (
          <SwiperSlide key={item.title}>
            <button
              type="button"
              className={` border-b-2 ${
                selectedBtn === item.title
                  ? 'text-[#292a2e] border-b-[#292a2e]'
                  : 'text-[#b8bcc8] border-none'
              }`}
              onClick={() => handleSelectedBtn(item.title)}
            >
              {item.title}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
