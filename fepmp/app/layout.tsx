"use client";

import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "./_styles/GlobalStyles";

import { Inter } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

import Modal from "./_ui/Modal/Modal";
import HeaderMobile from "./_components/header-mobile";
import SideNav from "./_components/side-nav";
import PageWrapper from "./_components/page-wrapper";
import MarginWidthWrapper from "./_components/margin-width-wrapper";

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
      <body className={`bg-white ${inter.className}`}>
        <span className="modal-container"></span>

        <StyledComponentsRegistry>
          <GlobalStyles />
          <div>
            <div>
              <SideNav />
              <main className="flex-1">
                <MarginWidthWrapper>
                  {/* <Header />
                  <HeaderMobile /> */}
                  <PageWrapper>{children}</PageWrapper>
                </MarginWidthWrapper>
              </main>
            </div>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
