"use server";

import { QuestionMajorInput } from "../../../interfaces/major";
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
