'use client';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import SalesSummary from '@/components/SalesSummary';
import ChartCard from '@/components/ChartCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'nextjs-toploader/app';
import ProductsTable from '@/components/ProductsTable';
config.autoAddCss = false;

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('jwtToken');
    if (!accessToken) {
      redirect('/login');
    } else {
      console.log(accessToken);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('jwtToken');
    router.push('/login');
  };

  return (
    <div className="h-[100%] max-w-[100%] grid grid-cols-4">
      <div className=" col-span-4 md:col-span-3 h-full w-full bg-white max-h-[100vh] overflow-y-auto">
        <SalesSummary />
        <ChartCard />
        <ProductsTable />
      </div>

      {/* Sidebar */}
      <div className="bg-white border-s-2 right-0 border-blue-50 hidden md:inline col-span-1">
        <div className="h-28 w-full border-b border-blue-100 px-4 xl:px-8 flex justify-center items-center flex-row">
          <div className="h-12 w-12 min-h-12 min-w-12 overflow-hidden rounded-full">
            <img
              src="https://images.pexels.com/photos/13081260/pexels-photo-13081260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile"
              className="size-full"
            />
          </div>
          <div className="flex-grow flex flex-col ms-2 xl:ms-4">
            <p className="font-bold xl:text-lg text-blue-950 text-nowrap">
              Bryan Doe
            </p>
            <p className="text-blue-500 text-xs xl:text-sm">Admin</p>
          </div>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className={`text-blue-950 border px-2 py-1 relative rounded ${
              showMenu ? '' : 'hover:bg-gray-100'
            } cursor-pointer`}
          >
            <FontAwesomeIcon icon={faEllipsisV} />
            {showMenu && (
              <div className="absolute shadow-lg rounded-md overflow-hidden h-28 w-36 top-3 -left-36 bg-gray-100">
                <ul className="w-full text-center h-full flex flex-col justify-between ">
                  <li className="border-b h-full flex justify-center items-center hover:bg-gray-200">
                    Profile
                  </li>
                  <li className="border-b h-full flex justify-center items-center hover:bg-gray-200">
                    Settings
                  </li>
                  <li
                    onClick={logout}
                    className="border-b h-full flex justify-center items-center hover:bg-gray-200"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="borde-b border-blue-100 px-4 xl:px-8 pt-4">
          <p className="font-bold xl:text-lg text-blue-950 text-nowrap">
            Quick Actions
          </p>
        </div>
      </div>
    </div>
  );
}
