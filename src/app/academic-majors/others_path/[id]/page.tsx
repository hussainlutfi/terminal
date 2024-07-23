"use client";

import { useEffect, useState } from "react";
import { AcademicMajorsInterface } from "../../../../../interfaces/major";
import { getMajor } from "../action";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function SinceMajor({ params }: { params: { id: string } }) {
  const [major, setMajor] = useState<AcademicMajorsInterface>();

  function getEmbedUrl(url: string) {
    if (!url) return "";
    return url.replace("watch?v=", "embed/");
  }

  useEffect(() => {
    Get_Major();
  }, []);

  async function Get_Major() {
    setMajor(await getMajor(params.id));
  }

  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] to-80%">
        <div className="flex flex-col items-center justify-center pt-16 sm:pt-16">
          <h1 className="text-white opacity-75 text-4xl mb-7 sm:mb-12 sm:text-6xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center">
            {major?.major}
          </h1>
          <div className="flex border-4 border-white border-opacity-20 rounded-xl p-5 h-[195px] w-[320px] sm:h-[330px] sm:w-[560px] ">
            <iframe
              src={getEmbedUrl(major?.url!)}
              title="YouTube video player"
              className="w-full max-w-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}