"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import AccordionInterface from "../../../interfaces/accordion-interface";

interface AccordionListProps {
  accordionList: AccordionInterface[];
}

export default function AccordionList({ accordionList }: AccordionListProps) {
  return (
    <Accordion>
      {accordionList.map(
        ({ key, ariaLabel, title, answer }: AccordionInterface) => (
          <AccordionItem
            key={key}
            aria-label={ariaLabel}
            title={title}
            className="py-3 h text-xs font-sm text-right hover:bg-white hover:bg-opacity-10   sm:text-xl"
          >
            {answer}
          </AccordionItem>
        )
      )}
    </Accordion>
  );
}
