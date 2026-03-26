import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-cursive",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "CEASER'S - Timeless Luxury Collections",
  description: "Meticulously crafted pieces designed to transcend seasons and trends. Discover our curated selection of premium essentials.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} h-full bg-[#0a0a0a] antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0a] font-extralight text-zinc-100">
        {children}
      </body>
    </html>
  );
}