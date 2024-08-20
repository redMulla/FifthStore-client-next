import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type SalesCardProps = {
  icon: IconProp;
  title: string;
  value: string;
  color?: string;
};

const SalesCard: React.FC<SalesCardProps> = ({
  icon,
  title,
  value,
  color = "red",
}) => {
  return (
    <div className="px-6 py-4 flex flex-row flex-nowrap bg-white rounded-lg items-center">
      <div
        className={`h-10 w-10 rounded-full text-${color}-600 bg-${color}-100 flex items-center justify-center`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className=" flex flex-col ms-3 gap-1">
        <span className="text-gray-700 font-semibold">{value}</span>

        <span className="text-gray-500 text-sm">{title}</span>
      </div>
    </div>
  );
};

export default SalesCard;
