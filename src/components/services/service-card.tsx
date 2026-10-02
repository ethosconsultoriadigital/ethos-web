import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Service } from "@/lib/services";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card/40 transition-colors hover:border-ethos-gold/35",
        className
      )}
    >
      <div className="relative aspect-[2/1] w-full overflow-hidden border-b border-border/60">
        {service.image ? (
          <>
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-ethos-navy/55" />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-ethos-navy/85 via-ethos-navy/25 to-ethos-navy/10"
            />
          </>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium tracking-[0.2em] text-ethos-gold">
            {service.number}
          </span>
          <Badge
            variant="outline"
            className="border-ethos-gold/30 text-ethos-gold"
          >
            {service.badge}
          </Badge>
        </div>
        <h2 className="mt-4 text-lg font-semibold text-ethos-white">
          {service.name}
        </h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ethos-muted">
          {service.hook}
        </p>
        <Link
          href={`/servicios/${service.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ethos-gold transition-colors hover:text-ethos-gold-light"
        >
          Conocer el servicio
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

type LegacyServiceCardProps = {
  title: string;
  description: string;
  image: string;
  className?: string;
};

/** Tarjeta sin slug (p. ej. ciberseguridad legacy). */
export function LegacyServiceCard({
  title,
  description,
  image,
  className,
}: LegacyServiceCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card/40",
        className
      )}
    >
      <div className="relative aspect-[2/1] w-full overflow-hidden border-b border-border/60">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-ethos-navy/55" />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-ethos-navy/85 via-ethos-navy/25 to-ethos-navy/10"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-lg font-semibold text-ethos-white">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-ethos-muted">
          {description}
        </p>
      </div>
    </article>
  );
}
