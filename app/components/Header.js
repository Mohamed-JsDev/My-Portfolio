"use client";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme = () => {} } = useTheme() || {};

  return (
    <header className="z-20 w-full flex justify-center mb-4 ">
      <div
        className={`w-full lg:px-6   flex  md:justify-around lg:justify-between items-center z-20 rounded-2xl inset-shadow-xs inset-shadow-black  ${
          theme === "dark"
            ? "bg-[var(--dark-bg)] text-[var(--dark-text)] border-[var(--dark-text)] opacity-90"
            : " text-[var(--light-text)] border-[var(--light-text)]  "
        } `}
      >
        <div className="max-sm:text-2xl text-2xl font-bold  rounded p-4 ">
          <Link href="/">
            <span>M.Dev </span>
          </Link>
        </div>
        <nav>
          <ul className="flex max-sm:gap-2 gap-4  font-semibold  md:text-xl  ">
            <li className="trans-theme  hover:scale-110  hover:text-[var(--main-color)]">
              <Link href="/">Home</Link>
            </li>
            <li className="trans-theme  hover:scale-110 hover:text-[var(--main-color)] ">
              <Link href="./About">About me</Link>
            </li>
            <li className="trans-theme  hover:scale-110  hover:text-[var(--main-color)]">
              <Link href="./Experience">Experience</Link>
            </li>
            <li className="trans-theme  hover:scale-110  hover:text-[var(--main-color)]">
              <Link href="./Skills">Skills</Link>
            </li>
            <li className="trans-theme  hover:scale-110  hover:text-[var(--main-color)]">
              <Link href="./Projects">Projects</Link>
            </li>
            <li className="trans-theme  hover:scale-110  hover:text-[var(--main-color)]">
              <Link href="./Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div
          className="border-black border  rounded-2xl flex max-sm:text-md text-xl cursor-pointer"
          onClick={toggleTheme}
        >
          <span
            className={`${
              theme === "dark" ? "bg-[var(--light-bg)] px-4  rounded-2xl " : ""
            }`}
          >
            🌑
          </span>
          <span
            className={`${
              theme === "light" ? "bg-[var(--dark-bg)] px-4  rounded-2xl " : ""
            }`}
          >
            ☀️
          </span>
        </div>
      </div>
    </header>
  );
}
