import Link from 'next/link';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

type Menus = {
  menu: string;
  link?: string;
  subMenu: {
    menuItem: string;
    path: string;
  }[];
};

export default function MoMenu({
  menus,
  moIsShow,
  setMoIsShow,
}: {
  menus: Menus[];
  moIsShow: boolean;
  setMoIsShow: Dispatch<SetStateAction<boolean>>;
}) {
  function handleMoMenuClose() {
    setMoIsShow(false);
  }

  // translate
  return (
    <div className="fixed left-0 top-0 w-full h-full z-99">
      <div className="bg-[rgba(19,19,19,0.6)] backdrop-blur-[20px] w-full h-full"></div>
      <div
        className={`max-w-[360px] w-full h-[100vh] bg-white absolute top-0 right-0 transform duration-500 transition-transform ease-out ${
          moIsShow ? 'translate-x-[-20px]' : 'translate-x-[-360px]'
        } `}
      >
        <div className="w-full py-[20px] px-[18px] flex justify-between">
          <Link href="/">
            <Image
              src="images/ic-home.3f4bb4a3.svg"
              alt="홈"
              width={24}
              height={24}
            />
          </Link>
          <div>
            <button type="button" className="mr-[20px]">
              <Image
                src="images/ic-search.cf059c94.svg"
                alt="찾기"
                width={24}
                height={24}
              />
            </button>
            <button type="button">
              <Image
                src="images/ic-close.bd69da74.svg"
                alt="메뉴닫기"
                width={24}
                height={24}
                onClick={handleMoMenuClose}
              />
            </button>
          </div>
        </div>
        <div className="px-[20px] pt-[16px] pb-[56px]">
          <ul className="grid grid-cols-2 gap-x-[28px] gap-y-[40px]">
            {menus.map((item) => (
              <li key={item.menu}>
                <h2
                  className="text-[18px] text-[#292A2E] font-bold mb-[16px] cursor-pointer"
                  onClick={() => (window.location.href = item.link ?? '/')}
                >
                  {item.menu}
                </h2>
                <ul>
                  {item.subMenu.map((sub) => (
                    <li key={sub.menuItem}>
                      <Link
                        href={sub.path}
                        className="text-[14px] text-[#4A4D55] font-normal"
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
        <div></div>
      </div>
    </div>
  );
}
