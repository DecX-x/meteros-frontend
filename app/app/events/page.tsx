import { ActionButton } from "@/components/dashboard/ActionButton";
import { AppPageHeader } from "@/components/dashboard/AppPageHeader";
import { Panel } from "@/components/dashboard/Panel";
import { Reveal } from "@/components/landing/Reveal";
import { ExplorerLink } from "@/components/solana/ExplorerLink";
import { TransactionStatusPill } from "@/components/solana/TransactionStatusPill";

const events = [
  {
    time: "14:02",
    agent: "Research Agent",
    tool: "company_lookup",
    provider: "DataCo",
    quotedPrice: "$0.003",
    paidAmount: "$0.003",
    buyerWallet: "8x7V...Pp8M",
    sellerWallet: "7wQv...T1V",
    status: "Confirmed" as const,
    ref: "5JVxR2dL7p91",
  },
  {
    time: "14:04",
    agent: "Research Agent",
    tool: "pdf_extract",
    provider: "ParseHub",
    quotedPrice: "$0.015",
    paidAmount: "$0.015",
    buyerWallet: "8x7V...Pp8M",
    sellerWallet: "9mHq...V1W",
    status: "Pending" as const,
    ref: "7NadQ4xM3a52",
  },
  {
    time: "14:08",
    agent: "Audit Agent",
    tool: "page_audit",
    provider: "WebScan",
    quotedPrice: "$0.014",
    paidAmount: "-",
    buyerWallet: "D6qP...4tU",
    sellerWallet: "5xDk...Z2C",
    status: "Failed" as const,
    ref: "policy_block_214",
  },
];

export default function EventsPage() {
  const selectedEvent = events[0];

  return (
    <div className="space-y-5 sm:space-y-6">
      <Reveal>
        <AppPageHeader
          eyebrow="Events"
          title="Events"
          description="Inspect runtime usage, wallet activity, and settlement outcomes."
          actions={
            <>
              <ActionButton className="w-full sm:w-auto">Live Feed</ActionButton>
              <ActionButton variant="secondary" className="w-full sm:w-auto">Pause Stream</ActionButton>
            </>
          }
        />
      </Reveal>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.24fr)_minmax(22rem,0.76fr)]">
        <Reveal>
          <Panel title="Event Table" description="Usage, policy result, wallet flow, and chain activity are shown in one proof surface with buyer and seller wallets visible.">
            <div className="grid gap-3 md:hidden">
              {events.map((event) => (
                <article key={`${event.time}-${event.tool}`} className="surface-card-strong rounded-[1.2rem] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-[#121521]">{event.tool}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-black/42">{event.agent} · {event.provider}</p>
                    </div>
                    <TransactionStatusPill status={event.status} />
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div><p className="eyebrow-label text-black/42">Quoted Price</p><p className="mt-1 text-sm font-semibold text-[#121521]">{event.quotedPrice}</p></div>
                    <div><p className="eyebrow-label text-black/42">Paid Amount</p><p className="mt-1 text-sm font-semibold text-[#121521]">{event.paidAmount}</p></div>
                    <div><p className="eyebrow-label text-black/42">Buyer Wallet</p><p className="mt-1 text-sm font-semibold text-[#121521]">{event.buyerWallet}</p></div>
                    <div><p className="eyebrow-label text-black/42">Seller Wallet</p><p className="mt-1 text-sm font-semibold text-[#121521]">{event.sellerWallet}</p></div>
                    <div><p className="eyebrow-label text-black/42">Tx / Settlement Ref</p><p className="mt-1 text-sm font-semibold text-[#121521]">{event.ref}</p></div>
                    <div><p className="eyebrow-label text-black/42">Time</p><p className="mt-1 text-sm font-semibold text-[#121521]">{event.time}</p></div>
                  </div>
                </article>
              ))}
            </div>

            <div className="hidden overflow-x-auto rounded-[1.2rem] border border-black/8 bg-white/44 md:block">
              <table className="min-w-[1180px] text-left">
                <thead>
                  <tr className="border-b border-black/8 text-[0.68rem] uppercase tracking-[0.18em] text-black/42">
                    <th className="px-3 py-3">Time</th>
                    <th className="px-3 py-3">Agent</th>
                    <th className="px-3 py-3">Tool</th>
                    <th className="px-3 py-3">Provider</th>
                    <th className="px-3 py-3">Quoted Price</th>
                    <th className="px-3 py-3">Paid Amount</th>
                    <th className="px-3 py-3">Buyer Wallet</th>
                    <th className="px-3 py-3">Seller Wallet</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Tx / Settlement Ref</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={`${event.time}-${event.tool}`} className="border-b border-black/6 transition hover:bg-white/42 last:border-b-0">
                      <td className="px-3 py-3.5 font-semibold text-[#121521]">{event.time}</td>
                      <td className="px-3 py-3.5 text-black/58">{event.agent}</td>
                      <td className="px-3 py-3.5 text-black/58">{event.tool}</td>
                      <td className="px-3 py-3.5 text-black/58">{event.provider}</td>
                      <td className="px-3 py-3.5 text-black/58">{event.quotedPrice}</td>
                      <td className="px-3 py-3.5 text-black/58">{event.paidAmount}</td>
                      <td className="px-3 py-3.5 text-black/58">{event.buyerWallet}</td>
                      <td className="px-3 py-3.5 text-black/58">{event.sellerWallet}</td>
                      <td className="px-3 py-3.5"><TransactionStatusPill status={event.status} /></td>
                      <td className="px-3 py-3.5 text-black/58">{event.ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={70}>
          <Panel title="Event Detail" description="Selected request detail mirrors a drawer layout with usage, policy result, wallet flow, and chain activity.">
            <div className="space-y-4">
              <div className="surface-dark rounded-[1.35rem] p-4 text-[#fff7f0]">
                <p className="eyebrow-label text-white/45">Usage</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div><p className="text-white/45">Agent</p><p className="mt-1 font-semibold">{selectedEvent.agent}</p></div>
                  <div><p className="text-white/45">Tool</p><p className="mt-1 font-semibold">{selectedEvent.tool}</p></div>
                  <div><p className="text-white/45">Quantity</p><p className="mt-1 font-semibold">1</p></div>
                  <div><p className="text-white/45">Pricing model</p><p className="mt-1 font-semibold">Per call</p></div>
                </div>
              </div>

              <div className="surface-muted rounded-[1.25rem] p-4">
                <p className="font-semibold text-[#121521]">Policy Result</p>
                <p className="mt-3 text-sm leading-6 text-black/58">approved / rejected: approved</p>
                <p className="text-sm leading-6 text-black/58">reason: provider allowlist passed and price stayed under the configured threshold</p>
              </div>

              <div className="surface-muted rounded-[1.25rem] p-4">
                <p className="font-semibold text-[#121521]">Wallet Flow</p>
                <p className="mt-3 text-sm leading-6 text-black/58">source wallet: {selectedEvent.buyerWallet}</p>
                <p className="text-sm leading-6 text-black/58">destination wallet: {selectedEvent.sellerWallet}</p>
                <p className="text-sm leading-6 text-black/58">amount: {selectedEvent.paidAmount}</p>
              </div>

              <div className="surface-muted rounded-[1.25rem] p-4">
                <p className="font-semibold text-[#121521]">Chain Activity</p>
                <p className="mt-3 text-sm leading-6 text-black/58">transaction hash: {selectedEvent.ref}</p>
                <p className="text-sm leading-6 text-black/58">confirmation status: {selectedEvent.status}</p>
                <ExplorerLink label="Explorer link" type="tx" value={selectedEvent.ref} className="mt-2" />
              </div>
            </div>
          </Panel>
        </Reveal>
      </div>
    </div>
  );
}
