import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "header" | "footer";
  linked?: boolean;
  className?: string;
  priority?: boolean;
};

const variantStyles = {
  header: "h-9 w-auto sm:h-10",
  footer: "h-14 w-auto",
} as const;

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
      width={320}
      height={320}
      priority={priority}
      sizes={variant === "header" ? "160px" : "180px"}
      className={cn(
        "object-contain object-left",
        variantStyles[variant],
        className
      )}
    />
  );

  if (!linked) {
    return image;
  }

  return (
    <Link href="/" className="inline-flex shrink-0 transition-opacity hover:opacity-90">
      {image}
    </Link>
  );
}
