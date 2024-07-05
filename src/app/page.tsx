"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MainSquares from "./components/main-squares";
import HomeHeader from "./components/home-header";
import QuestionSquare from "./components/question-input";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Prefetch the routes
    router.prefetch("/before");
    router.prefetch("/after");
  }, [router]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <main className="flex min-h-screen min-w-full">
      <div className="w-full bg-gradient-to-br from-[#ff472b51] to-[#061f407e] to-80%">
        <div className="flex flex-col items-center justify-center pt-16 sm:pt-16">
          <HomeHeader />
          <MainSquares />
          <QuestionSquare />
        </div>
      </div>
    </main>
  );
}
