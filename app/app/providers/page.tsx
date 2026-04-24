import { ActionButton } from "@/components/dashboard/ActionButton";
import { AppPageHeader } from "@/components/dashboard/AppPageHeader";
import { Panel } from "@/components/dashboard/Panel";
import { Reveal } from "@/components/landing/Reveal";
import { ActionPreviewModal } from "@/components/solana/ActionPreviewModal";
import { PayoutWalletCard } from "@/components/solana/PayoutWalletCard";
import { demoActionArtifacts } from "@/lib/solana-prototype";

const providers = [
  {
    name: "DataCo",
    type: "Data API",
    payoutWallet: "7wQvD2rP8hL3xF6nK1mS5tB9yC4aE7uJ2qR8dN6pT1V",
    activeTools: 2,
    routedRevenue: "$412.18",
    lastSettlement: "4m ago",
    tools: [
      { name: "company_lookup", pricingModel: "Per call", price: "$0.003", lastUsed: "2m ago", status: "Active" },
      { name: "entity_profile", pricingModel: "Per result", price: "$0.008", lastUsed: "13m ago", status: "Active" },
    ],
    lastPayoutTx: "5JVx...aR91",
  },
  {
    name: "ParseHub",
    type: "Document Parser",
    payoutWallet: "9mHqT4wR2xC7vB1nK5dS8pL3yF6aE2uJ7qP4rN9tV1W",
    activeTools: 1,
    routedRevenue: "$298.40",
    lastSettlement: "18m ago",
    tools: [
      { name: "pdf_extract", pricingModel: "Per page", price: "$0.005", lastUsed: "7m ago", status: "Active" },
    ],
    lastPayoutTx: "6Ard...vQ15",
  },
  {
    name: "WebScan",
    type: "Web Audit",
    payoutWallet: "5xDkP1nR8mT4qL7sV2yB6cH9wF3aE5uJ1pN4rQ8tZ2C",
    activeTools: 1,
    routedRevenue: "$191.73",
    lastSettlement: "31m ago",
    tools: [
      { name: "page_audit", pricingModel: "Per page", price: "$0.014", lastUsed: "24m ago", status: "Review" },
    ],
    lastPayoutTx: "4Nmw...fP72",
  },
];

export default function ProvidersPage() {
  const selectedProvider = providers[0];

  return (
    <div className="space-y-5 sm:space-y-6">
      <Reveal>
        <AppPageHeader
          eyebrow="Providers"
          title="Providers"
          description="Register paid tools, payout wallets, and pricing rules."
          actions={<ActionButton className="w-full sm:w-auto">Add Provider</ActionButton>}
        />
      </Reveal>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.12fr)_minmax(22rem,0.88fr)]">
        <Reveal>
          <Panel title="Provider Cards" description="Every provider exposes monetized tools, a payout wallet, and a visible revenue path.">
            <div className="grid gap-4 xl:grid-cols-2">
              {providers.map((provider) => (
                <article key={provider.name} className="surface-card-strong rounded-[1.45rem] p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(17,20,30,0.07)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-[1.42rem] font-semibold tracking-[-0.04em] text-[#121521]">{provider.name}</p>
                      <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-black/42">{provider.type}</p>
                    </div>
                    <span className="pill-muted rounded-full px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em]">{provider.lastSettlement}</span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div><p className="eyebrow-label text-black/42">Payout Wallet</p><p className="mt-1 break-all text-sm font-semibold text-[#121521]">{provider.payoutWallet}</p></div>
                    <div><p className="eyebrow-label text-black/42">Active Tools</p><p className="mt-1 text-sm font-semibold text-[#121521]">{provider.activeTools}</p></div>
                    <div><p className="eyebrow-label text-black/42">Routed Revenue</p><p className="mt-1 text-sm font-semibold text-[#121521]">{provider.routedRevenue}</p></div>
                    <div><p className="eyebrow-label text-black/42">Last Settlement</p><p className="mt-1 text-sm font-semibold text-[#121521]">{provider.lastSettlement}</p></div>
                  </div>

                  <div className="mt-5 space-y-2">
                    {provider.tools.map((tool) => (
                      <div key={tool.name} className="surface-muted rounded-[1rem] p-3">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold text-[#121521]">{tool.name}</p>
                          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-black/48">{tool.status}</span>
                        </div>
                        <div className="mt-2 grid gap-2 text-sm text-black/58 sm:grid-cols-3">
                          <span>{tool.pricingModel}</span>
                          <span>{tool.price}</span>
                          <span>{tool.lastUsed}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={70}>
          <Panel title="Add Provider" description="Prototype onboarding surface for paid tools and payout wallet setup.">
            <div className="space-y-4">
              {["Provider Name", "Base URL", "Provider Type", "Payout Wallet", "Tool Name", "Pricing Model", "Unit Price"].map((field) => (
                <label key={field} className="block">
                  <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">{field}</span>
                  <input type="text" value="" readOnly placeholder={`Enter ${field.toLowerCase()}`} className="surface-muted h-11 w-full rounded-[0.95rem] px-4 text-sm text-[#121521] outline-none placeholder:text-black/35" />
                </label>
              ))}
              <div className="grid gap-2 sm:grid-cols-3">
                <ActionButton className="w-full">Save Provider</ActionButton>
                <ActionButton variant="secondary" className="w-full">Use Connected Wallet</ActionButton>
                <ActionPreviewModal title="Generate Provider Payout Action" description="Create a payout approval Action for the newly configured provider wallet." endpoint={`${demoActionArtifacts.actionUrl}?flow=provider-payout`} label="Generate Payout Action" />
              </div>
            </div>
          </Panel>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <Panel title="Payout Wallet Detail" description="Stablecoin and payouts are a core proof surface, so provider revenue and payout destination stay visible.">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <div className="surface-dark rounded-[1.4rem] p-5 text-[#fff7f0]">
              <p className="eyebrow-label text-white/45">Selected provider</p>
              <p className="mt-2 font-display text-[1.6rem] font-semibold tracking-[-0.05em]">{selectedProvider.name}</p>
              <p className="mt-3 text-sm leading-6 text-white/64">{selectedProvider.name} monetizes runtime tool access and receives provider payouts through a dedicated Solana wallet visible to operators.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1rem] border border-white/10 bg-white/6 p-3"><p className="text-xs uppercase tracking-[0.16em] text-white/42">Provider Type</p><p className="mt-1 font-semibold">{selectedProvider.type}</p></div>
                <div className="rounded-[1rem] border border-white/10 bg-white/6 p-3"><p className="text-xs uppercase tracking-[0.16em] text-white/42">Routed Revenue</p><p className="mt-1 font-semibold">{selectedProvider.routedRevenue}</p></div>
                <div className="rounded-[1rem] border border-white/10 bg-white/6 p-3"><p className="text-xs uppercase tracking-[0.16em] text-white/42">Last Settlement</p><p className="mt-1 font-semibold">{selectedProvider.lastSettlement}</p></div>
              </div>
            </div>
            <PayoutWalletCard address={selectedProvider.payoutWallet} revenue={selectedProvider.routedRevenue} lastPayout={selectedProvider.lastPayoutTx} />
          </div>
        </Panel>
      </Reveal>
    </div>
  );
}
