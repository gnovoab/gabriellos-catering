import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Fraunces, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Gabriello's Catering — Handmade Napoletana Pizza",
  description: "Authentic, handmade Neapolitan pizza catering for weddings, parties and events from Gabriello's — premium ingredients, cooked fresh on site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${mono.variable} ${caveat.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <header className="bg-[#2B2B2B] text-white">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold flex items-baseline gap-1.5">
              <span className="font-script text-2xl text-[#F4A261]">Gabriello&apos;s</span>
              <span className="font-serif text-white">Catering</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/menu" className="text-white/80 hover:text-white transition">Menu</Link>
              <Link
                href="/contact"
                className="bg-[#C84B31] text-white font-semibold px-4 py-1.5 rounded-full hover:bg-[#B83B1D] transition"
              >
                Enquire
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
