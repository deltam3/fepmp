import React from "react";

type Props = {
  difficulty: number;
};

const MemoryGame = ({ difficulty }: Props) => {
  return <h1>MemoryGameItems: {difficulty}</h1>;
};

export default MemoryGame;
