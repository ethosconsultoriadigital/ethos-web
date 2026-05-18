import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { navigation } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-ethos-navy-light px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo variant="footer" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ethos-muted">
            Consultoría y estrategia digital para instituciones que exigen
            precisión, discreción y respuesta en tiempo crítico.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-ethos-white uppercase">
            Navegación
          </p>
          <ul className="mt-4 space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ethos-muted transition-colors hover:text-ethos-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-ethos-white uppercase">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ethos-muted">
            <li>Guadalajara, Jalisco, México</li>
            <li>
              <Link
                href="/contacto"
                className="transition-colors hover:text-ethos-gold"
              >
                Formulario de contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-border/40 pt-8 text-xs text-ethos-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <p className="text-ethos-muted/80">
          Estrategia digital · Reputación institucional
        </p>
      </div>
    </footer>
  );
}
