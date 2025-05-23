import SearchLayout from '@/app/components/SearchLayout';
import Link from 'next/link';
import { FormEvent, RefObject } from 'react';

type DisclosureData = {
  id: number;
  title: string;
  date: string;
};

export default function DisclosureContents({
  data,
  isPending,
  isError,
  error,
  ref,
  handleSearch,
  paramsObj,
}: {
  data?: {
    result: DisclosureData[];
    total: number;
  };
  isPending: boolean;
  isError: boolean;
  error: Error | null;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
  ref: RefObject<HTMLInputElement | null>;
  paramsObj: {
    search: string;
    page: string;
  };
}) {
  console.log(data?.result);
  return (
    <div className="max-w-[860px] mx-auto">
      <div className="max-w-[860px] pt-[20px] px-[20px] mx-auto">
        <SearchLayout
          placeTxt={'제목을 검색해 주세요'}
          handleSearch={handleSearch}
          ref={ref}
          paramsObj={paramsObj}
        />
      </div>
      <div>
        <div className="max-w-[860px] mx-auto pt-[16px] px-[16px]">
          {isPending && <p className="text-center p-[20px]">Loading ... </p>}
          {isError && <p>{error?.message}</p>}
          {data && data?.result?.length > 0 && (
            <ul className="grid">
              {data?.result.map((item) => (
                <li key={item.id}>
                  <Link href="">
                    <p>{item.title}</p>
                    <span>{item.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {!isPending && data?.result?.length === undefined && (
            <p className="text-gray-500 my-[40px] text-center">
              검색결과가 없습니다.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
