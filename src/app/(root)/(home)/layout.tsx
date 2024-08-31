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
          <div className="fixed w-full">
            <NavBar />
          </div>
          <div className="pt-14 flex-1 flex flex-row 2xl:container 2xl:max-2xl mx-auto max-h-full">
            <div className="fixed">
              <SideBar />
            </div>
            <main className="w-full max-h-full ms-16 lg:ms-60 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
