import { InfoCard } from "@/components/landing/InfoCard";
import { Reveal } from "@/components/landing/Reveal";

const cards = [
  {
    eyebrow: "Wallet-connected treasury",
    title: "Fund and manage agent execution wallets from one control plane.",
    description:
      "Keep treasury visibility, signer state, and top-up flows visible before agents run into funding gaps.",
    accent: "bg-[#ff8c46]",
    footer: ["Treasury balance", "Wallet state", "Funding routes"],
  },
  {
    eyebrow: "Agent wallets",
    title: "Attribute spend to individual agents and workflows.",
    description:
      "Treat each agent like an onchain actor with a dedicated wallet, policy envelope, and visible runtime balance.",
    accent: "bg-[#9c63ff]",
    footer: ["Wallet identity", "Daily limits", "Runtime balance"],
  },
  {
    eyebrow: "Actions and Blinks",
    title: "Turn key treasury and payout flows into shareable transaction interfaces.",
    description:
      "Expose GET metadata, POST transaction builders, and Blink links as a visible product feature instead of hidden backend plumbing.",
    accent: "bg-[#baf24a]",
    footer: ["Action URLs", "Blink links", "Inspector-ready"],
  },
  {
    eyebrow: "Realtime settlement visibility",
    title: "Track usage and onchain payment activity as it happens.",
    description:
      "Give teams a live feed for funding, approvals, payouts, and policy blocks with pending and confirmed state made obvious.",
    accent: "bg-[#141722]",
    footer: ["Live feed", "Status chips", "Polling fallback"],
  },
];

export function ProductStrip() {
  return (
    <section id="product" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:items-start">
      {cards.map((card, index) => (
        <Reveal key={card.eyebrow} delay={index * 70}>
          <InfoCard
            eyebrow={card.eyebrow}
            title={card.title}
            description={card.description}
            accent={card.accent}
            className=""
            footer={
              <div className="flex flex-wrap gap-2">
                {card.footer.map((item) => (
                  <span
                    key={item}
                    className="pill-muted rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            }
          />
        </Reveal>
      ))}
    </section>
  );
}
