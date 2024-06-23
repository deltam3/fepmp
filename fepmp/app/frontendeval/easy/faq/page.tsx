"use client";

import React, { useState } from "react";
import Accordion from "@/app/_ui/Accordion/Accordion";

const data = [
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
  const [whatOpen, setWhatOpen] = useState(false);

  return (
    <div>
      <p>FAQ</p>
      {/* <Accordion data={data} /> */}
      <Accordion>
        <Accordion.AccordionItem item={data[0]}></Accordion.AccordionItem>
      </Accordion>
    </div>
  );
};

export default Page;
