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
      <div>
        <ul>
          <li>
            <p style={{ textDecoration: "line-through" }}>
              Timer Sound & Reset and the time is up
            </p>
          </li>
          <li>
            <p>
              Shaking animation when the time is up and waiting until the user
              presses on the start/pause/restart button
            </p>
          </li>
          <li>
            <p>
              Bug Fix: When the timer is used twice or more the timer is no
              longer working
            </p>
          </li>
          <li>
            <p style={{ textDecoration: "line-through" }}>Fix the design</p>
          </li>
        </ul>
      </div>

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
