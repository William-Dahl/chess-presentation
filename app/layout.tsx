/** @jsxImportSource @emotion/react */
"use client";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const inter = Raleway({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "How to drag: Chess",
  description:
    "Examples used in the presentation by William Dahl at SydJS 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer
          css={{
            display: "flex",
            width: "calc(100vw - 34px)",
            justifyContent: "space-between",
            position: "absolute",
            padding: 12,
            bottom: 0,
          }}
        >
          <div>
            Made by William Dahl,{" "}
            <a href="https://www.linkedin.com/in/william-dahl/">
              see my linkedin
            </a>
            .
          </div>
          <div>
            {" "}
            Source code can be viewed{" "}
            <a href="https://github.com/William-Dahl/chess-presentation">
              here
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
