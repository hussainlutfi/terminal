"use client";
import QuestionsSquares from "../../components/questions/question-squares";
import QuestionInput from "../../components/questions/question-input";
import { Tajawal } from "next/font/google";
import QuestionHeader from "@/components/questions/questions-header";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function Home() {
  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] to-80%">
        <div className="flex flex-col items-center justify-center pt-16 sm:pt-16">
          <QuestionHeader />
          <QuestionsSquares />
          <QuestionInput />
        </div>
      </div>
    </main>
  );
}
