export default async function MainAtoZ() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="py-[120px]">
      <h3 className="text-[#1A202C] text-[48px] font-bold leading-[64px] mb-[40px] max-sm:text-[22px] max-sm:leading-[28px]">
        투자에 도움되는
        <br />
        금융지식 A to Z
      </h3>
    </div>
  );
}
