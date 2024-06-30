"use client";
import Button from "@/app/_ui/Button/Button";
import Input from "@/app/_ui/Input/Input";
import React, { useState } from "react";

function calculateMonthlyPayment(P, r, n) {
  r = r / 100 / 12;
  n = n * 12;

  // Calculate monthly payment
  const monthlyPayment =
    (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  return Math.floor(monthlyPayment);
}

const Page = () => {
  const [principal, setPrincipal] = useState<number>(50000);
  const [interest, setInterest] = useState<number>(3);
  const [length, setLength] = useState<number>(30);
  const [result, setResult] = useState<number>();

  const onPrincipalHandler = (e: any) => {
    setPrincipal(e.target.value);
  };

  const onInterestHandler = (e: any) => {
    setInterest(e.target.value);
  };
  const onLengthHandler = (e: any) => {
    setLength(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    const result = calculateMonthlyPayment(principal, interest, length);
    setResult(result);
  };

  return (
    <main className="">
      <section className="">
        <h1 className="flex justify-center text-3xl font-bold">
          월별 주택담보 대출 상환액을 계산하는 계산기
        </h1>
        <form className="mx-auto w-[30rem]" onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label>Principal loan amount</label>
            <Input
              type="number"
              className="w-[25rem]"
              value={principal}
              onChange={onPrincipalHandler}
            />
          </div>
          <div>
            <label>Interest rate</label>
            <div className="flex">
              <Input
                type="number"
                className="w-[25rem]"
                value={interest}
                onChange={onInterestHandler}
              />
              <p>%</p>
            </div>
          </div>
          <div>
            <div>
              <label>Length of loan</label>
              <div className="flex">
                <Input
                  type="number"
                  className="w-[25rem]"
                  value={length}
                  onChange={onLengthHandler}
                />
                <p>Year</p>
              </div>
            </div>
          </div>
          <div>
            <Button onClick={submitHandler}>Calculate</Button>
          </div>
        </form>
        <div className="text-center">
          {result && <p>Your monthly mortgage payment will be ${result}</p>}
        </div>
      </section>
    </main>
  );
};

export default Page;
