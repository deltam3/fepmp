"use client";
import React, { useState, useEffect, useRef } from "react";
type Props = {};

const formatTime = (time) => {
  if (+time == 0) {
    return "00";
  }

  if (+time < 10) {
    let newString = `${time}`;
    let cleanedStr = newString.replace(/^0+/, "");
    return `0${cleanedStr}`;
  } else {
    return time;
  }
};
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const minuteSeconds = 60;
const hourSeconds = 3600;
const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
// const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;

const timerProps = {
  // isPlaying: true,
  size: 100,
  strokeWidth: 6,
};

const CountDownTimerItem = ({ item, timersLength, deleteTimer }: Props) => {
  const [name, setName] = useState(`Timer ${timersLength}`);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [initialHours, setInitialHours] = useState("");
  const [initialMinutes, setInitialMinutes] = useState("01");
  const [initialSeconds, setInitialSeconds] = useState("00");

  const intervalRef = useRef(null);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  const minInputEl = useRef();
  const secInputEl = useRef();

  const initialTotalSeconds =
    +initialHours * +hourSeconds +
    +initialMinutes * +minuteSeconds +
    +initialSeconds;
  const remainingTotalSeconds =
    +remainingHours * +hourSeconds +
    +remainingMinutes * +minuteSeconds +
    +remainingSeconds;

  useEffect(() => {
    const minHandler = (event) => {
      if (!minInputEl.current) {
        return;
      }
      if (!minInputEl.current.contains(event.target)) {
        console.log("out");

        if (+initialMinutes > 59) {
          console.log("in");
          setInitialMinutes(59);
        }
      }
    };

    document.addEventListener("click", minHandler);

    return () => {
      document.removeEventListener("click", minHandler);
    };
  });

  useEffect(() => {
    const secHandler = (event) => {
      // console.log(+initialTotalSeconds - remainingTotalSeconds);
      // console.log(
      //   typeof remainingHours,
      //   typeof remainingMinutes,
      //   typeof remainingSeconds
      // );
      // console.log(
      //   `${remainingHours}, ${remainingMinutes}, ${remainingSeconds}`
      // );
      if (!secInputEl.current) {
        return;
      }
      if (!secInputEl.current.contains(event.target)) {
        if (+initialSeconds > 59) {
          setInitialSeconds(59);
        }
      }
    };

    document.addEventListener("click", secHandler);

    return () => {
      document.removeEventListener("click", secHandler);
    };
  });

  const nameInputHandler = (e) => {
    // e.stopPropagation();

    setName(e.target.value);
  };
  const hoursInputHandler = (e) => {
    // e.stopPropagation();
    const numericValue = e.target.value.replace(/\D/g, "");
    setInitialHours(`${numericValue}`);
  };
  const minutesInputHandler = (e) => {
    // e.stopPropagation();
    const numericValue = e.target.value.replace(/\D/g, "");
    setInitialMinutes(`${numericValue}`);
  };
  const secondsInputHandler = (e) => {
    // e.stopPropagation();
    const numericValue = e.target.value.replace(/\D/g, "");
    setInitialSeconds(`${numericValue}`);
  };

  useEffect(() => {
    if (isPaused == false) {
      intervalRef.current = setInterval(() => {
        if (
          (remainingHours === "" || remainingHours === "00") &&
          remainingMinutes === "00" &&
          remainingSeconds === 0
        ) {
          setIsStart(false);
          var audio = new Audio(
            "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          );
          audio.play();
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
                setRemainingMinutes((minutes) => (minutes = 59));
                setRemainingSeconds((seconds) => (seconds = 59));
              }
            }
          }
        }
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [remainingHours, remainingMinutes, remainingSeconds, isPaused]);

  const submitTimeHandler = (e) => {
    // e.stopPropagation();
    setIsStart(true);
    setRemainingHours(initialHours);
    // setRemainingHours((prevHours) => {
    //   if (initialHours === "") {
    //     prevHours = 0;
    //   } else {
    //     prevHours = +initialHours;
    //   }
    // });
    setRemainingMinutes(initialMinutes);
    setRemainingSeconds(initialSeconds);
  };

  const pauseHandler = (e) => {
    // e.stopPropagation();
    setIsPaused((paused) => !paused);
    clearInterval(intervalRef.current);
  };
  const resetHandler = (e) => {
    // e.stopPropagation();
    clearInterval(intervalRef.current);
    setIsStart((state) => false);
    setIsPaused((state) => false);
  };
  const restartHandler = (e) => {
    // e.stopPropagation();
    setIsPaused((prev) => !prev);
  };

  const addMinutesHandler = (e) => {
    // e.stopPropagation();
    setRemainingMinutes((state) => state + 1);
  };

  return (
    <div className="w-full h-[13.8rem] flex justify-between align-middle px-[7rem] gap-[5rem] md:justify-center bg-[var(--color-grey-0)] md:w-[30.3rem] md:h-[13.8rem] md:px-[10px] md:mb-[10px] ">
      {/* <div className="flex align-middle justify-center w-[25%] m-auto"> */}
      <div className="w-[25%] m-auto px-2">
        {/* {isStart == false && <button onClick={submitTimeHandler}>Start</button>}
        {isStart == true && isPaused == false && (
          <button onClick={pauseHandler}>Pause</button>
        )}
        {isStart == true && isPaused == true && (
          <button onClick={restartHandler}>Restart</button>
        )} */}

        <CountdownCircleTimer
          {...timerProps}
          isPlaying={isStart && !isPaused}
          // initialRemainingTime={+initialTotalSeconds}
          duration={+remainingTotalSeconds}
          colors="#F7B801"
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {isStart == false && (
                <button onClick={submitTimeHandler}>Start</button>
              )}
              {isStart == true && isPaused == false && (
                <button onClick={pauseHandler}>Pause</button>
              )}
              {isStart == true && isPaused == true && (
                <button onClick={restartHandler}>Restart</button>
              )}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      {/* <div className="flex flex-col justify-center w-full mx-auto"> */}
      <div className="w-[50%] md:w-full mx-auto px-3 py-3">
        <div className="flex justify-end ">
          {isStart == false && (
            <button onClick={() => deleteTimer(item.id)}>x</button>
          )}
          {isPaused == true && <button onClick={resetHandler}>RESET</button>}
          {isPaused == false && isStart == true && (
            <p className="invisible">BLANK</p>
          )}
        </div>
        <div>
          <div className="name">
            <input
              type="text"
              value={name}
              onChange={nameInputHandler}
              className="mb-[1.3781rem] px-[.5512rem] py-[.2756rem] w-[13.4703rem] h-[3.3rem] bg-[#F2F2F2]"
            />
          </div>
          <div className="time">
            {isStart ? (
              <div className="time_display mt-[-2rem] ">
                <span className="hours_minutes">
                  <span className="text-[3.7584rem]">
                    {formatTime(remainingHours)}
                    {/* {remainingHours} */}
                  </span>
                  <span>:</span>
                  <span className="text-[3.7584rem]">
                    {formatTime(remainingMinutes)}
                    {/* {remainingMinutes} */}
                  </span>
                </span>
                <span className="seconds text-[1.8792rem] relative bottom-[1.2rem] text-[var(--color-grey-400)]">
                  {formatTime(remainingSeconds)}
                  {/* {remainingSeconds} */}
                </span>
              </div>
            ) : (
              <div className="time_input">
                <input
                  type="tel"
                  pattern="\d*"
                  maxLength={2}
                  placeholder="HH"
                  // value={formatTime(initialHours)}
                  value={initialHours}
                  onChange={hoursInputHandler}
                  className="font-bold border-none mb-[13.781px] px-[5.512px] py-[2.756px] rounded-[4px] w-[38.5px] text-center text-[rgb(51, 51, 51)] text-[13.7px] bg-[rgb(242, 242, 242)]"
                />
                <span className="separator">:</span>
                <input
                  type="tel"
                  pattern="\d*"
                  maxLength={2}
                  placeholder="MM"
                  // value={formatTime(initialMinutes)}
                  value={initialMinutes}
                  onChange={minutesInputHandler}
                  ref={minInputEl}
                  className="font-bold border-none mb-[13.781px] px-[5.512px] py-[2.756px] rounded-[4px] w-[38.5px] text-center text-[rgb(51, 51, 51)] text-[13.7px] bg-[rgb(242, 242, 242)]"
                />
                <span className="separator">:</span>
                <input
                  type="tel"
                  pattern="\d*"
                  maxLength={2}
                  placeholder="SS"
                  // value={formatTime(initialSeconds)}
                  value={initialSeconds}
                  onChange={secondsInputHandler}
                  ref={secInputEl}
                  className="font-bold border-none mb-[13.781px] px-[5.512px] py-[2.756px] rounded-[4px] w-[38.5px] text-center text-[rgb(51, 51, 51)] text-[13.7px] bg-[rgb(242, 242, 242)]"
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="flex justify-end">
            {isStart && <button onClick={addMinutesHandler}>+1</button>}
            {isStart == false && <p className="invisible">BLANK</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimerItem;
