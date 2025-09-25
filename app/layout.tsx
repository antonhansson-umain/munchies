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
        className={`${SFPro.className} antialiased max-w-[1440px] sm:grid sm:grid-rows-[auto_1fr] sm:grid-cols-[239px_1fr] min-h-screen  mx-auto sm:pl-10 pb-8 max-sm:gap-6 max-sm:flex max-sm:flex-col`}
      >
        <header className="sm:col-span-2 sm:h-36 flex items-center pt-12 sm:pt-1 max-sm:px-6">
          <Link href={"/"} aria-label="Munchies">
            <Logo className="max-sm:w-42" />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}

// sm:gap-x-5
