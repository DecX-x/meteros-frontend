import { SectionHeading } from "@/components/landing/SectionHeading";
import { Reveal } from "@/components/landing/Reveal";

const problems = [
  "Wallet UX must feel native, not bolted onto a SaaS control plane",
  "Paid tools need shareable transaction flows, not hidden backend-only endpoints",
  "Provider monetization must expose payout wallets and settlement proof",
  "Realtime activity needs to feel alive even before deep infra is wired in",
];

export function ProblemSection() {
  return (
    <section
      id="why-this-matters"
      className="surface-dark overflow-hidden rounded-[2rem] px-5 py-6 sm:rounded-[2.2rem] sm:px-8 sm:py-8 lg:rounded-[2.3rem] lg:py-10"
    >
      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:items-start">
        <div>
          <SectionHeading
            eyebrow="Why this matters"
            title="Solana-native agent products need wallet UX, payment UX, and control UX to show up in the same surface."
            description="The strongest Frontier submissions will not hide blockchain in the backend. They make wallets, Actions, Blinks, treasury controls, and realtime state legible in the product itself."
            tone="dark"
          />

          <div className="mt-6 hidden rounded-[1.5rem] border border-white/10 bg-white/6 p-4 text-sm text-white/66 xl:block">
            MeterOS now frames Actions and Blinks as product primitives, so treasury control, monetization, and runtime visibility read as one system.
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <Reveal key={problem} delay={index * 70}>
                <article className={["rounded-[1.3rem] border border-white/10 bg-white/6 p-5 sm:rounded-[1.5rem] lg:rounded-[1.6rem]", index === 0 ? "sm:col-span-2" : ""].join(" ")}>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                    Risk 0{index + 1}
                  </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#e89d6b]" />
                </div>
                <p
                  className={[
                    "mt-5 font-display tracking-[-0.035em] text-[#fff7f0]",
                     index === 0 ? "max-w-[18ch] text-[1.45rem] leading-[1.05]" : "text-[1.18rem] leading-[1.12]",
                   ].join(" ")}
                 >
                  {problem}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
