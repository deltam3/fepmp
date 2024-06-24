"use client";

import React from "react";
import Accordion from "@/app/_ui/Accordion/Accordion";

export type AccordionItemData = {
  question: string;
  answer: string;
};

const data: Array<AccordionItemData> = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

const Page = () => {
  return (
    <div>
      <p>FAQ</p>
      <Accordion>
        {data.map((aData, index) => {
          return (
            <Accordion.AccordionItem
              item={aData}
              index={index}
              key={aData.question}
            />
          );
        })}
      </Accordion>
    </div>
  );
};

export default Page;
