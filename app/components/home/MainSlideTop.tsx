import MainFirstSlide from '@/app/components/home/MainFirstSlide';
import Image from 'next/image';
import Link from 'next/link';

export default function MainSlideTop() {
  return (
    <div className="pt-[80px] pb-[120px] flex gap-[20px] items-stretch max-md:flex-col max-sm:pt-0 max-sm:pb-[40px]">
      <MainFirstSlide />
      <Link
        href=""
        className="relative tranform hover:scale-[1.02] transition-transform duration-[0.2s] ease-out"
      >
        <Image
          src="/images/banner/img_main_banner_guide.jpeg"
          alt="청약가이드"
          width={1360}
          height={850}
          className="rounded-[40px] max-w-full h-auto object-cover aspect-[1/1.25]"
        />
        <div className="text-white absolute left-[40px] top-[40px]">
          <p className="text-[18px] mb-[16px]">청약 가이드</p>
          <p className="text-[32px] leading-[44px] font-bold">
            PIECE 앱<br />
            쉽게 시작하기
          </p>
        </div>
      </Link>
      <Link
        href=""
        className="relative tranform hover:scale-[1.02] transition-transform duration-[0.2s] ease-out"
      >
        <Image
          src="/images/banner/img_main_banner_business.png"
          alt="비즈니스"
          width={1360}
          height={850}
          className="rounded-[40px] max-w-full h-auto object-cover aspect-[1/1.25]"
        />
        <div className="text-white absolute left-[40px] top-[40px]">
          <p className="text-[18px] mb-[16px]">비즈니스</p>
          <p className="text-[32px] leading-[44px] font-bold">
            다양한 자산에 쉽게
            <br />
            투자 가능한 PIECE
          </p>
        </div>
      </Link>
    </div>
  );
}
