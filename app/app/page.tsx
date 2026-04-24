import { ActionButton } from "@/components/dashboard/ActionButton";
import { AppPageHeader } from "@/components/dashboard/AppPageHeader";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { Panel } from "@/components/dashboard/Panel";
import { Reveal } from "@/components/landing/Reveal";
import { ActionCard } from "@/components/solana/ActionCard";
import { ExplorerLink } from "@/components/solana/ExplorerLink";
import { FundingModal } from "@/components/solana/FundingModal";
import { LiveStatusDot } from "@/components/solana/LiveStatusDot";
import { LowBalanceAlert } from "@/components/solana/LowBalanceAlert";
import { TransactionStatusPill } from "@/components/solana/TransactionStatusPill";
import { demoActionArtifacts, demoWallet, shortenAddress } from "@/lib/solana-prototype";

const kpis = [
  { title: "Connected Wallet", value: shortenAddress(demoWallet.address), detail: "Primary signer ready", accent: "bg-[#ff8c46]" },
  { title: "Treasury Balance", value: demoWallet.treasuryBalance, detail: "USDC available for funding", accent: "bg-[#b8df4e]" },
  { title: "Agent Wallets", value: `${demoWallet.agentWalletCount}`, detail: "12 funded for runtime", accent: "bg-[#9c63ff]" },
  { title: "Providers", value: `${demoWallet.providerWalletCount}`, detail: "Payout routes configured", accent: "bg-[#141722]" },
  { title: "Paid Actions Today", value: "182", detail: "Funding and payout flows", accent: "bg-[#ff8c46]" },
  { title: "Blocked Actions", value: "14", detail: "Policy rules intercepted", accent: "bg-[#141722]" },
  { title: "Pending Settlements", value: "6", detail: "Awaiting confirmation", accent: "bg-[#9c63ff]" },
  { title: "Confirmed Transactions", value: "176", detail: "Signed on devnet", accent: "bg-[#b8df4e]" },
];

const quickActions = [
  {
    title: "Fund Agent Wallet",
    description: "Generate a top-up Action for an underfunded execution wallet.",
    endpoint: `${demoActionArtifacts.actionUrl}?flow=fund-agent-wallet`,
    blinkUrl: `${demoActionArtifacts.blinkUrl}&flow=fund-agent-wallet`,
    status: "Action Ready",
  },
  {
    title: "Approve Provider Payout",
    description: "Create a signer-ready payout approval for a provider settlement batch.",
    endpoint: `${demoActionArtifacts.actionUrl}?flow=provider-payout`,
    blinkUrl: `${demoActionArtifacts.blinkUrl}&flow=provider-payout`,
    status: "Blink Ready",
  },
  {
    title: "Pause Agent Spending",
    description: "Issue a pausable treasury control when policy rules trip or usage spikes.",
    endpoint: `${demoActionArtifacts.actionUrl}?flow=pause-agent`,
    blinkUrl: `${demoActionArtifacts.blinkUrl}&flow=pause-agent`,
    status: "Policy Linked",
  },
  {
    title: "Top Up Treasury",
    description: "Prepare a treasury refill Action before wallet balances block paid workflows.",
    endpoint: `${demoActionArtifacts.actionUrl}?flow=top-up-treasury`,
    blinkUrl: `${demoActionArtifacts.blinkUrl}&flow=top-up-treasury`,
    status: "Devnet Live",
  },
];

const liveEvents = [
  {
    title: "Funding received",
    description: "Treasury vault received 500 USDC and is ready for agent top-ups.",
    status: "Confirmed" as const,
    time: "just now",
  },
  {
    title: "Agent payment executed",
    description: "Research Agent paid DataCo for `company_lookup` from its runtime wallet.",
    status: "Confirmed" as const,
    time: "2m ago",
  },
  {
    title: "Provider payout confirmed",
    description: "ParseHub payout batch signed and confirmed on Solana devnet.",
    status: "Confirmed" as const,
    time: "5m ago",
  },
  {
    title: "Policy blocked call",
    description: "Audit Agent tried to exceed the max price per action threshold.",
    status: "Failed" as const,
    time: "8m ago",
  },
  {
    title: "Action generated",
    description: "Top Up Treasury Action URL created and shared as a Blink.",
    status: "Pending" as const,
    time: "12m ago",
  },
];

export default function AppOverviewPage() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <Reveal>
        <AppPageHeader
          eyebrow="Overview"
          title="Wallet-native agent operations"
          description="Monitor connected treasury state, runtime agent wallets, shareable Actions, and live settlement outcomes from one Solana operating surface."
          actions={
            <>
              <LiveStatusDot label="Realtime Feed" />
              <LiveStatusDot label="Action Metadata Healthy" tone="quiet" />
            </>
          }
        />
      </Reveal>

      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-8">
        {kpis.map((kpi, index) => (
          <Reveal key={kpi.title} delay={index * 25}>
            <KpiCard title={kpi.title} value={kpi.value} detail={kpi.detail} accent={kpi.accent} />
          </Reveal>
        ))}
      </section>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
        <Reveal>
          <Panel
            title="Wallet Overview"
            description="See signer status, treasury routing, funded agent wallets, and payout-ready provider wallets before execution starts to drift."
            actions={
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <FundingModal
                  title="Fund Treasury"
                  walletAddress={demoWallet.treasuryAddress}
                  amount="500.00 USDC"
                  blinkUrl={`${demoActionArtifacts.blinkUrl}&flow=fund-treasury`}
                />
                <ActionButton variant="secondary" className="w-full sm:w-auto">Create Agent Wallet</ActionButton>
                <ActionButton variant="secondary" className="w-full sm:w-auto">Create Action</ActionButton>
              </div>
            }
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="surface-card-strong rounded-[1.35rem] p-4">
                <p className="eyebrow-label text-black/42">Connected wallet address</p>
                <p className="mt-3 break-all font-display text-[1.2rem] font-semibold tracking-[-0.04em] text-[#121521]">{demoWallet.address}</p>
                <ExplorerLink value={demoWallet.address} className="mt-4" />
              </div>
              <div className="surface-card-strong rounded-[1.35rem] p-4">
                <p className="eyebrow-label text-black/42">Treasury wallet address</p>
                <p className="mt-3 break-all font-display text-[1.2rem] font-semibold tracking-[-0.04em] text-[#121521]">{demoWallet.treasuryAddress}</p>
                <ExplorerLink value={demoWallet.treasuryAddress} className="mt-4" />
              </div>
              <div className="surface-muted rounded-[1.35rem] p-4">
                <p className="eyebrow-label text-black/42">Total funded agent wallets</p>
                <p className="mt-3 font-display text-[1.85rem] font-semibold tracking-[-0.05em] text-[#121521]">12</p>
                <p className="mt-2 text-sm leading-6 text-black/58">Research, Audit, Routing, and Payout agents currently funded for runtime execution.</p>
              </div>
              <div className="surface-muted rounded-[1.35rem] p-4">
                <p className="eyebrow-label text-black/42">Provider payout wallets count</p>
                <p className="mt-3 font-display text-[1.85rem] font-semibold tracking-[-0.05em] text-[#121521]">7</p>
                <p className="mt-2 text-sm leading-6 text-black/58">Every monetized tool points to a visible Solana payout wallet with explorer proof.</p>
              </div>
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={70}>
          <Panel title="Funding Risk" description="Keep agent execution online by surfacing low-balance pressure before Actions start failing.">
            <div className="space-y-4">
              <LowBalanceAlert
                title="Audit Agent wallet below threshold"
                body="Balance has dropped to 4.20 USDC and is close to the auto-pause policy threshold for high-cost scans."
              />
              <div className="surface-dark rounded-[1.4rem] p-4 text-[#fff7f0]">
                <p className="eyebrow-label text-white/45">Action status badge</p>
                <p className="mt-2 font-display text-[1.4rem] font-semibold tracking-[-0.04em]">Blink-ready treasury flows</p>
                <p className="mt-3 text-sm leading-6 text-white/64">Funding, pause, and payout approvals can all be generated as Solana Actions and copied as Blinks from this dashboard.</p>
              </div>
            </div>
          </Panel>
        </Reveal>
      </div>

      <Reveal>
        <Panel title="Quick Actions" description="This is where MeterOS visibly embraces Solana Actions and Blinks for treasury-critical flows.">
          <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-4">
            {quickActions.map((item) => (
              <ActionCard
                key={item.title}
                title={item.title}
                description={item.description}
                endpoint={item.endpoint}
                blinkUrl={item.blinkUrl}
                status={item.status}
              />
            ))}
          </div>
        </Panel>
      </Reveal>

      <Reveal delay={90}>
        <Panel title="Live Onchain Activity" description="Funding, approvals, Actions, and policy results stream into one feed with clear transaction outcomes.">
          <div className="space-y-3">
            {liveEvents.map((event) => (
              <article key={event.title} className="surface-card-strong rounded-[1.35rem] p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(17,20,30,0.06)]">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-[#121521]">{event.title}</p>
                      <span className="rounded-full bg-[#f7efe7] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/48">new event</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-black/58">{event.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <TransactionStatusPill status={event.status} />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-black/42">{event.time}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </Reveal>
    </div>
  );
}
