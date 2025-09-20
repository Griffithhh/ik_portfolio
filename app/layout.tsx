
import React from "react";
import type { Metadata } from "next";

import Head from "./head"; // импортируем компонент Head с <link> на шрифты
import "../styles/app.scss";

export const metadata: Metadata = {
  title: "IK | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  className="dark" lang="en">
      <head>
        <Head />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
