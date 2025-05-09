import { formatDate } from '@/app/_lib/utils';
import MainAtoZ from '@/app/components/home/MainAtoZ';
import MainSearch from '@/app/components/home/MainSearch';
import MainSlideBottom from '@/app/components/home/MainSlideBottom';
import MainSlideTop from '@/app/components/home/MainSlideTop';
import Link from 'next/link';

export default function Home() {
  const now = formatDate(new Date());

  return (
    <main className="pt-[80px]">
      <div className="pt-[60px] pb-[120px] px-[20px]">
        <MainSearch />
        <MainSlideTop />
        <MainSlideBottom />
        <MainAtoZ />
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
