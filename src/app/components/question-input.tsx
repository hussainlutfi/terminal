"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { EnterQuestion } from "../action";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "@sweetalert2/theme-dark/dark.css";

export default function QuestionSquare() {
  const [question, setQuestion] = useState<string>();
  const router = useRouter();

  async function handleSubmit() {
    if (question!.length < 5) {
      setQuestion("");
      return;
    }

    try {
      await EnterQuestion(question!);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "شكراً لك",
        showConfirmButton: false,
        timer: 1500,
      });
      setQuestion("");
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  }
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
        onClick={handleSubmit}
      >
        تمم 🤩
      </button>
    </div>
  );
}
