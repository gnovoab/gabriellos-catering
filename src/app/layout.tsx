import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
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
      className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <header className="border-b border-border">
          <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link href="/" className="font-serif text-xl font-semibold text-primary">
              Gabriello&apos;s Catering
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/menu" className="hover:text-primary transition">Menu</Link>
              <Link href="/contact" className="hover:text-primary transition">Enquire</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
