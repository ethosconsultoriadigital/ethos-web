import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { valuePropositions } from "@/lib/content";

export function ValuePropositionSection() {
  return (
    <Section id="propuesta" className="bg-ethos-navy-light/40">
      <SectionHeading
        eyebrow="Propuesta de valor"
        title="Estrategia digital con estándar institucional"
        description="No somos una agencia creativa. Somos una firma de consultoría que opera con la precisión que sus stakeholders esperan."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {valuePropositions.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.08}>
            <article className="h-full rounded-xl border border-border/60 bg-ethos-navy/50 p-6 transition-colors hover:border-ethos-gold/30">
              <span className="text-xs font-medium tracking-[0.25em] text-ethos-gold">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ethos-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ethos-muted">
                {item.description}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
