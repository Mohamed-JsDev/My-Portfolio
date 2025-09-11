"use client";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { theme, toggleTheme = () => {} } = useTheme() || {};
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/About", label: "About me" },
    { path: "/Experience", label: "Experience" },
    { path: "/Skills", label: "Skills" },
    { path: "/Projects", label: "Projects" },
    { path: "/Contact", label: "Contact" },
  ];

  return (
    <header className="z-100 w-full flex justify-center mb-4">
      <div
        className={`w-full lg:px-6 flex justify-between items-center z-20 rounded-2xl inset-shadow-xs inset-shadow-black ${
          theme === "dark"
            ? "bg-[var(--dark-bg)] text-[var(--dark-text)] border-[var(--dark-text)] opacity-90"
            : "text-[var(--light-text)] border-[var(--light-text)]"
        }`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold p-4">
          <Link href="/">
            <span>M.Dev</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 font-semibold md:text-lg">
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

        {/* Mobile Menu Button */}
        <button className="md:hidden p-3" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Theme Toggle */}
        <div
          className="border border-black rounded-2xl flex text-xl cursor-pointer ml-2"
          onClick={toggleTheme}
        >
          <span
            className={`${
              theme === "dark" ? "bg-[var(--light-bg)] px-4 rounded-2xl" : ""
            }`}
          >
            🌑
          </span>
          <span
            className={`${
              theme === "light" ? "bg-[var(--dark-bg)] px-4 rounded-2xl" : ""
            }`}
          >
            ☀️
          </span>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-[var(--dark-bg)] md:hidden shadow-lg rounded-b-2xl">
          <ul className="flex flex-col gap-4 p-6 text-lg font-semibold">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={
                    pathname === link.path
                      ? "text-[var(--main-color)]"
                      : "hover:text-[var(--main-color)]"
                  }
                  onClick={() => setIsOpen(false)} // يغلق المنيو بعد الضغط
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
