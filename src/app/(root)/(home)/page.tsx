'use client';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import SalesSummary from '@/components/SalesSummary';
import ChartCard from '@/components/ChartCard';
config.autoAddCss = false;

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('jwtToken');
    if (!accessToken) {
      redirect('/login');
    } else {
      console.log(accessToken);
    }
  }, []);

  return (
    <div className="h-[100%] w-[100%] grid grid-cols-3">
      <div className="col-span-2 h-full w-full bg-white">
        <SalesSummary />
        <ChartCard />
        <h1 className="text-3xl font-bold text-blue-950">Home Page App</h1>
      </div>
      <div className="bg-white border-s-2 border-blue-50">
        <div className="h-28 w-full border-b border-blue-100 px-8 flex justify-center items-center flex-row">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <img
              src="https://images.pexels.com/photos/13081260/pexels-photo-13081260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile"
              className="size-full"
            />
          </div>
          <div className="flex-grow flex flex-col ms-4">
            <p className="font-bold text-lg text-blue-950">Bryan Doe</p>
            <p className="text-blue-500 text-sm">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
