import React from 'react';
import {
  faChartColumn,
  faCalendarDays,
  faDollarSign,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import SalesCard from './SalesCard';
import { useDashboard } from '@/context/DashboardContext';
require('dotenv').config();

const SalesSummary = () => {
  const { dashboardData, isLoading } = useDashboard();
  const baseUrl = process.env.BASE_URL;
  const salesArr = [
    {
      icon: faChartColumn,
      title: "Today's Sales",
      value: dashboardData.todaySales,
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
      value: dashboardData.totalProducts,
      color: 'pink',
    },
  ];
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
