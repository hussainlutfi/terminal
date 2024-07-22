"use server";

import { QAInterface } from "../../../interfaces/question";
import { createClient } from "../../../utils/supabase/client";

export async function EnterQuestion(question: string, sender_email: string) {
  const { data, error } = await createClient()
    .from("question-input")
    .insert([{ question, sender_email }])
    .select();

  if (error) {
    throw new Error("Incorrect Process");
  }
}

export async function getQuestions(
  table: string,
  type: string
): Promise<QAInterface[]> {
  const { data, error } = await createClient()
    .from(`qa_${table}_${type}`)
    .select("*");
  if (error) {
    throw new Error("Can not get QAs");
  }
  return data;
}
