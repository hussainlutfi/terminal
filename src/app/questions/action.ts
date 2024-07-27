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


export async function getQABefore(): Promise<Record<string, QAInterface[]>> {
  const { data, error } = await createClient().from(`qa-before`).select("*");
  if (error) {
    throw new Error("Can not get QAs");
  }
  const record: QAInterface[] = data;
  const returned: Record<string, QAInterface[]> = {
    المصطلحات: filter("المصطلحات", record),
    الموزونة: filter("الموزونة", record),
    الابتعاث: filter("الابتعاث", record),
    الاختبارات: filter("الاختبارات", record),
    "الصحة النفسية": filter("الصحة النفسية", record),
    أخرى: filter("أخرى", record),
  };

  return returned;
}

export async function getQAAfter(): Promise<Record<string, QAInterface[]>> {
  const { data, error } = await createClient().from(`qa-after`).select("*");
  if (error) {
    throw new Error("Can not get QAs");
  }
  const record: QAInterface[] = data;
  const returned: Record<string, QAInterface[]> = {
    اللغة: filter("اللغة", record),
    التحضيري: filter("التحضيري", record),
    "الانتساب والتعلم عن بعد": filter("الانتساب والتعلم عن بعد", record),
    "اختبارات بعد القبول": filter("اختبارات بعد القبول", record),
    "اسئلة الرغبات والتخصيص والتسكين": filter(
      "اسئلة الرغبات والتخصيص والتسكين",
      record
    ),
    "الصحة النفسية": filter("الصحة النفسية", record),
    أخرى: filter("أخرى", record),
  };

  return returned;
}

function filter(type: string, array: QAInterface[]): QAInterface[] {
  return array.filter((qa) => qa.type === type);
}
