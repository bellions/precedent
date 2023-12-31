import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-tl from-sky-300 `}>
        {children}
      </body>
    </html>
  );
}
