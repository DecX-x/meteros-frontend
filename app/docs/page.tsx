import Link from "next/link";

const sections = [
  {
    title: "Workspace control",
    body: "Own the workspace onchain, assign operators, and keep one active policy version tied to each environment.",
  },
  {
    title: "Metered execution",
    body: "Requests pass through pricing and policy evaluation offchain so high-frequency tool calls stay cheap and fast.",
  },
  {
    title: "Settlement receipts",
    body: "Batch usage into durable receipt records on Arc so payouts and disputes remain auditable without per-call gas costs.",
  },
];

const flow = [
  "Operator funds a workspace treasury and activates policy.",
  "Agent runtime requests a priced tool call through MeterOS.",
  "Policy engine approves or blocks the call before payment.",
  "Nanopayment executes offchain and usage is recorded.",
  "Settlement batches are anchored onchain for auditability.",
];

export default function DocsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-[#d6a8ff]/18 blur-3xl" />
        <div className="absolute right-[-8rem] top-0 h-[24rem] w-[24rem] rounded-full bg-[#ff9a5a]/16 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-6">
        <section className="surface-card rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow-label text-black/55">MeterOS Docs</p>
              <h1 className="mt-3 font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-[#121521]">
                Runtime, policy, and settlement flow.
              </h1>
              <p className="mt-3 max-w-[42rem] text-base leading-7 text-black/68">
                MeterOS keeps high-frequency billing offchain, then anchors control and receipts on Arc where ownership and settlement need to persist.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/app" className="focus-ring inline-flex h-11 items-center justify-center rounded-full border border-transparent bg-[#171a24] px-5 text-sm font-semibold text-[#fff7f0] shadow-[0_12px_24px_rgba(20,23,34,0.12)] transition hover:-translate-y-0.5 hover:bg-[#11141d]">
                Open App
              </Link>
              <Link href="/" className="focus-ring inline-flex h-11 items-center justify-center rounded-full border border-black/8 bg-white/72 px-5 text-sm font-semibold text-[#121521] shadow-[0_8px_18px_rgba(17,20,30,0.05)] transition hover:-translate-y-0.5 hover:bg-[#fffdfb]">
                Back Home
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="surface-card-strong rounded-[1.5rem] p-5">
              <p className="font-display text-[1.2rem] font-semibold tracking-[-0.04em] text-[#121521]">
                {section.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-black/68">{section.body}</p>
            </article>
          ))}
        </section>

        <section id="demo-flow" className="surface-card rounded-[1.8rem] p-6 sm:p-7">
          <p className="eyebrow-label text-black/55">Demo flow</p>
          <h2 className="mt-3 font-display text-[1.8rem] font-semibold tracking-[-0.05em] text-[#121521]">
            What the product demo should show
          </h2>
          <div className="mt-5 grid gap-3">
            {flow.map((item, index) => (
              <div key={item} className="surface-muted flex items-start gap-4 rounded-[1.2rem] p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#171a24] text-sm font-semibold text-[#fff7f0]">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-6 text-black/72">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
