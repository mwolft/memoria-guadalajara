export function Conditions() {
  const conditions = [
    {
      icon: "🧠",
      title: "Olvidos frecuentes",
      description: "Pequeños cambios o despistes que empiezan a preocupar.",
    },
    {
      icon: "📖",
      title: "Estimulación y mantenimiento",
      description: "Trabajo orientado a mantener actividad y hábitos cognitivos.",
    },
    {
      icon: "🏠",
      title: "Dificultad para desplazarse",
      description: "Sesiones cómodas directamente en el domicilio.",
    },
    {
      icon: "❤️",
      title: "Acompañamiento profesional",
      description: "Intervención cercana y adaptada a cada persona.",
    },
  ];

  return (
    <section id="conditions" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-2xl reveal reveal-up">
        <p className="mb-4 text-sm font-medium text-stone-600">
          ¿Cuándo puede ayudar este servicio?
        </p>
        <h2 className="text-3xl font-semibold leading-tight tracking-normal text-stone-950 sm:text-4xl">
          Cada situación es diferente
        </h2>
        <p className="mt-5 text-lg leading-8 text-stone-700">
          No hace falta esperar a una situación avanzada para empezar a trabajar
          capacidades cognitivas.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {conditions.map((condition) => (
          <li
            key={condition.title}
            className="rounded-3xl border border-stone-200/80 bg-white/75 p-6 shadow-[0_14px_40px_rgba(68,64,60,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:bg-white hover:shadow-[0_20px_46px_rgba(68,64,60,0.12)] reveal reveal-up"
          >
            <span className="text-3xl" aria-hidden="true">
              {condition.icon}
            </span>
            <h3 className="mt-6 text-xl font-semibold text-stone-950">
              {condition.title}
            </h3>
            <p className="mt-3 leading-7 text-stone-700">
              {condition.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
