"use client";

import { buttonVariants } from "@/components/ui/button";
import { trackMetaEvent } from "@/lib/meta-pixel";
import { cn } from "@/lib/utils";

type WhatsAppCtaLinkProps = {
  href: string;
};

export function WhatsAppCtaLink({ href }: WhatsAppCtaLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
      onClick={() => {
        trackMetaEvent("Contact");
      }}
    >
      Escribir por WhatsApp
    </a>
  );
}
