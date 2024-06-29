import Link from "next/link";

const ProblemList = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/frontendeval/easy/faq">FAQ Component</Link>
          <p>Reusable Accordion Component</p>
        </li>
        <li>
          <Link href="/frontendeval/easy/countdowntimer">Countdown Timer</Link>
          <p>
            Countdown Timer that allows the user to enter hours, minutes, and
            seconds
          </p>
        </li>
        <li>
          <Link href="/frontendeval/easy/modal">Modal</Link>
          <p>A reusable Modal</p>
        </li>
      </ul>
    </div>
  );
};

export default ProblemList;
