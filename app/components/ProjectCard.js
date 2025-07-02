// components/ProjectCard.jsx
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const techIcons = {
  HTML: "/icons/html5.svg",
  CSS: "/icons/css.svg",
  JavaScript: "/icons/javascript.svg",
  bootstrap: "/icons/bootstrap.svg",
  Tailwindcss: "/icons/tailwindcss.svg",
  Redux: "/icons/redux.svg",
  React: "/icons/react.svg",
  "Next.js": "/icons/next.svg",
  TypeScript: "/icons/typescript.svg",
};

export default function ProjectCard({
  title,
  description,
  tech,
  demo,
  github,
  image,
}) {
  return (
    <div className=" text-white bg-zinc-900 p-4 rounded-xl shadow-md shadow-black hover:shadow-lg transition flex flex-col ">
      <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
        <Image
          src={`/images/${image}`}
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-zinc-300 my-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4  w-fit  space-x-2  ">
        {tech.map((t) => {
          const iconSrc = techIcons[t];
          if (!iconSrc) return null;
          return (
            <Image
              key={t}
              src={iconSrc}
              className=" bg-white rounded p-px "
              alt={t}
              width={28}
              height={28}
              title={t}
            />
          );
        })}
      </div>
      <div className="mt-auto flex gap-4 ">
        {demo && (
          <a
            href={demo}
            target="_blank"
            className="flex items-center text-blue-600 hover:underline hover:scale-105"
          >
            <ExternalLink size={14} /> Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            className="flex items-center  hover:underline hover:scale-110 "
          >
            <Github size={16} /> Code
          </a>
        )}
      </div>
    </div>
  );
}
