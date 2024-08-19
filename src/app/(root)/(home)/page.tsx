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
    <main className="min-h-screen min-w-max flex items-center justify-center bg-slate-100 text-black flex-col">
      <h1 className="text-3xl font-bold text-blue-950 pb-6">Home Page App</h1>
    </main>
  );
}
