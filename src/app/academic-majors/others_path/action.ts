"use server";

import { AcademicMajorsInterface } from "../../../../interfaces/major";
import { createClient } from "../../../../utils/supabase/client";

const supabase = createClient();

export async function getMajors() {
  const { data, error } = await supabase.from("others_path_view").select("*");
  if (error) {
    throw new Error("Could not fetch");
  }
  return data as AcademicMajorsInterface[];
}

export const isNotEmpty = (list: AcademicMajorsInterface[]) =>
  list && list.length > 0;

export async function getMajor(id: string) {
  const { data, error } = await supabase
    .from("others_path_view")
    .select("*")
    .eq("id", id);
  if (error) {
    throw new Error("Could not fetch");
  }
  return data[0] as AcademicMajorsInterface;
}
