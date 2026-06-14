export function FAQ() {
  const faqs = [
    {
      question: "¿Las sesiones son solo para personas con Alzheimer?",
      answer:
        "No. También pueden ayudar en casos de olvidos frecuentes, deterioro cognitivo leve o como forma de mantener la mente activa.",
    },
    {
      question: "¿La atención es siempre a domicilio?",
      answer:
        "Sí. El servicio está pensado para realizarse en el domicilio de la persona mayor, en un entorno cómodo y conocido.",
    },
    {
      question: "¿Hace falta una valoración previa?",
      answer:
        "Antes de empezar se realiza una primera conversación para conocer la situación y orientar las sesiones.",
    },
    {
      question: "¿En qué zonas se ofrece el servicio?",
      answer:
        "Principalmente en Guadalajara, Azuqueca de Henares, Cabanillas del Campo y Marchamalo.",
    },
    {
      question: "¿Cómo puedo consultar mi caso?",
      answer:
        "Puedes escribir por WhatsApp y explicar brevemente la situación. Te orientaremos sin compromiso.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium text-stone-600">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-stone-950 sm:text-4xl">
            Dudas habituales antes de empezar
          </h2>
        </div>

        <dl className="grid gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-stone-200/80 bg-white/75 p-6 shadow-[0_12px_32px_rgba(68,64,60,0.06)] transition-colors hover:border-stone-300 hover:bg-white"
            >
              <dt className="text-lg font-semibold leading-7 text-stone-950">
                {faq.question}
              </dt>
              <dd className="mt-3 leading-7 text-stone-700">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
