import type { JobPosting } from "@/src/models/careers";

/**
 * Job openings.
 *
 * To publish a new position:
 *  1. Add a record here (unique `id` and `slug`).
 *  2. Add its copy under `jobs.<slug>` in BOTH `src/locales/en-US/careers.json`
 *     and `src/locales/es-MX/careers.json`.
 *
 * No page, component or sitemap changes are needed. To take a position down set
 * `status` to "closed" (keeps the URL alive, stops applications) or "draft".
 *
 * Employment details (employmentType, location, workArrangement,
 * experienceLevel, compensation) are intentionally left out until CodeNation
 * Studio confirms them. Undefined fields are never rendered.
 */
export const jobs: JobPosting[] = [
  {
    id: "graphic-designer-branding-marketing",
    slug: "graphic-designer",
    status: "published",
    publishedAt: "2026-10-16",
    experienceLevel: "junior",
    portfolioRequired: true,
  },
];
