import { Reveal } from "@/components/Reveal";

export function Benefits() {
  const benefits = [
    "Mantener la mente activa",
    "Favorecer la autonomía diaria",
    "Estimular atención, lenguaje y memoria",
    "Crear una rutina agradable",
    "Acompañar también a la familia",
  ];

  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
        <div className="max-w-2xl reveal reveal-left">
          <p className="mb-4 text-sm font-medium text-stone-600">
            Beneficios
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-stone-950 sm:text-4xl">
            El objetivo no es solo trabajar la memoria
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            Las sesiones buscan mantener capacidades, crear rutinas positivas y
            acompañar a la persona desde un entorno familiar.
          </p>
        </div>

        <ul className="grid gap-3">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 70}
            >
              <li className="flex gap-4 rounded-2xl border border-stone-200/80 bg-white/75 p-5 text-stone-800 shadow-[0_12px_32px_rgba(68,64,60,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:bg-white hover:shadow-[0_18px_40px_rgba(68,64,60,0.11)]">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-medium text-white"
                >
                  ✓
                </span>
                <span className="text-lg leading-7">{benefit}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
