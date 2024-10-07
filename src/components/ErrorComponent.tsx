import React from 'react';

interface ErrorComponentProps {
  err: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ err }) => {
  return (
    <p className="text-red-100 my-5 rounded-lg p-5 text-center left-0 right-0 mx-auto w-max px-10 bg-red-600 absolute top-0 error text-nowrap">
      {err}
    </p>
  );
};

export default ErrorComponent;
