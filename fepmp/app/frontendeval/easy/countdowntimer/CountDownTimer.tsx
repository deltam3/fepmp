"use client";
import React, { useState } from "react";
import CountDownTimerList from "./CountDownTimerList";
type Props = {};

let id = 1;

const CountDownTimer = (props: Props) => {
  const [timers, setTimers] = useState([{ id: 1 }]);
  const timersLength = timers.length;

  const addTimerHandler = (e) => {
    id += 1;
    setTimers((prevTimers) => [...prevTimers, { id: id }]);
  };

  const deleteTimerHandler = (indexToDelete) => {
    const updatedItems = timers.filter((item) => item.id !== indexToDelete);
    setTimers(updatedItems);
  };

  return (
    <div>
      <CountDownTimerList
        timers={timers}
        timersLength={timersLength}
        deleteTimer={deleteTimerHandler}
        addTimer={addTimerHandler}
      ></CountDownTimerList>
    </div>
  );
};

export default CountDownTimer;
