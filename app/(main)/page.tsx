import { formatDate } from '@/app/_lib/utils';
import Link from 'next/link';

export default function Home() {
  const now = formatDate(new Date());

  return (
    <main className="pt-[80px]">
      <div className="pt-[60px] pb-[120px] px-[20px] flex flex-col">
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
