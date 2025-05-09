import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/fragments/Providers";
import LoadingBlock from "@/components/Index/LoadingBlock";
import NavBar from "@/components/fragments/NavBar";
import OnDocumentReady from "@/components/fragments/OnDocumentReady";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mario Torres Ronda Portfolio",
  description: "A portfolio about mario torres ronda socials and projects",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200 dark:bg-stone-800`}>
        <OnDocumentReady />
        <Providers>
          <LoadingBlock/>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
