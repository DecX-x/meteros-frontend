"use client";

import { useSolanaWallet } from "@/components/solana/SolanaWalletProvider";

export function WalletBadge() {
  const wallet = useSolanaWallet();

  return (
    <div className="surface-card-strong flex items-center gap-3 rounded-full px-3 py-2 text-sm">
      <span
        className={[
          "h-2.5 w-2.5 rounded-full",
          wallet.connected ? "bg-[#b8df4e]" : "bg-[#f0a77b]",
        ].join(" ")}
      />
      <span className="font-semibold text-[#121521]">
        {wallet.connected ? "Connected" : "Disconnected"}
      </span>
      <span className="text-black/48">
        {wallet.connected ? wallet.shortAddress : "Wallet not connected"}
      </span>
    </div>
  );
}
