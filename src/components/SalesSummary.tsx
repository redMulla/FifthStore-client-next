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

const SalesSummary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalProd, setTotalProd] = useState(0);
  const salesArr = [
    {
      icon: faChartColumn,
      title: "Today's Sales",
      value: '143.3k',
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
      setIsLoading(false);
    });

    const socket = io('http://localhost:4000', {
      withCredentials: true,
    });

    socket.on('dashboardUpdate', (data) => {
      console.log('Dashboard Update Recieved', data);
      setTotalProd(data.totalProducts);

      console.log('WEBSOCKET DATA', data);
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
        />
      ))}
    </div>
  );
};

export default SalesSummary;
