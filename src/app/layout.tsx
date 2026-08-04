import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kerem Turer — Creative Director",
  description:
    "AI Creative Director & Tonmeister. Bridging AI and cinematic aesthetics. 25+ years of sound, image and storytelling.",
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
        {children}
      </body>
    </html>
  );
}
