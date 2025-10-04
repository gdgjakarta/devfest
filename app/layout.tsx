import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevFest Jakarta 2025",
  description:
    "The world's largest community-driven tech conference, hosted by Google Developer Groups, where developers connect, learn, and build the future with cutting-edge technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased bg-[url(/bg-pattern.png)] bg-repeat`}
      >
        <Header />
        <main className="max-w-7xl mx-auto my-0 overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
