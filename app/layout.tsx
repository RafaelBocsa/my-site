import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

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
      <body className={inter.className}>
        {/* More components under here */}
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
