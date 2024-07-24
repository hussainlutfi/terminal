import { useState } from "react";
import { EnterQuestion } from "./actions";
import { QuestionMajorInput } from "../../../interfaces/major";
import Swal from "sweetalert2";

interface MajorInput {
  major: string;
}

export default function FormInput({ major }: MajorInput) {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [question, setQuestion] = useState<string>();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    const input: QuestionMajorInput = {
      email: email!,
      major,
      name: name!,
      question: question!,
    };
    await EnterQuestion(input);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "شكراً لسؤالك ! 🔥",
      showConfirmButton: false,
      timer: 1500,
    });
    setEmail("");
    setName("");
    setQuestion("");
  };

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <h1 className="flex sm:text-2xl font-extrabold text-yellow-600 justify-center text-xl">
          هل لديك سؤال
        </h1>
        <h1 className="flex sm:text-2xl font-extrabold text-yellow-600 animate-bounce justify-center text-xl">
          ؟
        </h1>
      </div>
      <form
        className="justify-center w-full pt-3 pb-8 px-8 sm:flex sm:flex-wrap sm:items-end"
        onSubmit={handleSubmit}
      >
        <div className="mt-3 sm:w-1/3 sm:mr-8">
          <label
            className="block text-xs sm:text-base text-white font-bold mb-2 pr-3"
            htmlFor="name"
          >
            الاسم
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 text-xs sm:text-base bg-white bg-opacity-20 text-white rounded-md"
            required
            placeholder="محمد علي"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-3 sm:w-1/3 sm:mr-8">
          <label
            className="block text-xs sm:text-base text-white font-bold mb-2 pr-3"
            htmlFor="email"
          >
            الإيميل
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 text-xs sm:text-base bg-white bg-opacity-20 text-white rounded-md"
            placeholder="example@mostaqbli.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-3 sm:w-1/3 sm:mr-8">
          <label
            className="block text-xs sm:text-base text-white font-bold mb-2 pr-3"
            htmlFor="question"
          >
            السؤال
          </label>
          <input
            type="text"
            id="question"
            className="w-full p-2 text-xs sm:text-base bg-white bg-opacity-20 text-white rounded-md"
            required
            value={question}
            placeholder="هل التخصص...؟"
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-1/3 h-1/2 p-2 bg-blue-500 text-white font-bold rounded-md mt-3 sm:mt-0 sm:mr-8 self-end"
        >
          أرسل
        </button>
      </form>
    </div>
  );
}
