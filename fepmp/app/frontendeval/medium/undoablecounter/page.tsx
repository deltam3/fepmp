"use client";
import Button from "@/app/_ui/Button/Button";
import React, { useState } from "react";
import styled from "styled-components";

const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3.2rem;

  align-items: center;
  justify-content: center;
`;

const StyledCounterNumber = styled.p`
  font-size: 4.4rem;
  text-align: center;
`;

const StyledHistoryHeading = styled.p`
  text-align: center;
  font-size: 2rem;
`;

const StyledHistory = styled.div`
  border: 2px solid black;
  padding: 1.2rem 2.4rem;
`;

const Page = () => {
  const [currentStack, setCurrentStack] = useState([
    { beforeNumber: 0 },
    { inputNumber: 0 },
    { afterNumber: 0 },
  ]);

  const [counterNumber, setCounterNumber] = useState(0);
  const [wasLastActionUndo, setWasLastActionUndo] = useState(false);
  const [historyItems, setHistoryItems] = useState([]);

  const updateCount = (inputNumber: number) => {
    setWasLastActionUndo(false);
    let beforeNumber = historyItems[historyItems.length - 1].afterNumber;
    let afterNumber =
      historyItems[historyItems.length - 1].afterNumber + inputNumber;
    setCounterNumber(afterNumber);

    updateHistory(beforeNumber, inputNumber, afterNumber);

    let historyObject = {
      beforeNumber: beforeNumber,
      inputNumber: inputNumber,
      afterNumber: afterNumber,
    };

    updateHistory(historyObject);
  };

  const updateHistory = ({ beforeNumber, inputNumber, afterNumber }) => {
    const newStack = [beforeNumber, inputNumber, afterNumber];
    setCurrentStack(newStack);
  };

  return (
    <main className="flex align-middle justify-center">
      <section className="section-counter">
        <h1 className="font-bold tracking-wide text-gray-700 text-5.2xl leading-tight mb-10 text-center">
          Undoable counter
        </h1>
        <StyledCounter>
          <div className="undo-redo-container flex gap-[2rem]">
            <Button className="undoBtn">Undo</Button>
            <Button className="redoBtn">Redo</Button>
          </div>
          <div className="counter-container">
            <div className="flex gap-[2rem]">
              <Button
                className="btn-minus-100"
                onClick={() => updateCount(-100)}
              >
                -100
              </Button>
              <Button className="btn-minus-10" onClick={() => updateCount(-10)}>
                -10
              </Button>
              <Button className="btn-minus-1" onClick={() => updateCount(-1)}>
                -1
              </Button>
            </div>
            <StyledCounterNumber>{counterNumber}</StyledCounterNumber>
            <div className="flex gap-[2rem]">
              <Button className="btn-plus-1" onClick={() => updateCount(1)}>
                +1
              </Button>
              <Button className="btn-plus-10" onClick={() => updateCount(10)}>
                +10
              </Button>
              <Button className="btn-plus-100" onClick={() => updateCount(100)}>
                +100
              </Button>
            </div>
          </div>
          <div className="history-container">
            <StyledHistoryHeading>History</StyledHistoryHeading>
            <StyledHistory>
              {historyItems.map((item) => (
                <p key={item}>cool</p>
              ))}
            </StyledHistory>
          </div>
        </StyledCounter>
      </section>
    </main>
  );
};

export default Page;
