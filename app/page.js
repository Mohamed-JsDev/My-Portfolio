import Image from "next/image";
import { ThemeProvider } from "./context/ThemeContext";
import VantaBackground from "./components/VantaBackground";
import Header from "./components/Header";
import Main from "./Main/Page";

export default function Home() {
  return <Main />;
}
