import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://codenation-studio.com/",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://codenation-studio.com/en-US",
          es: "https://codenation-studio.com/es-MX",
        },
      },
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://codenation-studio.com/abou-ust",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://codenation-studio.com/en-US/about-us",
          es: "https://codenation-studio.com/es-MX/about-us",
        },
      },
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
