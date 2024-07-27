"use client";
import HomeHeader from "../components/home/home-header";
import { Tajawal } from "next/font/google";
import HomeSquares from "@/components/home/home-squares";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/footer";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] to-80%">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center pt-6"
        >
          <HomeHeader />
          <HomeSquares />
          <Footer/>
        </div>
      </div>
    </main>
  );
}
