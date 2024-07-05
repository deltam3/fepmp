import React from "react";
import CountDownTimerItem from "./CountDownTimerItem";
type Props = {};

const CountDownTimerList = ({ timers, timersLength }: Props) => {
  return (
    <div>
      {timers.map((item) => (
        <CountDownTimerItem
          key={item.id}
          item={item}
          timersLength={timersLength}
        />
      ))}
    </div>
  );
};

export default CountDownTimerList;
