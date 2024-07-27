"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { paths } from "../../../data/paths-page";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
    AOS.init({
      duration: 800,
    });
  }, [router]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-10/12 sm:w-3/4 pt-7 sm:pt-12 border-t-4 border-opacity-50 border-white mx-auto overflow-hidden ">
      {paths.map((path, index) => (
        <div
          key={index}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          className={`flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } pb-6 sm:pb-12 border-opacity-20 `}
        >
          <div
            onClick={() => handleNavigation(path.route)}
            className="sm:w-1/2 w-full px-3 rounded-3xl  hover:bg-white hover:bg-opacity-20"
          >
            <div className="transition ease-in-out delay-150 hover:scale-105">
              <img
                src={path.svg}
                alt="About services"
                className="w-[200px] lg:w-[270px] mx-auto opacity-70"
              />
              <h1 className="text-white opacity-80  text-2xl sm:text-4xl font-extrabold text-center ">
                {path.name} <i className="fas fa-arrow-left"></i>
              </h1>
            </div>
            <div className="flex justify-center mt-5">
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
