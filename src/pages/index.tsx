import { Navbar } from "@/components/Navbar";
import { FaSun } from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";
export default function Home() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <Navbar />
    </>
  );
}
