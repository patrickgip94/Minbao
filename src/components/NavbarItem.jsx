"use client";
import Link from "next/link";

import { useSearchParams } from "next/navigation";

function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`m-4 dark:hover:text-yellow-300 hover:text-white font-semibold p-2 
          ${
            genre &&
            genre === param &&
            "underline underline-offset-8 decoration-4 dark:decoration-amber-500  decoration-white rounded-lg"
          }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavbarItem;
