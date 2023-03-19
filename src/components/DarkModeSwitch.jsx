"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
// UTILITIES
import { useEffect, useState } from "react";

function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          className="text-xl cursor-pointer hover:text-yellow-200"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className="text-xl cursor-pointer hover:text-purple-800"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}

export default DarkModeSwitch;
