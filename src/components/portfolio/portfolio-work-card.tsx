import { SectionImage } from "@/components/brand/section-image";
import { Badge } from "@/components/ui/badge";
import type { PortfolioWork } from "@/lib/content";
import { cn } from "@/lib/utils";

type PortfolioWorkCardProps = {
  work: PortfolioWork;
  className?: string;
};

export function PortfolioWorkCard({ work, className }: PortfolioWorkCardProps) {
  return (
    <article
      className={cn(
        "grid overflow-hidden rounded-xl border border-border/60 bg-card/40 md:grid-cols-[minmax(160px,220px)_1fr]",
        className
      )}
    >
      {work.visual ? (
        <SectionImage
          imageKey={work.visual}
          alt={work.title}
          aspectClassName="aspect-square min-h-[160px] h-full"
          frameClassName="h-full rounded-none rounded-t-xl border-0 border-b border-border/60 ring-0 md:rounded-l-xl md:rounded-tr-none md:border-b-0 md:border-r"
          sizes="220px"
        />
      ) : (
        <div
          aria-hidden
          className="flex min-h-[160px] flex-col justify-between border-b border-border/60 bg-ethos-navy-light/60 p-6 md:border-r md:border-b-0"
        >
          <span className="text-xs font-medium tracking-[0.2em] text-ethos-gold uppercase">
            {work.year}
          </span>
          <span className="text-sm text-ethos-muted">{work.client}</span>
        </div>
      )}

      <div className="relative p-6 md:p-8">
        <div
          aria-hidden
          className="absolute top-0 left-0 hidden h-px w-24 bg-linear-to-r from-ethos-gold to-transparent md:block"
        />
        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className="border-ethos-gold/30 text-ethos-gold"
          >
            {work.year}
          </Badge>
          <span className="text-xs text-ethos-muted">{work.client}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-ethos-white">
          {work.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ethos-muted md:text-base">
          {work.summary}
        </p>
        {work.services.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {work.services.map((service) => (
              <li key={service}>
                <Badge variant="secondary" className="bg-ethos-navy-light/80">
                  {service}
                </Badge>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
