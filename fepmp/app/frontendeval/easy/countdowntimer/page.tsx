"use client";
import Input from "@/app/_ui/Input/Input";

const Page = () => {
  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <Input />
        <span>:</span>
        <Input />
        <span>:</span>
        <Input />
      </div>
    </div>
  );
};

export default Page;
