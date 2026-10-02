import Link from "next/link";

import {
  LegacyServiceCard,
  ServiceCard,
} from "@/components/services/service-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import {
  cybersecurityLegacyCard,
  getServicesByGroup,
  SHOW_CYBERSECURITY,
} from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Servicios",
  description:
    "Diez servicios de estrategia, comunicación, investigación y desarrollo digital para empresas y organizaciones en México. Consulta confidencial.",
  path: "/servicios",
});

export default function ServiciosPage() {
  const continuous = getServicesByGroup("continuo");
  const projects = getServicesByGroup("proyecto");

  return (
    <Section className="pt-12">
      <SectionHeading
        eyebrow="Servicios"
        title="Servicios de estrategia, comunicación y reputación"
        description="Cada servicio se diseña a la medida de los objetivos, el perfil de riesgo y el contexto de su empresa u organización."
      />

      <div className="space-y-16">
        <div>
          <h2 className="mb-6 text-sm font-medium tracking-[0.25em] text-ethos-gold uppercase">
            Servicios continuos
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {continuous.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.05}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-sm font-medium tracking-[0.25em] text-ethos-gold uppercase">
            Servicios por proyecto
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.05}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>

        {SHOW_CYBERSECURITY ? (
          <div>
            <h2 className="mb-6 text-sm font-medium tracking-[0.25em] text-ethos-gold uppercase">
              Complementario
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <FadeIn>
                <LegacyServiceCard
                  title={cybersecurityLegacyCard.title}
                  description={cybersecurityLegacyCard.description}
                  image={cybersecurityLegacyCard.image}
                />
              </FadeIn>
            </div>
          </div>
        ) : null}
      </div>

      <FadeIn className="mt-12">
        <Link href="/contacto" className={cn(buttonVariants({ size: "lg" }))}>
          Solicitar propuesta
        </Link>
      </FadeIn>
    </Section>
  );
}
