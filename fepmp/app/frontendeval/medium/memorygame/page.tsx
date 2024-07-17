"use client";
import Button from "@/app/_ui/Button/Button";
import React, { useState, useRef } from "react";
import MemoryGame from "./MemoryGame";

let idCount = 0;

export interface Pair {
  id: number;
  item: number;
  isOpen: boolean;
  isDone: boolean;
}

function createPairs(n: number): Pair[] {
  let pairs = [];
  for (let i = 1; i <= (n * n) / 2; i++) {
    pairs.push({ id: idCount, item: i, isOpen: false, isDone: false });
    idCount += 1;
    pairs.push({ id: idCount, item: i, isOpen: false, isDone: false });
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

  let openCount = 0;
  const openItem1 = useRef<any>(null);
  const openItem2 = useRef<any>(null);

  const onClickHandler = (selectedItem: Pair) => {
    if (openCount === 0) {
      openItem1.current = selectedItem;
      const openedOneData = gameItems.map((item) => {
        if (item.id === selectedItem.id) {
          return { ...item, isOpen: true };
        }
        return item;
      });
      openCount = 1;
      setGameItems(openedOneData);
    } else if (openCount === 1) {
      console.log(openItem1, openItem2);
      openItem2.current = selectedItem;
      // isOpen인 2개가 같으면
      if (openItem1.current.item === openItem2.current.item) {
        const openedTwoDoneData = gameItems.map((item) => {
          if (item.id === openItem1.current.id || openItem2.current.id) {
            return { ...item, isOpen: false, isDone: true };
          }
          return item;
        });
        openItem1.current = {};
        openItem2.current = {};
        openCount = 0;
        setGameItems(openedTwoDoneData);
      }
      // isOpen인 2개가 다르면
      if (openItem1.current.item !== openItem2.current.item) {
        const openedTwoNotDoneData = gameItems.map((item) => {
          if (item.id === openItem1.current.id || openItem2.current.id) {
            return { ...item, isOpen: false };
          }
          return item;
        });
        openItem1.current = {};
        openItem2.current = {};
        openCount = 0;
        setGameItems(openedTwoNotDoneData);
      }
    }
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
      <main>
        {isStart && (
          <MemoryGame gameItems={gameItems} setGameItems={onClickHandler} />
        )}
      </main>
    </>
  );
};

export default page;
