import Image from "next/image";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full">
      <div className="w-full bg-gradient-to-br from-[#ff472b51] to-[#061f407e] to-80%">
        <div className="flex flex-col items-center justify-center pt-28 sm:pt-20">
          <div>
            <h1 className="text-white text-3xl sm:text-7xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center">
              فريق تيرمنال ✈️
            </h1>
            <h1 className="text-white text-1xl sm:text-3xl mt-2 leading-normal sm:leading-tight tracking-tight text-center">
              حول ما بعد وقبل القبول في الجامعة
            </h1>
          </div>
          <div className="mt-[75px] w-[90%] sm:w-[75%] flex flex-col sm:flex-row justify-evenly">
            <div className="h-[150px] w-full sm:w-[350px] rounded-2xl border-white border-2 border-opacity-50 flex flex-col items-center justify-around p-3 mb-4 sm:mb-0">
              <h1 className="text-white text-1xl sm:text-2xl font-bold leading-normal sm:leading-tight tracking-tight text-center">
                أسئلة ما قبل القبول في الجامعة
              </h1>
              <button className="bg-white h-[40%] w-[90%] rounded-3xl text-black text-1xl sm:text-2xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center hover:bg-gray-100">
                خنشوف 🔥
              </button>
            </div>
            <div className="h-[150px] w-full sm:w-[350px] rounded-2xl border-white border-2 border-opacity-50 flex flex-col items-center justify-around p-3">
              <h1 className="text-white text-1xl sm:text-2xl font-bold leading-normal sm:leading-tight tracking-tight text-center">
                أسئلة ما بعد القبول في الجامعة
              </h1>
              <button className="bg-white h-[40%] w-[90%] rounded-3xl text-black text-1xl sm:text-2xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center hover:bg-gray-100">
                باشوف 🫣
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
