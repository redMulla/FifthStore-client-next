'use client';
import {
  faChartColumn,
  faCalendarDays,
  faDollarSign,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import SalesCard from './SalesCard';
import { api } from '@/api';
import { io } from 'socket.io-client';
require('dotenv').config();

const SalesSummary = () => {
  const baseUrl = process.env.BASE_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [totalProd, setTotalProd] = useState(0);
  const [todaySales, setTodaySales] = useState(0);
  const salesArr = [
    {
      icon: faChartColumn,
      title: "Today's Sales",
      value: todaySales,
      color: 'red',
    },
    {
      icon: faCalendarDays,
      title: 'Yearly Total Sales',
      value: '$ 250,423',
      color: 'blue',
    },
    {
      icon: faDollarSign,
      title: 'Net Income',
      value: '$ 68.9k',
      color: 'purple',
    },
    {
      icon: faBagShopping,
      title: 'Products',
      value: totalProd,
      color: 'pink',
    },
  ];
  useEffect(() => {
    setIsLoading(true);
    api.get('/dashboard').then((response) => {
      console.log('HHHHHHHHHHHHHH', response.data);
      setTotalProd(response.data.totalProducts);
      setTodaySales(response.data.todaySales);
      setIsLoading(false);
    });

    const socket = io('http://localhost:4000', {
      withCredentials: true,
    });

    socket.on('dashboardUpdate', (data) => {
      console.log('Dashboard Update Recieved', data);
      setTotalProd(data.totalProducts);
      setTodaySales(data.todaySales);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="max-w-full bg-blue-50 dark:bg-gray-800 overflow-x-auto h-44 flex flex-row flex-nowrap items-center justify-around gap-3 font-primary">
      {/* CARD SECTION */}
      {salesArr.map((item, index) => (
        <SalesCard
          key={index}
          icon={item.icon}
          title={item.title}
          value={item.value.toString()}
          color={item.color}
          loading={isLoading}
        />
      ))}
    </div>
  );
};

export default SalesSummary;
