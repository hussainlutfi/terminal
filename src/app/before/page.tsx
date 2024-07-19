"use client";

import { useEffect, useState } from "react";
import { QABefore } from "../../../data/before";
import AccordionList from "../components/accordionList";
import { Tajawal } from "next/font/google";
import { QAInterface } from "../../../interfaces/question";
import { getQuestions } from "../action";
import Loader from "../components/loader";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function BeforePage() {
  const [akhra, setAkhra] = useState<QAInterface[]>();
  const [ebtiaath, setEbtiaath] = useState<QAInterface[]>();
  const [ekhtebarat, setEkhtebarat] = useState<QAInterface[]>();
  const [mostalahat, setMostalahat] = useState<QAInterface[]>();
  const [mozona, setMozona] = useState<QAInterface[]>();
  const [seha_nafsia, setSehaNafsia] = useState<QAInterface[]>();

  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getQuestionsAsync();
  }, []);

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

  const isNotEmpty = (list: QAInterface[]) => list && list.length > 0;

  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] to-80%">
        <div className="flex flex-col items-start justify-center px-5 pt-12 sm:pt-16">
          <div className="flex items-center">
            <h1 className="text-white text-3xl mb-[20px] sm:text-6xl sm:mb-[45px] font-extrabold leading-normal sm:leading-tight tracking-tight text-center">
              قبل القبول !
            </h1>
            {loading && <Loader />}
          </div>
          {isNotEmpty(mostalahat!) && (
            <>
              <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                المصطلحات
              </h1>
              <AccordionList accordionList={mostalahat!} />
            </>
          )}
          {isNotEmpty(mozona!) && (
            <>
              <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                الموزونة
              </h1>
              <AccordionList accordionList={mozona!} />
            </>
          )}
          {isNotEmpty(ebtiaath!) && (
            <>
              <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                الابتعاث
              </h1>
              <AccordionList accordionList={ebtiaath!} />
            </>
          )}
          {isNotEmpty(ekhtebarat!) && (
            <>
              <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                الاختبارات
              </h1>
              <AccordionList accordionList={ekhtebarat!} />
            </>
          )}
          {isNotEmpty(seha_nafsia!) && (
            <>
              <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                الصحة النفسية
              </h1>
              <AccordionList accordionList={seha_nafsia!} />
            </>
          )}
          {isNotEmpty(akhra!) && (
            <>
              <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                أخرى
              </h1>
              <AccordionList accordionList={akhra!} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
