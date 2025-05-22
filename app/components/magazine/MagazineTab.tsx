'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../home/Style.module.css';
import { useEffect, useState } from 'react';

const tabMapping: Record<string, string> = {
  전체: 'All',
  포트폴리오: 'Portfolio',
  '인사이트 칼럼': 'Insight',
  '어바웃 트렌드': 'Trend',
};

export default function MagazineTap({
  data,
  page,
  paramsObj,
  handleTabChange,
}: {
  data?: {
    tabList: string[];
    total: number;
  };
  page: number;
  paramsObj: {
    tab: string;
    page: string;
  };
  handleTabChange: (tabKey: string) => void;
}) {
  const [selectedBtn, setSelectedBtn] = useState('전체');
  const [, setTotalPage] = useState(0);

  // 탭 클릭 시 버튼 액티브 변경 쿼리스트링 추가
  function handleSelectedBtn(selectedTitle: string) {
    setSelectedBtn(selectedTitle);
    const tabKey = tabMapping[selectedTitle] || 'All';

    handleTabChange(tabKey);
  }

  // data 변경 시 totalpage 계산
  useEffect(() => {
    if (data) {
      setTotalPage(Math.ceil(data?.total / 12) || 0);
    }
  }, [data]);

  return (
    <div className={`${styles['magazine-list']}`}>
      <Swiper>
        {data?.tabList.map((title) => (
          <SwiperSlide key={title}>
            <button
              type="button"
              className={` border-b-2 ${
                selectedBtn === title
                  ? 'text-[#292a2e] border-b-[#292a2e]'
                  : 'text-[#b8bcc8] border-none'
              }`}
              onClick={() => handleSelectedBtn(title)}
            >
              {title}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
