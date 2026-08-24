"use client";

import Image from "next/image";
import { useState } from "react";
import { whatsappHref } from "@/lib/contact";

const desktopLinks = [
  { href: "#process", label: "Cómo funciona" },
  { href: "#tarifas", label: "Tarifas" },
  { href: "#about", label: "Sobre mí" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

const mobileLinks = [
  { href: "#process", label: "Cómo son las sesiones" },
  { href: "#tarifas", label: "Tarifas" },
  { href: "#about", label: "Sobre mí" },
  { href: "#zona", label: "Zona de atención" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#fffdfa]/90 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="mx-auto max-w-6xl px-6 py-3 sm:px-8 lg:px-10"
      >
        <div className="flex items-center justify-between gap-6">
          <a
            href="#hero"
            aria-label="Memoria Guadalajara"
            className="inline-flex items-center rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-700"
            onClick={closeMenu}
          >
            <Image
              src="/brand/logo.png"
              alt="Memoria Guadalajara"
              width={220}
              height={71}
              priority
              className="w-[150px] object-contain sm:w-[178px]"
            />
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {desktopLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-700 transition-colors hover:text-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full bg-stone-900 px-5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200/80 bg-white text-stone-800 shadow-sm transition-colors hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-700 md:hidden"
          >
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-4 rounded-full bg-current" />
              <span className="h-0.5 w-4 rounded-full bg-current" />
              <span className="h-0.5 w-4 rounded-full bg-current" />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div
            id="mobile-menu"
            className="mt-4 grid gap-2 border-t border-stone-200/70 pt-4 md:hidden"
          >
            {mobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-3 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-stone-900 px-5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Hablar por WhatsApp
            </a>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
