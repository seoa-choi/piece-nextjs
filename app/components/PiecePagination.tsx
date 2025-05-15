import Image from 'next/image';
import Link from 'next/link';

export default function PiecePagination() {
  return (
    <div className="mt-[40px]">
      <div className="flex items-center justify-center">
        <div>
          <button
            type="button"
            className="p-[14px] h-[40px] rounded-[8px] hover:bg-[#EDF2F7] justify-self-center"
          >
            <Image
              src="/images/ic-arrow-paging.6c2eda24.svg"
              alt="이전"
              width={16}
              height={16}
            />
          </button>
        </div>
        <ol className="flex gap-[]">
          <li>
            <button
              type="button"
              className="w-[32px] h-[40px] text-[#b8bcc8] text-[14px] leading-[16px] hover:text-[#292a2e]"
            >
              1
            </button>
          </li>
        </ol>
        <div>
          <button
            type="button"
            className="p-[14px] h-[40px] rounded-[8px] hover:bg-[#EDF2F7]"
          >
            <Image
              src="/images/ic-arrow-paging.6c2eda24.svg"
              alt="이전"
              width={16}
              height={16}
              className="transform rotate-[180deg]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
