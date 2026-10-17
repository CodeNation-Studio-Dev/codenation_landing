import type { Metadata } from "next";
import { jobs } from "@/src/config/careers";
import type { JobPosting } from "@/src/models/careers";

export const BASE_URL = "https://codenation-studio.com";
export const LOCALES = ["en-US", "es-MX"] as const;

/** Published and already past its publication date. */
export function isJobPublished(job: JobPosting, now = new Date()) {
  return job.status === "published" && new Date(job.publishedAt) <= now;
}

/** Jobs shown in the listing, newest first. */
export function getPublishedJobs(now = new Date()): JobPosting[] {
  return jobs
    .filter((job) => isJobPublished(job, now))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

/**
 * Jobs that have a public detail page: published ones and closed ones
 * (closed pages stay reachable but explain the position is no longer open).
 * Drafts and scheduled jobs are never returned.
 */
export function getJobBySlug(slug: string, now = new Date()) {
  const job = jobs.find((item) => item.slug === slug);
  if (!job) return undefined;
  if (job.status === "closed") return job;
  return isJobPublished(job, now) ? job : undefined;
}

export function acceptsApplications(job: JobPosting) {
  return isJobPublished(job);
}

export function isLocale(lang: string): lang is (typeof LOCALES)[number] {
  return (LOCALES as readonly string[]).includes(lang);
}

/** Canonical, language alternates and social metadata for careers pages. */
export function buildCareersMetadata({
  lang,
  path,
  title,
  description,
  noIndex = false,
}: {
  lang: string;
  /** Path after the locale, e.g. "/careers" or "/careers/graphic-designer". */
  path: string;
  title: string;
  description: string;
  noIndex?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: {
        "en-US": `/en-US${path}`,
        "es-MX": `/es-MX${path}`,
        "x-default": `${BASE_URL}/es-MX`,
      },
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${lang}${path}`,
      siteName: "CodeNation Studio",
      locale: lang,
      type: "website",
      images: [
        {
          url: `${BASE_URL}/assets/opengraph-image.png`,
          width: 512,
          height: 512,
          alt: "CodeNation Studio isotipo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/assets/opengraph-image.png`],
    },
  };
}
