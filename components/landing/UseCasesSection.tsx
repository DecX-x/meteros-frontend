import { InfoCard } from "@/components/landing/InfoCard";
import { Reveal } from "@/components/landing/Reveal";
import { SectionHeading } from "@/components/landing/SectionHeading";

const useCases = [
  {
    title: "Agents + Tokenization",
    description: "Fund agent wallets, attribute execution spend, and expose agent-specific treasury controls.",
    accent: "bg-[#ff8c46]",
  },
  {
    title: "Blinks + Actions",
    description: "Turn funding, pausing, and payout approval into shareable Solana transaction interfaces.",
    accent: "bg-[#9c63ff]",
  },
  {
    title: "Payments + Commerce",
    description: "Make provider pricing, buyer wallets, seller wallets, and settlement outcomes visibly first-class.",
    accent: "bg-[#baf24a]",
  },
  {
    title: "Treasury + Security",
    description: "Combine policy controls, low-balance thresholds, and signer-driven Actions in one operating surface.",
    accent: "bg-[#141722]",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="surface-card rounded-[2rem] px-5 py-6 sm:rounded-[2.2rem] sm:px-8 sm:py-8 lg:rounded-[2.3rem] lg:py-10">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:items-start">
        <div className="xl:pr-6">
          <SectionHeading
            eyebrow="Built for Frontier"
            title="Four build paths the product can demonstrate without changing the core control plane."
            description="The prototype now maps directly to Frontier build paths so the product thesis reads clearly in the first pass." 
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2 xl:pt-3">
          {useCases.map((useCase, index) => (
            <Reveal key={useCase.title} delay={index * 70}>
              <InfoCard
                title={useCase.title}
                description={useCase.description}
                accent={useCase.accent}
                 className="bg-[#fffaf6]"
               />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
