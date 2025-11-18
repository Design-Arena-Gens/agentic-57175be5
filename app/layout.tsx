import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-suisse" });

export const metadata: Metadata = {
  title: "Accrue Flow - Private Equity Liquidity Intelligence",
  description: "AI that watches your capital calls 24/7. Forecasts cash needs 90 days out. Guarantees zero defaults.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-suisse antialiased bg-vault-darker`}>{children}</body>
    </html>
  );
}
