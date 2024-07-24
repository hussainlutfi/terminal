import { useEffect, useState } from "react";
import { QuestionAnswerMajor } from "../../../interfaces/major";
import { getQAs } from "./actions";

interface MajorInput {
  major: string;
}

export default function MajorQAs({ major }: MajorInput) {
  const [questions, setQuestions] = useState<QuestionAnswerMajor[] | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      const data = await getQAs(major);
      setQuestions(data);
    }
    fetchData();
  }, [major]);

  return (
    <div className="w-11/12 p-5">
      {questions && questions.length > 0 ? (
        questions.map((question) => (
          <div
            key={question.id}
            className="border-y border-white border-opacity-30"
          >
            <div className="py-3">
              <h1 className="font-bold sm:text-lg text-yellow-600 sm:mb-2">
                {question.name}
              </h1>
              <h1 className="text-white text-sm pr-3 sm:text-xl">
                {question.question}
              </h1>
            </div>
            <div className="py-3 pr-10">
              <h1 className="font-extrabold text-lg sm:text-2xl text-yellow-600 sm:mb-2">
                الجواب
              </h1>
              <h1 className="text-white pr-3 text-sm sm:text-xl">
                {question.answer}
              </h1>
            </div>
          </div>
        ))
      ) : (
        <h1 className="border-y border-white border-opacity-20 py-2 text-white text-center text-sm sm:text-xl">
          لا توجد أسئلة !
        </h1>
      )}
    </div>
  );
}
