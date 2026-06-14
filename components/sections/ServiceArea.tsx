export function ServiceArea() {
  const areas = [
    "Guadalajara",
    "Azuqueca de Henares",
    "Cabanillas del Campo",
    "Marchamalo",
  ];

  return (
    <section id="zona" className="py-14 sm:py-16 lg:py-20">
      <div className="rounded-3xl border border-stone-200 bg-stone-50 px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-14">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium text-stone-600">
              Zona de atención
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-normal text-stone-950 sm:text-4xl">
              Estimulación cognitiva a domicilio en Guadalajara y alrededores
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              El servicio se realiza en el domicilio, evitando desplazamientos y
              facilitando que la persona trabaje en un entorno conocido.
            </p>
          </div>

          <div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {areas.map((area) => (
                <li
                  key={area}
                  className="rounded-2xl border border-stone-200 bg-white px-5 py-4 text-lg font-medium text-stone-800 shadow-sm"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-5 leading-7 text-stone-700">
              Si tu zona no aparece, puedes consultarnos por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
