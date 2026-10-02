import Link from "next/link";

import { ServiceCard } from "@/components/services/service-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { getFeaturedHomeServices } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const featured = getFeaturedHomeServices();

  return (
    <Section id="servicios">
      <SectionHeading
        eyebrow="Servicios"
        title="Servicios de estrategia, comunicación y reputación"
        description="Diez servicios para proteger su reputación, decidir con datos y digitalizar su operación."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service, index) => (
          <FadeIn key={service.slug} delay={index * 0.05}>
            <ServiceCard service={service} />
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12 text-center">
        <Link href="/servicios" className={cn(buttonVariants({ variant: "outline" }))}>
          Explorar todos los servicios
        </Link>
      </FadeIn>
    </Section>
  );
}
