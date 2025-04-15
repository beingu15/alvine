import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingSocialButtons from "@/components/FloatingSocialButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  
  icons: {
    icon: "/favicon.ico", // regular favicon
    apple: "/apple-touch-icon.png",
    shortcut: "/icon1.png", // browser shortcut
    other: [
      {
        rel: "icon",
        url: "/icon0.svg", // additional icon format
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        <Footer/>
        <FloatingSocialButtons/>
      </body>
    </html>
  );
}
