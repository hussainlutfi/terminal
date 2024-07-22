"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { paths } from "../../../data/paths-page";

export default function Paths() {
  const router = useRouter();

  useEffect(() => {
    // Prefetch the routes
    router.prefetch("/academic-majors/healthy_path");
    router.prefetch("/academic-majors/engineering_path");
    router.prefetch("/academic-majors/cs_path");
    router.prefetch("/academic-majors/kbs_path");
    router.prefetch("/academic-majors/science_path");
    router.prefetch("/academic-majors/others_path");
  }, [router]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <div className="w-10/12 sm:w-3/4 pt-7 sm:pt-12 border-t-4 border-opacity-50 border-white">
      {paths.map((path, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } mb-7 sm:mb-14 pb-10 border-b-2 sm:pb-20 border-white border-opacity-20`}
        >
          <div className="sm:w-1/2">
            <div className="flex justify-center mb-3">
              <h1 className="text-white opacity-80 text-2xl sm:text-4xl font-extrabold text-center">
                {path.name}
              </h1>
              <h1 className="text-white opacity-80 text-4xl sm:text-6xl animate-bounce font-extrabold text-center">
                {path.emoji}
              </h1>
            </div>
            <h1 className="text-white opacity-75 sm:text-2xl text-center">
              {path.description}
            </h1>
            <div className="flex justify-center mt-5 ">
              <button
                className="bg-white  h-[45px] w-[200px] rounded-3xl text-black text-1xl sm:text-2xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center hover:bg-gray-200"
                onClick={() => handleNavigation(path.route)}
              >
                {path.button}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
