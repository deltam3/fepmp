import React, { useState, useEffect, useRef } from "react";
import AddCountDownTimer from "./AddCountDownTimer";
import CountDownTimerList from "./CountDownTimerList";

type Props = {};

const CountDownTimer = (props: Props) => {
  const [timers, setTimers] = useState([
    { id: 1, name: "Timer 1", hours: 0, minutes: 1, seconds: 0 },
  ]);

  return (
    <div>
      <CountDownTimerList timers={timers}></CountDownTimerList>
      <AddCountDownTimer></AddCountDownTimer>
    </div>
  );
};

export default CountDownTimer;
