"use client";
import { usePathname, useRouter } from "next/navigation";
import { AcademicMajorsInterface } from "../../../interfaces/major";

interface MajorsListProps {
  majorsList?: AcademicMajorsInterface[];
}

export default function MajorsList({ majorsList = [] }: MajorsListProps) {
  const router = useRouter();
  const path = usePathname();
  function handelClick(id: number) {
    router.push(`${path}/${id}`);
  }
  return (
    <>
      {majorsList.map((data: AcademicMajorsInterface, index) => (
        <div
          className="flex w-full py-3 px-2 text-2xl text-white border-b sm:text-3xl sm:py-5 sm:px-3 hover:bg-white hover:bg-opacity-15"
          key={index}
          onClick={() => handelClick(data.id)}
        >
          {data.major}
        </div>
      ))}
    </>
  );
}
