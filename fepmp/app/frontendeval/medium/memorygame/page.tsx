"use client";
import Button from "@/app/_ui/Button/Button";
import React, { useState } from "react";
import MemoryGame from "./MemoryGame";

// function setGameItems () {
//   if

// }

const fivebyfive = [];
const sixbysix = [];
const eightbyeight = [];

const page = () => {
  const [gameItems, setGameItems] = useState([{}]);
  const [isStart, setIsStart] = useState();
  return (
    <>
      <h1>Memory Game</h1>
      <div>
        <div>
          <Button>Easy 5*5</Button>
          <Button>Medium 6*6</Button>
          <Button>Hard 8*8</Button>
        </div>
      </div>
      <main>
        <MemoryGame />
      </main>
    </>
  );
};

export default page;
