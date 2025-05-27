"use client";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme = () => {} } = useTheme() || {};

  return (
    <header className="z-20 flex justify-center mb-4 ">
      <div
        className={`w-full md:w-3/4 flex  justify-around items-center z-20 rounded-2xl border-2 ${
          theme === "dark"
            ? "bg-[var(--dark-bg)] text-[var(--dark-text)] border-[var(--dark-text)] opacity-90"
            : " text-[var(--light-text)] border-[var(--light-text)]  "
        } `}
      >
        <div className="max-sm:text-2xl text-4xl font-medium  rounded p-4 ">
          <span>M.Dev </span>
        </div>
        <nav>
          <ul className="flex max-sm:gap-2 gap-4   md:text-xl  ">
            <li className="trans-theme  hover:scale-110  ">
              <Link href="/">Home</Link>
            </li>
            <li className="trans-theme  hover:scale-110  ">
              <Link href="./About">About Us</Link>
            </li>
            <li className="trans-theme  hover:scale-110  ">
              <Link href="./Certification/">Certification</Link>
            </li>
            <li className="trans-theme  hover:scale-110  ">
              <Link href="./Projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <div
          className="border-black border  rounded flex max-sm:text-md text-xl cursor-pointer"
          onClick={toggleTheme}
        >
          <span
            className={`${
              theme === "dark" ? "bg-[var(--light-bg)] px-4  rounded " : ""
            }`}
          >
            🌑
          </span>
          <span
            className={`${
              theme === "light" ? "bg-[var(--dark-bg)] px-4  rounded " : ""
            }`}
          >
            ☀️
          </span>
        </div>
      </div>
    </header>
  );
}
