import { ExplorerLink } from "@/components/solana/ExplorerLink";
import { shortenAddress } from "@/lib/solana-prototype";

type PayoutWalletCardProps = {
  address: string;
  revenue: string;
  lastPayout: string;
};

export function PayoutWalletCard({
  address,
  revenue,
  lastPayout,
}: PayoutWalletCardProps) {
  return (
    <div className="surface-muted rounded-[1.25rem] p-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/42">
        Payout Wallet
      </p>
      <p className="mt-2 text-base font-semibold text-[#121521]">{shortenAddress(address, 5, 5)}</p>
      <p className="mt-3 text-sm leading-6 text-black/58">Revenue total: {revenue}</p>
      <p className="text-sm leading-6 text-black/58">Last payout tx: {lastPayout}</p>
      <ExplorerLink value={address} className="mt-3" />
    </div>
  );
}
