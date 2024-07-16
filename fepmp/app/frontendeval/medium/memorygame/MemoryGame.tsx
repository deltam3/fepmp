import React from "react";
import MemoryGameItem from "./MemoryGameItem";
type Props = {
  gameItems: any;
};

const MemoryGame = ({ gameItems }: Props) => {
  const gameLength = gameItems.length;
  if (gameLength === 25) {
    console.log(25);
  } else if (gameLength === 36) {
    console.log(36);
  } else if (gameLength == 64) {
    console.log(64);
  }

  return (
    <>
      <h1>MemoryGameItems {gameItems.length}</h1>
      <section className="grid">
        {gameItems.map((item) => {
          return <MemoryGameItem key={item.id} item={item}></MemoryGameItem>;
        })}
      </section>
    </>
  );
};

export default MemoryGame;
