"use client";
import HomeHeader from "../components/home/home-header";
import { Tajawal } from "next/font/google";
import HomeSquares from "@/components/home/home-squares";
import "./globals.css";

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
          <HomeHeader />
          <HomeSquares />
        </div>
      </div>
    </main>
  );
}
