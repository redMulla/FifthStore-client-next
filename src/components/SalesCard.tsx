import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShimmerText } from 'shimmer-effects-react';

type SalesCardProps = {
  icon: IconProp;
  title: string;
  value: string;
  color: string;
  loading?: boolean;
};

const SalesCard: React.FC<SalesCardProps> = ({
  icon,
  title,
  value,
  color,
  loading = true,
}) => {
  return (
    <div className="px-6 py-4 flex flex-row flex-nowrap bg-white dark:bg-blue-950 rounded-lg items-center hover:scale-110 transition duration-500 ease-in-out font-primary">
      <div
        className={`h-10 w-10 rounded-full text-${color}-600 bg-${color}-100 dark:bg-${color}-400 flex items-center justify-center`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className=" flex flex-col ms-3 gap-1">
        {loading ? (
          <div className="w-12">
            <ShimmerText mode="light" height={12} line={1} />
          </div>
        ) : (
          <span className="text-gray-700 font-semibold text-nowrap dark:text-gray-100">
            {value}
          </span>
        )}

        <span className="text-gray-500 text-sm text-nowrap">{title}</span>
      </div>
    </div>
  );
};

export default SalesCard;
