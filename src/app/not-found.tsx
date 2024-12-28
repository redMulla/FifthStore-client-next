'use client';

export default function NotFound() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center text-center bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-300">
      <div className="flex flex-col gap-4">
        <div className="max-w-[400px] w-100 dark:bg-gray-500 rounded-lg">
          <img
            className="h-auto w-[400px]"
            src="/images/404Error.svg"
            alt="Page not found"
          />
        </div>
        <span>
          Ouups{' '}
          <button
            className="text-blue-500 underline"
            onClick={() => window.history.back()}
          >
            Go back
          </button>
        </span>
      </div>
    </div>
  );
}
