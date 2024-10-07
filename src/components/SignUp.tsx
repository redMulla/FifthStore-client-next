'use client';
import api from '@/api';
import {
  faEye,
  faEyeSlash,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'nextjs-toploader/app';

const SignUp = () => {
  const router = useRouter();

  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, SetCheckPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (!email || !password || !name || !phone || !checkPassword) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (password !== checkPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    api
      .post('users', { email, password, phone, name })
      .then((res) => {
        console.log('Signup Successful:', res.data);
        setLoading(false);
        router.push('/login');
      })
      .catch((err) => {
        const { status, data } = err.response;

        setError(`${status}: ${data.message}`);
        setLoading(false);
        console.error('Error:', error);
      });
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="flex flex-col rounded-lg bg-gray-100 p-8 border border-gray-400 py-12 shadow-2xl min-h-max font-primary">
      <h1 className="text-3xl font-bold text-blue-950 pb-2 text-center">
        Sign Up
      </h1>
      <p className="text-center pb-6">
        already have an account?{' '}
        <Link href="/login" className="text-blue-600">
          login
        </Link>
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block text-lg leading-6 text-gray-900">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          id="name"
          className="min-w-full border border-gray-700 rounded bg-gray-200 h-14 text-black px-3"
          placeholder="Enter your full name"
          onChange={(e) => setName((e.target as HTMLInputElement).value)}
        />

        <label
          htmlFor="email"
          className="block text-lg pb-1 leading-6 text-gray-900 pt-1"
          id="email"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="min-w-full border border-gray-700 rounded bg-gray-200 h-14 text-black px-3"
          placeholder="Enter your email"
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
        />

        <label
          htmlFor="phone"
          className="block text-lg pb-1 leading-6 text-gray-900 pt-1"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="phone"
          required
          id="phone"
          className="min-w-full border border-gray-700 rounded bg-gray-200 h-14 text-black px-3"
          placeholder="Enter your Phone Number"
          onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
        />

        <label
          htmlFor="password"
          className="block text-lg pb-1 leading-6 text-gray-900 pt-1"
        >
          Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type={passwordShown ? 'text' : 'password'}
            name="password"
            id="password"
            className="min-w-full border border-gray-700 rounded bg-gray-200 h-14 text-black px-3"
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
        <label
          htmlFor="checkPassword"
          className="block text-lg pb-1 leading-6 text-gray-900 pt-1"
        >
          Re-enter password <span className="text-red-500">*</span>
        </label>
        <input
          type={passwordShown ? 'text' : 'password'}
          name="checkPassword"
          id="checkPassword"
          className="min-w-full border border-gray-700 rounded bg-gray-200 h-14 text-black px-3 mb-5"
          placeholder="Enter your password"
          onChange={(e) =>
            SetCheckPassword((e.target as HTMLInputElement).value)
          }
        />
        {error && (
          <p className="text-red-600 my-5 rounded-lg p-5 text-center left-0 right-0 mx-auto w-max px-10 bg-red-200 absolute top-0 error text-nowrap">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-5 bg-green-600 py-3 rounded-lg text-white hover:bg-green-700 w-full"
        >
          {isLoading ? (
            <FontAwesomeIcon icon={faSpinner} className="fa-spin" size="lg" />
          ) : (
            'Sign Up'
          )}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
