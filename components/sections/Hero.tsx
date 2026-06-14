import Image from "next/image";
import { whatsappHref } from "@/lib/contact";

const heroImage =
  "https://res.cloudinary.com/dhm8zqtkq/image/upload/v1781419090/a-domicilio_yhmzlf.png";

export function Hero() {
  const indicators = [
    "Atención a domicilio",
    "Guadalajara y alrededores",
    "Psicólogo",
  ];

  return (
    <section
      id="hero"
      className="grid min-h-[82svh] gap-10 py-10 sm:py-12 lg:min-h-[86svh] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12"
    >
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-medium text-stone-600">
          Psicólogo · Atención a domicilio
        </p>

        <h1 className="text-3xl font-semibold leading-tight tracking-normal text-stone-950 sm:text-4xl lg:text-5xl">
          Estimulación cognitiva a domicilio para personas mayores en
          Guadalajara
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-8 text-stone-700">
          Sesiones personalizadas para trabajar memoria, atención y autonomía
          desde la comodidad del hogar.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-stone-900 px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            Hablar por WhatsApp
          </a>
          <a
            href="#process"
            className="inline-flex h-12 items-center justify-center rounded-full border border-stone-300/80 bg-white/60 px-6 text-sm font-medium text-stone-800 shadow-sm transition-colors hover:border-stone-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-700"
          >
            Cómo son las sesiones
          </a>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2.5">
          {indicators.map((indicator) => (
            <li
              key={indicator}
              className="rounded-full border border-stone-200/80 bg-white/70 px-3.5 py-2 text-sm text-stone-700 shadow-sm"
            >
              {indicator}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative aspect-[16/10] w-full max-w-md overflow-hidden rounded-3xl border border-stone-200/80 bg-stone-50 shadow-[0_24px_70px_rgba(68,64,60,0.13)] lg:aspect-[4/3] lg:max-w-[30rem]">
        <Image
          src={heroImage}
          alt="Sesión de estimulación cognitiva a domicilio"
          fill
          priority
          sizes="(min-width: 1024px) 30rem, (min-width: 640px) 28rem, calc(100vw - 3rem)"
          className="object-cover"
        />
      </div>
    </section>
  );
}
