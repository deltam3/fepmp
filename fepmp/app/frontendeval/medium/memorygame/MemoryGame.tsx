import React from "react";

type Props = {
  gameItems: any;
};

const MemoryGame = ({ gameItems }: Props) => {
  return (
    <>
      <h1>MemoryGameItems {gameItems.length}</h1>
      <section>
        {gameItems.map((item) => {
          return <h1 key={item.id}>{item.item}</h1>;
        })}
      </section>
    </>
  );
};

export default MemoryGame;
