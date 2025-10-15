"use client";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import Icons, { Next } from "../components/icons";
export default function Main() {
  const { theme, setTheme } = useTheme();
  return (
    <main className=" w-full lg:pb-10 flex items-center flex-col-reverse lg:flex-row  md:justify-between   ">
      <section
        className={`w-full lg:w-1/2  rounded pt-10 font-semibold text-start   ${
          theme === "light"
            ? "  text-[var(--light-text)]"
            : "   rounded-4xl  text-[var(--dark-text)]"
        } }`}
      >
        <div>
          <h2 className="text-xl md:text-4xl ">
            Hi, I'm <br />
            <span className="pt-5 poppins  text-[var(--main-color)] font-bold text-3xl md:text-6xl text-shadow-2xs text-shadow-white">
              {" "}
              Mohamed Alshafe
            </span>{" "}
          </h2>
          <p className="text:xl md:text-3xl pt-5">Front-end Developer</p>
          <p
            className={`text-lg md:text-2xl mt-2  ${
              theme === "light"
                ? "text-[var(--light-second)]"
                : "text-[var(--dark-text)] bg-[var(--dark-bg)] opacity-75 rounded-lg text-shadow-2xs  text-shadow-black "
            } `}
          >
            "JavaScript Expert ⚡ | Front-End Architect | I craft seamless user
            experiences with scalable, maintainable code & I build the
            interfaces of the future with JavaScript... From React to Next.js, I
            create unforgettable experiences."
          </p>
          <div className="mt-8  flex  w-full gap-2 text-sm md:text-2xl">
            <button
              className={`p-1 md:p-2 me-2 rounded-2xl w-2/5 transition-all duration-500 ease-in-out hover:scale-105 hover:border hover:shadow-2xl 
    ${
      theme === "light"
        ? "bg-gradient-to-l from-blue-500 to-indigo-950 text-white hover:bg-transparent hover:bg-clip-text hover:text-transparent hover:from-blue-500 hover:to-indigo-950 hover:shadow-black hover:transition-all hover:duration-500 "
        : "bg-gradient-to-l from-[var(--light-span)] to-[var(--dark-span)] | hover:transition-all hover:duration-500 hover:shadow-white  hover:border-white"
    }`}
            >
              <a
                href="https://drive.google.com/file/d/1pbvDiQlOBGM58LYLPdHz7D2chb-UpFJP/view?usp=sharing"
                target="_blank"
              >
                Download CV
              </a>
            </button>
            <button
              className={`p-2 me-2 rounded-2xl w-2/5 transition-all duration-500 ease-in-out hover:scale-105 hover:border hover:shadow-2xl 
    ${
      theme === "light"
        ? "bg-gradient-to-l from-[var(--light-span)] to-[var(--dark-span)]  hover:text-[var(--dark-text)] hover:transition-all hover:duration-500 hover:shadow-black hover:border-white"
        : "bg-gradient-to-l from-blue-500 to-indigo-950 text-white  hover:shadow-white hover:transition-all hover:duration-500 "
    }`}
            >
              {" "}
              <a href="https://wa.me/201032721974" target="_blank">
                Get in Touch
              </a>
            </button>
          </div>
          <div className="pt-10">
            <Icons />
          </div>
        </div>
      </section>
      <section className="lg:-me-10  ">
        <Image
          className="media w-full border-[var(--light-bg)] bg-[var(--main-color)] border z-10 object-cover rounded-full "
          width={450}
          height={450}
          src="/image_22.png"
          alt="media"
        />
      </section>

      <div className="absolute bottom-3 right-8 md:right-30">
        <Next next="About" />
      </div>
    </main>
  );
}
