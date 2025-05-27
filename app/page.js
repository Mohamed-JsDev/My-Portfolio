import Image from "next/image";
import { ThemeProvider } from "./context/ThemeContext";
import VantaBackground from "./components/VantaBackground";
import Header from "./components/Header";

export default function Home() {
  return (
    <ThemeProvider>
      <VantaBackground>
        <div className="flex bg-black z-50 text-4xl">mohamed</div>
      </VantaBackground>
    </ThemeProvider>
  );
}
