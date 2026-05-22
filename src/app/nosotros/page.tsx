import Link from "next/link";

import { SectionImage } from "@/components/brand/section-image";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { whyEthos } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Nosotros",
  description:
    "Filosofía y enfoque de ETHOS: credibilidad institucional, discreción y estrategia digital desde Guadalajara, México.",
};

export default function NosotrosPage() {
  return (
    <Section className="pt-12">
      <SectionHeading
        eyebrow="Nosotros"
        title="Filosofía de firma"
        description="ETHOS nace del principio aristotélico de la credibilidad: sin ethos, no hay persuasión legítima ni liderazgo institucional sostenible."
      />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="max-w-3xl space-y-8">
        <FadeIn>
          <p className="text-lg leading-relaxed text-ethos-muted">
            Somos una firma de consultoría y estrategia digital con sede en
            Guadalajara. Acompañamos a gobiernos entrantes, campañas políticas,
            instituciones y figuras de alto perfil que requieren precisión,
            confidencialidad y respuesta en escenarios de alta exposición.
          </p>
        </FadeIn>
        {whyEthos.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.08}>
            <article>
              <h2 className="text-xl font-semibold text-ethos-white">
                {item.title}
              </h2>
              <p className="mt-2 leading-relaxed text-ethos-muted">
                {item.description}
              </p>
            </article>
          </FadeIn>
        ))}
        </div>
        <FadeIn delay={0.05}>
          <SectionImage
            imageKey="credibility"
            aspectClassName="aspect-[4/3] sticky top-28"
            sizes="420px"
          />
        </FadeIn>
      </div>
      <FadeIn className="mt-12">
        <Link href="/contacto" className={cn(buttonVariants({ size: "lg" }))}>
          Conocer cómo trabajamos
        </Link>
      </FadeIn>
    </Section>
  );
}
