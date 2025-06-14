'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../home/Style.module.css';

const tab = [{ title: '투자공시' }, { title: '경영공시' }];

type DisclosureData = {
  id: number;
  title: string;
  date: string;
};

export default function DisclosureTab({
  data,
  paramsObj,
  page,
  selectedBtn,

  handleSelectedBtn,
}: {
  data?: {
    result: DisclosureData[];
    total: number;
    mappedTab: string;
  };
  paramsObj: {
    search: string;
    page: string;
    tab: string;
  };
  page: number;
  selectedBtn: string;

  handleSelectedBtn: (tit: string) => void;
}) {
  return (
    <div className={`${styles['magazine-list']}`}>
      <Swiper>
        {tab.map((item) => (
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
