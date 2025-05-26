import PiecePagination from '@/app/components/PiecePagination';
import SearchLayout from '@/app/components/SearchLayout';
import Link from 'next/link';
import {
  FormEvent,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';

type DisclosureData = {
  id: number;
  title: string;
  date: string;
};
const NewOldest = [{ sort: '최신순' }, { sort: '오래된순' }];

export default function DisclosureContents({
  data,
  isPending,
  isError,
  error,
  ref,
  handleSearch,
  paramsObj,
  page,
  setPage,
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
  page: number;
  setPage: (num: number) => void;
}) {
  // console.log(data?.result);

  const [totalPage, setTotalPage] = useState(0);
  const [sortOrder, setSortOrder] = useState('최신순');
  const [isOpen, setIsOpen] = useState<SetStateAction<string | boolean>>(false);

  // data 변경 시 totalpage 계산
  useEffect(() => {
    if (data) {
      setTotalPage(Math.ceil(data?.total / 12) || 0);
    }
  }, [data]);

  // 클릭 시 메뉴 드롭다운 토글
  function toggleSortListOpen() {
    setIsOpen(!isOpen);
  }

  function handleSortOrderList(sortType: string) {
    // 드롭다운 닫힘
    setIsOpen(false);
    // 최신순, 오래된순 변경
    setSortOrder(sortType);
  }
  return (
    <div className="max-w-[860px] mx-auto">
      <div className="max-w-[860px] pt-[20px] px-[20px] mx-auto">
        <SearchLayout
          placeTxt={'제목을 검색해 주세요'}
          handleSearch={handleSearch}
          ref={ref}
          paramsObj={paramsObj}
        />
        <div className="relative">
          <button
            type="button"
            className="py-[6px] px-[12px] rounded-[100px] text-[14px] text-[#292A2E] font-semibold flex items-center gap-[4px] border border-[#DADCE3] mt-[16px]"
            onClick={toggleSortListOpen}
          >
            <Image
              src="/images/ic-updown.ed4d3af3.svg"
              alt="정렬버튼"
              width={12}
              height={12}
            />
            {sortOrder}
          </button>
          <div
            className={`min-w-[180px] border border-[#dadce3] rounded-[22px] py-[8px] absolute left-0 top-[40px] bg-white shadow-[0px_0px_8px_0px_rgba(19,19,19,0.16)]  
            ${isOpen ? 'block' : 'hidden'} 
            `}
          >
            {NewOldest.map((item) => (
              <button
                key={item.sort}
                type="button"
                className="block w-full text-left py-[12px] px-[14px] text-[16px] text-[#292A2E] font-semibold"
                onClick={() => handleSortOrderList(item.sort)}
              >
                {item.sort}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[860px] mx-auto pt-[16px] px-[16px]">
          {isPending && <p className="text-center p-[20px]">Loading ... </p>}
          {isError && <p>{error?.message}</p>}
          {data && data?.result?.length > 0 && (
            <ul className="grid">
              {data?.result.map((item) => (
                <li
                  key={item.id}
                  className="border-t-1 border-t-[#f2f3f4] py-[16px] last:border-b-1 last:border-b-[#f2f3f4]"
                >
                  <Link href="">
                    <p className="text-[16px] text-[#292a2e] font-semibold line-clamp-2 mb-[8px] tracking-[-0.025em]">
                      {item.title}
                    </p>
                    <span className="text-[13px] text-[#8c919f] font-normal">
                      {item.date}
                    </span>
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
        <div>
          <PiecePagination
            page={page}
            setPage={setPage}
            totalPage={totalPage}
          />
        </div>
      </div>
    </div>
  );
}
