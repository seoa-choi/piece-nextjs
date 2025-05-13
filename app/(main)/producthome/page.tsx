import Link from 'next/link';
import Image from 'next/image';
import ProductFirstSlide from '@/app/components/producthome/ProductFirstSlide';
import ProductSecondSlide from '@/app/components/producthome/ProductSecondSlide';

export default function ProductHome() {
  return (
    <main className="pt-[80px]">
      <div className="">
        <div className="text-center py-[40px] px-[20px]">
          <p className="text-[#8C919F] text-[18px] mb-[24px] font-semibold max-sm:text-[14px] max-sm:mb-[16px]">
            상품
          </p>
          <p className="text-[#131313] text-[48px] font-bold leading-[64px] tracking-[-0.03em] max-sm:text-[28px] max-sm:leading-[40px] max-sm:font-semibold">
            Let's PIECE!
          </p>
        </div>
        <div>
          <ProductFirstSlide />
          <div>
            <Link
              href=""
              className="block bg-[#131313] py-[12px] px-[20px] rounded-[100px] text-white text-[16px] tracking-[-0.03em] text-center mx-auto w-fit"
            >
              전체 상품 더보기
            </Link>
            <div className="flex gap-[2px] justify-center mt-[20px]">
              <Image
                src="images/ic_exclamation_circle.60ed7afa.svg"
                alt="작은경고문구"
                width={17}
                height={16}
              />
              <p className="text-[14px] text-[#8C919F] leading-[20px]">
                과거 수익률이 미래의 수익률을 보장하는 것은 아닙니다.
              </p>
            </div>
          </div>
        </div>
        <ProductSecondSlide />
      </div>
    </main>
  );
}
