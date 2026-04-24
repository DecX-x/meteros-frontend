import { ButtonLink } from "@/components/landing/ButtonLink";

export function FooterCta() {
  return (
    <section
      id="launch"
      className="surface-card overflow-hidden rounded-[2rem] px-5 py-6 sm:rounded-[2.2rem] sm:px-8 sm:py-8 lg:rounded-[2.3rem] lg:py-10"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(19rem,0.9fr)] lg:items-end">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
            Start now
          </p>
          <h2 className="mt-4 max-w-[11ch] font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#121521]">
            Start with a connected wallet and launch your first Solana-native agent treasury flow.
          </h2>
          <p className="mt-5 max-w-[42rem] text-base leading-7 text-black/62">
            Plug treasury, policy, Actions, Blinks, and settlement into one product surface so wallet interactions feel native from the first click.
          </p>
        </div>

        <div className="surface-card-strong rounded-[1.4rem] p-4 sm:rounded-[1.8rem] sm:p-5">
          <div className="flex flex-wrap gap-2">
            <span className="pill-muted rounded-full px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
              Wallet auth
            </span>
            <span className="pill-muted rounded-full px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
              Solana Actions
            </span>
            <span className="pill-muted rounded-full px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
              Blink links
            </span>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/app" className="min-w-40 flex-1">
              Launch App
            </ButtonLink>
            <ButtonLink href="/docs" variant="secondary" className="min-w-40 flex-1">
              Read Docs
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
