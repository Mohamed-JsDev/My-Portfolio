"use client";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import { projects } from "../data/Projects";
import { Back, Next } from "../components/icons";

const categories = ["All", "Next.js", "React", "JavaScript", "HTML"];
export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(active));
  return (
    <section
      id="projects"
      className=" px-2 md:px-4 lg:px-8 flex justify-center align-center w-screen"
    >
      <div className=" w-[calc(100%-10px)] h-[calc(100vh-105px)] overflow-y-auto  pb-4 px-4 lg:px-8 shadow-2xl shadow-black   z-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[var(--main-color)] mb-8">
          My Projects
        </h2>

        <div className="flex justify-center gap-4 mb-10 flex-wrap ">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-2 md:px-4 py-2 rounded-full font-medium
                ${
                  active === cat
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300"
                }
              `}
            >
              {cat === "HTML" ? "HTML & CSS" : cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 odd:bg-white">
          {filtered.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
        <button
          type="text"
          className=" flex justify-center w-full text-center  "
        >
          {" "}
          <a
            href="https://github.com/Mohamed-JsDev/"
            target="_blank"
            className="mt-4 bg-white  px-4 py-2 rounded-lg text-2xl font-semibold text-[var(--main-color)] hover:scale-110 shadow-lg shadow-black "
          >
            view more
          </a>
        </button>
        <div className="absolute bottom-2 md:bottom-10 left-10 md:left-30 ">
          <Back back="Skills" />
        </div>
        <div className="absolute bottom-2 md:bottom-10 right-10 md:right-30 ">
          <Next next="Contact" />
        </div>
      </div>
    </section>
  );
}
