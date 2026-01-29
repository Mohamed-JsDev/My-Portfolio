"use client";
import Image from "next/image";
import Icons, { Back, Next } from "../components/icons";
import { useTheme } from "../context/ThemeContext";
import { Blocks, Lightbulb, Mail, MapPinCheck, Zap } from "lucide-react";
export default function About() {
  const { theme } = useTheme();
  const path = "/image_22.png";
  return (
    <div className=" px-4 pb-8  h-full  ">
      <div className=" text-center  h-full lg:pb-48   lg:pt-8 lg:p-4 flex flex-wrap gap-2  items-center flex-col md:flex-row  md:justify-between lg:justify-around shadow-2xl shadow-black   z-50 ">
        {/* CRAD INFO */}
        <h1
          className={`  pb-4 w-full  text-4xl font-semibold capitalize ${
            theme === "light" ? "text-gray-800" : "text-white"
          } `}
        >
          {" "}
          My <span className="text-[var(--main-color)]">Introduction</span>
        </h1>
        <section
          className={`  px-2 w-full lg:w-fit  rounded  lg:shadow-2xl py-5 font-semibold text-start max-sm:flex-col md:flex lg:flex-col justify-center items-center gap-4    ${
            theme === "light"
              ? "  text-[var(--light-text)] shadow-black "
              : " text-white  rounded-4xl   shadow-white   "
          } }`}
        >
          <Image
            src={path}
            alt="media"
            width={250}
            height={200}
            className=" max-sm:w-full bg-[var(--main-color)] rounded mb-2"
          />
          <div>
            <h3>Mohamed Saied Alshafe </h3>
            <p className="flex text-sm text-gray-400 text-shadow-2xs text-shadow-black  ">
              <Mail className="text-[var(--main-color)] mt-1 " size={15} /> :
              mohamedalshaie529@gmail.com
            </p>
            <p className="flex text-sm text-gray-400 text-shadow-2xs text-shadow-black ">
              <MapPinCheck
                className="text-[var(--main-color)] mt-1 "
                size={15}
              />{" "}
              : 6th of October
            </p>
            <Icons />
            <a href="https://wa.me/201032721974" target="_blank">
              <button
                className={` w-full p-2  rounded-2xl  transition-all duration-500 ease-in-out hover:scale-105 hover:border hover:shadow-2xl 
    ${
      theme === "light"
        ? "bg-gradient-to-l from-[var(--light-span)] to-[var(--dark-span)]  hover:text-[var(--dark-text)] hover:transition-all hover:duration-500 hover:shadow-black hover:border-white"
        : "bg-gradient-to-l from-blue-500 to-indigo-950 text-white  hover:shadow-white hover:transition-all hover:duration-500 "
    }`}
              >
                {" "}
                Get in Touch
              </button>
            </a>
          </div>
        </section>
        {/* INTRO */}
        <section
          className={`  max-sm:px-5 lg:w-3/5  py-10 px-10 rounded-lg     font-semibold text-start  flex-col   items-center shadow-2xl  ${
            theme === "light"
              ? "  text-[var(--light-text)] shadow-black"
              : "   rounded-4xl  text-[var(--dark-text)] shadow-white text-shadow-2xs text-shadow-black "
          } }`}
        >
          <ul className="flex max-sm:gap-4 gap-10 w-full justify-center-safe pb-5  lg:pb-10 text-white  text-shadow-2xs text-shadow-white ">
            <li
              className={` text-sm max-sm:px-4 py-3 px-10  rounded  shadow-2xl shadow-black  ${
                theme === "light"
                  ? "text-[var(--light-span)]"
                  : "text-[var(--dark-text)] "
              } `}
            >
              {" "}
              <p
                className={` text-xl ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                <Zap className="text-amber-400 " size={30} />
                +9
              </p>
              projects{" "}
            </li>
            <li
              className={` text-sm max-sm:px-4 py-5 px-10  rounded  shadow-2xl shadow-black  ${
                theme === "light"
                  ? "text-[var(--light-span)]"
                  : "text-[var(--dark-text)] "
              } `}
            >
              <p
                className={` text-xl ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                <Lightbulb className="text-amber-400 " size={30} />
                +20
              </p>
              small projects{" "}
            </li>
            <li
              className={` text-sm max-sm:px-4 py-5 px-10  rounded  shadow-2xl shadow-black  ${
                theme === "light"
                  ? "text-[var(--light-span)]"
                  : "text-[var(--dark-text)] "
              } `}
            >
              <p
                className={` text-xl ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                <Blocks className="text-amber-400 " size={30} />
                +10
              </p>{" "}
              Skills{" "}
            </li>
          </ul>
          <p
            className={`pb-5 text-sm mb-2 p-px  ${
              theme === "light"
                ? "text-[var(--light-text)]"
                : "text-[var(--dark-text)] bg-[var(--dark-bg)]"
            }`}
          >
            I'm a self-driven Egyptian Frontend Developer who enjoys building
            meaningful, user-focused web applications. I paused my academic path
            to fully commit to learning and creating through real-world
            projects. Since joining ALX in early 2023, I've worked in agile-like
            teams, tackling challenges from scratch and learning deeply through
            practice. I find joy in transforming ideas into interactive
            experiences using JavaScript, React, and modern web tools. For me,
            growth comes from building, debugging, and helping others along the
            way.
          </p>
          <a
            className="w-full"
            href="https://drive.google.com/file/d/1pbvDiQlOBGM58LYLPdHz7D2chb-UpFJP/view?usp=sharing"
            target="_blank"
          >
            <button
              className={` text-2xl p-2 me-2 rounded-2xl w-full transition-all duration-500 ease-in-out hover:scale-105 hover:border hover:shadow-2xl 
    ${
      theme === "light"
        ? "bg-gradient-to-l from-blue-500 to-indigo-950 text-white hover:bg-transparent hover:bg-clip-text hover:text-transparent hover:from-blue-500 hover:to-indigo-950 hover:shadow-black hover:transition-all hover:duration-500 "
        : "bg-gradient-to-l from-[var(--light-span)] to-[var(--dark-span)] | hover:transition-all hover:duration-500 hover:shadow-white  hover:border-white"
    }`}
            >
              Download CV
            </button>
          </a>
        </section>
        <div className="absolute  bottom-2 left-5 lg:left-30">
          <Back back="/" />
        </div>
        <div className="absolute  bottom-2 right-5 lg:right-30">
          <Next next="Experience" />
        </div>
      </div>
    </div>
  );
}
