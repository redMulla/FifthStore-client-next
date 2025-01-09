'use client';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faEllipsisV,
  faFile,
  faFileExport,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'nextjs-toploader/app';
import Link from 'next/link';
import NewProduct from '@/components/NewProduct';

type Props = {
  dash?: boolean;
};

export const SideAction = ({ dash }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [addProd, setAddProd] = useState(false),
    router = useRouter();

  const user = useUser().user;

  const logout = () => {
    localStorage.removeItem('jwtToken');
    router.push('/login');
  };

  return (
    <div className="bg-white border-s-2 right-0 border-blue-50 hidden md:inline col-span-1 dark:bg-blue-950 h-full max-h-full overflow-auto">
      <div className="h-28 w-full border-b border-blue-100 px-4 xl:px-8 flex justify-center items-center flex-row">
        <div className="h-12 w-12 min-h-12 min-w-12 overflow-hidden rounded-full">
          <img
            src="https://images.pexels.com/photos/13081260/pexels-photo-13081260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile"
            className="size-full"
          />
        </div>
        <div className="flex-grow flex flex-col ms-2 xl:ms-4 me-2">
          <p className="font-bold truncate xl:text-lg dark:text-blue-50 text-blue-950 text-nowrap">
            {user?.name}
          </p>
          <p className="text-blue-500 text-xs xl:text-sm dark:text-blue-300">
            {user?.role}
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
          <div
            className="hover:underline cursor-pointer"
            onClick={() => setAddProd(!addProd)}
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faBoxOpen} /> Add Product
          </div>
          <NewProduct isEnabled={addProd} setIsEnabled={setAddProd} />
          <Link className="hover:underline" href={'#'}>
            <FontAwesomeIcon icon={faTruck} /> Add Supplier
          </Link>
          <Link className="hover:underline" href={'#'}>
            <FontAwesomeIcon icon={faFileExport} /> Export
          </Link>
        </div>
      </div>

      {dash ? (
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
      ) : (
        <div className="px-4 xl:px-8 pt-4 pb-5">
          <p className="font-bold xl:text-lg text-blue-950 text-nowrap dark:text-blue-50">
            Recent Activity
          </p>

          {/* <div className="flex flex-col gap-6 pt-6 text-gray-500 dark:text-gray-400 ps-1 text-sm">
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
          </div> */}
        </div>
      )}
    </div>
  );
};
