import TimelineItem from "../components/TimelineItem";

export default function Experience() {
  const timelineData = [
    {
      startDate: "Dec_2021",
      FinishedDate: "Jun_2022",
      name: "Elzero Web School By Osama Mohamed",
      skills: ["HTML", "CSS", "JavaScript", "SASS", "TypeScript"],
    },
    {
      startDate: "Sep_2022",
      FinishedDate: "May_2026",
      name: "Higher Institute of Computers, Administrative Information Systems and Management Sciences",
      skills: [
        "Basic C++",
        "Basic SQL",
        "Network",
        "Web 3",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      startDate: "june_2023",
      FinishedDate: "Oct_2023",
      name: "Training in Sintac Code Company And Working with his Team",
      skills: ["working in JavaScript"],
      certification: "https://portfolio-jsdev-77.vercel.app/",
    },
    {
      startDate: "Aug_2023",
      FinishedDate: "Dec_2023",
      name: "Training in Nes Services Company And learning about IT solutions",
      skills: [
        "Server 2019 domain",
        "Active directory - GPO",
        "Client operating system (Windows10)",
        "Basic networking",
        "Firewall concepts (Fortinet)",
        "Endpoint (Kaspersky)",
      ],
      certification: "https://portfolio-jsdev-77.vercel.app/",
    },
    {
      startDate: "May_2024",
      FinishedDate: "Aug_2024",
      name: "ALX Foundations leadership and skills development Soft Skills & Leadership Training",
      skills: [
        "Self Awareness",
        "Personal Development",
        "Goal Setting & Research",
        "Teamwork & Entrepreneurship",
        "Team Project",
        "Wrap Up & Professional Kit",
      ],
      certification: "https://portfolio-jsdev-77.vercel.app/",
    },
    {
      startDate: "Sep_2024",
      FinishedDate: "Feb_2025",
      name: "ALX Software Engineering Programme in Front-end Web Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "User Experience Principles",
        "React",
        "Tailwind CSS",
      ],
      certification: "https://portfolio-jsdev-77.vercel.app/",
    },
  ];

  return (
    <div className=" px-8 flex justify-center align-center">
      <div className=" w-5/6 h-[calc(100vh-105px)] overflow-y-auto  pb-4 px-8 shadow-2xl shadow-black   z-50 rounded-lg">
        <p className=" text-center text-[var(--main-color)] text-xl font-semibold border-x-2 border-[var(--main-color)]  rounded-lg sticky  top-0 left-2  w-full bg-white p-4 z-60 shadow-2xl shadow-black">
          My personal joureny
        </p>
        <div className="text-center min-h-full lg:pt-8 lg:p-4 flex flex-wrap items-center max-md:flex-col flex-row justify-between">
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
      </div>
    </div>
  );
}
// <span className=" w-8 p-2  rounded-full bg-black border-2 border-amber-400 "></span>
