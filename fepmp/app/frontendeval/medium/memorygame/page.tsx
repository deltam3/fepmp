"use client";
import Button from "@/app/_ui/Button/Button";
import React, { useState } from "react";
import MemoryGame from "./MemoryGame";

const fivebyfive = [];
const sixbysix = [];
const eightbyeight = [];

const page = () => {
  const [gameItems, setGameItems] = useState([{}]);
  const [isStart, setIsStart] = useState(false);
  const [difficulty, setDifficulty] = useState(0);

  const difficultyHandler = (difficultyNumber: number) => {
    setIsStart(true);
    setDifficulty(difficultyNumber);
  };

  return (
    <>
      <h1>Memory Game</h1>
      <div>
        <div>
          <Button onClick={() => difficultyHandler(5)}>Easy 5*5</Button>
          <Button onClick={() => difficultyHandler(6)}>Medium 6*6</Button>
          <Button onClick={() => difficultyHandler(8)}>Hard 8*8</Button>
        </div>
      </div>
      <main>{isStart && <MemoryGame difficulty={difficulty} />}</main>
    </>
  );
};

export default page;
