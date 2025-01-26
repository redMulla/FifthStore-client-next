'use client';
import ProductsTable from '@/components/ProductsTable';
import { SideAction } from '../SideAction';

const Inventory = () => {
  return (
    <div className="h-full max-w-[100%] grid grid-cols-4 font-primary">
      <div className=" col-span-4 md:col-span-3 w-full bg-white dark:bg-gray-700 max-h-full overflow-y-auto">
        <div className="py-10 bg-blue-50 dark:bg-gray-800 text-center">
          PlaceHolder
        </div>
        <div className="flex flex-col gap-2 pb-8 pt-6">
          <p className="text-xl font-bold text-black dark:text-white ps-6 pb-4">
            Product List
          </p>
          <ProductsTable />
        </div>
      </div>

      {/* Sidebar */}
      <SideAction dash={true} />
    </div>
  );
};

export default Inventory;
