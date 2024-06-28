import Button from "@/app/_ui/Button/Button";
import React, { useState, useEffect } from "react";

type Props = {
  remainingHours: number | "HH";
  remainingMinutes: number | "MM";
  remainingSeconds: number | "SS";
  setIsStart: (start: boolean) => void;
};

function AfterStartTimer({
  remainingHours,
  remainingMinutes,
  remainingSeconds,
  setIsStart,
}: Props) {
  // const formatTime = (time) => {
  //   return time < 10 ? `0${time}` : time;
  // };
  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        <span>{remainingHours}</span>&nbsp;:&nbsp;
        <span>{remainingMinutes}</span>&nbsp;:&nbsp;
        <span>{remainingSeconds}</span>
      </div>
      <div>
        <Button>Pause</Button>
        <Button onClick={() => setIsStart(false)}>Reset</Button>
      </div>
    </div>
  );
}

export default AfterStartTimer;
