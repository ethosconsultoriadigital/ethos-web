import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ServicesSection } from "@/components/sections/services-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";
import { WhyEthosSection } from "@/components/sections/why-ethos-section";
import { SITE_URL } from "@/lib/site";

function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ETHOS | Consultoría y Estrategia Digital",
    url: SITE_URL,
    logo: `${SITE_URL}/Logo_ethos.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guadalajara",
      addressRegion: "Jalisco",
      addressCountry: "MX",
    },
    areaServed: {
      "@type": "Country",
      name: "México",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
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
