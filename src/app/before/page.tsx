"use client";

import { QABefore } from "../../../data/before";
import AccordionList from "../components/accordionList";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function BeforePage() {
  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br bg-gradient-to-br from-[#51170e] to-[#031020] to-80%">
        <div className="flex flex-col items-start justify-center px-5 pt-12 sm:pt-16">
          <h1 className="text-white text-3xl mb-[45px] sm:text-5xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center">
            قبل القبول !
          </h1>
          <AccordionList accordionList={QABefore} />
        </div>
      </div>
    </main>
  );
}
