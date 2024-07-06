import React, { useState, useEffect, useRef } from "react";

type Props = {};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const CountDownTimerItem = ({ item, timersLength, deleteTimer }: Props) => {
  const [name, setName] = useState(`Timer ${timersLength}`);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [initialHours, setInitialHours] = useState("HH");
  const [initialMinutes, setInitialMinutes] = useState("01");
  const [initialSeconds, setInitialSeconds] = useState("00");

  const intervalRef = useRef(null);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

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

  useEffect(() => {
    if (isPaused == false) {
      intervalRef.current = setInterval(() => {
        if (
          remainingHours === 0 &&
          remainingMinutes === 0 &&
          remainingSeconds === 0
        ) {
          clearInterval(intervalRef.current);
        } else {
          if (remainingSeconds > 0) {
            setRemainingSeconds((seconds) => seconds - 1);
          } else {
            if (remainingMinutes > 0) {
              setRemainingMinutes((minutes) => minutes - 1);
              setRemainingSeconds((seconds) => (seconds = 59));
            } else {
              if (remainingHours > 0) {
                setRemainingHours((hours) => hours - 1);
                setRemainingMinutes((hours) => (hours = 59));
                setRemainingSeconds((seconds) => (seconds = 59));
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
    setRemainingHours(initialHours);
    setRemainingMinutes(initialMinutes);
    setRemainingSeconds(initialSeconds);
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
  };

  return (
    <div className="flex justify-center align-middle bg-[var(--color-grey-0)] w-[303px] h-[138px] mx-[5px] mb-[10px] ">
      <div className="w-[45%] h-full">
        <button onClick={submitTimeHandler}>Start</button>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-end">
          {isStart == false && (
            <button onClick={() => deleteTimer(item.id)}>x</button>
          )}
        </div>
        <div className="name">
          <input
            type="text"
            value={name}
            onChange={nameInputHandler}
            className="mb-[13.781px] px-[5.512px] py-[2.756px] w-[134.703px] h-[33px] bg-[#F2F2F2]"
          />
        </div>
        <div className="time">
          {isStart ? (
            <div className="time_display">
              <span className="hours_minutes">
                {formatTime(remainingHours)}:{formatTime(remainingMinutes)}
              </span>
              <span className="seconds">{formatTime(remainingSeconds)}</span>
            </div>
          ) : (
            <div className="time_input">
              <input
                type="tel"
                pattern="\d*"
                maxLength={2}
                placeholder="HH"
                value={initialHours}
                onChange={hoursInputHandler}
                className="font-bold h-[33.5px] border-none mb-[13.781px] px-[5.512px] py-[2.756px] rounded-[4px] w-[38.5px] text-center text-[rgb(51, 51, 51)] text-[13.7px] bg-[rgb(242, 242, 242)]"
              />
              <span className="separator">:</span>
              <input
                type="tel"
                pattern="\d*"
                maxLength={2}
                placeholder="MM"
                value={initialMinutes}
                onChange={minutesInputHandler}
                className="font-bold h-[33.5px] border-none mb-[13.781px] px-[5.512px] py-[2.756px] rounded-[4px] w-[38.5px] text-center text-[rgb(51, 51, 51)] text-[13.7px] bg-[rgb(242, 242, 242)]"
              />
              <span className="separator">:</span>
              <input
                type="tel"
                pattern="\d*"
                maxLength={2}
                placeholder="SS"
                value={initialSeconds}
                onChange={secondsInputHandler}
                className="font-bold h-[33.5px] border-none mb-[13.781px] px-[5.512px] py-[2.756px] rounded-[4px] w-[38.5px] text-center text-[rgb(51, 51, 51)] text-[13.7px] bg-[rgb(242, 242, 242)]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountDownTimerItem;
