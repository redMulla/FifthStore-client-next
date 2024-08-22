import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fifth Store',
  description: 'Best Stock and Inventory Management app at a lower price',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} max-h-full`}>
        <div className="flex flex-col h-screen w-screen bg-blue-50">
          <NavBar />
          <div className="flex-1 flex flex-row 2xl:container 2xl:max-2xl mx-auto max-h-full">
            <SideBar />
            <main className="w-[100%] max-h-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
