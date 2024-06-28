import Button from "@/app/_ui/Button/Button";
import React, { useState, useEffect } from "react";
import { TimeType } from "./CountDownTimer";

type Props = {
  remainingHours: number | "HH";
  remainingMinutes: number | "MM";
  remainingSeconds: number | "SS";
  resetHandler: () => void;
  pauseHandler: () => void;
};

function AfterStartTimer({
  remainingHours,
  remainingMinutes,
  remainingSeconds,
  resetHandler,
  pauseHandler,
  isPaused,
  restartHandler,
}: Props) {
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        <span>{formatTime(remainingHours)}</span>&nbsp;:&nbsp;
        <span>{formatTime(remainingMinutes)}</span>&nbsp;:&nbsp;
        <span>{formatTime(remainingSeconds)}</span>
      </div>
      <div>
        {isPaused ? (
          <Button>Restart</Button>
        ) : (
          <Button onClick={() => pauseHandler()}>Pause</Button>
        )}
        <Button onClick={() => resetHandler()}>Reset</Button>
      </div>
    </div>
  );
}

export default AfterStartTimer;
