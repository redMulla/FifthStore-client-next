import LoginComponent from '../../../components/LoginComponent';

export default function Login() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left: Image Section */}
      <div
        className="flex-1 bg-cover bg-center bg-no-repeat transition-transform duration-500 md:w-3/4 lg:w-3/4"
        style={{
          backgroundImage: `url('./images/loginbg.jpg')`, // Replace with your image URL
        }}
      ></div>

      {/* Right: Login Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/4 lg:w-1/4 bg-blue-100 dark:bg-gray-900 text-black dark:text-gray-300 p-8 transition-all duration-500">
        <h1 className="text-4xl font-bold text-blue-950 dark:text-blue-100 pb-12">
          FifthStore App
        </h1>
        <LoginComponent />
      </div>
    </div>
  );
}
