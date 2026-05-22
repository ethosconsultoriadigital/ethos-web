import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoVariant = "header" | "footer";

type LogoProps = {
  variant?: LogoVariant;
  linked?: boolean;
  className?: string;
  priority?: boolean;
};

const variantStyles: Record<LogoVariant, string> = {
  header: "h-10 w-auto sm:h-12 md:h-14",
  footer: "h-14 w-auto sm:h-16",
};

const variantSizes: Record<LogoVariant, string> = {
  header: "(max-width: 640px) 160px, 220px",
  footer: "280px",
};

export function Logo({
  variant = "header",
  linked = true,
  className,
  priority = false,
}: LogoProps) {
  const image = (
    <Image
      src={siteConfig.logo}
      alt={siteConfig.logoAlt}
      width={400}
      height={160}
      priority={priority || variant === "header"}
      sizes={variantSizes[variant]}
      className={cn(
        "object-contain",
        variant === "header" ? "object-left" : "object-center",
        variantStyles[variant],
        className
      )}
    />
  );

  if (!linked) {
    return image;
  }

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 transition-opacity hover:opacity-90"
    >
      {image}
    </Link>
  );
}
