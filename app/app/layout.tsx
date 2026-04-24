import type { Metadata } from "next";

import { AppShell } from "@/components/app-shell/AppShell";

export const metadata: Metadata = {
  title: "MeterOS App | Overview Dashboard",
  description:
    "Main Solana control plane for treasury, agent wallets, Actions, Blinks, and settlement visibility.",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell>{children}</AppShell>;
}
