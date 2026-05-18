import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <Section id="servicios">
      <SectionHeading
        eyebrow="Servicios"
        title="Capacidades estratégicas de alto impacto"
        description="Soluciones integradas para proteger, posicionar y responder con control en el ecosistema digital."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <FadeIn key={service.title} delay={index * 0.05}>
              <article className="group flex h-full flex-col rounded-xl border border-border/60 bg-card/40 p-6 transition-colors hover:border-ethos-gold/35">
                <span className="inline-flex size-10 items-center justify-center rounded-lg border border-ethos-gold/30 bg-ethos-gold/10 text-ethos-gold transition-colors group-hover:border-ethos-gold/60">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-base font-semibold text-ethos-white">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ethos-muted">
                  {service.description}
                </p>
              </article>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn className="mt-12 text-center">
        <Link href="/servicios" className={cn(buttonVariants({ variant: "outline" }))}>
          Explorar todos los servicios
        </Link>
      </FadeIn>
    </Section>
  );
}
