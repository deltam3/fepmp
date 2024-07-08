import React, { useState, useEffect, useRef } from "react";
import TimerCircle from "./TimerCircle";
import CircularProgress from "./TimerCircle";
import Pie from "@/app/_ui/ProgressBar/Pie";

type Props = {};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const CountDownTimerItem = ({ item, timersLength, deleteTimer }: Props) => {
  const [name, setName] = useState(`Timer ${timersLength}`);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [initialHours, setInitialHours] = useState(0);
  const [initialMinutes, setInitialMinutes] = useState(1);
  const [initialSeconds, setInitialSeconds] = useState(0);

  const intervalRef = useRef(null);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  // const [totalSeconds, setTotalSeconds] = useState(
  //   (remainingHours * 3600 + remainingMinutes * 60 + remainingSeconds) /
  //     (initialHours * 3600 + initialMinutes * 60 + initialSeconds)
  // );

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
            // setTotalSeconds((totalSeconds) => totalSeconds - 1);
          } else {
            if (remainingMinutes > 0) {
              setRemainingMinutes((minutes) => minutes - 1);
              setRemainingSeconds((seconds) => (seconds = 59));
              // setTotalSeconds((totalSeconds) => totalSeconds - 1);
            } else {
              if (remainingHours > 0) {
                setRemainingHours((hours) => hours - 1);
                setRemainingMinutes((minutes) => (minutes = 59));
                setRemainingSeconds((seconds) => (seconds = 59));
                // setTotalSeconds((totalSeconds) => totalSeconds - 1);
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
    // setIsPaused(true);
    setIsPaused((paused) => !paused);
    clearInterval(intervalRef.current);
  };
  const resetHandler = () => {
    clearInterval(intervalRef.current);
    setIsStart((state) => false);
    setIsPaused((state) => false);
  };
  const restartHandler = () => {
    setIsPaused((prev) => !prev);
  };

  const addMinutesHandler = () => {
    setRemainingMinutes((state) => state + 1);
  };

  // const totalSeconds = Math.floor(
  //   (remainingHours * 3600 + remainingMinutes * 60 + remainingSeconds) /
  //     (initialHours * 3600 + initialMinutes * 60 + initialSeconds)
  // );
  // console.log(totalSeconds);
  const totalRemainingSeconds =
    remainingHours * 3600 + remainingMinutes * 60 + remainingSeconds;

  return (
    <div className="flex justify-center align-middle bg-[var(--color-grey-0)] w-[303px] h-[138px] mx-[5px] mb-[10px] ">
      <div className="w-[45%] h-full">
        {isStart == false && <button onClick={submitTimeHandler}>Start</button>}
        {isStart == true && isPaused == false && (
          <button onClick={pauseHandler}>Pause</button>
        )}
        {isStart == true && isPaused == true && (
          <button onClick={restartHandler}>Restart</button>
        )}
        {/* <Pie percentage={totalRemainingSeconds} isPaused={isPaused}></Pie> */}
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-end">
          {isStart == false && (
            <button onClick={() => deleteTimer(item.id)}>x</button>
          )}
          {isPaused == true && <button onClick={resetHandler}>RESET</button>}
          {isPaused == false && isStart == true && (
            <p className="invisible">BLANK</p>
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
                <span className="text-[3.7584rem]">
                  {formatTime(remainingHours)}
                </span>
                <span>:</span>
                <span className="text-[3.7584rem]">
                  {formatTime(remainingMinutes)}
                </span>
              </span>
              <span className="seconds text-[1.8792rem] relative bottom-[1.2rem]">
                {formatTime(remainingSeconds)}
              </span>
            </div>
          ) : (
            <div className="time_input">
              <input
                type="tel"
                pattern="\d*"
                maxLength={2}
                placeholder="HH"
                value={formatTime(initialHours)}
                onChange={hoursInputHandler}
                className="font-bold h-[33.5px] border-none mb-[13.781px] px-[5.512px] py-[2.756px] rounded-[4px] w-[38.5px] text-center text-[rgb(51, 51, 51)] text-[13.7px] bg-[rgb(242, 242, 242)]"
              />
              <span className="separator">:</span>
              <input
                type="tel"
                pattern="\d*"
                maxLength={2}
                placeholder="MM"
                value={formatTime(initialMinutes)}
                onChange={minutesInputHandler}
                className="font-bold h-[33.5px] border-none mb-[13.781px] px-[5.512px] py-[2.756px] rounded-[4px] w-[38.5px] text-center text-[rgb(51, 51, 51)] text-[13.7px] bg-[rgb(242, 242, 242)]"
              />
              <span className="separator">:</span>
              <input
                type="tel"
                pattern="\d*"
                maxLength={2}
                placeholder="SS"
                value={formatTime(initialSeconds)}
                onChange={secondsInputHandler}
                className="font-bold h-[33.5px] border-none mb-[13.781px] px-[5.512px] py-[2.756px] rounded-[4px] w-[38.5px] text-center text-[rgb(51, 51, 51)] text-[13.7px] bg-[rgb(242, 242, 242)]"
              />
            </div>
          )}
        </div>
        <div>
          <div className="flex justify-end">
            {isStart && <button onClick={addMinutesHandler}>+1</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimerItem;
