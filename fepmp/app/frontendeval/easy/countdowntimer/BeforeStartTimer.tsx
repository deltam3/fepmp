import React, { ChangeEvent } from "react";

import { TimeType } from "./CountDownTimer";
import Input from "@/app/_ui/Input/Input";
import Button from "@/app/_ui/Button/Button";

type Props = {
  isStart: boolean;
  setIsStart: (start: boolean) => void;
  initialHours: number | "HH";
  initialMinutes: number | "MM";
  initialSeconds: number | "SS";
  setInitialHours: (hours: number) => void;
  setInitialMinutes: (minutes: number) => void;
  setInitialSeconds: (seconds: number) => void;
};

const BeforeStartTimer = ({
  isStart,
  setIsStart,
  initialHours,
  setInitialHours,
  initialMinutes,
  setInitialMinutes,
  initialSeconds,
  setInitialSeconds,
}: Props) => {
  const hoursHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: number = parseInt(e.target.value);

    if (isNaN(newValue)) {
      setInitialHours(0);
    } else {
      setInitialHours(newValue);
    }
  };

  const minutesHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: number = parseInt(e.target.value);

    if (initialMinutes.toString().length >= 3) {
      setInitialMinutes(0);
    }

    if (isNaN(newValue)) {
      setInitialMinutes(0);
    } else if (initialMinutes.toString().length <= 1) {
      setInitialMinutes(newValue);
    }
  };

  const secondsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: number = parseInt(e.target.value);

    if (isNaN(newValue)) {
      setInitialSeconds(0);
    } else {
      setInitialSeconds(newValue);
    }
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <Input
          value={initialHours}
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => hoursHandler(e)}
        />

        <span>:</span>
        <Input
          value={initialMinutes}
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => minutesHandler(e)}
        />

        <span>:</span>
        <Input
          value={initialSeconds}
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => secondsHandler(e)}
        />

        <span>
          <Button onClick={() => setIsStart(true)}>Start</Button>
        </span>
      </div>
    </div>
  );
};

export default BeforeStartTimer;
