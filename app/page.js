import Image from "next/image";
import { ThemeProvider } from "./context/ThemeContext";
import VantaBackground from "./components/VantaBackground";
import Header from "./components/Header";
import Main from "./Main/Page";
import About from "./About/page";

export default function Home() {
  return (
    <div className="px-4">
      <div className="flex justify-center sm:px-6 md:px-10 lg:px-20 shadow-2xl shadow-black">
        <Main />
      </div>
    </div>
  );
}
