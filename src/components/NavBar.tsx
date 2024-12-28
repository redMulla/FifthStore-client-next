import {
  faBars,
  faBell,
  faHamburger,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-center bg-white h-14 border-b-2 dark:bg-gray-900 border-blue-900 shadow text-gray-900">
      <div className="flex gap-4 flex-row justify-between max-h-[100%] mx-auto w-[1536px] max-w-[1536px] px-6">
        <div className="max-h-[100%] flex items-center">
          {/* <Image src={"/images/Logo.png"} alt="logo" width={} /> */}
          <img
            src="/images/Logo.png"
            alt="logo"
            className="max-h-[80%] rounded-lg"
          />
        </div>
        <div className="flex flex-row gap-2">
          <div className="h-[100%] hidden lg:flex items-center relative">
            <input
              type="text"
              placeholder="search"
              className="w-[200px] rounded-lg px-2 py-1 pe-8 h-8 border-0 ring-1 ring-inset ring-gray-500 dark:bg-gray-800 dark:text-gray-50 hover:bg-gray-100 placeholder:text-gray-300 focus:outline-none"
            />
            <a className="absolute right-3 text-gray-400 cursor-pointer">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </div>

          <div className="h-full ms-2 flex items-center relative text-blue-950 rotate-12 text-2xl cursor-pointer hover:text-blue-900">
            <FontAwesomeIcon icon={faBell} />
            <div className="h-3 w-3 rounded-full bg-red-500 absolute top-3 -right-1"></div>
          </div>
          <div className="lg:hidden flex h-full items-center ms-2 text-blue-950 mt">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
          <div className="py-2">
            <Flowbite>
              <DarkThemeToggle />
            </Flowbite>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
