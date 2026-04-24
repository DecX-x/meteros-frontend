import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import { SolanaWalletProvider } from "@/components/solana/SolanaWalletProvider";

import "./globals.css";

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const display = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MeterOS | Solana Control Plane for Onchain Agents",
  description:
    "Connect a wallet, fund agent wallets, publish paid tools, and execute shareable Solana Actions through a wallet-native control plane.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full">
        <SolanaWalletProvider>{children}</SolanaWalletProvider>
      </body>
    </html>
  );
}
