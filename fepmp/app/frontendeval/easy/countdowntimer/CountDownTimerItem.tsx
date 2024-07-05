import React, { useState } from "react";

type Props = {};

const CountDownTimerItem = ({ item, timersLength }: Props) => {
  const [name, setName] = useState(`Timer ${timersLength}`);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [initialHours, setInitialHours] = useState("HH");
  const [initialMinutes, setInitialMinutes] = useState("01");
  const [initialSeconds, setInitialSeconds] = useState("00");

  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const nameInputHandler = (e) => {
    e.stopPropagation();
    setName(e.target.value);
  };
  const hoursInputHandler = (e) => {
    e.stopPropagation();
    const numericValue = e.target.value.replace(/\D/g, "");
    setInitialHours(numericValue);
  };
  const minutesInputHandler = (e) => {
    e.stopPropagation();
    const numericValue = e.target.value.replace(/\D/g, "");
    setInitialMinutes(numericValue);
  };
  const secondsInputHandler = (e) => {
    e.stopPropagation();
    const numericValue = e.target.value.replace(/\D/g, "");
    setInitialSeconds(numericValue);
  };

  return (
    <div className="flex">
      <div className="w-[45%] h-full">CIRCLE</div>
      <div className="flex flex-col">
        <div className="name">
          {/* <p>{item.name}</p> */}

          <input type="text" value={name} onChange={nameInputHandler} />
        </div>
        <div className="time">
          {/* <div className="time_display"></div> */}
          <div className="time_input">
            <input
              type="tel"
              pattern="\d*"
              maxLength={2}
              placeholder="HH"
              value={initialHours}
              onChange={hoursInputHandler}
            />
            <span className="separator">:</span>
            <input
              type="tel"
              pattern="\d*"
              maxLength={2}
              placeholder="MM"
              value={initialMinutes}
              onChange={minutesInputHandler}
            />
            <span className="separator">:</span>
            <input
              type="tel"
              pattern="\d*"
              maxLength={2}
              placeholder="SS"
              value={initialSeconds}
              onChange={secondsInputHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimerItem;
