import Image from "next/image";

import {
  siteImageAlt,
  siteImages,
  type SiteImageKey,
} from "@/lib/site-images";
import { cn } from "@/lib/utils";

type SectionImageProps = {
  imageKey: SiteImageKey;
  alt?: string;
  priority?: boolean;
  className?: string;
  frameClassName?: string;
  aspectClassName?: string;
  sizes?: string;
};

export function SectionImage({
  imageKey,
  alt,
  priority = false,
  className,
  frameClassName,
  aspectClassName = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, 400px",
}: SectionImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-ethos-gold/25 ring-1 ring-ethos-gold/15",
        frameClassName
      )}
    >
      <div className={cn("relative w-full", aspectClassName, className)}>
        <Image
          src={siteImages[imageKey]}
          alt={alt ?? siteImageAlt[imageKey]}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-ethos-navy/55"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-ethos-navy/85 via-ethos-navy/25 to-ethos-navy/10"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(201,169,110,0.15),transparent_50%)]"
        />
      </div>
    </div>
  );
}
