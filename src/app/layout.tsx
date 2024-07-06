import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeofitPlus® Expandable Pressure Pipe",
  description: "New to UK markets, the NeofitPlus® Expandable Pressure Pipe (EPP) is provided exclusively by Sanivar UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth scroll-pt-[74px] lg:scroll-pt-0`}>
      <body className="bg-white flex flex-col items-center w-full">{children}</body>
    </html>
  );
}
