import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import VantaBackground from "./components/VantaBackground";
import Header from "./components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "My Portfolio",
  description: "Created by Mohamed Alshafe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={`${poppins.variable}`}>
        <ThemeProvider>
          <VantaBackground>
            <Header />
            <div className="flex z-50">{children}</div>
          </VantaBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
