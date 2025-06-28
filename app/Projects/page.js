import TimelineItem from "../components/TimelineItem";

export default function Projects() {
  return (
    <div className=" px-8 flex justify-center align-center w-screen">
      <div className=" w-5/6 h-[calc(100vh-105px)] overflow-y-auto  pb-4 px-8 shadow-2xl shadow-black   z-50 rounded-lg">
        <p className=" text-center text-[var(--main-color)] text-2xl font-semibold border-x-2 border-[var(--main-color)]  rounded-lg sticky  top-0 left-2  w-full bg-white p-4 z-60 shadow-2xl shadow-black">
          MOhamed Alshafe{" "}
        </p>
        <div className="text-center min-h-full   lg:pt-8 lg:p-4 flex flex-wrap items-center flex-col   justify-between  ">
          <div className="w-full ">
            <ul className="flex space-x-4 items-center justify-center">
              <li>Next</li>
              <li>react</li>
              <li>javaScript</li>
              <li>CSS,Html</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
