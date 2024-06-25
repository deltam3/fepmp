"use client";
import React, { useState } from "react";
import Button from "@/app/_ui/Button/Button";
import Input from "@/app/_ui/Input/Input";

const Page = () => {
  const [isStart, setIsStart] = useState(false);
  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <Input placeholder="HH" />
        <span>:</span>
        <Input placeholder="MM" />
        <span>:</span>
        <Input placeholder="SS" />
        {isStart ? (
          <div>
            <Button>Pause</Button> <Button>Reset</Button>
          </div>
        ) : (
          <Button onClick={() => setIsStart(true)}>Start</Button>
        )}
      </div>
    </div>
  );
};

export default Page;
