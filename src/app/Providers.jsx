"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div
        className="dark:bg-[#282b30] dark:text-white text-gray-700 
        transition-colors duration-300 min-h-screen select-none"
      >
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Providers;
