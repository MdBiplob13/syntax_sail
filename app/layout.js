import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorFollower from "./components/CursorFollower/CursorFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Syntax Sail - Digital Design & Development Agency",
  description: "Transform your business with stunning websites, powerful web applications, and digital solutions that drive results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
