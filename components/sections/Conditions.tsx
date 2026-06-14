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
    <section id="conditions" className="py-14 sm:py-16 lg:py-20">
      <div className="max-w-2xl">
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
            className="rounded-3xl border border-stone-200 bg-stone-50 p-6"
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
