"use client";
import Button from "@/app/_ui/Button/Button";
import React, { useState, useRef, useEffect } from "react";
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

function countOpenItems(array) {
  let openItems = array.filter((item) => item.isOpen === true);
  return openItems.length;
}

const Page = () => {
  const [isStart, setIsStart] = useState(false);
  const [gameItems, setGameItems] = useState<Pair[]>([]);

  const difficultyHandler = (difficultyNumber: number) => {
    setIsStart(true);
    const pairs = createPairs(difficultyNumber);
    setGameItems(pairs);
  };

  // let openCount = useRef<any>(countOpenItems(gameItems));
  let openCount = useRef<number>(0);

  let openItem1 = useRef<any>(null);
  let openItem2 = useRef<any>(null);

  useEffect(() => {
    // console.log("log");
  }, []);

  const onClickHandler = (selectedItem: Pair) => {
    if (openCount.current === 0 && openItem1.current === null) {
      console.log("0");
      openItem1.current = { ...selectedItem, isOpen: true };
      const openedOneData = gameItems.map((item) => {
        if (item.id === selectedItem.id) {
          return { ...item, isOpen: true };
        }
        return item;
      });
      openCount.current = 1;

      setGameItems(openedOneData);
      console.log(openItem1, openItem2, openCount.current);
    } else if (openCount.current === 1 && openItem2.current === null) {
      console.log("1");
      openItem2.current = { ...selectedItem, isOpen: true };
      console.log(openItem1, openItem2);

      openCount.current = 2;
      // isOpen인 2개가 같으면
      if (openItem1.current.item === openItem2.current.item) {
        console.log("1-1: same");
        const openedTwoDoneData = gameItems.map((item) => {
          if (item.id === openItem1.current.id || openItem2.current.id) {
            return { ...item, isOpen: false, isDone: true };
          }
          return item;
        });
        setTimeout(() => {
          setGameItems(openedTwoDoneData);
        }, 3000);
        openItem1.current = null;
        openItem2.current = null;
        openCount.current = 0;
      }
      // isOpen인 2개가 다르면
      if (openItem1.current.item !== openItem2.current.item) {
        console.log("1-2: not same");
        const openedTwoNotDoneData = gameItems.map((item) => {
          if (item.id === openItem1.current.id || openItem2.current.id) {
            return { ...item, isOpen: false };
          }
          return item;
        });
        setTimeout(() => {
          setGameItems(openedTwoNotDoneData);
        }, 3000);
        openItem1.current = null;
        openItem2.current = null;
        openCount.current = 0;
        // setGameItems(openedTwoNotDoneData);
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
      <main className="flex justify-center">
        {isStart && (
          <MemoryGame gameItems={gameItems} setGameItems={onClickHandler} />
        )}
      </main>
    </>
  );
};

export default Page;
