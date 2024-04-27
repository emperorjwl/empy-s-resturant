import "./global.css";

export const metadata = {
  title: "Empy's Resturant",
  description: "A Resturant Website By Empy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
