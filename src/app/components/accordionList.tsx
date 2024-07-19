"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import AccordionInterface from "../../../interfaces/accordion-interface";
import { QAInterface } from "../../../interfaces/question";

interface AccordionListProps {
  accordionList: QAInterface[];
}

export default function AccordionList({ accordionList }: AccordionListProps) {
  function splitter(answer: string): JSX.Element {
    const lines = answer.split(/\r?\n/).filter((line) => line.trim() !== "");
    return (
      <div className="pt-3 font-normal text-gray-100">
        {lines.map((line, index) => (
          <p className="mt-1" key={index}>
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
          title={<p className="text-right">{data.question}</p>}
          className=" text-xs font-extrabold text-gray-300 sm:h-14 hover:bg-white hover:bg-opacity-10   sm:text-xl"
        >
          {splitter(data.answer)}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
