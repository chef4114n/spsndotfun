import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "South Park Sucks Now - $SPSN | Official Parody Site",
  description: "This isn't about a coin; it's about a movement! Join Stan, Kyle, Cartman, and Kenny in the South Park Sucks Now crypto revolution. $SPSN to the moon!",
  keywords: "South Park, SPSN, crypto, parody, movement, Stan, Kyle, Cartman, Kenny, blockchain, meme coin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Comic+Neue:wght@300;400;700&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Background Overlay for readability */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-20" 
          style={{ zIndex: -1 }} 
        />
        {children}
      </body>
    </html>
  );
}
