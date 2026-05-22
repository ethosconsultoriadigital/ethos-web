import { Card, CardContent } from "@/components/ui/card";

type PortfolioEmptyStateProps = {
  compact?: boolean;
};

export function PortfolioEmptyState({ compact = false }: PortfolioEmptyStateProps) {
  return (
    <Card className="border-border/60 bg-card/40 py-0">
      <CardContent className={compact ? "px-6 py-8" : "px-8 py-12"}>
        <p className="text-xs font-medium tracking-[0.25em] text-ethos-gold uppercase">
          Próximamente
        </p>
        <h3 className="mt-3 text-xl font-semibold text-ethos-white">
          Documentando nuestra experiencia
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ethos-muted md:text-base">
          Estamos preparando una selección de proyectos y casos recientes. Esta
          sección se irá actualizando conforme avance nuestra operación, con
          enfoque en discreción y relevancia institucional.
        </p>
      </CardContent>
    </Card>
  );
}
