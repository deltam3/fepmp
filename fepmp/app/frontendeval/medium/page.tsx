import ProblemList from "@/app/_components/ProblemList";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <h1>Practice Frontend Skills</h1>

      {/* <Suspense> */}
      <ProblemList />
      {/* </Suspense> */}
    </>
  );
};

export default page;
