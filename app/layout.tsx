import Header from "@/components/global/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Footer from "@/components/global/Footer/Footer";

const nunito = Nunito({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Clothes Store",
  description: "An Ecommerce website for Clothes",
  icons: {
    icon: "./icon.ico",
    apple: "./icon.ico",
    shortcut: "./icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
