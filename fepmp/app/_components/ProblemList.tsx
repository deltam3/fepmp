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

const MediumProblemsList = [
  {
    id: 1,
    link: "/frontendeval/medium/memorygame",
    title: "Memory Game",
    description: "Create a card-matching memory game",
  },
  {
    id: 2,
    link: "/frontendeval/medium/undoablecounter",
    title: "🚧Undoable Counter🚧",
    description:
      "Create a simple counter with a history, and the ability to undo/redo changes",
  },
  {
    id: 3,
    link: "/frontendeval/medium/shoppinglist",
    title: "🚧Shopping list🚧",
    description: "Create a shopping list app with autocomplete item entry",
  },
  {
    id: 4,
    link: "/frontendeval/medium/debounce",
    title: "🚧Debounce🚧",
    description: "Implement a barebones debounce function",
  },
  {
    id: 5,
    link: "/frontendeval/medium/rollingdice",
    title: "🚧Rolling dice🚧",
    description: "Create a dice roller for your next emergency Yahtzee game",
  },
  {
    id: 6,
    link: "/frontendeval/medium/analogclock",
    title: "🚧Analog Clock🚧",
    description: "Create a working analog clock",
  },
  {
    id: 7,
    link: "/frontendeval/medium/multistepform",
    title: "🚧Multi-step form🚧",
    description: "Create a single submittable form that spans multiple screens",
  },
  {
    id: 8,
    link: "/frontendeval/medium/twofactorcodeinput",
    title: "🚧Two-factor code input🚧",
    description: "Build a usable multi-field code input",
  },
  {
    id: 9,
    link: "/frontendeval/medium/imagecarousel",
    title: "🚧Image Carousel🚧",
    description: "Build an auto-playing image carousel",
  },
  {
    id: 10,
    link: "/frontendeval/medium/histogramchart",
    title: "🚧Data fetching and visualization🚧",
    description:
      "Build a histogram chart from a list of randomly-generated numbers",
  },
];

const ProblemList = () => {
  return (
    <div className="flex flex-col gap-[3rem]">
      <h2 className="font-bold lg:text-3xl">Easy 문제들</h2>
      <ul className="grid grid-cols-3 gap-[1.6rem]">
        {ProblemsList.map((item) => {
          return <ProblemItem key={item.id} item={item}></ProblemItem>;
        })}
      </ul>
      <h2 className="font-bold lg:text-3xl">Medium 문제들</h2>
      <ul className="grid grid-cols-3 gap-[1.6rem]">
        {MediumProblemsList.map((item) => {
          return <ProblemItem key={item.id} item={item}></ProblemItem>;
        })}
      </ul>
    </div>
  );
};

export default ProblemList;
