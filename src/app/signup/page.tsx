import SignUp from "@/components/signUp";
import React from "react";

export default function signup() {
  return (
    <main className="min-h-screen min-w-max flex items-center justify-center bg-slate-100 text-black flex-col overflow-scroll">
      <h1 className="text-3xl font-bold text-blue-950 pb-6">FifthStore App</h1>
      <SignUp />
    </main>
  );
}
