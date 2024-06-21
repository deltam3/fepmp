import { Suspense } from "react";
import ProblemList from "../_components/ProblemList";

export default function Page() {
  return (
    <div>
      <h1>Practice Frontend Skills</h1>

      <Suspense>
        <ProblemList />
      </Suspense>
    </div>
  );
}
