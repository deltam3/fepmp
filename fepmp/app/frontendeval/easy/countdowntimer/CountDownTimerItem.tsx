import React from "react";

type Props = {};

const CountDownTimerItem = ({ item }: Props) => {
  // return <div>CountDownTimerItem</div>;
  return (
    <div>
      <p>{item.name}</p>
    </div>
  );
};

export default CountDownTimerItem;
