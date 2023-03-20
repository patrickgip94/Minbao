// COMPONENTS
import DarkModeSwitch from "./DarkModeSwitch";
import MenuItem from "./MenuItem";

// UTLITIES
import Link from "next/link";

// ICONS
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TbBread } from "react-icons/tb";

function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-4">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>

      <div className="flex items-center space-x-5">
        <Link href="/" className="hover:opacity-90">
          <h2 className="text-2xl flex items-center pr-1">
            <span
              className="flex items-center text-black font-bold italic 
              dark:text-white py-1 px-2 rounded-md dark:bg-amber-500 bg-[#d8c4aa]"
            >
              <TbBread
                className="h-10 w-10 pr-1 pl-1 rounded-lg 
                text-[#6d3200] dark:text-white"
              />
              MINBAO
            </span>
          </h2>
        </Link>
        <DarkModeSwitch />
      </div>
    </div>
  );
}

export default Header;
