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
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    height: 0;
  }
  to {
    opacity: 1;
    height: auto
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    height: auto
  }
  to {
    opacity: 0;
    height: 0;
  }
`;

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

// Accordion Parent Setup

const StyledAccordionWrapper = styled.div`
  border: 1px solid var(--color-grey-900);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
  max-width: 50rem;
`;

const Accordion: React.FC<AccordionProps> & {
  AccordionItem: React.FC<AccordionItemProps>;
} = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleItemClick = (index: number | null) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, handleItemClick }}>
      <StyledAccordionWrapper>{children}</StyledAccordionWrapper>
    </AccordionContext.Provider>
  );
};

// Accordion Item Setup

import { AccordionItemData } from "@/app/frontendeval/easy/faq/page";

type AccordionItemProps = {
  item: AccordionItemData;
  index: number;
};

interface AccordionContextType {
  activeIndex: number | null;
  handleItemClick: (index: number) => void;
}

const StyledAccordionHeader = styled.div`
  background-color: var(--color-grey-0);
  padding: 10px;
  cursor: pointer;
`;

const StyledAccordionContent = styled.div`
  padding: 10px;
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out
    forwards;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  height: ${({ isOpen }) => (isOpen ? "auto" : 0)};
  overflow: hidden;
`;

const AccordionItem: React.FC<AccordionItemProps> = ({ item, index }) => {
  const { activeIndex, handleItemClick } = useContext(AccordionContext)!;
  return (
    <div onClick={() => handleItemClick(index)}>
      <StyledAccordionHeader>{item.question}</StyledAccordionHeader>
      {activeIndex === index && (
        <StyledAccordionContent isOpen={activeIndex === index}>
          {item.answer}
        </StyledAccordionContent>
      )}
    </div>
  );
};

Accordion.AccordionItem = AccordionItem;

export default Accordion;
