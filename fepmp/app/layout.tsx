"use client";

import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "./_styles/GlobalStyles";

import { Inter } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

import Modal from "./_ui/Modal/Modal";

const inter = Inter({ subsets: ["latin"] });

// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Practice makes Perfect",
//   description: "NextJS App to showoff my frontend skills",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          <div>
            <main>
              {/* <Modal /> */}
              <span className="modal-container"></span>
              {children}
            </main>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
