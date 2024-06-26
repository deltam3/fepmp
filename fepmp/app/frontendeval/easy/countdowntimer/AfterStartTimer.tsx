import React, { useState, useEffect } from "react";

type Props = {
  remainingHours: number | "HH";
  remainingMinutes: number | "MM";
  remainingSeconds: number | "SS";
};

function AfterStartTimer({
  remainingHours,
  remainingMinutes,
  remainingSeconds,
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
    </div>
  );
}

export default AfterStartTimer;
