import React, { useState, useEffect, useRef } from "react";
import AddCountDownTimer from "./AddCountDownTimer";
import CountDownTimerList from "./CountDownTimerList";

type Props = {};

let id = 1;

const CountDownTimer = (props: Props) => {
  const [timers, setTimers] = useState([{ id: 1, name: "Timer 1" }]);
  const timersLength = timers.length;

  const addTimerHandler = (e) => {
    id += 1;
    setTimers([...timers, { id: id + 1, name: `Timer ${timersLength}` }]);
  };

  return (
    <div>
      <CountDownTimerList
        timers={timers}
        timersLength={timersLength}
      ></CountDownTimerList>
      <AddCountDownTimer addTimer={addTimerHandler}></AddCountDownTimer>
    </div>
  );
};

export default CountDownTimer;
