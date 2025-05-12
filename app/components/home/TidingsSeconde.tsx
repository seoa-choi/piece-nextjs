import KakaoCounsel from '@/app/components/KakaoCounsel';
import Link from 'next/link';
import styles from './Main.module.css';
import Image from 'next/image';

export default function TidingsSeconde() {
  return (
    <div className="grid grid-cols-2 gap-[20px] mt-[20px] max-md:grid-cols-1">
      <Link
        href=""
        className="p-[40px] rounded-[40px] bg-[#EAECF0] max-sm:p-[32px] max-sm:rounded-[32px] transform hover:scale-[1.02] transition-transform duration-[0.2s] ease-out"
      >
        <p className="text-[18px] text-[#898B8F] font-semibold mb-[16px] max-sm:text-[16px]">
          자주 묻는 질문
        </p>
        <p className="text-[28px] text-[#292A2E] font-bold leading-[40px] tracking-[-0.03em] mb-[42px] max-sm:text-[22px] max-sm:leading-[28px] max-sm:mb-[24px]">
          궁금함도 풀어드리고
          <br />더 나은 경험을 만들어 드려요
        </p>
        <div className={`${styles['balloon-pointer']}`}>
          현물 자산의 정품 여부 및 보관 상태를 믿어도 되나요?
        </div>
        <div className={`${styles['balloon-pointer']}`}>
          피스에서 구매한 조각 소유권은 법적으로 보호받을 수 있나요?
        </div>
      </Link>
      <div className="grid gap-[20px]">
        <KakaoCounsel />
        <Link
          href=""
          className="py-[50px] px-[40px] bg-[#131313] h-auto rounded-[40px_40px_0_40px] relative max-sm:h-[240px] max-sm:rounded-[32px_32px_0] max-sm:p-[32px] transform hover:scale-[1.02] transition-transform duration-[0.2s] ease-out"
        >
          <Image
            src="/images/tidings/img_contact_bg_2.png"
            alt="제휴 문의하기"
            width={640}
            height={320}
            className="absolute right-0 bottom-0 max-w-[320px] w-[calc(26.6667vw)] z-1 max-sm:left-[50%] -translate-x-[50%] max-sm:w-[calc(71.1111vw)]"
          />
          <div className="flex flex-col gap-[10px] max-sm:gap-[8px]">
            <p className="text-[28px] text-white font-semibold leading-[40px] max-sm:text-[22px] max-sm:leading-[28px]">
              제휴 문의하기
            </p>
            <p className="text-[18px] text-white z-10 max-sm:text-[16px] max-sm:leading-[22px] max-sm:mb-[8px]">
              함께 성장해요 Let's PIECE!
            </p>
          </div>
          <Image
            src="/images/tidings/img_contact_link_2.png"
            alt="카톡상담"
            width={120}
            height={120}
            className="absolute right-0 bottom-0 z-10"
          />
        </Link>
      </div>
    </div>
  );
}
