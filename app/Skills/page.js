"use client";
import { Back, Next } from "../components/icons";
import { useTheme } from "../context/ThemeContext";

const skillsData = [
  { name: "HTML5", level: 90, icon: "/icons/html5.svg" },
  { name: "CSS3", level: 85, icon: "/icons/css.svg" },
  { name: "JavaScript", level: 80, icon: "/icons/javascript.svg" },
  { name: "React", level: 85, icon: "/icons/react.svg" },
  { name: "Redux", level: 80, icon: "/icons/redux.svg" },
  { name: "Tailwind CSS", level: 90, icon: "/icons/tailwindcss.svg" },
  { name: "bootstrap ", level: 85, icon: "/icons/bootstrap.svg" },
  { name: "next.js", level: 75, icon: "/icons/next.svg" },
  { name: "Git", level: 80, icon: "/icons/git.svg" },
  { name: "TypeScript", level: 70, icon: "/icons/typescript.svg" },
];

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className="px-1 md:px-8 flex justify-center align-center w-screen"
    >
      <div className="container mx-auto w-[calc(100%-20px)]  md:w-5/6 h-[calc(100vh-105px)] overflow-y-auto pb-4 px-8 shadow-2xl shadow-black z-50 rounded-lg">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          My <span className="text-[var(--main-color)] ">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
        <div className="absolute bottom-10 left-30">
          <Back back="Experience" />
        </div>
        <div className="absolute bottom-10 right-30">
          <Next next="Projects" />
        </div>
      </div>
    </section>
  );
}

const SkillCard = ({ name, level, icon }) => {
  return (
    <div className="bg-[var(--dark-bg)] p-4 md:p-6 rounded-xl shadow-lg hover:shadow-[var(--main-color)] transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-purple-100  p-2 rounded-full mr-4">
          <img
            src={icon}
            alt={name}
            className="w-6 h-6"
            onError={(e) => {
              e.target.src = "/icons/default.svg"; // أيقونة افتراضية إذا لم توجد
            }}
          />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-white">{name}</h3>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-[var(--main-color)] h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <span className="text-gray-300 text-sm mt-2 block text-right">
        {level}%
      </span>
    </div>
  );
};
