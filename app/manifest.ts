import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Memoria Guadalajara",
    short_name: "Memoria Guadalajara",
    theme_color: "#F4EBDD",
    background_color: "#FFFFFF",
    display: "standalone",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "64x64",
        type: "image/svg+xml",
      },
    ],
  };
}
