"use client";

import { useState } from "react";

export default function QuestionSquare() {
  const [question, setQuestion] = useState<string>();

  return (
    <div className="h-[250px] w-[90%] mt-[50px] sm:w-[350px] rounded-2xl bg-white bg-opacity-70 flex flex-col items-center justify-around p-3 mb-4 sm:mb-0">
      <div>
        <h1 className="text-black text-1xl sm:text-2xl font-bold leading-normal sm:leading-tight tracking-tight text-center">
          عندك سؤال ما شفته ؟!
        </h1>
        <h1 className="text-black text-base sm:text-lg  leading-normal sm:leading-tight tracking-tight text-center">
          أقترحه هني وإن شاء الله نضيفه ونجاوب عليه!
        </h1>
      </div>
      <input
        name="questionInput"
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full h-[40px] text-l text-black font-semibold p-4 rounded-lg bg-white bg-opacity-90"
      />
      <button
        className="bg-gradient-to-r from-[#901604e6] to-[#061f40c5] to-30% h-[20%] w-[90%] text-white rounded-3xl text-black text-1xl sm:text-2xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center hover:bg-gray-200"
        onClick={() => {}}
      >
        تمم 🤩
      </button>
    </div>
  );
}
