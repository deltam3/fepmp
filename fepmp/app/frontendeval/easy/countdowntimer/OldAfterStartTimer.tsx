import Button from "@/app/_ui/Button/Button";
import React, { useState, useEffect } from "react";
import { TimeType } from "./OldCountDownTimer";

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
      <div className="flex gap-10 align-middle">
        <div className="flex align-middle justify-center">
          <span>{formatTime(remainingHours)}</span>
          <span>:</span>
          <span>{formatTime(remainingMinutes)}</span>
          <span>:</span>
          <span>{formatTime(remainingSeconds)}</span>
        </div>
        <div className="flex gap-5">
          {isPaused ? (
            <Button onClick={restartHandler}>Restart</Button>
          ) : (
            <Button onClick={() => pauseHandler()}>Pause</Button>
          )}
          <Button onClick={() => resetHandler()}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export default AfterStartTimer;
