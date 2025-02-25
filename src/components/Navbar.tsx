import { useDarkMode } from "@/context/DarkModeContext";
import { Button } from "./ui/button";
import { FaMoon, FaSun } from "react-icons/fa";

export function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav
      className={` p-4 flex justify-between items-center transition-all duration-300 sticky top-0 ${
        isDarkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h1 className="hidden lg:flex">Add to cart</h1>
      <input
        type="text"
        className={`w-[600px] h-10 rounded-md border border-black p-4 text-black mx-3`}
      />
      <ul className="flex gap-5 items-center">
        <li>
          <button>Create</button>
        </li>
        <li>
          <button>Cart</button>
        </li>
        <li>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaSun></FaSun> : <FaMoon></FaMoon>}
          </Button>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}
