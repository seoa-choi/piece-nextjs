'use client';

// import { formatDate } from '@/app/_lib/utils';
import MainAtoZ from '@/app/components/home/MainAtoZ';
import MainQr from '@/app/components/home/MainQr';
import MainSearch from '@/app/components/home/MainSearch';
import MainSlideBottom from '@/app/components/home/MainSlideBottom';
import MainSlideTop from '@/app/components/home/MainSlideTop';
import MainTidings from '@/app/components/home/MainTidings';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  // const now = formatDate(new Date());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }, []);

  return (
    <main className="pt-[80px]">
      <div className="pt-[60px] pb-[120px] px-[20px] max-w-[1460px] mx-auto max-sm:py-[40px]">
        <MainSearch />
        <MainSlideTop />
        <MainSlideBottom />
        <MainAtoZ />
        <MainTidings />
        <MainQr />

        {/* 참고 하려고 아직 안지웠음 끝나면 지우기, 위에 new Date도 지워야함*/}
        <Link href="/blog" className="mr-[20px]">
          blog
        </Link>
        <Link href="/products">products</Link>
        <Link href="/articles/breaking-news-123">read in korean</Link>
        <Link href="/articles/breaking-news-123?lang=en">read in english</Link>
        <Link href="/articles/breaking-news-123?lang=fr">read in franch</Link>
      </div>
    </main>
  );
}
