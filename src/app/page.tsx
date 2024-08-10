"use client";
import { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
config.autoAddCss = false;

export default function Home() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      // setError("Please fill in all fields");
      return;
    }
    console.log("form submitted");
    // router.push("/dashboard");
    console.log(email, password);
  }

  const login = () => {
    handleSubmit;
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <form onSubmit={handleSubmit}>
      <main className="min-h-screen min-w-max flex items-center justify-center bg-slate-100 text-black flex-col">
        <h1 className="text-3xl font-bold text-blue-950 pb-6">
          FifthStore App
        </h1>
        <div className="flex flex-col rounded-lg bg-gray-100 p-8 border border-gray-400 py-12 shadow-2xl">
          <label
            htmlFor="email"
            className="block text-lg pb-2 leading-6 text-gray-900"
            id="email"
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="min-w-72 border border-gray-700 rounded bg-gray-200 h-14 text-black px-3"
            placeholder="Enter your email"
            onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          />

          <label
            htmlFor="password"
            className="block text-lg pb-2 leading-6 text-gray-900 pt-4"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              id="password"
              className="min-w-72 border border-gray-700 rounded bg-gray-200 h-14 text-black px-3"
              placeholder="Enter your password"
            />
            <button
              className="absolute right-3 top-4 text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisiblity}
            >
              {passwordShown ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="mt-10 bg-green-600 py-3 rounded-lg text-white hover:bg-green-700 w-full"
          >
            Login
          </button>
        </div>
      </main>
    </form>
  );
}
