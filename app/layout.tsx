import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`${SFPro.className} antialiased`}>{children}</body>
    </html>
  );
}
