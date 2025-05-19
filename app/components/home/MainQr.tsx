import Qr from '@/app/components/Qr';

export default function MainQr() {
  return (
    <div
      className="pt-[120px] max-sm:pt-[40px]"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="700"
    >
      <Qr />
    </div>
  );
}
