import Link from "next/link";

import { PortfolioEmptyState } from "@/components/portfolio/portfolio-empty-state";
import { PortfolioWorkCard } from "@/components/portfolio/portfolio-work-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { getFeaturedPortfolioWorks, portfolioWorks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
  const featuredWorks = getFeaturedPortfolioWorks(3);
  const hasWorks = portfolioWorks.length > 0;

  return (
    <Section id="trabajos" className="bg-ethos-navy-light/20">
      <SectionHeading
        eyebrow="Experiencia"
        title="Trabajos que respaldan nuestra trayectoria"
        description="Proyectos y casos que iremos documentando conforme avance nuestra operación, con el mismo criterio de precisión y discreción que aplicamos en cada encargo."
      />

      {hasWorks ? (
        <div className="grid gap-5 md:grid-cols-2">
          {featuredWorks.map((work, index) => (
            <FadeIn key={work.slug} delay={index * 0.07}>
              <PortfolioWorkCard work={work} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <FadeIn>
          <PortfolioEmptyState compact />
        </FadeIn>
      )}

      <FadeIn className="mt-12 text-center">
        <Link href="/trabajos" className={cn(buttonVariants({ variant: "outline" }))}>
          {hasWorks ? "Ver todos los trabajos" : "Conocer la sección de trabajos"}
        </Link>
      </FadeIn>
    </Section>
  );
}
