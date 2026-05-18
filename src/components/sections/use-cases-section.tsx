import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { useCases } from "@/lib/content";

export function UseCasesSection() {
  return (
    <Section id="casos" className="bg-ethos-navy-light/40">
      <SectionHeading
        eyebrow="Casos de uso"
        title="Diseñado para quienes no pueden fallar en público"
        description="Acompañamos a actores con exposición mediática, responsabilidad institucional y cero margen para la improvisación."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {useCases.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.07}>
            <article className="relative overflow-hidden rounded-xl border border-border/60 p-6 md:p-8">
              <div
                aria-hidden
                className="absolute top-0 left-0 h-px w-24 bg-linear-to-r from-ethos-gold to-transparent"
              />
              <h3 className="text-xl font-semibold text-ethos-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ethos-muted md:text-base">
                {item.description}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
