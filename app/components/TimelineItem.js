"use client";
import { useTheme } from "../context/ThemeContext";

function TimelineItem({
  startDate,
  FinishedDate,
  name,
  skills,
  certification,
}) {
  const { theme } = useTheme();
  return (
    <div className="flex w-ful  mt-2 items-center justify-center sm:space-x-1 md:space-x-2 lg:space-x-4 relative">
      {/* date*/}
      <div
        className={` flex-col space-y-2 md:space-y-4 lg:space-y-8 justify-center h-full text-sm md:text-md md:text-lg font-semibold sm:ps-1  ${
          theme === "light" ? "  text-gray-700  " : "text-[var(--dark-text)] "
        } `}
      >
        <p>{startDate}</p>
        <p>{FinishedDate}</p>
      </div>
      {/* time line */}
      <div className="flex flex-col items-center relative">
        <div className="w-1 h-8 bg-gray-400 rounded" />
        <div className="w-8 h-8 border-4 border-gray-500 rounded-full bg-white  z-10" />
        <div className="w-1 h-8 bg-gray-400 rounded " />
      </div>
      {/* content*/}
      <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-2 lg:p-4 shadow-md w-full">
        <h3 className=" text-sm md:text-md lg:text-lg font-bold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>

        {/* Skills*/}
        <div className="flex flex-wrap gap-4 mb-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-3 h-3 border-2 border-gray-600 rounded-full" />
              <span className="text-sm text-gray-800 dark:text-gray-300">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* زر الشهادة */}
        {certification ? (
          <a
            href={certification}
            target="_blank"
            className="inline-block px-2 md:px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            View Certification
          </a>
        ) : null}
      </div>
    </div>
  );
}
export default React.memo(TimelineItem);
