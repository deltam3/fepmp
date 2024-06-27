import React, { useState, useEffect, useRef } from "react";

import BeforeStartTimer from "./BeforeStartTimer";
import AfterStartTimer from "./AfterStartTimer";

export type TimeType = {
  hours: number | "HH";
  minutes: number | "MM";
  seconds: number | "SS";
};

const CountDownTimer = () => {
  const [isStart, setIsStart] = useState<boolean>(false);

  const initialHours = useRef(0);
  const initialMinutes = useRef(0);
  const initialSeconds = useRef(0);

  const [remainingTime, setRemainingTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        remainingTime.hours === 0 &&
        remainingTime.minutes === 0 &&
        remainingTime.seconds === 0
      ) {
        clearInterval(interval);
      } else {
        if (remainingTime.seconds > 0) {
          setRemainingTime((prevTime) => ({
            ...prevTime,
            seconds: prevTime.seconds - 1,
          }));
        } else {
          if (remainingTime.minutes > 0) {
            setRemainingTime((prevTime) => ({
              ...prevTime,
              minutes: prevTime.minutes - 1,
              seconds: 59,
            }));
          } else {
            if (remainingTime.hours > 0) {
              setRemainingTime((prevTime) => ({
                ...prevTime,
                hours: prevTime.hours - 1,
                minutes: 59,
                seconds: 59,
              }));
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  const submitTimeHandler = () => {
    setIsStart(true);
    setRemainingTime({
      hours: initialHours.current,
      minutes: initialMinutes.current,
      seconds: initialSeconds.current,
    });
  };

  return (
    <div>
      {isStart ? (
        <AfterStartTimer
          remainingHours={remainingTime.hours}
          remainingMinutes={remainingTime.minutes}
          remainingSeconds={remainingTime.seconds}
        />
      ) : (
        <BeforeStartTimer
          submitTimeHandler={submitTimeHandler}
          initialHours={initialHours}
          initialMinutes={initialMinutes}
          initialSeconds={initialSeconds}
        />
      )}
    </div>
  );
};

export default CountDownTimer;
