'use client';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SalesSummary from '@/components/SalesSummary';
import ChartCard from '@/components/ChartCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faEllipsisV,
  faFile,
  faFileExport,
  faTruck,
  faVanShuttle,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'nextjs-toploader/app';
import ProductsTable from '@/components/ProductsTable';
import SalesOrder from '@/components/SalesOrder';
import { salesData } from '@/data';
import { Label, Select } from 'flowbite-react';
import Link from 'next/link';
import Image from 'next/image';
config.autoAddCss = false;

export default function Home() {
  const [showMenu, setShowMenu] = useState(false),
    router = useRouter();
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
    <div className="h-full max-w-[100%] grid grid-cols-4 font-primary">
      <div className=" col-span-4 md:col-span-3 w-full bg-white dark:bg-gray-700 max-h-full overflow-y-auto">
        <SalesSummary />
        <ChartCard />
        {/* <ProductsTable /> */}
        <div className="flex flex-col gap-2 pb-8 pt-4">
          <div className="flex justify-between items-center px-8 pt-4 pb-4">
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
      <div className="bg-white border-s-2 right-0 border-blue-50 hidden md:inline col-span-1 dark:bg-blue-950">
        <div className="h-28 w-full border-b border-blue-100 px-4 xl:px-8 flex justify-center items-center flex-row">
          <div className="h-12 w-12 min-h-12 min-w-12 overflow-hidden rounded-full">
            <img
              src="https://images.pexels.com/photos/13081260/pexels-photo-13081260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile"
              className="size-full"
            />
          </div>
          <div className="flex-grow flex flex-col ms-2 xl:ms-4">
            <p className="font-bold xl:text-lg dark:text-blue-50 text-blue-950 text-nowrap">
              Bryan Doe
            </p>
            <p className="text-blue-500 text-xs xl:text-sm dark:text-blue-300">
              Admin
            </p>
          </div>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`text-blue-950 dark:text-blue-50 border px-2 py-1 relative rounded ${
              showMenu ? '' : 'hover:bg-gray-100 dark:hover:bg-gray-950'
            } cursor-pointer`}
          >
            <FontAwesomeIcon icon={faEllipsisV} />
            {showMenu && (
              <div className="absolute shadow-lg rounded-md overflow-hidden h-28 w-36 top-3 -left-36 bg-gray-100 dark:bg-gray-900">
                <ul className="w-full text-center h-full flex flex-col justify-between ">
                  <li
                    tabIndex={0}
                    className="border-b h-full dark:border-gray-700 flex justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-950"
                  >
                    Profile
                  </li>
                  <li
                    tabIndex={0}
                    className="border-b dark:border-gray-700 h-full flex justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-950"
                  >
                    Settings
                  </li>
                  <li
                    tabIndex={0}
                    onClick={logout}
                    className="h-full flex justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-950"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
        <div className="border-b border-blue-50 px-4 xl:px-8 pt-4 pb-8">
          <p className="font-bold xl:text-lg text-blue-950 text-nowrap dark:text-blue-50">
            Quick Actions
          </p>

          <div className="flex flex-col gap-4 pt-4 text-gray-500 dark:text-gray-400 ps-1 text-sm">
            <Link className="hover:underline" href={'#'}>
              <FontAwesomeIcon icon={faFile} /> Create Order
            </Link>
            <Link className="hover:underline" href={'#'}>
              <FontAwesomeIcon icon={faBoxOpen} /> Add Product
            </Link>
            <Link className="hover:underline" href={'#'}>
              <FontAwesomeIcon icon={faTruck} /> Add Supplier
            </Link>
            <Link className="hover:underline" href={'#'}>
              <FontAwesomeIcon icon={faFileExport} /> Export
            </Link>
          </div>
        </div>

        <div className="px-4 xl:px-8 pt-4 pb-5">
          <p className="font-bold xl:text-lg text-blue-950 text-nowrap dark:text-blue-50">
            Fast Moving Items
          </p>

          <div className="flex flex-col gap-6 pt-6 text-gray-500 dark:text-gray-400 ps-1 text-sm">
            <Link className="hover:underline" href={'#'}>
              <div className="flex flex-row gap-2 items-center  ">
                <div className="size-9 rounded-full overflow-hidden bg-blue-700">
                  <img
                    src={'./images/prod.jpeg'}
                    alt="product image"
                    className="w-full h-full object-cover"
                  />
                </div>
                Macbook Pro
              </div>
            </Link>
            <Link className="hover:underline" href={'#'}>
              <div className="flex flex-row gap-2 items-center  ">
                <div className="size-9 rounded-full overflow-hidden bg-blue-700">
                  <img
                    src={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCeXwvg3aZZPg-9z6G_NP5YEU5VGE2I-tNQ&s'
                    }
                    alt="product image"
                    className="w-full h-full object-cover"
                  />
                </div>
                Zoom75
              </div>
            </Link>
            <Link className="hover:underline" href={'#'}>
              <div className="flex flex-row gap-2 items-center  ">
                <div className="size-9 rounded-full overflow-hidden bg-blue-700">
                  <img
                    src={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm4pNSdOftAN8oneuVCQzTd2aJD2exuCBe7w&s'
                    }
                    alt="product image"
                    className="w-full h-full object-cover"
                  />
                </div>
                Airpods Pro
              </div>
            </Link>
            <Link className="hover:underline" href={'#'}>
              <div className="flex flex-row gap-2 items-center  ">
                <div className="size-9 rounded-full overflow-hidden bg-blue-700">
                  <img
                    src={
                      'https://bsimg.nl/images/samsung-galaxy-z-fold-4-256gb-groen_2.jpg/Bl_Awokhr_PJrjQhWoVIl2rtdLk%3D/fit-in/0x0/filters%3Aupscale%28%29'
                    }
                    alt="product image"
                    className="w-full h-full object-cover"
                  />
                </div>
                Samsung Galaxy Fold
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
