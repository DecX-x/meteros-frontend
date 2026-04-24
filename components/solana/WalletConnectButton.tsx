"use client";

import { useSolanaWallet } from "@/components/solana/SolanaWalletProvider";

type WalletConnectButtonProps = {
  compact?: boolean;
};

export function WalletConnectButton({ compact = false }: WalletConnectButtonProps) {
  const wallet = useSolanaWallet();

  return (
    <button
      type="button"
      onClick={wallet.toggleConnection}
      className={[
        "focus-ring inline-flex items-center justify-center rounded-full border text-sm font-semibold tracking-[-0.01em] transition duration-200",
        compact ? "h-10 px-4" : "h-11 px-5 sm:h-12",
        wallet.connected
          ? "border-transparent bg-[#171a24] text-[#fff7f0] shadow-[0_14px_28px_rgba(20,23,34,0.14)] hover:-translate-y-0.5 hover:bg-[#0f121b]"
          : "border-black/8 bg-white/74 text-[#121521] shadow-[0_10px_22px_rgba(17,20,30,0.06)] hover:-translate-y-0.5 hover:bg-white",
      ].join(" ")}
    >
      {wallet.connected ? wallet.shortAddress : "Connect Wallet"}
    </button>
  );
}
