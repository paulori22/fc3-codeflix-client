import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CodeFlix',
  description: 'Netflix clone project full cycle course',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} scrollbar-hide bg-[#141414] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
