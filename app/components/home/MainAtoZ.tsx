import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Style.module.css';

type Magazine = {
  id: number;
  title: string;
  img: string;
  postTitle: string;
  postSubTitle: string;
};

export default function MainAtoZ() {
  const {
    isPending,
    data: magazineData,
    isError,
    error,
  } = useQuery<Magazine[]>({
    queryKey: ['magazine'],
    queryFn: () => {
      return fetch('http://localhost:9090/magazine').then((res) => res.json());
    },
  });

  const filteredMagazine = magazineData?.filter((magaz) => magaz.id <= 8) || [];

  return (
    <div
      className="py-[120px] max-sm:py-[40px]"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h3 className="text-[#1A202C] text-[48px] font-bold leading-[64px] mb-[40px] max-sm:text-[22px] max-sm:leading-[28px] max-sm:mb-[20px]">
        투자에 도움되는
        <br />
        금융지식 A to Z
      </h3>
      {isPending && <p>로딩 중 ...</p>}
      {isError && <p>{error.message}</p>}
      {filteredMagazine?.length > 0 && (
        <div className="grid grid-cols-4 gap-x-[20px] gap-y-[80px] max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-x-[12px] max-sm:gap-y-[48px]">
          {filteredMagazine?.map((item) => (
            <Link
              href=""
              key={item.id}
              className={`${styles['hover-scale']} flex flex-col relative`}
            >
              <div className="rounded-[32px]">
                <p className="text-[16px] px-[16px] py-[11px] text-[#1A202C] bg-white rounded-[100px] absolute top-[16px] left-[16px] max-sm:text-[14px] max-sm:px-[10px] max-sm:py-[4px] z-10">
                  {item.title}
                </p>
                <div className="w-full h-full rounded-[32px] max-h-[255px] aspect-[1/1] max-sm:rounded-[24px] max-sm:max-h-[initial]">
                  <Image
                    src={item.img}
                    alt={item.postTitle}
                    width={300}
                    height={240}
                    className="w-full h-full object-cover rounded-[32px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <div className="mt-[24px] max-sm:mt-[16px] w-full h-auto line-clamp-2 break-words">
                  <p
                    className={`${styles['hover-deco']} text-[28px] leading-[40px] text-[#292a2e] font-semibold max-sm:text-[16px] max-sm:leading-[22px]`}
                  >
                    {item.postTitle}
                  </p>
                </div>
                <div>
                  <p className="text-[16px] leading-[26px] text-[#757983] line-clamp-1 font-light oldstyle-nums max-sm:text-[14px] max-sm:leading-[20px]">
                    {item.postSubTitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
