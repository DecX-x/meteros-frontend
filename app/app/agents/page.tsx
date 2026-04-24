import { ActionButton } from "@/components/dashboard/ActionButton";
import { AppPageHeader } from "@/components/dashboard/AppPageHeader";
import { Panel } from "@/components/dashboard/Panel";
import { Reveal } from "@/components/landing/Reveal";
import { ActionPreviewModal } from "@/components/solana/ActionPreviewModal";
import { ExplorerLink } from "@/components/solana/ExplorerLink";
import { FundingModal } from "@/components/solana/FundingModal";
import { LowBalanceAlert } from "@/components/solana/LowBalanceAlert";
import { demoActionArtifacts } from "@/lib/solana-prototype";

const agents = [
  {
    name: "Research Agent",
    wallet: "8x7Vh9fE8W1jF1xRavS3Hn9bNt5w4JX4B5xC2j6qPp8M",
    status: "Active",
    dailySpendLimit: "$2.00",
    walletBalance: "18.20 USDC",
    actionsToday: 46,
    lastActivity: "2m ago",
    spendToday: "$1.28",
    remainingLimit: "$0.72",
    averageCost: "$0.028",
    lastFunded: "1h ago",
    lastPayment: "0.42 USDC to DataCo",
    badge: "Healthy",
  },
  {
    name: "Audit Agent",
    wallet: "D6qP3hV2uR8jN5mL1cK7sT4xW9yB2eA3fG8pZ1rQ4tU",
    status: "Low Balance",
    dailySpendLimit: "$3.00",
    walletBalance: "4.20 USDC",
    actionsToday: 18,
    lastActivity: "6m ago",
    spendToday: "$2.48",
    remainingLimit: "$0.52",
    averageCost: "$0.137",
    lastFunded: "6h ago",
    lastPayment: "1.02 USDC to WebScan",
    badge: "Low Balance",
  },
  {
    name: "Routing Agent",
    wallet: "F3mB7dL4qT9yP2rN6hV1cX8kS5wA4uJ7eR3zG1nQ6pW",
    status: "Budget Near Limit",
    dailySpendLimit: "$1.50",
    walletBalance: "8.60 USDC",
    actionsToday: 22,
    lastActivity: "9m ago",
    spendToday: "$1.22",
    remainingLimit: "$0.28",
    averageCost: "$0.055",
    lastFunded: "3h ago",
    lastPayment: "0.18 USDC to DriftRouter",
    badge: "Budget Near Limit",
  },
  {
    name: "Payout Agent",
    wallet: "H9vD4qR7uT2pL5sX1mN8kB3yC6wA4fE2zG7rJ9nP1dQ",
    status: "Paused",
    dailySpendLimit: "$5.00",
    walletBalance: "22.00 USDC",
    actionsToday: 3,
    lastActivity: "42m ago",
    spendToday: "$0.24",
    remainingLimit: "$4.76",
    averageCost: "$0.080",
    lastFunded: "1d ago",
    lastPayment: "0.24 USDC to ParseHub",
    badge: "Paused",
  },
];

function badgeClass(status: string) {
  if (status === "Low Balance") return "bg-[#fff0e4] text-[#6d3c22]";
  if (status === "Budget Near Limit") return "bg-[#f2ebff] text-[#543f78]";
  if (status === "Paused") return "bg-[#ece8f4] text-[#534d63]";
  return "bg-[#e7f2c4] text-[#233017]";
}

export default function AgentsPage() {
  const selectedAgent = agents[1];

  return (
    <div className="space-y-5 sm:space-y-6">
      <Reveal>
        <AppPageHeader
          eyebrow="Agents"
          title="Agents"
          description="Manage funded agent wallets, spending limits, and runtime activity."
          actions={
            <>
              <ActionButton className="w-full sm:w-auto">Create Agent</ActionButton>
              <ActionButton variant="secondary" className="w-full sm:w-auto">Create Agent Wallet</ActionButton>
            </>
          }
        />
      </Reveal>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.16fr)_minmax(22rem,0.84fr)]">
        <Reveal>
          <Panel title="Agent Wallets" description="Agents are represented as onchain actors with their own funding state, balance, and execution history.">
            <div className="grid gap-3 md:hidden">
              {agents.map((agent) => (
                <article key={agent.name} className="surface-card-strong rounded-[1.25rem] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-[#121521]">{agent.name}</p>
                      <p className="mt-1 break-all text-xs uppercase tracking-[0.16em] text-black/42">{agent.wallet}</p>
                    </div>
                    <span className={["rounded-full px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em]", badgeClass(agent.status)].join(" ")}>{agent.status}</span>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div><p className="eyebrow-label text-black/42">Daily Spend Limit</p><p className="mt-1 text-sm font-semibold text-[#121521]">{agent.dailySpendLimit}</p></div>
                    <div><p className="eyebrow-label text-black/42">Wallet Balance</p><p className="mt-1 text-sm font-semibold text-[#121521]">{agent.walletBalance}</p></div>
                    <div><p className="eyebrow-label text-black/42">Actions Today</p><p className="mt-1 text-sm font-semibold text-[#121521]">{agent.actionsToday}</p></div>
                    <div><p className="eyebrow-label text-black/42">Last Activity</p><p className="mt-1 text-sm font-semibold text-[#121521]">{agent.lastActivity}</p></div>
                  </div>
                </article>
              ))}
            </div>

            <div className="hidden overflow-x-auto rounded-[1.2rem] border border-black/8 bg-white/44 md:block">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="border-b border-black/8 text-[0.68rem] uppercase tracking-[0.18em] text-black/40">
                    <th className="px-3 py-3">Agent Name</th>
                    <th className="px-3 py-3">Agent Wallet</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Daily Spend Limit</th>
                    <th className="px-3 py-3">Wallet Balance</th>
                    <th className="px-3 py-3">Actions Today</th>
                    <th className="px-3 py-3">Last Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {agents.map((agent) => (
                    <tr key={agent.name} className="border-b border-black/6 bg-white/24 transition hover:bg-white/42 last:border-b-0">
                      <td className="px-3 py-3.5 font-semibold text-[#121521]">{agent.name}</td>
                      <td className="px-3 py-3.5 text-black/58">{agent.wallet}</td>
                      <td className="px-3 py-3.5"><span className={["rounded-full px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em]", badgeClass(agent.status)].join(" ")}>{agent.status}</span></td>
                      <td className="px-3 py-3.5 text-black/58">{agent.dailySpendLimit}</td>
                      <td className="px-3 py-3.5 text-black/58">{agent.walletBalance}</td>
                      <td className="px-3 py-3.5 text-black/58">{agent.actionsToday}</td>
                      <td className="px-3 py-3.5 text-black/58">{agent.lastActivity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={70}>
          <Panel title="Expanded Detail" description="Selected agent detail shows identity, spending, wallet history, and wallet-signable control Actions.">
            <div className="space-y-4">
              <LowBalanceAlert title="Audit Agent is close to an auto-pause threshold" body="This wallet has enough balance for several calls, but not for another long audit batch at the current price curve." />

              <div className="surface-dark rounded-[1.35rem] p-4 text-[#fff7f0]">
                <p className="eyebrow-label text-white/45">Identity</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div><p className="text-white/45">Agent name</p><p className="mt-1 font-semibold">{selectedAgent.name}</p></div>
                  <div><p className="text-white/45">Agent wallet</p><p className="mt-1 break-all font-semibold">{selectedAgent.wallet}</p></div>
                  <div><p className="text-white/45">Owner workspace</p><p className="mt-1 font-semibold">solana_frontier_demo</p></div>
                  <div><p className="text-white/45">Agent status</p><p className="mt-1 font-semibold">{selectedAgent.status}</p></div>
                </div>
              </div>

              <div className="surface-muted rounded-[1.25rem] p-4">
                <p className="font-semibold text-[#121521]">Spending</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <div><p className="text-sm text-black/52">Spend today</p><p className="mt-1 font-semibold text-[#121521]">{selectedAgent.spendToday}</p></div>
                  <div><p className="text-sm text-black/52">Remaining limit</p><p className="mt-1 font-semibold text-[#121521]">{selectedAgent.remainingLimit}</p></div>
                  <div><p className="text-sm text-black/52">Average cost per action</p><p className="mt-1 font-semibold text-[#121521]">{selectedAgent.averageCost}</p></div>
                </div>
              </div>

              <div className="surface-muted rounded-[1.25rem] p-4">
                <p className="font-semibold text-[#121521]">Wallet</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div><p className="text-sm text-black/52">Balance</p><p className="mt-1 font-semibold text-[#121521]">{selectedAgent.walletBalance}</p></div>
                  <div><p className="text-sm text-black/52">Last funded</p><p className="mt-1 font-semibold text-[#121521]">{selectedAgent.lastFunded}</p></div>
                  <div><p className="text-sm text-black/52">Last payment</p><p className="mt-1 font-semibold text-[#121521]">{selectedAgent.lastPayment}</p></div>
                  <div><ExplorerLink value={selectedAgent.wallet} /></div>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <FundingModal title="Fund Audit Agent Wallet" walletAddress={selectedAgent.wallet} amount="25.00 USDC" blinkUrl={`${demoActionArtifacts.blinkUrl}&flow=audit-top-up`} />
                <ActionButton variant="secondary" className="w-full">Pause Agent</ActionButton>
                <ActionPreviewModal title="Generate Top-Up Action" description="Create a wallet-signable top-up for the selected agent wallet." endpoint={`${demoActionArtifacts.actionUrl}?flow=generate-top-up`} label="Generate Top-Up Action" />
                <ActionButton variant="secondary" className="w-full">View Activity</ActionButton>
              </div>
            </div>
          </Panel>
        </Reveal>
      </div>
    </div>
  );
}
