import React from "react";
import CountDownTimerItem from "./CountDownTimerItem";
type Props = {};

import styled from "styled-components";
import AddCountDownTimer from "./AddCountDownTimer";

const StyledTimerList = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 50px;
  }
`;

const CountDownTimerList = ({
  timers,
  timersLength,
  deleteTimer,
  addTimer,
}: Props) => {
  return (
    <>
      <StyledTimerList>
        {timers.map((item) => (
          <CountDownTimerItem
            key={item.id}
            item={item}
            timersLength={timersLength}
            deleteTimer={deleteTimer}
          />
        ))}
        <AddCountDownTimer addTimer={addTimer}></AddCountDownTimer>
      </StyledTimerList>
    </>
  );
};

export default CountDownTimerList;
