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
    </div>
  );
}

export default AfterStartTimer;
