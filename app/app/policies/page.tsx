import { ActionButton } from "@/components/dashboard/ActionButton";
import { AppPageHeader } from "@/components/dashboard/AppPageHeader";
import { Panel } from "@/components/dashboard/Panel";
import { Reveal } from "@/components/landing/Reveal";
import { ActionCard } from "@/components/solana/ActionCard";
import { demoActionArtifacts } from "@/lib/solana-prototype";

const policies = [
  { title: "Daily Spend Limit", body: "Block requests when daily spend exceeds $2.00", tone: "bg-[#ff8c46]" },
  { title: "Maximum Price Per Action", body: "Reject actions above the allowed unit price", tone: "bg-[#9c63ff]" },
  { title: "Allowed Providers", body: "Only allow approved providers for production agent workflows", tone: "bg-[#b8df4e]" },
  { title: "Low Balance Threshold", body: "Trigger warnings when an agent wallet balance falls below 5.00 USDC", tone: "bg-[#141722]" },
  { title: "Auto Pause on Limit Reached", body: "Pause agent spending when any critical budget rule is breached", tone: "bg-[#ff8c46]" },
];

const actionLinkedControls = [
  {
    title: "Generate Pause Agent Action",
    description: "Turn a policy breach into a wallet-signable pause flow that can be shared as a Blink.",
    endpoint: `${demoActionArtifacts.actionUrl}?flow=pause-agent`,
    blinkUrl: `${demoActionArtifacts.blinkUrl}&flow=pause-agent`,
    status: "Policy Linked",
  },
  {
    title: "Generate Treasury Top-Up Action",
    description: "Create a treasury refill Action whenever low balance policies start to trigger.",
    endpoint: `${demoActionArtifacts.actionUrl}?flow=top-up-treasury`,
    blinkUrl: `${demoActionArtifacts.blinkUrl}&flow=top-up-treasury`,
    status: "Action Ready",
  },
  {
    title: "Generate Provider Approval Action",
    description: "Approve a provider for a policy allowlist through a signer-driven Action instead of a hidden admin toggle.",
    endpoint: `${demoActionArtifacts.actionUrl}?flow=provider-approval`,
    blinkUrl: `${demoActionArtifacts.blinkUrl}&flow=provider-approval`,
    status: "Blink Ready",
  },
];

export default function PoliciesPage() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <Reveal>
        <AppPageHeader
          eyebrow="Policies"
          title="Policies"
          description="Define how agents are allowed to spend across tools and providers."
          actions={<ActionButton className="w-full sm:w-auto">Create Policy</ActionButton>}
        />
      </Reveal>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)]">
        <Reveal>
          <Panel title="Policy Cards" description="MeterOS remains a control plane, not just a payment rail, by making approval rules visible and actionable.">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {policies.map((policy, index) => (
                <article key={policy.title} className="surface-card-strong rounded-[1.4rem] p-5 shadow-[0_10px_24px_rgba(17,20,30,0.04)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/42">Rule 0{index + 1}</span>
                    <span className={["h-2.5 w-2.5 rounded-full", policy.tone].join(" ")} />
                  </div>
                  <p className="mt-6 font-display text-[1.28rem] font-semibold leading-[1.04] tracking-[-0.04em] text-[#121521]">{policy.title}</p>
                  <p className="mt-3 text-sm leading-6 text-black/58">{policy.body}</p>
                </article>
              ))}
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={70}>
          <Panel title="Policy Builder" description="Prototype builder for threshold rules, provider allowlists, and automated control actions.">
            <div className="space-y-4">
              {["Policy Name", "Target", "Rule Type", "Threshold", "Action"].map((field) => (
                <label key={field} className="block">
                  <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">{field}</span>
                  <input type="text" value="" readOnly placeholder={`Set ${field.toLowerCase()}`} className="surface-muted h-11 w-full rounded-[0.95rem] px-4 text-sm text-[#121521] outline-none placeholder:text-black/35" />
                </label>
              ))}

              <div className="surface-dark rounded-[1.35rem] p-4 text-[#fff7f0]">
                <p className="eyebrow-label text-white/45">Example English copy</p>
                <div className="mt-4 space-y-3 text-sm leading-6 text-white/72">
                  <div className="rounded-[1rem] border border-white/10 bg-white/6 px-3 py-3">Block requests when daily spend exceeds $2.00</div>
                  <div className="rounded-[1rem] border border-white/10 bg-white/6 px-3 py-3">Reject actions above the allowed unit price</div>
                  <div className="rounded-[1rem] border border-white/10 bg-white/6 px-3 py-3">Only allow approved providers</div>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <ActionButton className="w-full">Save Policy</ActionButton>
                <ActionButton variant="secondary" className="w-full">Disable Policy</ActionButton>
              </div>
            </div>
          </Panel>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <Panel title="Action-linked Controls" description="Policies do not stop at display logic. Critical controls can produce wallet-signable Solana Actions.">
          <div className="grid gap-4 lg:grid-cols-3">
            {actionLinkedControls.map((control) => (
              <ActionCard key={control.title} title={control.title} description={control.description} endpoint={control.endpoint} blinkUrl={control.blinkUrl} status={control.status} />
            ))}
          </div>
        </Panel>
      </Reveal>
    </div>
  );
}
