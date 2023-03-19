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
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>

      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl flex items-center">
            <span
              className="flex items-center text-[#6d3200] font-bold 
              dark:text-[white] py-1 px-2 rounded-full bg-[#d8c4aa]"
            >
              <TbBread
                className="h-9 w-9 mr-1 rounded-lg 
                text-[#6d3200] dark:text-[white]"
              />
              Minbao
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
