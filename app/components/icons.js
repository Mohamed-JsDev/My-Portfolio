import {
  Github,
  Linkedin,
  MessageCircleMore,
  Facebook,
  ChevronsRight,
  ChevronsLeft,
  ChevronsLeftIcon,
  PhoneForwarded,
} from "lucide-react";
import Link from "next/link";
export default function Icons() {
  return (
    <ul className="flex w-fit px-4 py-2    text-white ">
      <li className="trans-theme hover:shadow-2xl hover:shadow-black hover:scale-120 hover:text-black hover:bg-white rounded p-1 m-2 bg-[var(--dark-bg)]   ">
        <Github size={30} />
      </li>
      <li className=" trans-theme hover:shadow-2xl hover:shadow-black hover:scale-120 hover:text-[#0077B5] hover:bg-white rounded p-1 m-2 bg-[var(--dark-bg)] hover:text-[#0077B5]  ">
        <Linkedin size={30} />
      </li>
      <li className=" trans-theme hover:shadow-2xl hover:shadow-black hover:scale-120 hover:text-[#075e54] hover:bg-white rounded p-1 m-2 bg-[var(--dark-bg)]   ">
        <PhoneForwarded size={30} />
      </li>
      <li className=" trans-theme hover:shadow-2xl hover:shadow-black hover:scale-120 hover:text-[#3b5998] hover:bg-white rounded p-1 m-2 bg-[var(--dark-bg)]  ">
        <Facebook size={30} />
      </li>
    </ul>
  );
}
export function Next(next) {
  return (
    <div className="bg-[var(--light-span)]   text-white text-4xl  p-2 rounded border border-white">
      <Link href={`./${next.next}`}>
        <ChevronsRight size={35} />
      </Link>
    </div>
  );
}
export function Back(back) {
  return (
    <div className="  text-4xl bg-[var(--light-span)] rounded  text-white p-2 ">
      <Link href={`./${back.back}`}>
        <ChevronsLeftIcon size={35} />
      </Link>
    </div>
  );
}
