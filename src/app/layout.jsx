import Header from "@/components/Header";
import "./globals.css";

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
        <div>
          {/* HEADER */}
          <Header />
          {/* NAVBAR */}

          {/* SEARCHBOX */}
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
