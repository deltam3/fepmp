import Link from "next/link";
import ProblemItem from "./ProblemItem";

const ProblemsList = [
  {
    id: 1,
    link: "/frontendeval/easy/faq",
    title: "FAQ Component",
    description: "Reusable Accordion Component",
  },
  {
    id: 2,
    link: "/frontendeval/easy/countdowntimer",
    title: "Countdown Timer",
    description:
      "Countdown Timer that allows the user to enter hours, minutes, and seconds",
  },
  {
    id: 3,
    link: "/frontendeval/easy/modal",
    title: "Modal",
    description: "A reusable Modal",
  },
  {
    id: 4,
    link: "/frontendeval/easy/mortgagecalculator",
    title: "Mortgage Calculator",
    description: "월별 주택담보 대출 상환액을 계산하는 계산기",
  },
];

const ProblemList = () => {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-[1.6rem]">
        {ProblemsList.map((item) => {
          return <ProblemItem key={item.id} item={item}></ProblemItem>;
        })}
      </ul>
    </div>
  );
};

export default ProblemList;
