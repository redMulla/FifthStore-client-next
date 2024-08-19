import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fifth Store",
  description: "Best Stock and Inventory Management app at a lower price",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-col h-screen w-screen bg-gray-400">
          <NavBar />
          <div className="flex-1 flex flex-row container max-2xl mx-auto">
            <SideBar />
            <main className="w-[100%]">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
