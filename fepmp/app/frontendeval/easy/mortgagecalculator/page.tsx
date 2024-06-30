"use client";
import Button from "@/app/_ui/Button/Button";
import Input from "@/app/_ui/Input/Input";
import React from "react";

const page = () => {
  const submitHandler = () => {
    console.log("log");
  };
  return (
    <main className="">
      <section className="">
        <h1 className="flex justify-center text-3xl font-bold">
          월별 주택담보 대출 상환액을 계산하는 계산기
        </h1>
        <form className="mx-auto w-[30rem]">
          <div className="flex flex-col">
            <label>Principal loan amount</label>
            <Input type="number" className="w-[25rem]" />
          </div>
          <div>
            <label>Interest rate</label>
            <div className="flex">
              <Input type="number" className="w-[25rem]" />
              <p>%</p>
            </div>
            <div>
              <label>Length of loan</label>
              <div className="flex">
                <Input type="number" className="w-[25rem]" />
                <p>Year</p>
              </div>
            </div>
          </div>
          <div>
            <Button onClick={submitHandler}>Calculate</Button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default page;
