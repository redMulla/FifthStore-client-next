'use client';
import {
  faBoxesStacked,
  faGauge,
  faPieChart,
  faShoppingBag,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SideBar = () => {
  const pathName = usePathname();

  return (
    <div className="w-16 lg:min-w-60 bg-blue-50 dark:bg-gray-800">
      <ul className=" text-center px-1 lg:px-3 mt-3 font-semibold">
        <Link href="/">
          <li
            className={`${
              pathName === '/'
                ? 'bg-blue-500 text-white'
                : 'text-black hover:bg-blue-500 hover:text-white  dark:text-blue-50'
            } p-3 border-black rounded-lg mb-3`}
          >
            <span>
              <FontAwesomeIcon icon={faGauge} />{' '}
            </span>
            <span className="hidden lg:inline">Dashboard</span>
          </li>
        </Link>
        <Link href="/inventory">
          <li
            className={`${
              pathName === '/inventory'
                ? 'bg-blue-500 text-white'
                : 'text-black hover:bg-blue-500 hover:text-white  dark:text-blue-50'
            } p-3 border-black rounded-lg mb-3`}
          >
            <span>
              <FontAwesomeIcon icon={faBoxesStacked} />{' '}
            </span>
            <span className="hidden lg:inline">Inventory</span>
          </li>
        </Link>
        <Link href="/sales">
          <li
            className={`${
              pathName === '/sales'
                ? 'bg-blue-500 text-white'
                : 'text-black hover:bg-blue-500 hover:text-white  dark:text-blue-50'
            } p-3 border-black rounded-lg mb-3`}
          >
            <span>
              <FontAwesomeIcon icon={faShoppingBag} />{' '}
            </span>
            <span className="hidden lg:inline">Sales Orders</span>
          </li>
        </Link>
        <Link href="/suppliers">
          <li
            className={`${
              pathName === '/suppliers'
                ? 'bg-blue-500 text-white'
                : 'text-black hover:bg-blue-500 hover:text-white dark:text-blue-50'
            } p-3 border-black rounded-lg mb-3`}
          >
            <span>
              <FontAwesomeIcon icon={faTruck} />{' '}
            </span>
            <span className="hidden lg:inline">Suppliers</span>
          </li>
        </Link>
        <Link href="/reports">
          <li
            className={`${
              pathName === '/reports'
                ? 'bg-blue-500 text-white'
                : 'text-black hover:bg-blue-500 hover:text-white dark:text-blue-50'
            } p-3 border-black rounded-lg mb-3`}
          >
            <span>
              <FontAwesomeIcon icon={faPieChart} />{' '}
            </span>
            <span className="hidden lg:inline">Reports</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
