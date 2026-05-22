import Link from "next/link";

import { PortfolioEmptyState } from "@/components/portfolio/portfolio-empty-state";
import { PortfolioWorkCard } from "@/components/portfolio/portfolio-work-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { portfolioWorks } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Trabajos",
  description:
    "Experiencia y proyectos de ETHOS en reputación digital, estrategia institucional y consultoría para gobiernos, campañas e instituciones en México.",
};

export default function TrabajosPage() {
  const hasWorks = portfolioWorks.length > 0;

  return (
    <Section className="pt-12">
      <SectionHeading
        eyebrow="Experiencia"
        title="Trabajos y proyectos"
        description="Un registro selectivo de encargos recientes. Cada caso se publica con criterio de confidencialidad y relevancia estratégica."
      />

      {hasWorks ? (
        <div className="grid gap-5 md:grid-cols-2">
          {portfolioWorks.map((work, index) => (
            <FadeIn key={work.slug} delay={index * 0.05}>
              <PortfolioWorkCard work={work} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <FadeIn>
          <PortfolioEmptyState />
        </FadeIn>
      )}

      <FadeIn className="mt-12">
        <Link href="/contacto" className={cn(buttonVariants({ size: "lg" }))}>
          Solicitar consulta
        </Link>
      </FadeIn>
    </Section>
  );
}
