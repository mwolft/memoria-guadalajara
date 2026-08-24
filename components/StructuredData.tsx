const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://memoriaguadalajara.com/#marcos-arias",
      name: "Marcos Arias",
      url: "https://memoriaguadalajara.com/",
      jobTitle: "Profesional con formación en Gerontología Social",
      knowsAbout: [
        "Gerontología Social",
        "Estimulación cognitiva a domicilio",
        "Personas mayores",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://memoriaguadalajara.com/#service",
      name: "Estimulación cognitiva a domicilio en Guadalajara",
      url: "https://memoriaguadalajara.com/",
      provider: {
        "@id": "https://memoriaguadalajara.com/#marcos-arias",
      },
      areaServed: {
        "@type": "Place",
        name: "Guadalajara",
      },
      description:
        "Estimulación cognitiva a domicilio en Guadalajara para personas mayores, con sesiones personalizadas para trabajar memoria, atención y autonomía.",
      serviceType: "Estimulación cognitiva a domicilio",
    },
  ],
} as const;

const structuredDataJson = JSON.stringify(structuredData).replace(
  /</g,
  "\\u003c",
);

export function StructuredData() {
  return (
    <script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: structuredDataJson }}
    />
  );
}
