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
    EnterQuestion(input);
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
    <form className="justify-start w-full p-8 sm:flex" onSubmit={handleSubmit}>
      <div className="mt-3">
        <label
          className="block text-white font-bold mb-2 pr-3"
          htmlFor="question"
        >
          الاسم
        </label>
        <input
          type="text"
          id="question"
          className="w-[300px] p-2 bg-white bg-opacity-20 text-white rounded-md"
          required
          placeholder="محمد علي"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-3 sm:mr-8">
        <label
          className="block text-white font-bold mb-2 pr-3"
          htmlFor="question"
        >
          الإيميل
        </label>
        <input
          type="text"
          id="question"
          className="w-[300px] p-2 bg-white bg-opacity-20 text-white rounded-md"
          placeholder="example@mostaqbli.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-3 sm:mr-8">
        <label
          className="block text-white font-bold mb-2 pr-3"
          htmlFor="question"
        >
          السؤال
        </label>
        <input
          type="text"
          id="question"
          className="w-[300px] p-2 bg-white bg-opacity-20 text-white rounded-md"
          required
          value={question}
          placeholder="هل التخصص...؟"
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-[200px] h-1/2 p-2 bg-blue-500 text-white font-bold rounded-md self-end mt-3 sm:mr-8"
      >
        أرسل
      </button>
    </form>
  );
}
