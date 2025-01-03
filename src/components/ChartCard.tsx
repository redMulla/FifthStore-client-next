import React from 'react';
// import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { Button, Tooltip } from 'flowbite-react';

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false}), ChartCard = () => {
  const chartOptions: ApexOptions = {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 61, 58, 63],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 87, 105, 91],
      },
      {
        name: 'Cash OutFlow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 35, 41, 36],
      },
    ],
    chart: {
      background: '#283d66',
      foreColor: '#fff',
      height: 350,
      type: 'bar',
    },
    title: {
      text: 'Financial Performance',
      align: 'center',
    },
    subtitle: {
      text: 'Monthly Data',
      align: 'center',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return '$ ' + val + ' thousands';
        },
      },
    },
  };

  return (
      <div className="max-w-full px-5 overflow-auto bg-[#283d66] text-black pt-4 border-b-2 border-blue-50">
        <div className="min-w-96 w-full h-60 md:h-96 relative">
          <Chart
              options={chartOptions}
              height={'95%'}
              series={chartOptions.series}
              type="bar"
          />
          <Button className="absolute top-0 text-white bg-blue-600 hover:bg-blue-700 px-3">
            <Tooltip content="Stats">
              <span className="size-full">More</span>
            </Tooltip>
          </Button>
        </div>
      </div>
  );
};

export default ChartCard;
