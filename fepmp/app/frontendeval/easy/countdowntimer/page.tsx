"use client";
import React, { FormEvent, ChangeEvent, useState } from "react";
import Button from "@/app/_ui/Button/Button";
import Input from "@/app/_ui/Input/Input";

const Page = () => {
  const [isStart, setIsStart] = useState<boolean>(false);

  const [hours, setHours] = useState<number | "HH">("HH");
  const [minutes, setMinutes] = useState<number | "MM">("MM");
  const [seconds, setSeconds] = useState<number | "SS">("SS");

  const hoursHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: number = parseInt(e.target.value);

    if (isNaN(newValue)) {
      setHours(0);
    } else {
      setHours(newValue);
    }
  };

  const minutesHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: number = parseInt(e.target.value);

    if (isNaN(newValue)) {
      setMinutes(0);
    } else {
      setMinutes(newValue);
    }
  };

  const secondsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: number = parseInt(e.target.value);

    if (isNaN(newValue)) {
      setSeconds(0);
    } else {
      setSeconds(newValue);
    }
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        {isStart ? (
          <span>{hours}</span>
        ) : (
          <Input
            value={hours}
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => hoursHandler(e)}
          />
        )}
        <span>:</span>
        {isStart ? (
          <span>{minutes}</span>
        ) : (
          <Input
            value={minutes}
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => minutesHandler(e)}
          />
        )}

        <span>:</span>
        {isStart ? (
          <span>{seconds}</span>
        ) : (
          <Input
            value={seconds}
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => secondsHandler(e)}
          />
        )}

        <span>
          {isStart ? (
            <>
              <Button>Pause</Button> <Button>Reset</Button>
            </>
          ) : (
            <Button onClick={() => setIsStart(true)}>Start</Button>
          )}
        </span>
      </div>
    </div>
  );
};

export default Page;
