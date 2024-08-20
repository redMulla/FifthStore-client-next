"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathName = usePathname();

  return (
    <div className="min-w-60 bg-blue-50">
      <ul className=" text-center px-3 mt-3 font-semibold">
        <Link href="/">
          <li
            className={`${
              pathName === "/"
                ? "bg-blue-500 text-white"
                : "text-black hover:bg-blue-500 hover:text-white"
            } p-3 border-black rounded-lg mb-3`}
          >
            Dashboard
          </li>
        </Link>
        <Link href="/inventory">
          <li
            className={`${
              pathName === "/inventory"
                ? "bg-blue-500 text-white"
                : "text-black hover:bg-blue-500 hover:text-white"
            } p-3 border-black rounded-lg mb-3`}
          >
            Inventory
          </li>
        </Link>
        <Link href="/sales">
          <li
            className={`${
              pathName === "/sales"
                ? "bg-blue-500 text-white"
                : "text-black hover:bg-blue-500 hover:text-white"
            } p-3 border-black rounded-lg mb-3`}
          >
            Sales Orders
          </li>
        </Link>
        <Link href="/suppliers">
          <li
            className={`${
              pathName === "/suppliers"
                ? "bg-blue-500 text-white"
                : "text-black hover:bg-blue-500 hover:text-white"
            } p-3 border-black rounded-lg mb-3`}
          >
            Suppliers
          </li>
        </Link>
        <Link href="/reports">
          <li
            className={`${
              pathName === "/reports"
                ? "bg-blue-500 text-white"
                : "text-black hover:bg-blue-500 hover:text-white"
            } p-3 border-black rounded-lg mb-3`}
          >
            Reports
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
