import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { navigation } from "@/lib/content";
import { catalogServices } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-ethos-navy-light px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr]">
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
            Servicios
          </p>
          <ul className="mt-4 space-y-2">
            {catalogServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="text-sm text-ethos-muted transition-colors hover:text-ethos-white"
                >
                  {service.name}
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
            <li>
              <Link
                href="/aviso-de-privacidad"
                className="transition-colors hover:text-ethos-gold"
              >
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-border/40 pt-8 text-xs text-ethos-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <Link
            href="/aviso-de-privacidad"
            className="transition-colors hover:text-ethos-gold"
          >
            Aviso de privacidad
          </Link>
          <p className="text-ethos-muted/80">
            Estrategia · Comunicación · Reputación
          </p>
        </div>
      </div>
    </footer>
  );
}
