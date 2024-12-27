import React from "react";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import NowPlaying from "@/components/NowPlaying";

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "A Spotify-like app built with Next.js",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body className="bg-black text-white">
        <div className="flex">
          <Sidebar />
          <main className="flex-1">
            <Header />
            <div className="p-8 pb-24">
              {children}
            </div>
          </main>
        </div>
        <NowPlaying />
      </body>
    </html>
  );
}
