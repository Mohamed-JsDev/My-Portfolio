// components/ProjectCard.jsx
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const techIcons = {
  HTML: "/icons/html5.svg",
  CSS: "/icons/css.svg",
  JavaScript: "/icons/javascript.svg",
  React: "/icons/react.svg",
  "Next.js": "/icons/next.svg",
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
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-md hover:shadow-lg transition flex flex-col">
      <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
        {
          // <Image src={image} alt={title} layout="fill" objectFit="cover" />
        }
      </div>
      <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 my-2">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4  w-fit  space-x-2  ">
        {tech.map((t) => (
          <Image
            className=" bg-white rounded p-px "
            key={t}
            src={techIcons[t]}
            alt={t}
            width={28}
            height={28}
            title={t}
          />
        ))}
      </div>
      <div className="mt-auto flex gap-4">
        {demo && (
          <a
            href={demo}
            target="_blank"
            className="flex items-center text-blue-600 hover:underline"
          >
            <ExternalLink size={14} /> Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            className="flex items-center text-zinc-800 dark:text-white hover:underline"
          >
            <Github size={16} /> Code
          </a>
        )}
      </div>
    </div>
  );
}
