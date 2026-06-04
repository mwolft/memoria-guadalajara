export function Hero() {
  const whatsappHref = "#";
  const indicators = [
    "Atención a domicilio",
    "Guadalajara y alrededores",
    "Psicólogo",
  ];

  return (
    <section
      id="hero"
      className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16"
    >
      <div className="max-w-2xl">
        <p className="mb-5 text-sm font-medium text-stone-600">
          Psicólogo · Atención a domicilio
        </p>

        <h1 className="text-4xl font-semibold leading-tight tracking-normal text-stone-950 sm:text-5xl lg:text-6xl">
          Estimulación cognitiva a domicilio para personas mayores en
          Guadalajara
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
          Sesiones personalizadas para trabajar memoria, atención y autonomía
          desde la comodidad del hogar.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            className="inline-flex h-12 items-center justify-center rounded-full bg-stone-900 px-6 text-sm font-medium text-white hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            Hablar por WhatsApp
          </a>
          <a
            href="#process"
            className="inline-flex h-12 items-center justify-center rounded-full border border-stone-300 px-6 text-sm font-medium text-stone-800 hover:border-stone-400 hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-700"
          >
            Cómo son las sesiones
          </a>
        </div>

        <ul className="mt-7 flex flex-wrap gap-2.5">
          {indicators.map((indicator) => (
            <li
              key={indicator}
              className="rounded-full border border-stone-200 bg-stone-50 px-3.5 py-2 text-sm text-stone-700"
            >
              {indicator}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex min-h-80 items-center justify-center rounded-2xl border border-stone-200 bg-stone-50 text-sm font-medium text-stone-500 shadow-sm sm:min-h-96">
        Imagen principal
      </div>
    </section>
  );
}
