"use client";

import { ActionPreviewModal } from "@/components/solana/ActionPreviewModal";
import { BalanceChip } from "@/components/solana/BalanceChip";
import { ExplorerLink } from "@/components/solana/ExplorerLink";
import { WalletBadge } from "@/components/solana/WalletBadge";
import { WalletConnectButton } from "@/components/solana/WalletConnectButton";
import { useSolanaWallet } from "@/components/solana/SolanaWalletProvider";

export function AppTopbar() {
  const wallet = useSolanaWallet();

  return (
    <header className="surface-card sticky top-0 z-40 rounded-[1.2rem] px-4 py-3 sm:rounded-[1.45rem] sm:px-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <p className="eyebrow-label text-black/42">MeterOS app</p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-black/55">
            <span className="font-medium text-[#121521]">Solana control plane for wallets, Actions, and treasury policy</span>
            <span className="hidden h-1 w-1 rounded-full bg-black/18 sm:inline-block" />
            <span>Realtime stream healthy</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 lg:justify-end">
          <WalletBadge />
          <span className="rounded-full border border-[#d8cee9] bg-[#f0eafe] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#4a3d6b]">
            {wallet.network}
          </span>
          {wallet.connected ? <BalanceChip value={wallet.balance} label="Balance" /> : null}
          <ExplorerLink value={wallet.address} className="rounded-full border border-black/8 bg-white/72 px-3 py-2 no-underline" />
          <ActionPreviewModal
            title="Top Up Treasury"
            description="Generate a wallet-signable Solana Action that tops up the treasury wallet and can be shared as a Blink."
            endpoint={wallet.actionUrl}
            label="New Action"
          />
          <WalletConnectButton compact />
          <span className="pill-muted rounded-full px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
            User Menu
          </span>
        </div>
      </div>
    </header>
  );
}
