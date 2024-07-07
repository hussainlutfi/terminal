"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import AccordionInterface from "../../../interfaces/accordion-interface";

interface AccordionListProps {
  accordionList: AccordionInterface[];
}

export default function AccordionList({ accordionList }: AccordionListProps) {
  function splitter(answer: string): JSX.Element {
    const lines = answer.split(/\r?\n/).filter((line) => line.trim() !== "");
    return (
      <div className="pt-3 font-normal text-gray-200">
        {lines.map((line, index) => (
          <p className="mt-1" key={index}>
            {line}
          </p>
        ))}
      </div>
    );
  }

  return (
    <Accordion>
      {accordionList.map(
        ({ key, ariaLabel, title, answer }: AccordionInterface) => (
          <AccordionItem
            key={key}
            aria-label={ariaLabel}
            title={title}
            className="py-3 h text-xs font-extrabold text-white text-right hover:bg-white hover:bg-opacity-10   sm:text-xl"
          >
            {splitter(answer)}
          </AccordionItem>
        )
      )}
    </Accordion>
  );
}
