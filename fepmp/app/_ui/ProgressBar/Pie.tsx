"use client";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Pie = ({ percentage, isPaused }) => {
  return (
    <div style={{ width: 100, height: 200 }}>
      <CountdownCircleTimer
        isPlaying={isPaused}
        duration={percentage}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Pie;
