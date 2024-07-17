"use client";
import Button from "@/app/_ui/Button/Button";
import React, { useState } from "react";
import MemoryGame from "./MemoryGame";

let idCount = 0;

interface Pair {
  id: number;
  item: number;
}

function createPairs(n: number): Pair[] {
  let pairs = [];
  for (let i = 1; i <= (n * n) / 2; i++) {
    pairs.push({ id: idCount, item: i });
    idCount += 1;
    pairs.push({ id: idCount, item: i });
    idCount += 1;
  }
  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  return pairs;
}

const page = () => {
  const [isStart, setIsStart] = useState(false);
  const [gameItems, setGameItems] = useState<Pair[]>([]);

  const difficultyHandler = (difficultyNumber: number) => {
    setIsStart(true);
    const pairs = createPairs(difficultyNumber);
    setGameItems(pairs);
  };

  return (
    <>
      <h1 className="text-center">Memory Game</h1>
      <div className="">
        {!isStart && (
          <div className="flex gap-[1rem] justify-center">
            <Button onClick={() => difficultyHandler(4)}>Easy 4*4</Button>
            <Button onClick={() => difficultyHandler(6)}>Medium 6*6</Button>
            <Button onClick={() => difficultyHandler(8)}>Hard 8*8</Button>
          </div>
        )}
      </div>
      <main>{isStart && <MemoryGame gameItems={gameItems} />}</main>
    </>
  );
};

export default page;
