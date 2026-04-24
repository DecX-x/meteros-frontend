const usageBars = [42, 58, 51, 76, 63, 88, 70];

const feedItems = [
  { tool: "Funding received", amount: "Confirmed" },
  { tool: "Action generated", amount: "Pending" },
  { tool: "Provider payout", amount: "Confirmed" },
];

export function HeroUsagePanel() {
  return (
    <div className="mt-5 grid gap-3 xl:grid-cols-[1.08fr_0.92fr]">
      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/45">
              Live treasury curve
            </p>
            <p className="mt-2 font-display text-[1.05rem] font-semibold tracking-[-0.03em] text-[#fff7f0] sm:text-[1.15rem]">
              Paid action volume tracks wallet activity
            </p>
          </div>

            <div className="rounded-full bg-[#d4ec8d] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#172012]">
             New event
            </div>
          </div>

        <div className="mt-5 flex h-24 items-end gap-2 rounded-[1.1rem] border border-white/7 bg-[#11141d] px-3 pb-3 pt-4 sm:h-28 sm:gap-3 sm:rounded-[1.2rem]">
          {usageBars.map((height, index) => (
            <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
              <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-full bg-white/6">
                 <div className="w-full rounded-full bg-[linear-gradient(180deg,rgba(201,233,122,0.95),rgba(148,116,216,0.7))]" style={{ height: `${height}%` }} />
              </div>
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/35">
                D{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:rounded-[1.5rem]">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/45">
          Live onchain activity
        </p>

        <div className="mt-4 space-y-3">
          {feedItems.map((item) => (
            <div key={item.tool} className="flex items-center justify-between gap-3 rounded-[1rem] border border-white/8 bg-[#11141d] px-3 py-3 sm:rounded-[1.2rem]">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e89d6b]" />
                <div>
                  <p className="text-sm font-semibold text-[#fff7f0]">{item.tool}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-white/35">
                     optimistic refresh fallback ready
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-white/8 px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-white/64">
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
