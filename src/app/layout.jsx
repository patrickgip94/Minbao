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
      <body>{children}</body>
    </html>
  );
}
