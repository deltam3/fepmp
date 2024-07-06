import React from "react";
import CountDownTimerItem from "./CountDownTimerItem";
type Props = {};

const CountDownTimerList = ({ timers, timersLength, deleteTimer }: Props) => {
  return (
    <div>
      {timers.map((item) => (
        <CountDownTimerItem
          key={item.id}
          item={item}
          timersLength={timersLength}
          deleteTimer={deleteTimer}
        />
      ))}
    </div>
  );
};

export default CountDownTimerList;
