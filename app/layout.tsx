"use strict"
import React from "react";
import type { Metadata } from "next";
import "../styles/app.scss";

import { League_Spartan } from "next/font/google";
import { Inter } from "next/font/google";
import Header from "@/Header/Header";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700", "300"],
  variable: "--font-league-spartan",
});


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IK | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={`${leagueSpartan.variable} ${inter.variable}`}>
      <body>
      {children}
      </body>
      </html>
  );
}
