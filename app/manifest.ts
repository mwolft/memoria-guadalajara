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
        src: "/brand/favicon-estimulacion-cognitiva-guadalajara.png",
        sizes: "666x640",
        type: "image/png",
      },
    ],
  };
}
