import DisclosureContents from '@/app/components/disclosure/DisclosureContents';
import DisclosureTab from '@/app/components/disclosure/DisclosureTab';

export default function Disclosure() {
  return (
    <main className="pt-[80px]">
      <div className="pt-[60px] px-[20px] pb-[80px]">
        <div className="text-center py-[60px]">
          <p className="text-[#8C919F] text-[18px] mb-[24px] font-semibold max-sm:text-[14px] max-sm:mb-[16px]">
            공시
          </p>
          <p className="text-[#131313] text-[48px] font-bold leading-[64px] tracking-[-0.018em] max-sm:text-[28px] max-sm:leading-[40px] max-sm:font-semibold">
            투자에 필요한 정보를
            <br />
            알려드려요
          </p>
        </div>
        <DisclosureTab />
        <DisclosureContents />
      </div>
    </main>
  );
}
