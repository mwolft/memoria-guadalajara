"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import { whatsappHref } from "@/lib/contact";

const desktopLinks = [
  { href: "#process", label: "Cómo funciona" },
  { href: "#tarifas", label: "Tarifas" },
  { href: "#about", label: "Quién te acompaña" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

const mobileLinks = [
  { href: "#process", label: "Cómo son las sesiones" },
  { href: "#tarifas", label: "Tarifas" },
  { href: "#about", label: "Quién te acompaña" },
  { href: "#zona", label: "Zona de atención" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

const hamburgerLineClasses =
  "absolute left-0 h-[1.5px] w-5 rounded-full bg-stone-600 transition-all duration-300 ease-out";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const touchStartY = useRef<number | null>(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartY.current = event.changedTouches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startY = touchStartY.current;
    touchStartY.current = null;

    if (startY === null) {
      return;
    }

    const endY = event.changedTouches[0]?.clientY;

    if (typeof endY === "number" && startY - endY > 60) {
      closeMenu();
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#fffdfa]/90 backdrop-blur">
      <nav
        ref={navRef}
        aria-label="Navegación principal"
        className="mx-auto max-w-6xl px-6 py-1.5 sm:px-8 lg:px-10"
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
              className="w-[216px] object-contain sm:w-[254px]"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200/80 bg-white text-stone-700 shadow-sm transition-colors hover:bg-stone-50 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-700 md:hidden"
          >
            <span className="relative h-5 w-5" aria-hidden="true">
              <span
                className={`${hamburgerLineClasses} top-[3px] ${
                  isOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`${hamburgerLineClasses} top-[9px] ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`${hamburgerLineClasses} top-[15px] ${
                  isOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity,transform] duration-300 ease-out md:hidden ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 translate-y-0"
              : "grid-rows-[0fr] -translate-y-2 opacity-0"
          }`}
        >
          <div
            id="mobile-menu"
            aria-hidden={!isOpen}
            className={`grid min-h-0 overflow-hidden ${
              isOpen
                ? "mt-4 gap-2 border-t border-stone-200/70 pt-4"
                : "mt-0 gap-0 border-t-0 pt-0 pointer-events-none"
            }`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {mobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                tabIndex={isOpen ? undefined : -1}
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
              tabIndex={isOpen ? undefined : -1}
              className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-stone-900 px-5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
