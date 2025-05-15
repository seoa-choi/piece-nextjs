'use client';

import ProductsEnd from '@/app/components/product-progress/ProductsEnd';
import { useQuery } from '@tanstack/react-query';
import { use, useEffect, useState } from 'react';

type ProductProgress = {
  id: number;
  title: string;
  txt: string;
  tit: string;
  img: string;
  ps: string;
};

export default function ProductProgress({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const paramsObj = use(searchParams);
  // 프라미스 해제된 검색 파라메터 객체를 URLSearchParams의 인스턴스로 복제
  // const [params] = useState(new URLSearchParams(paramsObj));

  const {
    isPending,
    data: allData,
    isError,
    error,
  } = useQuery<ProductProgress[]>({
    queryKey: ['productProgress', page],
    queryFn: () => {
      return fetch(`http://localhost:9090/productProgress?page=${page}`).then(
        (res) => res.json()
      );
    },
  });

  const endData = allData?.filter((item) => Boolean(item.ps)) || [];
  // console.log(endData);

  // data 변경 시 totalpage 계산
  // useEffect(() => {
  //   if (allData?.total) {
  //     setTotalPage(Math.ceil(allData.total / 10));
  //   }
  // }, [allData]);

  return (
    <main className="pt-[80px] relative">
      <div>
        <div className="max-w-[1420px] text-center py-[40px] px-[20px] mx-auto">
          <p className="text-[#8C919F] text-[18px] mb-[24px] font-semibold max-sm:text-[14px] max-sm:mb-[16px]">
            상품
          </p>
          <p className="text-[#131313] text-[48px] font-bold leading-[64px] tracking-[-0.03em] max-sm:text-[28px] max-sm:leading-[40px] max-sm:font-semibold">
            Let's PIECE!
          </p>
        </div>
        <ProductsEnd endData={endData} />
      </div>
    </main>
  );
}
