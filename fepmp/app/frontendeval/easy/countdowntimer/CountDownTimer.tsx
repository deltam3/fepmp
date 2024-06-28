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
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const initialHours = useRef(0);
  const initialMinutes = useRef(0);
  const initialSeconds = useRef(0);

  const intervalRef = useRef(null);
  const [remainingHours, setRemainingHours] = useState();
  const [remainingMinutes, setRemainingMinutes] = useState();
  const [remainingSeconds, setRemainingSeconds] = useState();

  // Custom hook to force a re-render
  const [dummyState, setDummyState] = useState(false); // Dummy state value

  useEffect(() => {
    if (isPaused == false) {
      intervalRef.current = setInterval(() => {
        if (
          remainingHours === 0 &&
          remainingMinutes === 0 &&
          remainingSeconds === 0
        ) {
          clearInterval(interval);
        } else {
          if (remainingSeconds > 0) {
            setRemainingSeconds((seconds) => seconds - 1);
          } else {
            if (remainingMinutes > 0) {
              // setRemainingTime((prevTime) => ({
              //   ...prevTime,
              //   minutes: prevTime.minutes - 1,
              //   seconds: 59,
              // }));
              setRemainingMinutes((minutes) => minutes - 1);
              setRemainingSeconds((seconds) => (seconds = 59));
              // remainingTime.current.minutes -= -1;
              // remainingTime.current.seconds = 59;
            } else {
              if (remainingHours > 0) {
                setRemainingHours((hours) => hours - 1);
                setRemainingMinutes((hours) => (hours = 59));
                setRemainingSeconds((seconds) => (seconds = 59));

                // remainingTime.current.hours -= -1;
                // remainingTime.current.minutes = 59;
                // remainingTime.current.seconds = 59;
              }
            }
          }
        }
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [remainingHours, remainingMinutes, remainingSeconds, isPaused]);

  const submitTimeHandler = () => {
    setIsStart(true);
    setRemainingHours(initialHours.current);
    setRemainingMinutes(initialMinutes.current);
    setRemainingSeconds(initialSeconds.current);
  };

  const pauseHandler = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };
  const resetHandler = () => {
    clearInterval(intervalRef.current);
    setIsStart(false);
  };
  const restartHandler = () => {
    setIsPaused((prev) => !prev);
    // setDummyState((prev) => !prev);
    // setRemainingHours((hours) => hours);
  };

  return (
    <div>
      {isStart ? (
        <AfterStartTimer
          remainingHours={remainingHours}
          remainingMinutes={remainingMinutes}
          remainingSeconds={remainingSeconds}
          intervalRef={intervalRef}
          resetHandler={resetHandler}
          pauseHandler={pauseHandler}
          isPaused={isPaused}
          restartHandler={restartHandler}
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
