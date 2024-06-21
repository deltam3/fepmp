import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-between mx-10">
        <li>
          <Link href="/" className="hover:text-accent-400 transition-colors">
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/frontendeval"
            className="hover:text-accent-400 transition-colors"
          >
            FrontendEval
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
