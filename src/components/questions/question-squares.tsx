"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function QuestionsSquares() {
  const router = useRouter();

  useEffect(() => {
    // Prefetch the routes
    router.prefetch("/questions/before");
    router.prefetch("/questions/after");
  }, [router]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <div className="mt-[75px] w-[90%] opacity-75 sm:w-[75%] flex flex-col sm:flex-row justify-evenly">
      <div className="h-[150px] w-full sm:w-[350px] rounded-2xl border-white border-2 border-opacity-50 flex flex-col items-center justify-around p-3 mb-4 sm:mb-0">
        <h1 className="text-white text-1xl sm:text-2xl font-bold leading-normal sm:leading-tight tracking-tight text-center">
          أسئلة ما قبل القبول في الجامعة
        </h1>
        <button
          className="bg-white  h-[40%] w-[90%] rounded-3xl text-black text-1xl sm:text-2xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center hover:bg-gray-200"
          onClick={() => handleNavigation("/questions/before")}
        >
          اكتشف
        </button>
      </div>
      <div className="h-[150px] w-full  sm:w-[350px] rounded-2xl border-white border-2 border-opacity-50 flex flex-col items-center justify-around p-3">
        <h1 className="text-white text-1xl sm:text-2xl font-bold leading-normal sm:leading-tight tracking-tight text-center">
          أسئلة ما بعد القبول في الجامعة
        </h1>
        <button
          className="bg-white h-[40%] w-[90%] rounded-3xl text-black text-1xl sm:text-2xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center hover:bg-gray-200"
          onClick={() => handleNavigation("/questions/after")}
        >
          اكتشف
        </button>
      </div>
    </div>
  );
}
