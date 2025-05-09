import Image from 'next/image';
import styles from './Main.module.css';

const btnList = [
  { menu: '상품 목록', url: '' },
  { menu: '청약 가이드', url: '' },
  { menu: '공지사항', url: '' },
];

export default function MainSearch() {
  return (
    <div className={`max-w-[1460px] mx-auto ${styles['main-search']} `}>
      <h3 className="text-[64px] text-[#131313] text-center font-bold leading-[84px] whitespace-pre-wrap break-keep mb-[40px] max-sm:text-[32px] max-sm:mb-[20px] max-sm:leading-[44px] ">
        더 쉽고 안전하게, 부자되는 투자 제안
      </h3>
      <div className="search-animation max-w-[760px] border-none bg-white rounded-[40px] p-[24px] h-[80px] flex items-center mx-auto max-lg:border-[1px] max-lg:border-[#DADCE3] max-lg:h-[44px] max-lg:p-0 max-lg:pl-[20px] max-lg:pr-[12px] max-sm:hidden">
        <input
          type="search"
          placeholder="증권 상품을 검색해보세요!"
          className="w-full border-none text-[28px] text-center font-bold text-[#292a2e] leading-[40px] placeholder:font-bold placeholder:text-[#b8bcc8] p-0 max-lg:text-[16px] max-lg:text-left"
        />
        <button type="submit">
          <Image
            src="/images/ic-search.cf059c94.svg"
            alt="검색"
            width={40}
            height={32}
            className="max-lg:w-[24px] max-lg:h-[20px]"
          />
        </button>
      </div>
      <div className="flex justify-center gap-[8px] mt-[24px] max-lg:justify-start flex-wrap max-sm:hidden">
        {btnList.map((btn, i) => (
          <button
            type="button"
            key={i}
            className="px-[16px] py-[9px] text-[16px] h-[40px] rounded-[100px] text-gray-600 bg-[#f6f6f6]"
          >
            {btn.menu}
          </button>
        ))}
      </div>
    </div>
  );
}
