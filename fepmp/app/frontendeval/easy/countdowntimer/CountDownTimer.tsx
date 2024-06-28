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

  // const remainingTime = useRef({
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });

  const intervalRef = useRef(null);
  const [remainingHours, setRemainingHours] = useState();
  const [remainingMinutes, setRemainingMinutes] = useState();
  const [remainingSeconds, setRemainingSeconds] = useState();

  useEffect(() => {
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

    return () => clearInterval(intervalRef.current);
  }, [remainingHours, remainingMinutes, remainingSeconds]);

  const submitTimeHandler = () => {
    // if (intervalRef.current !== null) return;

    setIsStart(true);
    setRemainingHours(initialHours.current);
    setRemainingMinutes(initialMinutes.current);
    setRemainingSeconds(initialSeconds.current);
  };

  const pauseHandler = () => {
    clearInterval(intervalRef.current);
  };
  // const pauseHandler = () => {
  // console.log("log");
  // };

  return (
    <div>
      {isStart ? (
        <AfterStartTimer
          remainingHours={remainingHours}
          remainingMinutes={remainingMinutes}
          remainingSeconds={remainingSeconds}
          setIsStart={setIsStart}
          pauseHandler={pauseHandler}
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
