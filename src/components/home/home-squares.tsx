"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomeSquares() {
  const router = useRouter();

  useEffect(() => {
    // Prefetch the routes
    router.prefetch("/questions");
    router.prefetch("/academic-majors");
  }, [router]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <div className="mt-[75px] w-[90%] opacity-75 sm:w-[75%] flex flex-col sm:flex-row justify-evenly">
      <div className="h-[200px] w-full sm:w-[350px] rounded-2xl border-white border-2 border-opacity-50 flex flex-col items-center justify-around p-3 mb-4 sm:mb-0">
        <div>
          <h1 className="text-white text-2xl sm:text-3xl font-bold leading-normal sm:leading-tight tracking-tight text-center">
            أسئلة عامة
          </h1>
          <h1 className="text-white  sm:text-xl leading-normal sm:leading-tight tracking-tight text-center">
            حول ما قبل وبعد القبول في الجامعة
          </h1>
        </div>
        <button
          className="bg-white  h-[30%] w-[90%] rounded-3xl text-black text-1xl sm:text-2xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center hover:bg-gray-200"
          onClick={() => handleNavigation("/questions")}
        >
          اكتشف
        </button>
      </div>
      <div className="h-[200px] w-full sm:w-[350px] rounded-2xl border-white border-2 border-opacity-50 flex flex-col items-center justify-around p-3 mb-4 sm:mb-0">
        <div>
          <h1 className="text-white text-2xl sm:text-3xl font-bold leading-normal sm:leading-tight tracking-tight text-center">
            التخصصات الأكاديمية
          </h1>
          <h1 className="text-white  sm:text-xl leading-normal sm:leading-tight tracking-tight text-center">
            تعرف أكثر على التخصصات الأكاديمية
          </h1>
        </div>
        <button
          className="bg-white h-[30%] w-[90%] rounded-3xl text-black text-1xl sm:text-2xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center hover:bg-gray-200"
          onClick={() => handleNavigation("/academic-majors")}
        >
          اكتشف
        </button>
      </div>
    </div>
  );
}
