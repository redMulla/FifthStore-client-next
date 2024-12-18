import { Toast } from 'flowbite-react';
import React from 'react';
import { HiCheck } from 'react-icons/hi';

const SuccessToast = ({ message }: { message?: string }) => {
  return (
    <div className="absolute top-16 right-10 rounded-md success">
      <Toast className=" bg-emerald-100 dark:bg-emerald-900 dark:text-white">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-200 text-green-500 dark:bg-green-700 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal me-2">
          {message ? message : 'Success'}
        </div>
        <Toast.Toggle className=" bg-emerald-100 dark:bg-emerald-900" />
      </Toast>
    </div>
  );
};

export default SuccessToast;
