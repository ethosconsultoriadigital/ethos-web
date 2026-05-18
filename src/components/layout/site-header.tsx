import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { SiteMobileNav } from "@/components/layout/site-mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { navigation } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-ethos-navy/90 px-6 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Logo variant="header" priority />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Principal"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ethos-muted transition-colors hover:text-ethos-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden sm:inline-flex"
            )}
          >
            Agendar consulta
          </Link>
          <SiteMobileNav />
        </div>
      </div>
    </header>
  );
}
