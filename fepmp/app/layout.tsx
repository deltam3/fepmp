import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Practice makes Perfect",
  description: "NextJS App to showoff my frontend skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
