import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import LoginComponent from '../../../components/LoginComponent';

export default function Login() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left: Image Section */}
      <div
        className="flex-1 bg-cover bg-center bg-no-repeat transition-transform duration-500 md:w-2/4 lg:w-[75%] leftSide"
        style={{
          backgroundImage: `url('./images/loginbg.jpg')`,
        }}
      >
        <div className="size-full bg-gray-900 bg-opacity-15 dark:bg-opacity-25"></div>
      </div>

      {/* Right: Login Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-2/4 lg:w-[25%] bg-blue-100 dark:bg-gray-900 text-black dark:text-gray-300 p-8 transition-all duration-500 relative rightSide">
        <div className="absolute py-4 px-5 flex justify-end w-full top-0 start-0">
          <div className="py-2">
            <Flowbite>
              <DarkThemeToggle />
            </Flowbite>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-blue-950 dark:text-blue-100 pb-12">
          FifthStore App
        </h1>
        <LoginComponent />

        <div className="absolute bottom-0 start-0 w-full py-6 text-center">
          &copy;{' '}
          <a
            href="https://my-portfolio-iota-two-46.vercel.app/"
            target="blank"
            className="hover:text-blue-700"
          >
            Vassilly Ibinkwiye
          </a>
        </div>
      </div>
    </div>
  );
}
