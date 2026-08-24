import Image from "next/image";

const aboutImage =
  "https://res.cloudinary.com/dhm8zqtkq/image/upload/v1781520528/terapeuta-ocupacional-guadalajara_mzwesi.png";

export function About() {
  const highlights = [
    "Gerontología social",
    "Atención personalizada",
    "Sesiones a domicilio",
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-stone-200/80 bg-stone-50 shadow-[0_24px_70px_rgba(68,64,60,0.12)]">
          <Image
            src={aboutImage}
            alt="Acompañamiento profesional en estimulación cognitiva a domicilio"
            fill
            sizes="(min-width: 1024px) 28rem, calc(100vw - 3rem)"
            className="object-cover"
          />
        </div>

        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-sm font-medium text-stone-600">
            <span className="h-px w-8 bg-stone-300" aria-hidden="true" />
            Quién te acompaña
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-stone-950 sm:text-4xl">
            Una atención cercana, profesional y adaptada a cada persona
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-8 text-stone-700">
            <p>
              Detrás de Memoria Guadalajara está Marcos Arias, profesional con
              formación de Máster en Gerontología Social, que ofrece una
              atención personal a personas mayores y familias desde una forma
              de trabajar cercana y respetuosa.
            </p>
            <p>
              Las sesiones de estimulación cognitiva se realizan a domicilio y
              se adaptan a cada persona para trabajar memoria, atención y
              autonomía desde un entorno cómodo y familiar.
            </p>
          </div>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-stone-200/80 bg-white/70 px-3.5 py-2 text-sm text-stone-700 shadow-sm"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
