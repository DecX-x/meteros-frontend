import { ButtonLink } from "@/components/landing/ButtonLink";
import { HeroUsagePanel } from "@/components/landing/HeroUsagePanel";
import { Reveal } from "@/components/landing/Reveal";
import { WalletConnectButton } from "@/components/solana/WalletConnectButton";

const highlights = [
  "Wallet-connected treasury",
  "Shareable Solana Actions",
  "Realtime settlement visibility",
];

const miniStats = [
  { label: "Connected wallets", value: "14" },
  { label: "Action endpoints", value: "8" },
  { label: "Confirmed tx today", value: "182" },
];

const railRows = [
  {
    label: "Operator Wallet",
    detail: "Connect and authorize treasury control",
    value: "Signer ready",
  },
  {
    label: "MeterOS",
    detail: "Generate Actions and route paid calls",
    value: "Action API",
  },
  {
    label: "Agent Wallet",
    detail: "Fund runtime execution and enforce limits",
    value: "12 active",
  },
  {
    label: "Provider Wallet",
    detail: "Settle and inspect payment activity",
    value: "Payout route live",
  },
];

export function HeroSection() {
  return (
    <section className="surface-card relative overflow-hidden rounded-[2rem] px-5 py-6 sm:rounded-[2.2rem] sm:px-8 sm:py-8 lg:rounded-[2.4rem] lg:px-10 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,161,102,0.12),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(157,96,255,0.08),transparent_28%)]" />
      <div className="relative grid gap-6 lg:grid-cols-[minmax(0,0.94fr)_minmax(25rem,1.06fr)] lg:items-center xl:gap-12">
        <Reveal className="max-w-[43rem] lg:self-center">
          <div className="pill-muted inline-flex rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] shadow-[0_8px_18px_rgba(17,20,30,0.04)]">
            Frontier-ready treasury and agent operations on Solana
          </div>

          <h1 className="mt-5 max-w-[9ch] font-display text-[clamp(2.5rem,8vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#121521]">
            Control how onchain agents spend, pay, and settle on Solana
          </h1>

          <p className="mt-5 max-w-[30rem] text-base leading-7 text-black/66 sm:text-lg sm:leading-8">
            Connect a wallet, fund agent wallets, publish paid tools, and execute agent actions through shareable Solana Actions.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href="/app" className="min-w-40 sm:min-w-44">
              Launch App
            </ButtonLink>
            <ButtonLink
              href="/docs#demo-flow"
              variant="secondary"
              className="min-w-40 sm:min-w-44"
            >
              View Demo
            </ButtonLink>
            <WalletConnectButton />
          </div>

          <div className="mt-8 flex max-w-[34rem] flex-wrap gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="pill-muted inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#c9e97a]" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {miniStats.map((stat) => (
              <div key={stat.label} className="surface-card-strong rounded-[1.1rem] px-4 py-3 sm:rounded-[1.25rem]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/48">
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-[1.35rem] font-semibold tracking-[-0.04em] text-[#121521]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative lg:self-center" delay={120}>
          <div className="surface-dark relative overflow-hidden rounded-[1.5rem] p-4 text-[#fff7f0] sm:rounded-[1.75rem] sm:p-5 lg:rounded-[1.9rem] lg:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,146,70,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(158,109,255,0.16),transparent_34%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="eyebrow-label text-white/52">
                    Solana wallet-native operations
                  </p>
                  <p className="mt-3 max-w-[12ch] font-display text-[1.5rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[1.8rem] lg:text-[2rem]">
                    Execute agent treasury flows as Actions and Blinks
                  </p>
                </div>

                <div className="rounded-[1.15rem] border border-white/10 bg-white/7 px-4 py-3 text-right text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:rounded-[1.3rem]">
                  <p className="text-white/55">Pending settlements</p>
                  <p className="mt-1 font-display text-2xl font-semibold tracking-[-0.05em]">
                    6
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {railRows.map((row, index) => (
                  <div
                    key={row.label}
                    className="grid gap-3 rounded-[1.2rem] border border-white/10 bg-white/6 p-4 sm:rounded-[1.35rem] sm:grid-cols-[1fr_auto] sm:items-center"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white/74">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="font-semibold tracking-[-0.02em] text-[#fff7f0]">
                          {row.label}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-white/60">
                          {row.detail}
                        </p>
                      </div>
                    </div>

                     <div className="justify-self-start rounded-full bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/68 sm:justify-self-end">
                       {row.value}
                     </div>
                   </div>
                ))}
              </div>

              <HeroUsagePanel />
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:justify-end">
            <div className="rounded-[1.1rem] border border-black/8 bg-[#fffaf5] px-4 py-3 shadow-[0_10px_20px_rgba(17,20,30,0.06)] sm:rounded-[1.2rem]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/55">
                Action status
              </p>
              <p className="mt-2 font-display text-[1rem] font-semibold tracking-[-0.03em] text-[#121521]">
                Metadata healthy, POST ready for signing
              </p>
            </div>

            <div className="rounded-[1.1rem] border border-black/8 bg-[#d7eb92] px-4 py-3 text-[#182113] shadow-[0_10px_20px_rgba(122,164,39,0.12)] sm:rounded-[1.2rem]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/68">
                Blink shortcut
              </p>
              <p className="mt-2 font-display text-[1rem] font-semibold tracking-[-0.03em]">
                Share action URLs to wallet-aware clients
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
