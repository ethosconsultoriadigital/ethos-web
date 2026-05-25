"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { navigation } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteMobileNav() {
  const [open, setOpen] = useState(false);

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

      {open ? (
        <div
          className="fixed inset-0 top-20 z-40 bg-ethos-navy/98 px-6 py-8 sm:top-24 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg text-ethos-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className={cn(buttonVariants(), "mt-4 w-full")}
              onClick={() => setOpen(false)}
            >
              Agendar consulta
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
