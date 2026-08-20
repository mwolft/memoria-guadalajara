import { createWhatsappHref } from "@/lib/contact";

const pricingOptions = [
  {
    name: "Sesión individual",
    detail: "60 min",
    price: "55 €",
    perSession: "55 € por sesión",
    cta: "Consultar sesión",
    message:
      "Hola, quería consultar disponibilidad para una sesión individual de estimulación cognitiva a domicilio.",
  },
  {
    name: "Bono de 5 sesiones",
    detail: "5 sesiones",
    price: "260 €",
    perSession: "52 € por sesión",
    saving: "Ahorras 15 €",
    cta: "Consultar bono",
    message:
      "Hola, quería consultar disponibilidad para el bono de 5 sesiones de estimulación cognitiva a domicilio.",
  },
  {
    name: "1 sesión semanal",
    detail: "4 sesiones al mes",
    price: "200 €/mes",
    perSession: "50 € por sesión",
    saving: "Ahorras 20 €/mes",
    badge: "Frecuencia habitual",
    cta: "Consultar este plan",
    message:
      "Hola, quería consultar disponibilidad para el plan de 1 sesión semanal de estimulación cognitiva a domicilio.",
  },
  {
    name: "2 sesiones semanales",
    detail: "8 sesiones al mes",
    price: "380 €/mes",
    perSession: "47,50 € por sesión",
    saving: "Ahorras 60 €/mes",
    cta: "Consultar este plan",
    message:
      "Hola, quería consultar disponibilidad para el plan de 2 sesiones semanales de estimulación cognitiva a domicilio.",
  },
];

export function Pricing() {
  return (
    <section id="tarifas" className="py-16 sm:py-20 lg:py-24">
      <div className="rounded-3xl border border-stone-200/70 bg-[#fbf4ea] px-6 py-10 shadow-[0_18px_60px_rgba(68,64,60,0.08)] sm:px-10 sm:py-12 lg:px-12">
        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-sm font-medium text-stone-600">
            <span className="h-px w-8 bg-stone-300" aria-hidden="true" />
            Tarifas
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-stone-950 sm:text-4xl">
            Tarifas de estimulación cognitiva a domicilio
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            Opciones flexibles para adaptar la frecuencia de las sesiones a las
            necesidades de cada persona.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pricingOptions.map((option) => (
            <li
              key={option.name}
              className={`flex min-h-full flex-col rounded-3xl border bg-white/85 p-6 shadow-[0_12px_32px_rgba(68,64,60,0.07)] transition-all duration-300 hover:translate-x-1 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_42px_rgba(68,64,60,0.12)] active:translate-x-0.5 ${
                option.badge
                  ? "border-stone-400/80 ring-1 ring-stone-300/70"
                  : "border-stone-200/80 hover:border-stone-300"
              }`}
            >
              <div className="flex min-h-14 items-start justify-between gap-3">
                <h3 className="text-xl font-semibold leading-7 text-stone-950">
                  {option.name}
                </h3>
                {option.badge ? (
                  <span className="shrink-0 rounded-full border border-stone-300 bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
                    {option.badge}
                  </span>
                ) : null}
              </div>

              <p className="mt-5 text-sm font-medium text-stone-600">
                {option.detail}
              </p>
              <p className="mt-3 text-4xl font-semibold tracking-normal text-stone-950">
                {option.price}
              </p>
              <p className="mt-3 text-base leading-7 text-stone-700">
                {option.perSession}
              </p>
              {option.saving ? (
                <p className="mt-3 text-sm font-medium text-stone-600">
                  {option.saving}
                </p>
              ) : null}
              <a
                href={createWhatsappHref(option.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
                  option.badge
                    ? "bg-stone-900 text-white hover:bg-stone-700 focus-visible:outline-stone-900"
                    : "border border-stone-300/80 bg-white/70 text-stone-800 hover:border-stone-400 hover:bg-white focus-visible:outline-stone-700"
                }`}
              >
                {option.cta}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-stone-200/80 pt-8">
          <p className="max-w-2xl leading-7 text-stone-700">
            Las sesiones son individuales y adaptadas a las necesidades y
            objetivos de cada persona.
          </p>
        </div>
      </div>
    </section>
  );
}
