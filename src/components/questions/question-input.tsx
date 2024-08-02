"use client";

import { useState } from "react";
import { EnterQuestion } from "../../app/questions/action";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "@sweetalert2/theme-dark/dark.css";

export default function QuestionInput() {
  const [question, setQuestion] = useState<string>();
  const [email, setEmail] = useState<string>();

  async function handleSubmit() {
    if (question!.length < 5) {
      setQuestion("");
      return;
    }

    try {
      await EnterQuestion(question!, email!);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "شكراً لسؤالك ! 🔥",
        showConfirmButton: false,
        timer: 1500,
      });
      setQuestion("");
      setEmail("");
      await sendEmail();
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  }

  const sendEmail = async () => {
    const data: string = question!;

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Handle the error response
        const errorData = await response.json();
        console.error("Error:", errorData);
        // You can also display an error message to the user here
      } else {
        // Handle the success response
        const responseData = await response.json();
        console.log("Success:", responseData);
        // You can also display a success message to the user here
      }
    } catch (error) {
      console.error("Fetch error:", error);
      // Handle the fetch error here, e.g., display an error message to the user
    }
  };
  return (
    <div className="h-[250px] w-[75%] mt-[25px]  opacity-75 sm:w-[350px] sm:h-[300px] rounded-2xl bg-white bg-opacity-70 flex flex-col items-center justify-around p-3 mb-4 sm:mb-0">
      <div>
        <h1 className="text-black  sm:text-2xl font-bold leading-normal sm:leading-tight tracking-tight text-center">
          عندك سؤال ما شفته ؟!
        </h1>
        <h1 className="text-black text-sm sm:text-lg  leading-normal sm:leading-tight tracking-tight text-center">
          اقترحه هنا وإن شاء الله نضيفه ونجاوب عليه!
        </h1>
      </div>
      <input
        name="questionInput"
        type="text"
        value={question}
        placeholder="هل الجامعة ... ؟"
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full p-2 text-xs sm:text-base bg-white mt-2 sm:mt-5  text-black rounded-md"
      />
      <div className=" w-full mb-3">
        <h1 className="text-black font-extrabold  p-2 text-right text-sm sm:text-base  leading-normal sm:leading-tight tracking-tight">
          الإيميل
        </h1>

        <input
          name="questionInput"
          type="email"
          value={email}
          placeholder="example@terminal.com"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 text-xs sm:text-base bg-white text-black rounded-md"
        />
      </div>
      <button
        className="bg-gradient-to-r from-[#901604e6] to-[#061f40c5] to-30% h-[20%] w-[90%] text-white rounded-3xl text-black text-1xl sm:text-2xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center hover:bg-gray-200"
        onClick={handleSubmit}
      >
        تمم 🤩
      </button>
    </div>
  );
}
