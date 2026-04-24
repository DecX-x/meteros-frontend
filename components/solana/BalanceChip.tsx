"use client";

import { useSolanaWallet } from "@/components/solana/SolanaWalletProvider";

type BalanceChipProps = {
  label?: string;
  value?: string;
};

export function BalanceChip({
  label = "Treasury Balance",
  value,
}: BalanceChipProps) {
  const wallet = useSolanaWallet();

  return (
    <div className="rounded-full border border-[#cfd8ab] bg-[#edf5cc] px-3 py-2 text-sm text-[#182113] shadow-[0_8px_18px_rgba(159,183,78,0.12)]">
      <span className="font-semibold">{label}</span>
      <span className="ml-2 text-[#243019]">{value ?? wallet.treasuryBalance}</span>
    </div>
  );
}
