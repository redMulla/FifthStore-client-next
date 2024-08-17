"use client";
import api from "@/api";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Link from "next/link";

const LoginComponent = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    api
      .post("auth/login/", { email, password })
      .then((res) => {
        console.log("Login Successful:", res.data);

        const accessToken = res.data.accessToken;

        localStorage.setItem("jwtToken", accessToken);
        router.push("/");
      })
      .catch((err) => {
        const { status, data } = err.response;

        setError(`${status}: ${data.message}`);
        console.error("Error:", error);
      });
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="flex flex-col rounded-lg bg-gray-100 p-8 border border-gray-400 py-12 shadow-2xl">
      <h1 className="text-3xl font-bold text-blue-950 pb-2 text-center">
        Login
      </h1>
      <p className="text-center pb-6">
        or{" "}
        <Link href="/signup" className="text-blue-600">
          Register?
        </Link>
      </p>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="email"
          className="block text-lg pb-2 leading-6 text-gray-900"
          id="email"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="min-w-72 border border-gray-700 rounded bg-gray-200 h-14 text-black px-3"
          placeholder="Enter your email"
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
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
            className="min-w-72 border border-gray-700 rounded bg-gray-200 h-14 text-black px-3 mb-5"
            placeholder="Enter your password"
            onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          />
          <a
            className="absolute right-3 top-4 text-gray-500 hover:text-gray-700"
            onClick={togglePasswordVisiblity}
          >
            {passwordShown ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </a>
        </div>
        {error && (
          <p className="text-red-600 my-5 rounded-lg p-5 text-center left-0 right-0 mx-auto w-max px-10 bg-red-200 absolute top-0 error text-nowrap">
            {error}
          </p>
        )}
        <button
          type="submit"
          className="mt-5 bg-green-600 py-3 rounded-lg text-white hover:bg-green-700 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
