import React from "react";
import { Pair } from "./page";
import styled from "styled-components";

type Props = {
  item: Pair;
  setGameItems: (item: Pair) => void;
};

const StyledGameItem = styled.div`
  background-color: var(--color-grey-700);
  color: var(--color-grey-0);
  width: 10rem;
  height: 10rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemoryGameItem = ({ item, setGameItems }: Props) => {
  const classes = {
    visiblity: "hidden",
  };
  return (
    <StyledGameItem
      onClick={() => setGameItems(item)}
      className={`${item.isDone ? classes : ""}`}
    >
      <span>{item.isDone && <span>Done</span>}</span>
      {/* <div>{!item.isOpen && <p>?</p>}</div> */}
      <span>{item.isOpen && !item.isDone && <span>{item.item}</span>}</span>
    </StyledGameItem>
  );
};

export default MemoryGameItem;
