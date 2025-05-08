import type { Metadata } from 'next';
import './globals.css';
import { pretendard } from '@/app/components/fonts';
import TanStackProvider from '@/providers/TanStackProvider';
import ThemeProvider from '@/app/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: 'PIECE',
    template: '- PIECE',
  },
  description: '더 쉽고 안전하게, 부자되는 투자 제안 PIECE',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ThemeProvider>
        <body className={pretendard.className}>
          <TanStackProvider>{children}</TanStackProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
