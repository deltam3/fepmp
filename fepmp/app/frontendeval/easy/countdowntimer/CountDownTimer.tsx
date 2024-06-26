import React, { useState, useEffect } from "react";

import BeforeStartTimer from "./BeforeStartTimer";
import AfterStartTimer from "./AfterStartTimer";

export type TimeType = {
  hours: number | "HH";
  minutes: number | "MM";
  seconds: number | "SS";
};

const CountDownTimer = () => {
  const [isStart, setIsStart] = useState<boolean>(false);

  const [initialHours, setInitialHours] = useState<number | "HH">("HH");
  const [initialMinutes, setInitialMinutes] = useState<number | "MM">("MM");
  const [initialSeconds, setInitialSeconds] = useState<number | "SS">("SS");

  const [remainingHours, setRemainingHours] = useState<number | "HH">(
    initialHours
  );
  const [remainingMinutes, setRemainingMinutes] = useState<number | "MM">(
    initialMinutes
  );
  const [remainingSeconds, setRemainingSeconds] = useState<number | "SS">(
    initialSeconds
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        remainingHours === 0 &&
        remainingMinutes === 0 &&
        remainingSeconds === 0
      ) {
        clearInterval(interval);
      } else {
        if (typeof remainingSeconds === "number") {
          if (remainingSeconds > 0) {
            setRemainingSeconds((prevSeconds: any) => prevSeconds - 1);
          }
        } else {
          if (typeof remainingMinutes === "number") {
            if (remainingMinutes > 0) {
              // setRemainingTime((prevTime) => ({
              //   ...prevTime,
              //   minutes: prevTime.minutes - 1,
              //   seconds: 59,
              // }));
              setRemainingMinutes((prevMinutes: any) => prevMinutes - 1);
              setRemainingSeconds(59);
            }
          } else {
            // if (remainingTime.hours > 0) {
            //   setRemainingTime((prevTime) => ({
            //     ...prevTime,
            //     hours: prevTime.hours - 1,
            //     minutes: 59,
            //     seconds: 59,
            //   }));
            // }
            if (typeof remainingHours === "number") {
              if (remainingHours > 0) {
                setRemainingHours((prevHours: any) => prevHours - 1);
                setRemainingMinutes((prevMinutes: any) => 59);
                setRemainingSeconds((prevSeconds: any) => 59);
              }
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingHours, remainingMinutes, remainingSeconds]);

  return (
    <div>
      {isStart ? (
        <AfterStartTimer
          remainingHours={remainingHours}
          remainingMinutes={remainingMinutes}
          remainingSeconds={remainingSeconds}
        />
      ) : (
        <BeforeStartTimer
          isStart={isStart}
          setIsStart={setIsStart}
          initialHours={initialHours}
          setInitialHours={setInitialHours}
          initialMinutes={initialMinutes}
          setInitialMinutes={setInitialMinutes}
          initialSeconds={initialSeconds}
          setInitialSeconds={setInitialSeconds}
        />
      )}
    </div>
  );
};

export default CountDownTimer;
