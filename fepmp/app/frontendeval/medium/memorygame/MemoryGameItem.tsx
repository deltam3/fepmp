import React from "react";

type Props = {};

const MemoryGameItem = ({ item }: Props) => {
  return (
    <div>
      <div>
        <p>{item.item}</p>
      </div>
    </div>
  );
};

export default MemoryGameItem;
