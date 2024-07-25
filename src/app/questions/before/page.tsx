"use client";

import { useEffect, useState } from "react";
import { QAInterface } from "../../../../interfaces/question";
import AccordionList from "../../../components/questions/accordionList";
import { Tajawal } from "next/font/google";
import { getQuestions } from "../action";
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
  const [akhra, setAkhra] = useState<QAInterface[]>([]);
  const [ebtiaath, setEbtiaath] = useState<QAInterface[]>([]);
  const [ekhtebarat, setEkhtebarat] = useState<QAInterface[]>([]);
  const [mostalahat, setMostalahat] = useState<QAInterface[]>([]);
  const [mozona, setMozona] = useState<QAInterface[]>([]);
  const [seha_nafsia, setSehaNafsia] = useState<QAInterface[]>([]);
  const [filtered, setFiltered] = useState<QAInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getQuestionsAsync();
    AOS.init({
      duration: 800,
    });
  }, []);

  useEffect(() => {
    filterAll();
  }, [search, akhra, ebtiaath, ekhtebarat, mostalahat, mozona, seha_nafsia]);

  async function getQuestionsAsync() {
    setLoading(true);
    setMostalahat(await getQuestions("before", "mostalahat"));
    setMozona(await getQuestions("before", "mozona"));
    setEbtiaath(await getQuestions("before", "ebtiaath"));
    setEkhtebarat(await getQuestions("before", "ekhtebarat"));
    setSehaNafsia(await getQuestions("before", "seha_nafsia"));
    setAkhra(await getQuestions("before", "akhra"));
    setLoading(false);
  }

  const filterArray = (array: QAInterface[], searchTerm: string) => {
    if (!searchTerm) return array;
    if (!isNotEmpty(array)) return [];
    return array.filter((item) => item.question.includes(searchTerm));
  };

  const filterAll = () => {
    let filteredResults: QAInterface[] = [];
    filteredResults = filteredResults.concat(filterArray(akhra, search));
    filteredResults = filteredResults.concat(filterArray(ebtiaath, search));
    filteredResults = filteredResults.concat(filterArray(ekhtebarat, search));
    filteredResults = filteredResults.concat(filterArray(mostalahat, search));
    filteredResults = filteredResults.concat(filterArray(seha_nafsia, search));
    filteredResults = filteredResults.concat(filterArray(mozona, search));
    setFiltered(filteredResults);
  };

  const isNotEmpty = (list: QAInterface[]) => list && list.length > 0;

  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full  ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br  from-[#51170e] to-[#031020] to-80%">
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
            <>
              {isNotEmpty(mostalahat) && (
                <>
                  <h1
                    data-aos="fade-up"
                    className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center"
                  >
                    المصطلحات
                  </h1>
                  <AccordionList accordionList={mostalahat} />
                </>
              )}
              {isNotEmpty(mozona) && (
                <>
                  <h1
                    data-aos="fade-up"
                    className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center"
                  >
                    الموزونة
                  </h1>
                  <AccordionList accordionList={mozona} />
                </>
              )}
              {isNotEmpty(ebtiaath) && (
                <>
                  <h1
                    data-aos="fade-up"
                    className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center"
                  >
                    الابتعاث
                  </h1>
                  <AccordionList accordionList={ebtiaath} />
                </>
              )}
              {isNotEmpty(ekhtebarat) && (
                <>
                  <h1
                    data-aos="fade-up"
                    className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center"
                  >
                    الاختبارات
                  </h1>
                  <AccordionList accordionList={ekhtebarat} />
                </>
              )}
              {isNotEmpty(seha_nafsia) && (
                <>
                  <h1
                    data-aos="fade-up"
                    className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center"
                  >
                    الصحة النفسية
                  </h1>
                  <AccordionList accordionList={seha_nafsia} />
                </>
              )}
              {isNotEmpty(akhra) && (
                <>
                  <h1
                    data-aos="fade-up"
                    className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center"
                  >
                    أخرى
                  </h1>
                  <AccordionList accordionList={akhra} />
                </>
              )}
            </>
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
