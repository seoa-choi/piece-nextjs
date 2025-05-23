'use client';

import Find from '@/app/components/Find';
import Gnb from '@/app/components/home/Gnb';
import MoMenu from '@/app/components/mobile/MoMenu';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const menus = [
  {
    menu: '상품',
    link: '/product-home',
    subMenu: [
      { menuItem: '상품 목록', path: '/product-progress' },
      { menuItem: '청약 가이드', path: '/guide' },
    ],
  },
  {
    menu: '매거진',
    link: '/magazine',
    subMenu: [
      { menuItem: '포트폴리오', path: '/magazine?page=1&tab=Portfolio' },
      { menuItem: '인사이트 칼럼', path: '/magazine?page=1&tab=Insight' },
      { menuItem: '어바웃 트렌드', path: '/magazine?page=1&tab=Trend' },
    ],
  },
  {
    menu: '공시',
    link: '/disclosure',
    subMenu: [
      { menuItem: '투자공시', path: '/disclosure' },
      { menuItem: '경영공시', path: '' },
    ],
  },
  {
    menu: '고객센터',
    link: '/support-home',
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

export default function Header() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const [breakPoint, setBreakPoint] = useState(false);
  const [moIsShow, setMoIsShow] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<string | null>(null);

  function handleToggle() {
    if (isShow) {
      setAnimate(false);
      setTimeout(() => {
        setIsShow(false);
      }, 200);
    } else {
      setIsShow(true);
      setTimeout(() => {
        setAnimate(true);
      });
    }
  }

  useEffect(() => {
    function handleResize() {
      setBreakPoint(window.innerWidth < 1200);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleMoMenuOpen() {
    setMoIsShow(true);
  }

  return (
    <>
      <header className="bg-[rgba(255,255,255,0.8)] backdrop-blur-[20px] fixed w-full top-0 z-100">
        <div className="px-[20px] max-w-[1420px] h-[80px] mx-auto flex items-center justify-between max-lg:h-[64px] max-lg:p-[16px]">
          <h2
            className={`text-[26px] font-bold max-lg:w-[108px]  ${
              isShow && breakPoint ? 'max-lg:h-[24px]' : 'max-lg:h-[32px]'
            }`}
          >
            <Link href="/" onClick={(e) => e.preventDefault}>
              <Image
                src={`${
                  isShow && breakPoint
                    ? 'images/ic-home.3f4bb4a3.svg'
                    : 'images/logo_piece.aab08f3a.svg'
                }`}
                alt="피스"
                width={isShow && breakPoint ? 24 : 136}
                height={isShow && breakPoint ? 24 : 40}
                priority
              />
            </Link>
          </h2>
          <Gnb
            menus={menus}
            isShow={isShow}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          {moIsShow ? (
            <MoMenu
              menus={menus}
              moIsShow={moIsShow}
              setMoIsShow={setMoIsShow}
              animate={animate}
              isShow={isShow}
            />
          ) : null}
          <div className="flex gap-x-[16px]">
            <button
              type="button"
              className={`px-[16px] py-[9px] text-[16px] h-[40px] rounded-[100px] bg-white font-bold text-gray-600 hover:bg-[#f6f6f6] ${
                isShow ? 'hidden' : 'block'
              } max-lg:hidden`}
            >
              제휴 문의
            </button>
            <button
              type="button"
              className={`px-[16px] py-[9px] text-[16px] h-[40px] rounded-[100px] bg-[#131313] font-bold text-white hover:bg-[rgba(19,19,19,0.8)] ${
                isShow ? 'hidden' : 'block'
              } max-lg:hidden`}
              onClick={() => (window.location.href = '/app-qr')}
            >
              앱 다운로드
            </button>
            <button type="button" onClick={handleToggle}>
              <Image
                src={
                  isShow
                    ? 'images/ic-close.bd69da74.svg'
                    : 'images/ic-search.cf059c94.svg'
                }
                alt="searchbutton"
                width={24}
                height={24}
              />
            </button>

            {isShow ? null : (
              <button type="button" className="hidden max-lg:block">
                <Image
                  src="images/ic-hamburger.dd7a25e5.svg"
                  alt="삼단바메뉴버튼"
                  width={24}
                  height={24}
                  onClick={handleMoMenuOpen}
                />
              </button>
            )}
          </div>
        </div>
      </header>
      {isShow ? <Find animate={animate} /> : null}
      {/* 블러처리 할 컨텐츠 바로 위에 처리하기 */}
      <div
        className={`w-full h-[100vh] bg-[rgba(19,19,19,0.6)] backdrop-blur-[20px] fixed top-[80px] left-0 z-99  ${
          isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      ></div>
    </>
  );
}
