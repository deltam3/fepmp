import React, { useState, useEffect, useRef } from "react";
import AddCountDownTimer from "./AddCountDownTimer";
import CountDownTimerList from "./CountDownTimerList";
import styled from "styled-components";
type Props = {};

let id = 1;

const CountDownTimer = (props: Props) => {
  const [timers, setTimers] = useState([{ id: 1, name: "Timer 1" }]);
  const timersLength = timers.length;

  const addTimerHandler = (e) => {
    id += 1;
    setTimers([...timers, { id: id + 1, name: `Timer ${timersLength}` }]);
  };

  const deleteTimerHandler = (indexToDelete) => {
    const updatedItems = timers.filter((item) => item.id !== indexToDelete);
    setTimers(updatedItems);
  };

  const StyledCountDownTimer = styled.div`
    @media (max-width: 900px) {
    }
  `;

  return (
    <div>
      <StyledCountDownTimer>
        <CountDownTimerList
          timers={timers}
          timersLength={timersLength}
          deleteTimer={deleteTimerHandler}
          addTimer={addTimerHandler}
        ></CountDownTimerList>
        {/* <AddCountDownTimer addTimer={addTimerHandler}></AddCountDownTimer> */}
      </StyledCountDownTimer>
    </div>
  );
};

export default CountDownTimer;
