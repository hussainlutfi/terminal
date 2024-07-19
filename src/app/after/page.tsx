"use client";

import { useEffect, useState } from "react";
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
  const [search, setSearch] = useState<string>("");

  const [akhra, setAkhra] = useState<QAInterface[]>([]);
  const [ekhtebarat_baad_qobul, setEkhtebarat] = useState<QAInterface[]>([]);
  const [entisab_taalum, setEntisabTaalumt] = useState<QAInterface[]>([]);
  const [lugha, setLugha] = useState<QAInterface[]>([]);
  const [raghbat_takhsis_taskin, setRaghbat] = useState<QAInterface[]>([]);
  const [seha_nafsia, setSehaNafsia] = useState<QAInterface[]>([]);
  const [tahdiri, setTahdiri] = useState<QAInterface[]>([]);
  const [filtered, setFiltered] = useState<QAInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getQuestionsAsync();
  }, []);

  useEffect(() => {
    filterAll();
  }, [
    search,
    akhra,
    ekhtebarat_baad_qobul,
    entisab_taalum,
    lugha,
    raghbat_takhsis_taskin,
    seha_nafsia,
    tahdiri,
  ]);

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

  const filterArray = (array: QAInterface[], searchTerm: string) => {
    if (!searchTerm) return array;
    return array.filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterAll = () => {
    let filteredResults: QAInterface[] = [];
    filteredResults = filteredResults.concat(filterArray(akhra, search));
    filteredResults = filteredResults.concat(
      filterArray(ekhtebarat_baad_qobul, search)
    );
    filteredResults = filteredResults.concat(
      filterArray(entisab_taalum, search)
    );
    filteredResults = filteredResults.concat(filterArray(lugha, search));
    filteredResults = filteredResults.concat(
      filterArray(raghbat_takhsis_taskin, search)
    );
    filteredResults = filteredResults.concat(filterArray(seha_nafsia, search));
    filteredResults = filteredResults.concat(filterArray(tahdiri, search));
    setFiltered(filteredResults);
  };

  const isNotEmpty = (list: QAInterface[]) => list && list.length > 0;

  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] to-80%">
        <div className="flex flex-col items-start justify-center px-5 pt-12 sm:pt-16">
          <input
            className="bg-white bg-opacity-20 p-6 font-bold text-lg w-full h-[45px] rounded-xl mb-[20px]"
            placeholder="ابحث عن السؤال 🔍"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex items-center">
            <h1 className="text-white text-3xl mb-[20px] sm:text-6xl sm:mb-[45px] font-extrabold leading-normal sm:leading-tight tracking-tight text-center">
              بعد القبول !
            </h1>
            {loading && <Loader />}
          </div>

          {!search ? (
            <>
              {isNotEmpty(lugha) && (
                <>
                  <h1 className="text-gray-100 text-xl mb-1 sm:text-4xl sm:mb-[10px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                    اللغة
                  </h1>
                  <AccordionList accordionList={lugha} />
                </>
              )}
              {isNotEmpty(tahdiri) && (
                <>
                  <h1 className="text-gray-100 text-xl mb-1 sm:text-4xl sm:mb-[10px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                    التحضيري
                  </h1>
                  <AccordionList accordionList={tahdiri} />
                </>
              )}
              {isNotEmpty(entisab_taalum) && (
                <>
                  <h1 className="text-gray-100 text-xl mb-1 sm:text-4xl sm:mb-[10px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                    الانتساب والتعلم عن بعد
                  </h1>
                  <AccordionList accordionList={entisab_taalum} />
                </>
              )}
              {isNotEmpty(ekhtebarat_baad_qobul) && (
                <>
                  <h1 className="text-gray-100 text-xl mb-1 sm:text-4xl sm:mb-[10px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                    اختبارات بعد القبول
                  </h1>
                  <AccordionList accordionList={ekhtebarat_baad_qobul} />
                </>
              )}
              {isNotEmpty(raghbat_takhsis_taskin) && (
                <>
                  <h1 className="text-gray-100 text-xl mb-1 sm:text-4xl sm:mb-[10px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                    اسئلة الرغبات والتخصيص والتسكين
                  </h1>
                  <AccordionList accordionList={raghbat_takhsis_taskin} />
                </>
              )}
              {isNotEmpty(seha_nafsia) && (
                <>
                  <h1 className="text-gray-100 text-xl mb-1 sm:text-4xl sm:mb-[10px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                    الصحة النفسية
                  </h1>
                  <AccordionList accordionList={seha_nafsia} />
                </>
              )}
              {isNotEmpty(akhra) && (
                <>
                  <h1 className="text-gray-100 text-xl mb-1 sm:text-4xl sm:mb-[10px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
                    أخرى
                  </h1>
                  <AccordionList accordionList={akhra} />
                </>
              )}
            </>
          ) : (
            <>
              <h1 className="text-gray-100 text-xl mb-[5px] sm:text-4xl sm:mb-[20px] font-semibold leading-normal sm:leading-tight tracking-tight text-center">
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
