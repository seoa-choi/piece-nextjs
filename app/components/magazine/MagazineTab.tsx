'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../home/Style.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
  const [activeTab, setActiveTab] = useState<string>('All');
  const router = useRouter();

  function handleSelectedBtn(selectedTitle: string) {
    setSelectedBtn(selectedTitle);
    setActiveTab(tabMapping[selectedTitle] || 'All');

    // 검색어 삭제 후 URL 업데이트
    const params = new URLSearchParams(window.location.search);
    params.delete('search');

    router.push(`?${params.toString()}`);

    handleTabChange(tabMapping[selectedTitle] || 'All');
  }

  // URL에서 tab 값을 가져와서 상태 업데이트
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentTab = urlParams.get('tab') || 'All';

    setActiveTab(currentTab);
    setSelectedBtn(
      Object.keys(tabMapping).find((key) => tabMapping[key] === currentTab) ||
        '전체'
    );
  }, [paramsObj.tab]);

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
