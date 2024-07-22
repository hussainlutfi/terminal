"use client";
import { AcademicMajorsInterface } from "../../../interfaces/major";

interface MajorsListProps {
  majorsList?: AcademicMajorsInterface[];
}

export default function MajorsList({ majorsList = [] }: MajorsListProps) {
  return (
    <>
      {majorsList.map((data: AcademicMajorsInterface, index) => (
        <div key={index}>{data.major}</div>
      ))}
    </>
  );
}
