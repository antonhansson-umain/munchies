import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import Logo from "@/components/Logo";
import Link from "next/link";

const SFPro = localFont({
  src: [
    {
      path: "../fonts/SF-Pro.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SF-Pro-Text-Semibold.otf",
      weight: "590",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Munchies",
  description: "For all your restaurant needs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SFPro.className} antialiased max-w-[1440px] grid grid-rows-[auto_1fr] grid-cols-[239px_1fr] min-h-screen gap-x-5 mx-auto pl-10`}
      >
        <header className="col-span-2 h-36 flex items-center pt-1">
          <Link href={"/"} aria-label="Munchies">
            <Logo />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
