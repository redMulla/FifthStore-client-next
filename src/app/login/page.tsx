import LoginComponent from "../../components/loginComponent";

export default function Login() {
  return (
    <main className="min-h-screen min-w-max flex items-center justify-center bg-slate-100 text-black flex-col">
      <h1 className="text-3xl font-bold text-blue-950 pb-6">FifthStore App</h1>
      <LoginComponent />
    </main>
  );
}