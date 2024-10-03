import {
  faChartColumn,
  faCalendarDays,
  faDollarSign,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import SalesCard from './SalesCard';

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
    color: 'red',
  },
  {
    icon: faBagShopping,
    title: 'Products',
    value: '343',
    color: 'blue',
  },
];

const SalesSummary = () => {
  return (
    <div className="max-w-full bg-blue-50 dark:bg-gray-800 overflow-x-auto h-44 flex flex-row flex-nowrap items-center justify-around gap-3">
      {/* CARD SECTION */}
      {salesArr.map((item, index) => (
        <SalesCard
          key={index}
          icon={item.icon}
          title={item.title}
          value={item.value}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default SalesSummary;
