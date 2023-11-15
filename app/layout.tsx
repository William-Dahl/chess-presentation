import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import styles from "./layout.module.css";

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
        <footer className={styles.footerStyles}>
          <span>
            Made by William Dahl,{" "}
            <a href="https://www.linkedin.com/in/william-dahl/">
              see my linkedin
            </a>
            .
          </span>
          <span className={styles.footerRight}>
            {" "}
            Source code can be viewed{" "}
            <a href="https://github.com/William-Dahl/chess-presentation">
              here
            </a>
          </span>
        </footer>
      </body>
    </html>
  );
}
