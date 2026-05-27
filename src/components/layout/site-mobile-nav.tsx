"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { buttonVariants } from "@/components/ui/button";
import { navigation } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteMobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  const menuPortal =
    open && mounted
      ? createPortal(
          <>
            <button
              type="button"
              className="fixed inset-0 z-[100] bg-ethos-navy/85 backdrop-blur-sm md:hidden"
              aria-label="Cerrar menú"
              onClick={close}
            />
            <div
              className="fixed inset-y-0 right-0 z-[101] flex w-[min(100%,20rem)] flex-col border-l border-border/60 bg-ethos-navy-light shadow-2xl md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
            >
              <div className="flex items-center justify-between border-b border-border/40 px-6 py-4">
                <span className="text-xs font-medium tracking-[0.25em] text-ethos-gold uppercase">
                  Navegación
                </span>
                <button
                  type="button"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-ethos-white transition-colors hover:text-ethos-gold"
                  aria-label="Cerrar menú"
                  onClick={close}
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col px-6 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-border/40 py-4 text-lg font-medium text-ethos-white transition-colors hover:text-ethos-gold"
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contacto"
                  className={cn(buttonVariants(), "mt-8 w-full")}
                  onClick={close}
                >
                  Agendar consulta
                </Link>
              </nav>
            </div>
          </>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-ethos-white md:hidden"
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {menuPortal}
    </>
  );
}
