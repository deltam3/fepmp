import React from "react";
import { Pair } from "./page";
import styled from "styled-components";

type Props = {
  item: Pair;
  setGameItems: (item: Pair) => void;
};

const StyledGameItem = styled.div`
  background-color: red;
  color: white;
  width: 10rem;
  height: 20rem;
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
      <div>{item.isOpen && item.isDone && <p>Done</p>}</div>
      {/* <div>{!item.isOpen && <p>?</p>}</div> */}
      <div>{item.isOpen && <p>{item.item}</p>}</div>
    </StyledGameItem>
  );
};

export default MemoryGameItem;
