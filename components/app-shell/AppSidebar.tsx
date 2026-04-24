import Link from "next/link";

import { AppNavigation } from "@/components/app-shell/AppNavigation";
import { ExplorerLink } from "@/components/solana/ExplorerLink";
import { LiveStatusDot } from "@/components/solana/LiveStatusDot";
import { demoWallet } from "@/lib/solana-prototype";

export function AppSidebar() {
  return (
    <aside className="hidden w-[16.5rem] shrink-0 lg:block xl:w-[17.25rem]">
      <div className="flex h-full flex-col gap-3 overflow-hidden">
        <div className="surface-card rounded-[1.7rem] p-4">
          <Link href="/" className="flex items-center gap-3 text-[#121521]">
            <span className="flex h-10 w-10 items-center justify-center rounded-[1rem] bg-[#141722] text-sm font-semibold text-[#fff7f0] shadow-[0_8px_16px_rgba(20,23,34,0.14)]">
              M
            </span>
              <div>
                <p className="font-display text-[1.05rem] font-semibold tracking-[-0.03em]">MeterOS</p>
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-black/42">
                  Solana Frontier
                </p>
              </div>
            </Link>

            <div className="surface-card-strong mt-5 rounded-[1.35rem] p-4">
              <p className="eyebrow-label text-black/42">
                Workspace
              </p>
              <p className="mt-2 font-display text-[1.12rem] font-semibold tracking-[-0.04em] text-[#121521]">
                Wallet-native Ops
              </p>
              <p className="mt-2 text-sm leading-6 text-black/58">
                Treasury, agent wallets, provider payouts, and shareable Solana Actions.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <LiveStatusDot label="Action Ready" />
                <LiveStatusDot label="Blink Ready" tone="quiet" />
              </div>
            </div>

          <div className="mt-5">
            <AppNavigation />
          </div>
        </div>

        <div className="surface-dark min-h-0 rounded-[1.7rem] p-4 text-[#fff7f0]">
          <p className="eyebrow-label text-white/45">Treasury status</p>
          <p className="mt-2 font-display text-[1.15rem] font-semibold leading-[1.08] tracking-[-0.04em]">
            Devnet rails online
          </p>
          <p className="mt-2 text-sm leading-6 text-white/62">
            Agent wallet funding, Actions, and payout routes are ready for signing.
          </p>
          <div className="mt-4 grid gap-3">
            <div className="rounded-[1.2rem] border border-white/10 bg-white/6 p-3.5">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/42">Agent wallets</p>
              <p className="mt-1 font-display text-[1.65rem] font-semibold tracking-[-0.05em]">{demoWallet.agentWalletCount}</p>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-white/6 p-3.5">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/42">Treasury balance</p>
              <p className="mt-1 font-display text-[1.65rem] font-semibold tracking-[-0.05em]">{demoWallet.treasuryBalance}</p>
            </div>
          </div>
          <ExplorerLink value={demoWallet.treasuryAddress} className="mt-4 text-white/82 decoration-white/18 hover:text-white" />
        </div>
      </div>
    </aside>
  );
}
