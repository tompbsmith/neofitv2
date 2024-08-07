
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

import { IsClientCtxProvider } from "./is-client-ctx";

import ComponentCookieBanner from "./ComponentCookieBanner";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: '--font-roboto'
})

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
    <IsClientCtxProvider>
      <GoogleAnalytics gaId="G-1BGCD9479X" />
      <html lang="en" className={`${roboto.variable} scroll-smooth scroll-pt-[74px] lg:scroll-pt-0`}>
        <body className="bg-white flex flex-col items-center w-full">
          {children}
          <ComponentCookieBanner />
        </body>
      </html>
    </IsClientCtxProvider>
  );
}
