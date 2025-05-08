import Link from 'next/link';
import Image from 'next/image';
import FooterFlowSlide from '@/app/components/home/FooterFlowSlide';

const menus = [
  {
    menu: '상품',
    link: '',
    subMenu: [
      { menuItem: '상품 목록', path: '' },
      { menuItem: '청약 가이드', path: '' },
    ],
  },
  {
    menu: '매거진',
    link: '',
    subMenu: [
      { menuItem: '포트폴리오', path: '' },
      { menuItem: '인사이트 칼럼', path: '' },
      { menuItem: '어바웃 트렌드', path: '' },
    ],
  },
  {
    menu: '공시',
    link: '',
    subMenu: [
      { menuItem: '투자공시', path: '' },
      { menuItem: '경영공시', path: '' },
    ],
  },
  {
    menu: '고객센터',
    link: '',
    subMenu: [
      { menuItem: '공지사항', path: '' },
      { menuItem: 'FAQ', path: '' },
    ],
  },
  {
    menu: 'PIECE',
    link: '',
    subMenu: [
      { menuItem: 'Business', path: '' },
      { menuItem: 'Press', path: '' },
    ],
  },
];

const CsCenter1 = [
  { menu: '고객문의', email: 'help@buysellstandards.com' },
  { menu: '제휴문의', email: 'contact@buysellstandards.com' },
];
const CsCenter2 = [
  { contact: '대표전화', call: '02-6737-8282' },
  { contact: 'FAX', call: '02-6741-8282' },
];

const fList = [
  { list: '회사소개', url: 'https://buysellstandards.com/' },
  { list: '서비스 이용약관', url: 'https://piece.run/terms?tab=CON1401' },
  { list: '개인정보 처리 방침', url: 'https://piece.run/terms?tab=CON1601' },
  {
    list: '사용자 행태정보 수집방침',
    url: 'https://piece.run/terms?tab=CON1602',
  },
  { list: '민원 및 분쟁처리 절차', url: 'https://piece.run/terms?tab=CON1603' },
];

const fIcon = [
  { src: 'images/ic_instagram.46c1dcee.svg', alt: '인스타', w: 32, h: 32 },
  {
    src: 'images/ic_facebook.6402c487.svg',
    alt: '페이스북',
    w: 32,
    h: 32,
  },
  {
    src: 'images/ic-blog.c4a63893.svg',
    alt: '블로그',
    w: 32,
    h: 32,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#131313]">
      <div className="max-w-[1420px] pt-[80px] px-[20px] mx-auto flex flex-col gap-[48px] max-sm:gap-[64px] max-sm:pt-[48px]">
        <div className="flex justify-between max-sm:flex-col">
          <div className="max-sm:order-2">
            <p className="text-[16px] text-white font-bold mb-[16px]">
              (주)바이셀스탠다드
            </p>
            <ul className="flex flex-col gap-[8px]">
              <li>
                <span className="text-[14px] text-[#8C919F]">
                  서울시 영등포구 의사당대로 82 하나증권빌딩 11F
                </span>
              </li>
              <li>
                <span className="text-[14px] text-[#8C919F]">대표이사</span>
                <span className="text-[14px] text-[#8C919F]">신범준</span>
              </li>
              <li>
                <span className="text-[14px] text-[#8C919F]">
                  사업자등록번호
                </span>
                <span className="text-[14px] text-[#8C919F]">803-88-01202</span>
              </li>
            </ul>
          </div>
          <div className="max-sm:order-1 max-sm:mb-[64px]">
            <ul className="grid grid-cols-5 gap-[80px] max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-[48px]">
              {menus.map((item) => (
                <li key={item.menu}>
                  <h2 className="text-[18px] text-white font-bold mb-[24px]">
                    {item.menu}
                  </h2>
                  <ul className="grid gap-[8px]">
                    {item.subMenu.map((sub) => (
                      <li key={sub.menuItem}>
                        <Link
                          href={sub.path}
                          className="text-[14px] text-[#8C919F]"
                        >
                          {sub.menuItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-[16px] text-white font-bold mb-[16px]">
            고객센터
          </h2>
          <ul className="flex flex-col gap-[8px]">
            {CsCenter1.map((item) => (
              <li
                key={item.menu}
                className="text-[14px] text-[#8C919F] flex gap-[8px]"
              >
                <p className="font-bold">{item.menu}</p>
                <span>{item.email}</span>
              </li>
            ))}
            <li className="flex gap-[40px] max-sm:flex-col max-sm:gap-[8px]">
              {CsCenter2.map((item) => (
                <div
                  key={item.contact}
                  className="text-[14px] text-[#8C919F] flex gap-[8px]"
                >
                  <p className="font-bold">{item.contact}</p>
                  <span>{item.call}</span>
                </div>
              ))}
            </li>
            <li className="text-[14px] text-[#8C919F] flex gap-[8px]">
              <p className="font-bold">운영시간</p>
              <span className="flex gap-[8px] max-sm:flex-col max-sm:gap-0">
                <p>평일 9:00~17:30</p>
                <p>점심시간 11:45~13:00(주말, 공휴일 휴무)</p>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-x-[40px] mb-[16px] max-sm:flex-col max-sm:gap-[12px] max-sm:mb-[24px]">
            {fList.map((item) => (
              <li key={item.list}>
                <Link href={item.url} className="text-white text-[14px]">
                  {item.list}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-between max-sm:flex-col max-sm:gap-[64px]">
            <p className="text-[#757983] text-[14px]">
              ⓒ Buysell Standards. All rights reserved.
            </p>
            <div className="flex gap-x-[16px]">
              {fIcon.map((item) => (
                <Link
                  key={item.alt}
                  href=""
                  className="opacity-50 hover:opacity-100"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.w}
                    height={item.h}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <FooterFlowSlide />
      </div>
    </footer>
  );
}
