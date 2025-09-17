
import React from "react";
import type { Metadata } from "next";
import "../styles/app.scss";
import Head from "./head"; // импортируем компонент Head с <link> на шрифты

export const metadata: Metadata = {
  title: "IK | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Head />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
