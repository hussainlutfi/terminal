"use client";
import Paths from "@/components/academic-majors/paths";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});


export default function Majors() {
  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] to-80%">
        <div className="flex flex-col items-center justify-center pt-16 sm:pt-16">
          <h1 className="text-white opacity-75 text-4xl mb-7 sm:mb-12 sm:text-6xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center">
            التخصصات الأكاديمية
          </h1>
          <Paths />
        </div>
      </div>
    </main>
  );
}
