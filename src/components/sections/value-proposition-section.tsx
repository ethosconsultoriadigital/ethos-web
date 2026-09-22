import { SectionImage } from "@/components/brand/section-image";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { valuePropositions } from "@/lib/content";

export function ValuePropositionSection() {
  return (
    <Section id="propuesta" className="bg-ethos-navy-light/40">
      <SectionHeading
        eyebrow="Propuesta de valor"
        title="Información digital para decisiones oportunas"
        description="Combinamos tecnología, monitoreo y análisis profesional para ayudar a empresas y organizaciones a entender su presencia en medios y entornos digitales."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {valuePropositions.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.08}>
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-ethos-navy/50 transition-colors hover:border-ethos-gold/30">
              <SectionImage
                imageKey={item.visual}
                alt={item.title}
                aspectClassName="aspect-[5/3]"
                frameClassName="rounded-none rounded-t-xl border-0 border-b border-border/60 ring-0"
                sizes="(max-width: 768px) 100vw, 360px"
              />
              <div className="p-6">
                <span className="text-xs font-medium tracking-[0.25em] text-ethos-gold">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ethos-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ethos-muted">
                  {item.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
