import "./globals.css";
import type { Metadata } from "next";
import { Tenor_Sans } from "next/font/google";

const tenor = Tenor_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Rafael Bocsa",
  description: "Full Stack Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={tenor.className}>
        {/* More components under here */}
        {children}
      </body>
    </html>
  );
}
