import React, { ChangeEvent } from "react";

import { TimeType } from "./OldCountDownTimer";
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
    if (isNaN(+e.target.value)) {
      return;
    }
    let newValue: number = parseInt(e.target.value);

    if (isNaN(newValue)) {
      initialHours.current = 0;
    } else {
      initialHours.current = newValue;
    }
  };

  const minutesHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(+e.target.value)) {
      return;
    }
    let newValue: number = parseInt(e.target.value);

    // if (initialMinutes.toString().length >= 3) {
    //   initialMinutes.current = 0;
    // }

    if (isNaN(newValue)) {
      initialMinutes.current = 0;
    } else {
      // initialMinutes.current = +e.target.value;
      initialMinutes.current = newValue;
    }
    // else if (initialMinutes.toString().length <= 1) {
    // initialMinutes.current = +newValue;
    // }
  };

  const secondsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(parseInt(e.target.value))) {
      return;
    }

    let newValue: number = parseInt(e.target.value);

    if (isNaN(+e.target.value)) {
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
          placeholder="HH"
          maxLength={2}
          type="text"
          // max="99"
          // type="number"
          ref={initialHours}
          onChange={(e: ChangeEvent<HTMLInputElement>) => hoursHandler(e)}
        />

        <span>:</span>
        <Input
          placeholder="MM"
          maxLength={2}
          // type="tel"
          type="tel"
          pattern="\d*"
          // max="60"
          // type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) => minutesHandler(e)}
        />

        <span>:</span>
        <Input
          maxLength={2}
          placeholder="SS"
          type="tel"
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
