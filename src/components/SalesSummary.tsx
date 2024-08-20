import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SalesSummary = () => {
  return (
    <div className="max-w-full overflow-x-auto h-44 flex flex-row flex-nowrap items-center justify-between gap-3">
      {/* CARD SECTION */}
      <div className="px-6 py-4 flex flex-row flex-nowrap bg-white rounded-lg items-center">
        <div className="h-10 w-10 rounded-full text-red-600 bg-red-100 flex items-center justify-center">
          <FontAwesomeIcon icon={faChartColumn} />
        </div>
        <div className=" flex flex-col ms-2">
          <span className="text-gray-700 font-semibold">143.3k</span>

          <span className="text-gray-500">Today’s Sale</span>
        </div>
      </div>
    </div>
  );
};

export default SalesSummary;
