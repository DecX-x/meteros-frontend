import { SectionHeading } from "@/components/landing/SectionHeading";
import { Reveal } from "@/components/landing/Reveal";

const steps = [
  {
    title: "Operator Wallet",
    description: "Connect and authorize",
    accent: "bg-[#ff8c46]",
  },
  {
    title: "MeterOS",
    description: "Fund runtime execution",
    accent: "bg-[#141722]",
  },
  {
    title: "Agent Wallet",
    description: "Route paid tool calls",
    accent: "bg-[#9c63ff]",
  },
  {
    title: "Provider Wallet",
    description: "Settle and inspect activity",
    accent: "bg-[#baf24a]",
  },
];

const captions = [
  "Connect and authorize",
  "Fund runtime execution",
  "Route paid tool calls",
  "Settle and inspect activity",
];

export function ArchitectureSection() {
  return (
    <section
      id="flow"
      className="surface-card overflow-hidden rounded-[2rem] px-5 py-6 sm:rounded-[2.2rem] sm:px-8 sm:py-8 lg:rounded-[2.3rem] lg:py-10"
    >
      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:items-start">
        <div className="xl:pr-6">
          <SectionHeading
            eyebrow="How it works"
            title="Operator Wallet to Provider Wallet, with MeterOS orchestrating the Action flow."
            description="The product starts with wallet authorization, routes execution into funded agent wallets, then exposes settlement and payout results as live Solana-native state."
          />
        </div>

        <div className="xl:pt-2">
          <div className="relative hidden h-8 px-4 lg:block">
            <div className="absolute left-7 right-7 top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,rgba(255,140,70,0.5),rgba(156,99,255,0.35),rgba(186,242,74,0.5))]" />
          </div>

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.title} as="li" className="relative" delay={index * 80}>
                 <div className="surface-card-strong flex h-full flex-col rounded-[1.4rem] p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(17,20,30,0.07)] sm:rounded-[1.6rem] lg:rounded-[1.75rem]">
                  <div className="flex items-center justify-between gap-4">
                    <span className={["h-3.5 w-3.5 rounded-full", step.accent].join(" ")} />
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.35rem] font-semibold leading-none tracking-[-0.04em] text-[#121521]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/62">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

            <div className="surface-dark mt-6 grid gap-3 rounded-[1.5rem] p-5 text-[#fff7f0] md:grid-cols-2 lg:grid-cols-4 lg:rounded-[1.8rem]">
              {captions.map((caption) => (
                <div key={caption} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#baf24a]" />
                <p className="text-sm leading-6 text-white/72">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
