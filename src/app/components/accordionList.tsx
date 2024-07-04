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
            className="my-3 text-xs font-sm text-right sm:text-xl"
          >
            {answer}
          </AccordionItem>
        )
      )}
    </Accordion>
  );
}
