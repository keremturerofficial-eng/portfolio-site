import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kerem Turer — Creative Director",
  description:
    "Bringing creative awareness to AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white antialiased selection:bg-white selection:text-black`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
