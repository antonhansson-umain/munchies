import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import Logo from "@/components/Logo";

const SFPro = localFont({
  src: "../fonts/SF-Pro.ttf",
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
        className={`${SFPro.className} antialiased max-w-screen-xl mx-auto pl-10 grid grid-rows-[auto_1fr] grid-cols-[239px_1fr] min-h-screen gap-x-5`}
      >
        <header className="col-span-2 h-36 flex items-center pt-1">
          <Logo />
        </header>
        {children}
      </body>
    </html>
  );
}
