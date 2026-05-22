import { cn } from "@/lib/utils";

type VisualFrameProps = {
  children: React.ReactNode;
  className?: string;
  aspectClassName?: string;
};

export function VisualFrame({
  children,
  className,
  aspectClassName = "aspect-[4/3]",
}: VisualFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-ethos-gold/25 bg-ethos-navy-light/90 ring-1 ring-ethos-gold/15",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,169,110,0.12),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(248,250,252,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,250,252,0.04)_1px,transparent_1px)] bg-size-[1.5rem_1.5rem]"
      />
      <div
        className={cn(
          "relative flex items-center justify-center p-6 sm:p-8",
          aspectClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
