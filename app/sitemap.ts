import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://memoriaguadalajara.com/",
      lastModified: new Date(),
    },
  ];
}
