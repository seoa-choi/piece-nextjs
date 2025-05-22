import SearchLayout from '@/app/components/SearchLayout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../home/Style.module.css';
import { FormEvent, RefObject, useEffect, useState } from 'react';
import PiecePagination from '@/app/components/PiecePagination';

type Magazines = {
  id: number;
  title: string;
  img: string;
  postTitle: string;
  postSubTitle: string;
};

export default function MagazineContents({
  data,
  isPending,
  isError,
  error,
  page,
  setPage,
  handleSearch,
  ref,
  paramsObj,
}: {
  data?: {
    displayedData: Magazines[];
    total: number;
  };
  isPending: boolean;
  isError: boolean;
  error: Error | null;
  page: number;
  setPage: (num: number) => void;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
  ref: RefObject<HTMLInputElement | null>;
  paramsObj: {
    search: string;
    page: string;
  };
}) {
  const [totalPage, setTotalPage] = useState(0);

  // data 변경 시 totalpage 계산
  useEffect(() => {
    if (data) {
      setTotalPage(Math.ceil(data?.total / 12) || 0);
    }
  }, [data]);
  return (
    <div className="max-w-[1420px] p-[20px] mx-auto">
      <div className="mb-[20px]">
        {/* 공시에서도 불러와서 플레이스홀더만 바꿔주기 */}
        <SearchLayout
          placeTxt="궁금하신 내용을 검색해 보세요"
          handleSearch={handleSearch}
          ref={ref}
          paramsObj={paramsObj}
        ></SearchLayout>
      </div>
      <div>
        {/* 페이지당 12개씩 */}
        {isPending && <p className="text-center p-[20px]">Loading ... </p>}
        {isError && <p>{error?.message}</p>}
        {data && data?.displayedData?.length > 0 && (
          <div className="grid grid-cols-4 gap-x-[20px] gap-y-[80px] max-md:grid-cols-3 max-sm:grid-cols-1 max-sm:gap-x-[12px] max-sm:gap-y-[48px]">
            {data.displayedData.map((magazine: Magazines) => (
              <Link
                href={`/magazine/${magazine.id}`}
                key={magazine.id}
                className={`${styles['hover-scale']} flex flex-col relative`}
              >
                <div className="rounded-[32px]">
                  <p className="text-[16px] px-[16px] py-[11px] text-[#1A202C] bg-white rounded-[100px] absolute top-[16px] left-[16px] max-sm:text-[14px] max-sm:px-[10px] max-sm:py-[4px] z-10">
                    {magazine.title}
                  </p>
                  <div className="w-full h-full rounded-[32px] max-h-[255px] aspect-[1/1] max-sm:rounded-[24px] max-sm:max-h-[initial]">
                    <Image
                      src={magazine.img}
                      alt={magazine.postTitle}
                      width={300}
                      height={240}
                      priority
                      className="w-full h-full object-cover rounded-[32px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="mt-[24px] max-sm:mt-[16px] w-full h-auto line-clamp-2 break-words">
                    <p
                      className={`${styles['hover-deco']} text-[28px] leading-[40px] text-[#292a2e] font-semibold max-sm:text-[16px] max-sm:leading-[22px]`}
                    >
                      {magazine.postTitle}
                    </p>
                  </div>
                  <div>
                    <p className="text-[16px] leading-[26px] text-[#757983] line-clamp-1 font-light oldstyle-nums max-sm:text-[14px] max-sm:leading-[20px]">
                      {magazine.postSubTitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        {!isPending && data?.displayedData?.length === undefined && (
          <p className="text-gray-500 my-[40px] text-center">
            검색결과가 없습니다.
          </p>
        )}

        {/* 페이지네이션 */}
        <div>
          {data && data?.displayedData?.length > 0 && (
            <PiecePagination
              page={page}
              setPage={setPage}
              totalPage={totalPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}
