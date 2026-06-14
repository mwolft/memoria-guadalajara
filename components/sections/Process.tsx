export function Process() {
  const steps = [
    {
      title: "Primera conversación",
      description:
        "Resolvemos dudas y conocemos el caso antes de plantear el trabajo.",
    },
    {
      title: "Valoración inicial",
      description:
        "Observamos necesidades, rutinas y objetivos para orientar las sesiones.",
    },
    {
      title: "Sesiones a domicilio",
      description:
        "Trabajamos memoria, atención, lenguaje y autonomía con ejercicios personalizados.",
    },
  ];

  return (
    <section id="process" className="py-14 sm:py-16 lg:py-20">
      <div className="rounded-3xl bg-stone-50 px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium text-stone-600">
            Cómo son las sesiones
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-stone-950 sm:text-4xl">
            Un acompañamiento sencillo, cercano y adaptado
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            Antes de empezar, escuchamos la situación familiar y adaptamos las
            sesiones a las necesidades de cada persona.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-sm font-medium text-white">
                {index + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-stone-950">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-stone-700">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
