import { useDarkMode } from "@/context/DarkModeContext";
import { Button } from "./ui/button";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";

export function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const router = useRouter();

  return (
    <nav
      className={`p-4 flex justify-between items-center transition-all duration-300 sticky top-0 z-10 ${
        isDarkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <button
        className="min-w-32 hidden lg:flex"
        onClick={() => router.push("/")}
      >
        ADD TO CART
      </button>
      <input
        type="text"
        className={`w-[600px] h-10 rounded-md border border-black text-black mx-3 px-4`}
        placeholder="ค้นหาสินค้า"
      />
      <ul className="gap-5 items-center hidden md:flex">
        <li>
          <button>CHAT</button>
        </li>
        <li>
          <button onClick={() => router.push("/edit")}>EDIT</button>
        </li>
        <li>
          <button onClick={() => router.push("/create")}>CREATE</button>
        </li>
        <li>
          <button>CART</button>
        </li>
        <li>
          <button onClick={() => router.push("/register")}>REGISTER</button>
        </li>
        <li>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </li>
      </ul>
      <div className="min-w-10 min-h-10 rounded-full border border-gray-500 md:hidden bg-transparent z-20"></div>
    </nav>
  );
}
