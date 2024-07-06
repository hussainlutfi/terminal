"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MainSquares from "./components/main-squares";
import HomeHeader from "./components/home-header";
import QuestionSquare from "./components/question-input";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full">
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] to-80%">
        <div className="flex flex-col items-center justify-center pt-16 sm:pt-16">
          <HomeHeader />
          <MainSquares />
          <QuestionSquare />
        </div>
      </div>
    </main>
  );
}
