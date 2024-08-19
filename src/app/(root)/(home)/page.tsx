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
    <main className="h-[100%] w-[100%] flex items-center justify-center bg-blue-100 text-blue-950 flex-col">
      <h1 className="text-3xl font-bold pb-6">Home Page App</h1>
    </main>
  );
}
