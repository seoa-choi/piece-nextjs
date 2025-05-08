'use client';

import Link from 'next/link';
import { useState } from 'react';

type Menus = {
  menu: string;
  subMenu: {
    menuItem: string;
    path: string;
  }[];
};

export default function Gnb({
  menus,
  isShow,
}: {
  menus: Menus[];
  isShow: boolean;
}) {
  const [isActive, setIsActive] = useState<string | null>(null);

  function handleEnterMenu(menuName: string): void {
    setIsActive(menuName);
  }

  function handleLeaveMenu(): void {
    setIsActive(null);
  }

  return (
    <ul
      className={`flex items-center max-lg:hidden ${
        isShow ? 'opacity-0 invisible' : 'opacity-100 visible'
      } `}
    >
      {menus.map((item) => (
        <li key={item.menu}>
          <Link
            href=""
            className="block px-[32px] h-[80px] leading-[80px] text-[18px] text-gray-600 font-bold text-center"
            onMouseEnter={() => handleEnterMenu(item.menu)}
          >
            {item.menu}
          </Link>
          <div
            className={`absolute top-[80px] w-[100vw] left-[50%] -translate-x-[50vw] h-[1px] ${
              isActive === item.menu
                ? 'border-t-[1px] border-[#E2E8F0]'
                : 'border-t-0'
            }`}
          >
            <ul
              className={`flex gap-x-[60px] justify-center bg-white absolute left-[50%] -translate-x-[50%] h-[79px] w-full ${
                isActive === item.menu
                  ? 'visible opacity-100'
                  : 'invisible opacity-0'
              }`}
              onMouseLeave={handleLeaveMenu}
            >
              {item.subMenu.map((sub) => (
                <li key={sub.menuItem}>
                  <Link
                    href={sub.path}
                    className={`block text-[18px] text-gray-600 font-bold text-center leading-[79px]
                      ${
                        isActive === item.menu
                          ? 'hover:text-[#0cb2ad] -translate-y-0 transition duration-500 ease-out'
                          : '-translate-y-[12%]'
                      }`}
                  >
                    {sub.menuItem}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
