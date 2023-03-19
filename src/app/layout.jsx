import Header from "@/components/Header";
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

          {/* SEARCHBOX */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
