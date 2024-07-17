import React from "react";
import MemoryGameItem from "./MemoryGameItem";
import styled from "styled-components";
import { Pair } from "./page";
type Props = {
  gameItems: Pair[];
  setGameItems: (item: Pair) => void;
};

const StyledEasyLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  width: 500px;
  height: 500px;
`;

const StyledMediumLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
  width: 500px;
  height: 500px;
`;

const StyledHardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 10px;
  width: 500px;
  height: 500px;
`;

const MemoryGame = ({ gameItems, setGameItems }: Props) => {
  const gameLength = gameItems.length;
  const isEasy = gameLength == 16;
  const isMedium = gameLength == 36;
  const isHard = gameLength == 64;

  return (
    <>
      <h1>MemoryGameItems {gameItems.length}</h1>
      <section>
        {isEasy && (
          <StyledEasyLayout>
            {gameItems.map((item) => (
              <MemoryGameItem
                key={item.id}
                item={item}
                setGameItems={setGameItems}
              ></MemoryGameItem>
            ))}
          </StyledEasyLayout>
        )}

        {isMedium && (
          <StyledMediumLayout>
            {gameItems.map((item) => (
              <MemoryGameItem
                key={item.id}
                item={item}
                setGameItems={setGameItems}
              ></MemoryGameItem>
            ))}
          </StyledMediumLayout>
        )}

        {isHard && (
          <StyledHardLayout>
            {gameItems.map((item) => (
              <MemoryGameItem
                key={item.id}
                item={item}
                setGameItems={setGameItems}
              ></MemoryGameItem>
            ))}
          </StyledHardLayout>
        )}
      </section>
    </>
  );
};

export default MemoryGame;
