"use client";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const { theme, toggleTheme = () => {} } = useTheme() || {};
  const pathname = usePathname();

  // تعريف روابط التنقل في مصفوفة
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/About", label: "About me" },
    { path: "/Experience", label: "Experience" },
    { path: "/Skills", label: "Skills" },
    { path: "/Projects", label: "Projects" },
    { path: "/Contact", label: "Contact" },
  ];

  return (
    <header className="z-20 w-full flex justify-center mb-4">
      <div
        className={`w-full lg:px-6 flex md:justify-around lg:justify-between items-center z-20 rounded-2xl inset-shadow-xs inset-shadow-black ${
          theme === "dark"
            ? "bg-[var(--dark-bg)] text-[var(--dark-text)] border-[var(--dark-text)] opacity-90"
            : "text-[var(--light-text)] border-[var(--light-text)]"
        }`}
      >
        <div className="max-sm:text-2xl text-2xl font-bold rounded p-4">
          <Link href="/">
            <span>M.Dev </span>
          </Link>
        </div>

        <nav>
          <ul className="flex max-sm:gap-2 gap-4 font-semibold md:text-xl">
            {navLinks.map((link) => (
              <li key={link.path} className="trans-theme hover:scale-110">
                <Link
                  href={link.path}
                  className={
                    pathname === link.path
                      ? "text-[var(--main-color)]"
                      : "hover:text-[var(--main-color)]"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
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
