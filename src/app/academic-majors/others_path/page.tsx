"use client";
import { Tajawal } from "next/font/google";
import { getMajors, isNotEmpty } from "./action";
import { useEffect, useState } from "react";
import { AcademicMajorsInterface } from "../../../../interfaces/major";
import MajorsList from "@/components/academic-majors/majors-list";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function Other() {
  const [majors, setMajors] = useState<AcademicMajorsInterface[]>();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setMajors(await getMajors());
  }

  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] to-80%">
        <div className="flex flex-col items-start opacity-80 justify-center px-5 pt-12 sm:pt-16">
          <h1 className="text-white opacity-75 text-4xl mb-14 sm:mb-24 sm:text-6xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center">
            مسار التخصصات والفنون الأخرى
          </h1>
          <MajorsList majorsList={majors!} />
        </div>
      </div>
    </main>
  );
}
