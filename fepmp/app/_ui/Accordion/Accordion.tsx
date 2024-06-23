// import React, { useRef, useState } from "react";
// import { FiArrowRight } from "react-icons/fi";

// type Props = {
//   data: {
//     question: string;
//     answer: string;
//   };
// };

// interface DataValue {
//   question: string;
//   answer: string;
// }

// const Accordion = (props: Props) => {
//   const data: DataValue = props.data;
//   const [activeIndex, setActiveIndex] = useState<null | number>(null);

//   const handleItemClick = (index: number | null) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <div className="container">
//       {data.map((item: DataValue, index: number) => (
//         <AccordionItem
//           key={index}
//           question={item.question}
//           answer={item.answer}
//           isOpen={activeIndex === index}
//           onClick={() => handleItemClick(index)}
//         />
//       ))}
//     </div>
//   );
// };

// type AccordionItemProps = {
//   question: string;
//   answer: string;
//   isOpen: boolean;
//   onClick: (index: number) => void;
// };

// const AccordionItem = (props: AccordionItemProps) => {
//   const question = props.question;
//   const answer = props.answer;
//   const isOpen = props.isOpen;
//   const onClick = props.onClick;

//   const contentHeight = useRef();
//   return (
//     <div className="wrapper">
//       <button
//         className={`question-container ${isOpen ? "active" : ""}`}
//         onClick={onClick}
//       >
//         <p className="question-content">{question}</p>
//         <FiArrowRight className={`arrow ${isOpen ? "active" : ""}`} />
//       </button>

//       <div
//         ref={contentHeight}
//         className="answer-container"
//         style={
//           isOpen
//             ? { height: contentHeight.current.scrollHeight }
//             : { height: "0px" }
//         }
//       >
//         <p className="answer-content">{answer}</p>
//       </div>
//     </div>
//   );
// };

// export default Accordion;

"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AccordionContextType {
  activeIndex: number | null;
  handleItemClick: (index: number) => void;
}

const AccordionContext = createContext<AccordionContextType | null>({
  activeIndex: null,
  handleItemClick: () => {},
});

interface AccordionProps {
  children: ReactNode;
  AccordionItem?: React.FunctionComponent<AccordionItemProps>;
}

const Accordion: React.FC<AccordionProps> & {
  AccordionItem: React.FC<AccordionItemProps>;
} = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleItemClick = (index: number | null) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, handleItemClick }}>
      <span>{children}</span>
    </AccordionContext.Provider>
  );
};

import { AccordionItemData } from "@/app/frontendeval/easy/faq/page";

type AccordionItemProps = {
  item: AccordionItemData;
  index: number;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ item, index }) => {
  const { activeIndex, handleItemClick } = useContext(AccordionContext);
  return (
    <div onClick={() => handleItemClick(index)}>
      <p>{item.question}</p>
      {activeIndex === index && <p>{item.answer}</p>}
    </div>
  );
};

Accordion.AccordionItem = AccordionItem;

export default Accordion;
