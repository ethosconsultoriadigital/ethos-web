import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ServicesSection } from "@/components/sections/services-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";
import { WhyEthosSection } from "@/components/sections/why-ethos-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuePropositionSection />
      <ServicesSection />
      <UseCasesSection />
      <PortfolioSection />
      <WhyEthosSection />
      <CtaSection />
    </>
  );
}
