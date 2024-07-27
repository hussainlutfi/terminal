"use client";

import { useEffect, useState } from "react";
import { AcademicMajorsInterface } from "../../../../../interfaces/major";
import { getMajor } from "../action";
import { Tajawal } from "next/font/google";
import FormInput from "@/components/academic-majors/form-input";
import MajorQAs from "@/components/academic-majors/major-questions";
import Footer from "@/components/footer";

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
          <h1 className="text-white opacity-75 text-3xl mb-7 sm:mb-12 sm:text-6xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center">
            {major?.major}
          </h1>
          <div className="flex border-4 mb-8 sm:mb-16 border-white border-opacity-20 rounded-xl p-5 h-[195px] w-[320px] sm:h-[330px] sm:w-[560px] ">
            <iframe
              src={getEmbedUrl(major?.url!)}
              title="YouTube video player"
              className="w-full max-w-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <h1 className="sm:self-start sm:px-10 text-white opacity-75 text-lg sm:mb-8 sm:text-4xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center">
            الأسئلة الشائعة حول التخصص
          </h1>
          <MajorQAs major={major?.major!} />
          <FormInput major={major?.major!} />
          <Footer />
        </div>
      </div>
    </main>
  );
}
