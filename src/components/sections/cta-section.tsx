import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <Section id="contacto" className="pb-28">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl border border-ethos-gold/25 bg-linear-to-br from-ethos-navy-light to-ethos-navy px-8 py-14 text-center md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,169,110,0.15),transparent_50%)]"
          />
          <div className="relative">
            <p className="text-sm font-medium tracking-[0.3em] text-ethos-gold uppercase">
              Consulta confidencial
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-ethos-white md:text-4xl">
              Cuando la reputación está en juego, la estrategia no puede
              esperar
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ethos-muted">
              Conversemos de forma discreta sobre su contexto, riesgos y
              objetivos. Respuesta en menos de 24 horas hábiles.
            </p>
            <Link
              href="/contacto"
              className={cn(buttonVariants({ size: "lg" }), "mt-8")}
            >
              Iniciar conversación
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
