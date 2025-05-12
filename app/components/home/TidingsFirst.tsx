import Link from 'next/link';
import Image from 'next/image';
// import styles from './Main.module.css';

function TdLayout({
  children,
  bg,
  className,
}: {
  children: React.ReactNode | undefined;
  bg?: string | undefined;
  className: string | undefined;
}) {
  return (
    <Link
      href=""
      className={`rounded-[40px] aspect-[1/1] relative flex items-end ${bg} ${className} max-sm:justify-center max-sm:rounded-[32px] transform hover:scale-[1.02] transition-transform duration-[0.2s] ease-out`}
    >
      {children}
    </Link>
  );
}

export default function TidingsFirst() {
  return (
    <div className="grid grid-cols-4 gap-[20px] max-md:grid-cols-2 max-sm:grid-cols-1">
      <TdLayout bg="bg-[#67D7FB]" className="">
        <Image
          src="/images/tidings/img_1.png"
          alt="투자에 필요한
정보를 알려드려요"
          width={520}
          height={320}
        />
        <div className="absolute left-[40px] top-[40px] right-[40px] max-sm:top-[32px] max-sm:left-[32px] max-sm:right-[32px]">
          <p className="text-[18px] text-[#13131399] mb-[16px] font-bold max-sm:text-[16px]">
            공시
          </p>
          <p className="text-[28px] text-[#292A2E] font-bold tracking-[-0.025em] leading-[28px] whitespace-pre-wrap line-clamp-2 max-sm:text-[22px]">
            투자에 필요한 정보를 알려드려요
          </p>
        </div>
      </TdLayout>
      <TdLayout bg="bg-[#ff9393]" className="">
        <Image
          src="/images/tidings/img_2.png"
          alt="바이셀스탠다드, 싱가포르 거점 마련...해외 sto 상장 속도낸다"
          width={520}
          height={320}
          className="object-cover aspect-[1/0.65]"
        />
        <div className="absolute left-[40px] top-[40px] right-[40px] max-sm:top-[32px] max-sm:left-[32px] max-sm:right-[32px]">
          <p className="text-[18px] text-[#13131399] mb-[16px] font-bold max-sm:text-[16px]">
            PRESS
          </p>
          <p className="text-[28px] text-[#292A2E] font-bold tracking-[-0.025em] whitespace-pre-wrap line-clamp-2 max-sm:text-[22px]">
            바이셀스탠다드, 싱가포르 거점 마련...해외 sto 상장 속도낸다
          </p>
        </div>
      </TdLayout>
      <TdLayout bg="bg-[#f9f9f9]" className="items-start max-md:aspect-auto">
        <div className="p-[40px]">
          <div className="mb-[16px]">
            <p className="text-[18px] text-[#13131399] mb-[16px] font-bold max-sm:text-[16px]">
              공지사항
            </p>
            <p className="text-[28px] text-[#292A2E] font-bold tracking-[-0.025em] whitespace-pre-wrap line-clamp-2 max-sm:text-[22px]">
              피스 개인정보처리방침 개정 안내 (24.10.08 시행)
            </p>
          </div>
          <p className="text-[18px] text-[#4a4d55] max-h-[84px] whitespace-pre-wrap line-clamp-3 max-sm:text-[14px]">
            안녕하세요! PIECE회원님 여러분! 피스의 개인정보처리방침이 개정됨에
            따라 회원님께 주요 개정 내용과 시행일자를 아래와 같이 사전에
            안내드립니다. 1. 주요 개정 내용 2. 시행일자&nbsp;: 2024년&nbsp;10월
            8일 더 좋은 서비스를 만들기위해 언제나 노력하겠습니다. 감사합니다.
            PIECE 드림
          </p>
        </div>
      </TdLayout>
      <TdLayout bg="bg-[#f9f9f9]" className="items-start max-md:aspect-auto">
        <div className="p-[40px]">
          <div className="mb-[16px]">
            <p className="text-[18px] text-[#13131399] mb-[16px] font-bold max-sm:text-[16px]">
              공지사항
            </p>
            <p className="text-[28px] text-[#292A2E] font-bold tracking-[-0.025em] whitespace-pre-wrap line-clamp-2 max-sm:text-[22px]">
              피스 서비스이용약관 변경 안내 (24.09.17 시행)
            </p>
          </div>
          <p className="text-[18px] text-[#4a4d55] max-h-[84px] whitespace-pre-wrap line-clamp-3 max-sm:text-[14px]">
            안녕하세요 PIECE 회원님 여러분! 신상품 출시를 앞두고 피스 포인트
            제도를 도입에 따른 서비스 이용 약관의 개정 내용을 사전에 안내
            드립니다. 1. 개정사항 : 포인트 조항 신설 2. 주요 개정내용 3.
            시행일자: 2024년 9월 17일 더 좋은 서비스를 만들기위해 언제나
            노력하겠습니다. PIECE팀 드림.
          </p>
        </div>
      </TdLayout>
    </div>
  );
}
