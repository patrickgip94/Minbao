import MenuItem from "./MenuItem";
import Link from "next/link";

// ICONS
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>

      <div className="">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-[#ecc791] py-1 px-2 rounded-lg">
              Minbao
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
