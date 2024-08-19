import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-center bg-white h-14 border-b-2 border-black text-gray-900">
      <div className="flex flex-row justify-between max-h-[100%] container max-2xl px-6">
        <div className="max-h-[100%] flex items-center">
          {/* <Image src={"/images/Logo.png"} alt="logo" width={} /> */}
          <img
            src="/images/Logo.png"
            alt="logo"
            className="max-h-[80%] rounded-lg"
          />
        </div>
        <div className="h-[100%] flex items-center relative">
          <input
            type="text"
            placeholder="search products"
            className="w-[200px] rounded-2xl px-2 pe-8 h-8 border-0 ring-1 ring-inset ring-gray-500 hover:bg-gray-100 placeholder:text-gray-300 focus:outline-none"
          />
          <a className="absolute right-3 text-gray-400 cursor-pointer">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
