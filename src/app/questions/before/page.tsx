"use client";

import { useEffect, useState } from "react";
import { QAInterface } from "../../../../interfaces/question";
import AccordionList from "../../../components/questions/accordionList";
import { Tajawal } from "next/font/google";
import { getQABefore } from "../action";
import Loader from "../../../components/loader";
import LoaderStop from "../../../components/loader-stop";
import AOS from "aos";
import "aos/dist/aos.css";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function BeforePage() {
  const [search, setSearch] = useState<string>("");
  const [questions, setQuestions] = useState<Record<string, QAInterface[]>>({});
  const [filtered, setFiltered] = useState<QAInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getRecords();
    AOS.init({
      duration: 800,
    });
  }, []);

  async function getRecords() {
    setLoading(true);
    setQuestions(await getQABefore());
    setLoading(false);
  }

  useEffect(() => {
    filterAll();
  }, [search, questions]);


  const filterArray = (array: QAInterface[], searchTerm: string) => {
    if (!searchTerm) return array;
    return array.filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterAll = () => {
    let filteredResults: QAInterface[] = [];
    Object.values(questions).forEach((questionArray) => {
      filteredResults = filteredResults.concat(
        filterArray(questionArray, search)
      );
    });
    setFiltered(filteredResults);
  };

  const isNotEmpty = (list: QAInterface[]) => list && list.length > 0;

  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] to-80%">
        <div className="flex flex-col items-start opacity-80 justify-center px-3 sm:px-5 pt-12 sm:pt-16">
          <input
            data-aos="fade-up"
            className="bg-white bg-opacity-20 p-6 font-bold text-lg w-full h-[45px] rounded-xl mb-[20px]"
            placeholder="ابحث عن السؤال 🔍"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div data-aos="fade-up" className="flex items-center">
            <h1 className="text-white text-3xl mb-[20px] sm:text-6xl sm:mb-[45px] font-extrabold leading-normal sm:leading-tight tracking-tight text-center">
              قبل القبول !
            </h1>
            {loading ? <Loader /> : <LoaderStop />}
          </div>
          {!search ? (
            <div className="pb-24 w-full">
              {Object.entries(questions).map(
                ([key, list]) =>
                  isNotEmpty(list) && (
                    <div key={key}>
                      <h1
                        data-aos="fade-up"
                        className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-right"
                      >
                        {key}
                      </h1>
                      <AccordionList accordionList={list} />
                    </div>
                  )
              )}
            </div>
          ) : (
            <>
              <h1
                data-aos="fade-up"
                className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center"
              >
                نتائج البحث: {search}
              </h1>
              <AccordionList accordionList={filtered} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
