'use client';

import { api } from '@/api';
import {
  faEye,
  faEyeSlash,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'nextjs-toploader/app';
import ErrorComponent from './ErrorComponent';

const LoginComponent = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    if (error) {
      setShowErrorMessage(true);
      const timeoutId = setTimeout(() => {
        setShowErrorMessage(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  const router = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setError(null);
    e.preventDefault();
    setLoading(true);
    setShowErrorMessage(false);
    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }
    api
      .post('auth/login/', { email, password })
      .then((res) => {
        console.log('Login Successful:', res.data);

        const accessToken = res.data.accessToken;

        localStorage.setItem('jwtToken', accessToken);
        setLoading(false);
        router.push('/');
      })
      .catch((err) => {
        // const { status, data } = err.response;

        // setError(`${status}: ${data.message}`);
        setError('Error!! Something went wrong');
        console.log('Error88888888888:', err);
        setLoading(false);
        console.error('Error:', error);
      });
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="flex flex-col rounded-lg w-full bg-gray-100 dark:bg-gray-700 p-8 border dark:border-gray-500 border-gray-400 py-12 shadow-2xl font-primary">
      <h1 className="text-3xl font-bold text-blue-950 pb-2 text-center dark:text-blue-600">
        Login
      </h1>
      <p className="text-center pb-6">
        or{' '}
        <Link href="/signup" className="text-blue-600 dark:text-blue-400">
          Register?
        </Link>
      </p>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="email"
          className="block text-lg pb-2 leading-6 text-gray-900 dark:text-gray-400"
          id="email"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full border border-gray-700 rounded bg-gray-200 h-14 dark:bg-gray-800 dark:text-white text-black px-3"
          placeholder="Enter your email"
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
        />

        <label
          htmlFor="password"
          className="block text-lg pb-2 leading-6 text-gray-900 pt-4 dark:text-gray-400"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={passwordShown ? 'text' : 'password'}
            name="password"
            id="password"
            className=" w-full border border-gray-700 rounded bg-gray-200 h-14 text-black px-3 mb-5  dark:bg-gray-800 dark:text-white"
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
        {showErrorMessage && !isLoading && (
          <ErrorComponent err={error as string}></ErrorComponent>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-5 bg-blue-500 py-3 rounded-lg text-white hover:bg-blue-600 w-full"
        >
          {isLoading ? (
            <FontAwesomeIcon icon={faSpinner} className="fa-spin" size="lg" />
          ) : (
            'Login'
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
