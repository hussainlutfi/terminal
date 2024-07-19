"use client";

import { useEffect, useState } from "react";
import { QAAfter } from "../../../data/after";
import { QAInterface } from "../../../interfaces/question";
import AccordionList from "../components/accordionList";
import { Tajawal } from "next/font/google";
import { getQuestions } from "../action";
import Loader from "../components/loader";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function AfterPage() {
  const [akhra, setAkhra] = useState<QAInterface[]>();
  const [ekhtebarat_baad_qobul, setEkhtebarat] = useState<QAInterface[]>();
  const [entisab_taalum, setEntisabTaalumt] = useState<QAInterface[]>();
  const [lugha, setLugha] = useState<QAInterface[]>();
  const [raghbat_takhsis_taskin, setRaghbat] = useState<QAInterface[]>();
  const [seha_nafsia, setSehaNafsia] = useState<QAInterface[]>();
  const [tahdiri, setTahdiri] = useState<QAInterface[]>();

  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getQuestionsAsync();
  }, []);

  async function getQuestionsAsync() {
    setLoading(true);
    setLugha(await getQuestions("after", "lugha"));
    setTahdiri(await getQuestions("after", "tahdiri"));
    setEntisabTaalumt(await getQuestions("after", "entisab_taalum"));
    setEkhtebarat(await getQuestions("after", "ekhtebarat_baad_qobul"));
    setRaghbat(await getQuestions("after", "raghbat_takhsis_taskin"));
    setSehaNafsia(await getQuestions("after", "seha_nafsia"));
    setAkhra(await getQuestions("after", "akhra"));
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
              بعد القبول !
            </h1>
            {loading && <Loader />}
          </div>
          {isNotEmpty(lugha!) && (
            <>
              <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                اللغة
              </h1>
              <AccordionList accordionList={lugha!} />
            </>
          )}
          {isNotEmpty(tahdiri!) && (
            <>
              <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                التحضيري
              </h1>
              <AccordionList accordionList={tahdiri!} />
            </>
          )}
          {isNotEmpty(entisab_taalum!) && (
            <>
              <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                الانتساب والتعلم عن بعد
              </h1>
              <AccordionList accordionList={entisab_taalum!} />
            </>
          )}
          {isNotEmpty(ekhtebarat_baad_qobul!) && (
            <>
              <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                اختبارات بعد القبول
              </h1>
              <AccordionList accordionList={ekhtebarat_baad_qobul!} />
            </>
          )}
          {isNotEmpty(raghbat_takhsis_taskin!) && (
            <>
              <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                اسئلة الرغبات والتخصيص والتسكين
              </h1>
              <AccordionList accordionList={raghbat_takhsis_taskin!} />
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
