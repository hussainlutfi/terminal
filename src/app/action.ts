"use server";

import { createClient } from "./../../utils/supabase/client";

export async function EnterQuestion(question: string) {
  const { data, error } = await createClient()
    .from("question-input")
    .insert([{ question }])
    .select();

  if (error) {
    throw new Error("Incorrect Process");
  }
}
