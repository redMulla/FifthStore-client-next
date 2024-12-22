import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import { Flowbite, ThemeModeScript } from 'flowbite-react';
import { UserProvider } from '../context/UserContext';
// import { UserProvider } from '@/context/UserContext';

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
    // <UserProvider>
    <html lang="en">
      <Flowbite>
        <UserProvider>
          <head>
            <ThemeModeScript />
          </head>
          <body className={`${montserrat.className}`} suppressHydrationWarning>
            <NextTopLoader color="#03e8fc" height={4} showSpinner={false} />
            {children}
          </body>
        </UserProvider>
      </Flowbite>
    </html>
    // </UserProvider>
  );
}
