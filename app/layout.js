import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import LoadingBlock from "@/components/LoadingBlock";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mario Torres Ronda Portfolio",
  description: "A portfolio about mario torres ronda socials and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-stone-800`}>
        <Providers>
          <LoadingBlock/>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
