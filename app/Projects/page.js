"use client";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import { projects } from "../data/Projects";

const categories = ["All", "HTML", "CSS", "JavaScript", "React", "Next.js"];
export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(active));
  return (
    <section
      id="projects"
      className=" px-8 flex justify-center align-center w-screen"
    >
      <div className=" w-5/6 h-[calc(100vh-105px)] overflow-y-auto  pb-4 px-8 shadow-2xl shadow-black   z-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-white mb-8">
          My Projects
        </h2>

        {/* الفلاتر */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full font-medium
                ${
                  active === cat
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* شبكة كروت المشاريع */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
