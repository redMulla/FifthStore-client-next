import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type SalesCardProps = {
  icon: IconProp;
  title: string;
  value: string;
  color: string;
};

const SalesCard: React.FC<SalesCardProps> = ({ icon, title, value, color }) => {
  return (
    <div className="px-6 py-4 flex flex-row flex-nowrap bg-white rounded-lg items-center hover:scale-110 transition ease-in-out">
      <div
        className={`h-10 w-10 rounded-full text-${color}-600 bg-blue-100 flex items-center justify-center`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className=" flex flex-col ms-3 gap-1">
        <span className="text-gray-700 font-semibold text-nowrap">{value}</span>

        <span className="text-gray-500 text-sm text-nowrap">{title}</span>
      </div>
    </div>
  );
};

export default SalesCard;