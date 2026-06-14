import { whatsappHref } from "@/lib/contact";

export function CTA() {
  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24">
      <div className="rounded-3xl border border-stone-800 bg-stone-900 px-6 py-12 text-center text-white shadow-[0_24px_70px_rgba(28,25,23,0.18)] sm:px-10 sm:py-14 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
            Cuéntanos tu caso
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-200">
            Puedes escribir por WhatsApp y explicarnos brevemente la situación.
            Te orientaremos sin compromiso.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-stone-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-stone-100 hover:shadow-[0_14px_34px_rgba(255,255,255,0.18)] active:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
