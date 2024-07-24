"use server";

import {
  QuestionAnswerMajor,
  QuestionMajorInput,
} from "../../../interfaces/major";
import { createClient } from "../../../utils/supabase/client";

export async function EnterQuestion(input: QuestionMajorInput) {
  const { data, error } = await createClient()
    .from("question-major-input")
    .insert([input])
    .select();

  if (error) {
    throw new Error("Incorrect Process");
  }
}

export async function getQAs(major: string) {
  const { data, error } = await createClient()
    .from("question-major-input")
    .select("*")
    .eq("major", major);

  if (error) {
    throw new Error("Incorrect Process");
  }
  const filteredData: QuestionAnswerMajor[] = (
    data as QuestionAnswerMajor[]
  ).filter((item) => item.answer?.trim());

  return filteredData;
}
