import type { MetadataRoute } from "next";

const BASE_URL = "https://codenation-studio.com";
const locales = ["en-US", "es-MX"] as const;
const paths = ["", "/about-us"] as const;
const services = ["webpage", "mvp", "design", "automatization", "cloud"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const basePages: MetadataRoute.Sitemap = paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: {
          "en-US": `${BASE_URL}/en-US${path}`,
          "es-MX": `${BASE_URL}/es-MX${path}`,
          "x-default": `${BASE_URL}/`,
        },
      },
    })),
  );

  const servicePages: MetadataRoute.Sitemap = services.flatMap((service) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/services/${service}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          "en-US": `${BASE_URL}/en-US/services/${service}`,
          "es-MX": `${BASE_URL}/es-MX/services/${service}`,
          "x-default": `${BASE_URL}/`,
        },
      },
    })),
  );

  return [...basePages, ...servicePages];
}
