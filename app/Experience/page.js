import { Back, Next } from "../components/icons";
import TimelineItem from "../components/TimelineItem";
import { experience } from "../data/Experience";

export default function Experience() {
  const timelineData = experience;
  return (
    <div className=" px-2 md:px-4 lg:px-8 flex justify-center align-center">
      <div className=" w-[calc(100%-10px)] md:w-5/6 h-[calc(100vh-105px)] overflow-y-auto  pb-4 px:2 md:px-6 lg:px-8 shadow-2xl shadow-black   z-50 rounded-lg">
        <p className=" text-center text-gray-800 text-sm md:text-xl font-semibold border-x-2 border-[var(--main-color)]  rounded-lg sticky  top-0 left-2  w-full bg-white p-4 z-60 shadow-2xl shadow-black">
          My personal joureny
        </p>
        <div className="text-center min-h-full ps-1 pe-2 lg:pt-8 lg:p-4 flex flex-wrap items-center max-md:flex-col flex-row justify-between">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              startDate={item.startDate}
              FinishedDate={item.FinishedDate}
              name={item.name}
              skills={item.skills}
              certification={item.certification}
            />
          ))}
        </div>
        <div className="absolute bottom-2 md:bottom-10 left-5 md:left-30">
          <Back back="About" />
        </div>
        <div className="absolute  bottom-2 md:bottom-10 right-5 md:right-30 ">
          <Next next="Skills" />
        </div>
      </div>
    </div>
  );
}
