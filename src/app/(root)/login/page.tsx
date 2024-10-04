import LoginComponent from '../../../components/LoginComponent';

export default function Login() {
  return (
    <main className="min-h-screen min-w-max flex items-center justify-center bg-blue-100 dark:bg-gray-900 text-black dark:text-gray-300 flex-col overflow-hidden loginScreen">
      <h1 className="text-4xl font-bold text-blue-950 dark:text-blue-100 pb-12">
        FifthStore App
      </h1>
      <LoginComponent />
    </main>
  );
}
