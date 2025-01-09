'use client';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';
import SalesSummary from '@/components/SalesSummary';
import ChartCard from '@/components/ChartCard';

import SalesOrder from '@/components/SalesOrder';
import { salesData } from '@/data';
import { Select } from 'flowbite-react';
import { SideAction } from './SideAction';
config.autoAddCss = false;

export default function Home() {
  useEffect(() => {
    const accessToken = localStorage.getItem('jwtToken');
    if (!accessToken) {
      redirect('/login');
    }
  }, []);

  return (
    <div className="h-full max-w-[100%] grid grid-cols-4 font-primary">
      <div className=" col-span-4 md:col-span-3 w-full bg-white dark:bg-gray-700 max-h-full overflow-y-auto">
        <SalesSummary />
        <ChartCard />
        {/* <ProductsTable /> */}
        <div className="flex flex-col gap-2 pb-8 pt-4">
          <div className="flex justify-between items-center px-8 pt-4 pb-4 w-full">
            <h2 className="font-bold text-black dark:text-white text-2xl">
              Sales Order
            </h2>

            <div className="w-24">
              <Select id="countries" required>
                <option>7 days</option>
                <option>30 days</option>
                <option>60 days</option>
                <option>1 year</option>
              </Select>
            </div>
          </div>
          <SalesOrder sales={salesData} />
        </div>
      </div>

      {/* Sidebar */}
      <SideAction dash={true} />
    </div>
  );
}
