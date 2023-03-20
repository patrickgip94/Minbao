import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import "./globals.css";

import Providers from "./Providers";

export const metadata = {
  title: "Minbao",
  description: "Minbao means 🍞 bread in cantonese",
  icons: {
    icon: "https://i.imgur.com/TajYGBf.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* HEADER */}
          <Header />

          {/* NAVBAR */}
          <Navbar />

          {/* SEARCHBOX */}
          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}
