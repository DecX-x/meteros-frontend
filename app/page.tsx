import { ArchitectureSection } from "@/components/landing/ArchitectureSection";
import { FooterCta } from "@/components/landing/FooterCta";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProductStrip } from "@/components/landing/ProductStrip";
import { Reveal } from "@/components/landing/Reveal";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { UseCasesSection } from "@/components/landing/UseCasesSection";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden text-foreground">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-[#d6a8ff]/22 blur-3xl" />
        <div className="absolute right-[-7rem] top-[-2rem] h-[26rem] w-[26rem] rounded-full bg-[#ff9a5a]/18 blur-3xl" />
        <div className="absolute bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#baf24a]/7 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),rgba(255,255,255,0))]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1480px] flex-col gap-5 px-4 pb-16 pt-22 sm:gap-6 sm:px-6 sm:pt-28 lg:gap-7 lg:px-8 xl:px-10 2xl:px-12">
        <SiteHeader />
        <Reveal>
          <HeroSection />
        </Reveal>
        <Reveal delay={40}>
          <ProductStrip />
        </Reveal>
        <Reveal delay={60}>
          <ArchitectureSection />
        </Reveal>
        <Reveal delay={80}>
          <ProblemSection />
        </Reveal>
        <Reveal delay={100}>
          <UseCasesSection />
        </Reveal>
        <Reveal delay={120}>
          <FooterCta />
        </Reveal>
      </div>
    </main>
  );
}
