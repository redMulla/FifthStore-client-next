'use client';

import axios from 'axios';
import Router from 'next/router';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 errors or other global error handling here
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized! Redirecting to login...');
      localStorage.removeItem('jwtToken');
      Router.push('/login');
    }
    return Promise.reject(error);
  },
);
export default api;
