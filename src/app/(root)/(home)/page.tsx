"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { useEffect } from "react";
config.autoAddCss = false;

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("jwtToken");
    if (!accessToken) {
      redirect("/login");
    } else {
      console.log(accessToken);
    }
  }, []);

  return (
    <div className="h-[100%] w-[100%] grid grid-cols-3 gap-4">
      <div className="col-span-2 flex items-center justify-center h-full w-full">
        <h1 className="text-3xl font-bold text-blue-950">Home Page App</h1>
      </div>
      <div className="bg-white border-s border-blue-950"></div>
    </div>
  );
}
