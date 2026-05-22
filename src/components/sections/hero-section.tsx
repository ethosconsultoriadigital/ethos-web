import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionImage } from "@/components/brand/section-image";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,169,110,0.14),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(248,250,252,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,250,252,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <FadeIn>
            <p className="text-sm font-medium tracking-[0.35em] text-ethos-gold uppercase">
              Consultoría y estrategia digital
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-ethos-white sm:text-5xl md:text-6xl md:leading-[1.1]">
              La credibilidad institucional se{" "}
              <span className="text-ethos-gold">construye</span> antes de la
              crisis
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ethos-muted md:text-xl">
              Protección de reputación, colocación táctica de contenido y
              contención de crisis para gobiernos, campañas e instituciones que
              no pueden permitirse improvisar.
            </p>
          </FadeIn>

          <FadeIn delay={0.24} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contacto" className={cn(buttonVariants({ size: "lg" }))}>
              Agendar consulta confidencial
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/servicios"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Ver servicios
            </Link>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="order-first lg:order-last">
          <SectionImage
            imageKey="hero"
            priority
            aspectClassName="aspect-[4/3] min-h-[240px] lg:min-h-[320px]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        </FadeIn>

        <FadeIn delay={0.32} className="lg:col-span-2">
          <dl className="grid gap-8 border-t border-border/50 pt-10 sm:grid-cols-3">
            {[
              { label: "Enfoque", value: "Institucional" },
              { label: "Operación", value: "México" },
              { label: "Respuesta", value: "Tiempo crítico" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-xs tracking-[0.2em] text-ethos-muted uppercase">
                  {item.label}
                </dt>
                <dd className="mt-2 text-lg font-medium text-ethos-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
