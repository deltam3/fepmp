import React from "react";
import CountDownTimerItem from "./CountDownTimerItem";
type Props = {};

const CountDownTimerList = ({ timers }: Props) => {
  return (
    <div>
      {timers.map((item) => (
        <CountDownTimerItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CountDownTimerList;
