import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
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
