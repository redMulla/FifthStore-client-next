import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fifth Store',
  description: 'Best Stock and Inventory Management app at a lower price',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-blue-50`}
        suppressHydrationWarning
      >
        <NextTopLoader color="#03e8fc" height={4} showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
