import Link from "next/link";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Servicios",
  description:
    "Servicios de ETHOS: reputación digital, crisis institucional, social listening, automatización y ciberseguridad.",
};

export default function ServiciosPage() {
  return (
    <Section className="pt-12">
      <SectionHeading
        eyebrow="Servicios"
        title="Capacidades estratégicas"
        description="Cada servicio se diseña a la medida del contexto institucional, el calendario político y el perfil de riesgo de su organización."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <FadeIn key={service.title} delay={index * 0.05}>
              <article className="rounded-xl border border-border/60 bg-card/40 p-6">
                <Icon className="size-5 text-ethos-gold" aria-hidden />
                <h2 className="mt-4 text-lg font-semibold text-ethos-white">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ethos-muted">
                  {service.description}
                </p>
              </article>
            </FadeIn>
          );
        })}
      </div>
      <FadeIn className="mt-12">
        <Link href="/contacto" className={cn(buttonVariants({ size: "lg" }))}>
          Solicitar propuesta
        </Link>
      </FadeIn>
    </Section>
  );
}
