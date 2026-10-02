import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ServiceCard } from "@/components/services/service-card";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  catalogServices,
  getRelatedServices,
  getServiceBySlug,
} from "@/lib/services";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const WORK_STEPS = [
  {
    title: "Consulta confidencial",
    description: "Entendemos su contexto, riesgos y objetivos.",
  },
  {
    title: "Propuesta a la medida",
    description: "Alcance, entregables y tiempos definidos.",
  },
  {
    title: "Arranque o entrega",
    description: "Operación continua o proyecto con fecha cerrada.",
  },
] as const;

export function generateStaticParams() {
  return catalogServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const path = `/servicios/${service.slug}`;

  return {
    title: { absolute: service.seoTitle },
    description: service.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: path,
      locale: "es_MX",
      type: "website",
      siteName: "ETHOS",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
    },
  };
}

function JsonLd({
  service,
}: {
  service: NonNullable<ReturnType<typeof getServiceBySlug>>;
}) {
  const serviceUrl = `${SITE_URL}/servicios/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.seoDescription,
    serviceType: service.name,
    areaServed: { "@type": "Country", name: "México" },
    provider: {
      "@type": "ProfessionalService",
      name: "ETHOS | Consultoría y Estrategia Digital",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Guadalajara",
        addressRegion: "Jalisco",
        addressCountry: "MX",
      },
    },
    url: serviceUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service, 3);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
    /\D/g,
    ""
  );
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappText)}`
    : null;
  const contactHref = `/contacto?servicio=${service.slug}`;

  return (
    <>
      <JsonLd service={service} />

      <section className="relative overflow-hidden border-b border-border/40 px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeIn>
            <Badge
              variant="outline"
              className="border-ethos-gold/30 text-ethos-gold"
            >
              {service.badge}
            </Badge>
            <p className="mt-4 text-xs font-medium tracking-[0.25em] text-ethos-muted uppercase">
              Servicio {service.number}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ethos-white md:text-5xl md:leading-[1.1]">
              {service.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ethos-muted">
              {service.hook}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={contactHref}
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Solicitar propuesta
              </Link>
              {whatsappHref ? (
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
                >
                  Escribir por WhatsApp
                </Link>
              ) : null}
            </div>
          </FadeIn>

          {service.image ? (
            <FadeIn delay={0.08}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-ethos-navy/45" />
              </div>
            </FadeIn>
          ) : null}
        </div>
      </section>

      <Section className="pt-16 md:pt-20">
        <div className="mx-auto max-w-3xl space-y-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-ethos-white">El reto</h2>
            <p className="mt-4 text-base leading-relaxed text-ethos-muted md:text-lg">
              {service.problem}
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-semibold text-ethos-white">
              Qué recibe
            </h2>
            <ol className="mt-6 space-y-5">
              {service.benefits.map((benefit, index) => (
                <li key={benefit} className="flex gap-4">
                  <span className="shrink-0 text-sm font-medium tracking-[0.15em] text-ethos-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-ethos-muted">
                    {benefit}
                  </p>
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="text-2xl font-semibold text-ethos-white">
              Cómo trabajamos
            </h2>
            <ol className="mt-6 space-y-6">
              {WORK_STEPS.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-xl border border-border/50 bg-card/30 p-5"
                >
                  <p className="text-xs font-medium tracking-[0.2em] text-ethos-gold uppercase">
                    Paso {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-ethos-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ethos-muted md:text-base">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-semibold text-ethos-white">
              Para quién
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ethos-muted md:text-lg">
              {service.audience}
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <h2 className="text-2xl font-semibold text-ethos-white">
              Preguntas frecuentes
            </h2>
            <div className="mt-6 space-y-3">
              {service.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-border/50 bg-card/30 px-5 py-4"
                >
                  <summary className="cursor-pointer list-none text-base font-medium text-ethos-white marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {faq.q}
                      <span
                        aria-hidden
                        className="shrink-0 text-ethos-gold transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ethos-muted md:text-base">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-ethos-navy-light/30 py-16 md:py-20">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-ethos-white md:text-3xl">
            Conversemos de forma confidencial sobre su caso.
          </h2>
          <Link
            href={contactHref}
            className={cn(buttonVariants({ size: "lg" }), "mt-8")}
          >
            Solicitar propuesta
          </Link>
        </FadeIn>
      </Section>

      {related.length > 0 ? (
        <Section className="pt-16 md:pt-20">
          <FadeIn>
            <h2 className="mb-8 text-2xl font-semibold text-ethos-white">
              Otros servicios
            </h2>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <FadeIn key={item.slug} delay={index * 0.05}>
                <ServiceCard service={item} />
              </FadeIn>
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
