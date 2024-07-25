"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { QAInterface } from "../../../interfaces/question";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface AccordionListProps {
  accordionList: QAInterface[];
}

export default function AccordionList({ accordionList }: AccordionListProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  function splitter(answer: string): JSX.Element {
    const lines = answer.split(/\r?\n/).filter((line) => line.trim() !== "");
    return (
      <div data-aos="fade-up" className=" font-normal text-gray-100 px-[15px]">
        {lines.map((line, index) => (
          <p className="mt-1 " key={index}>
            {line}
          </p>
        ))}
      </div>
    );
  }

  return (
    <Accordion className="mb-[20px] sm:mb-[50px]">
      {accordionList.map((data: QAInterface) => (
        <AccordionItem
          key={data.id}
          aria-label={""}
          title={
            <p className="text-right px-[5px] py-1 sm:py-3">{data.question}</p>
          }
          className=" text-xs font-extrabold text-gray-300  hover:bg-white hover:bg-opacity-10   sm:text-xl"
        >
          {splitter(data.answer)}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
