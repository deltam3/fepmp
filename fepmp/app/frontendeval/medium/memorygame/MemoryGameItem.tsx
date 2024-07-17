import React from "react";
import { Pair } from "./page";
import styled from "styled-components";

type Props = {
  item: Pair;
  setGameItems: (item: Pair) => void;
};

const StyledGameItem = styled.div`
  /* background-color: red; */
  width: 10rem;
  height: 20rem;
`;

const MemoryGameItem = ({ item, setGameItems }: Props) => {
  return (
    <StyledGameItem onClick={() => setGameItems(item)}>
      <div>{item.isDone && <p>Done</p>}</div>
      <div>{!item.isOpen && <p>?</p>}</div>
      <div>{item.isOpen && <p>{item.item}</p>}</div>
    </StyledGameItem>
  );
};

export default MemoryGameItem;
