"use client";
import { Home } from "@/components/features/home";

export default function App() {
  return (
    <div className="p-6 rounded-md w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
      <header className="text-center mb-8">
        <h1 className="text-6xl font-bold text-white">Hello There 👋</h1>
      </header>

      <div className="text-center flex flex-col gap-8">
        <p className="text-white text-3xl">Are you looking for a</p>
        <Home />
      </div>
    </div>
  );
}
