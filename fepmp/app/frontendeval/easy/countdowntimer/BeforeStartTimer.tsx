import React, { ChangeEvent } from "react";

import { TimeType } from "./CountDownTimer";
import Input from "@/app/_ui/Input/Input";
import Button from "@/app/_ui/Button/Button";

type Props = {
  submitTimeHandler: () => void;
  initialHours: { current: number };
  initialMinutes: { current: number };
  initialSeconds: { current: number };
};

const BeforeStartTimer = ({
  submitTimeHandler,
  initialHours,
  initialMinutes,
  initialSeconds,
}: Props) => {
  const hoursHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: number = parseInt(e.target.value);

    if (isNaN(newValue)) {
      initialHours.current = 0;
    } else {
      initialHours.current = newValue;
    }
  };

  const minutesHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: number = parseInt(e.target.value);

    if (initialMinutes.toString().length >= 3) {
      initialMinutes.current = 0;
    }

    if (isNaN(newValue)) {
      initialMinutes.current = 0;
    } else if (initialMinutes.toString().length <= 1) {
      initialMinutes.current = newValue;
    }
  };

  const secondsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: number = parseInt(e.target.value);

    if (isNaN(newValue)) {
      initialSeconds.current = 0;
    } else {
      initialSeconds.current = newValue;
    }
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <Input
          defaultValue="HH"
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => hoursHandler(e)}
        />

        <span>:</span>
        <Input
          defaultValue="MM"
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => minutesHandler(e)}
        />

        <span>:</span>
        <Input
          defaultValue="SS"
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => secondsHandler(e)}
        />

        <span>
          <Button onClick={submitTimeHandler}>Start</Button>
        </span>
      </div>
    </div>
  );
};

export default BeforeStartTimer;
