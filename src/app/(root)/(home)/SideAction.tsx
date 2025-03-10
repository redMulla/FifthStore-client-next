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
import { Avatar, Dropdown } from 'flowbite-react';

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

  const colors = ['success', 'blue', 'pink', 'purple'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="bg-white border-s-2 right-0 border-blue-50 hidden md:inline col-span-1 dark:bg-blue-950 h-full max-h-full overflow-auto">
      <div className="h-28 w-full border-b border-blue-100 px-4 xl:px-8 items-center flex flex-row-reverse justify-end max-w-full">
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                img="https://images.pexels.com/photos/13081260/pexels-photo-13081260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                bordered
                color={randomColor}
                rounded
              />
            }
            className="dark:bg-gray-800"
          >
            <Dropdown.Header>
              <span className="block truncate text-sm font-bold">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
          </Dropdown>
        </div>

        <div className="space-y-1 font-medium text-black dark:text-white ps-2">
          <div className="font-bold">{user?.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {user?.role}
          </div>
        </div>
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
