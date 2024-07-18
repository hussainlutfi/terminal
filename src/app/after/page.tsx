"use client";

import { QAAfter } from "../../../data/after";
import AccordionList from "../components/accordionList";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function AfterPage() {
  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] to-80%">
        <div className="flex flex-col items-start justify-center px-5 pt-12 sm:pt-16">
          <h1 className="text-white text-3xl mb-[20px] sm:text-6xl sm:mb-[45px] font-extrabold leading-normal sm:leading-tight tracking-tight text-center">
            بعد القبول !
          </h1>
          <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
            اللغة
          </h1>
          <AccordionList accordionList={QAAfter} />
          <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
            التحضيري
          </h1>
          <AccordionList accordionList={QAAfter} />
          <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
            الانتساب والتعلم عن بعد
          </h1>
          <AccordionList accordionList={QAAfter} />
          <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
            اختبارات بعد القبول
          </h1>
          <AccordionList accordionList={QAAfter} />
          <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
            اسئلة الرغبات والتخصيص والتسكين
          </h1>
          <AccordionList accordionList={QAAfter} />

          <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
            الصحة النفسية
          </h1>
          <AccordionList accordionList={QAAfter} />
          <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
            أخرى
          </h1>
          <AccordionList accordionList={QAAfter} />
        </div>
      </div>
    </main>
  );
}
