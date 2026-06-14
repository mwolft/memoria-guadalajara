export function Benefits() {
  const benefits = [
    "Mantener la mente activa",
    "Favorecer la autonomía diaria",
    "Estimular atención, lenguaje y memoria",
    "Crear una rutina agradable",
    "Acompañar también a la familia",
  ];

  return (
    <section id="benefits" className="py-14 sm:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
        <div className="max-w-2xl">
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
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex gap-4 rounded-2xl border border-stone-200 bg-stone-50 p-5 text-stone-800"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-medium text-white"
              >
                ✓
              </span>
              <span className="text-lg leading-7">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
