export type Locale = "en-US" | "es-MX";

/**
 * - `published`: visible in the listing and open for applications.
 * - `closed`: detail page stays reachable (so old links keep working) but it is
 *   hidden from the listing, marked noindex and does not accept applications.
 * - `draft`: not public at all (detail page responds with 404).
 */
export type JobStatus = "published" | "draft" | "closed";

export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "freelance"
  | "internship";

export type WorkArrangement = "on-site" | "hybrid" | "remote";

export type ExperienceLevel = "junior" | "mid" | "senior";

/**
 * Language-independent data of a job opening. The translated copy lives in
 * `src/locales/<lang>/careers.json` under `jobs[slug]`.
 *
 * Optional employment details must only be filled in once they have been
 * confirmed by CodeNation Studio. Anything left undefined is not displayed.
 */
export interface JobPosting {
  id: string;
  /** Used in the URL: /<lang>/careers/<slug> */
  slug: string;
  status: JobStatus;
  /** ISO date (YYYY-MM-DD). A date in the future keeps the job hidden. */
  publishedAt: string;
  employmentType?: EmploymentType;
  workArrangement?: WorkArrangement;
  experienceLevel?: ExperienceLevel;
  /** Place name, e.g. "Zapopan, Jalisco". Same in every language. */
  location?: string;
  /** Only when approved for publication. */
  compensation?: Partial<Record<Locale, string>>;
  /** When set, "Apply" points to this external URL instead of the built-in form. */
  applicationUrl?: string;
  /** Whether the built-in form requires a portfolio URL. */
  portfolioRequired?: boolean;
}

/** Translated copy of a job (one entry per language in careers.json). */
export interface JobContent {
  title: string;
  department: string;
  summary: string;
  /** Paragraphs for "About the role". */
  description: string[];
  responsibilities: string[];
  /** What the person will learn in the role (useful for junior/intern roles). */
  learning?: string[];
  requirements: string[];
  niceToHave?: string[];
  portfolio?: {
    intro: string;
    items: string[];
    note?: string;
  };
  /** Benefits and conditions. Only add once confirmed by the company. */
  offer?: string[];
}

export type ApplicationField =
  | "name"
  | "email"
  | "portfolioUrl"
  | "resumeUrl"
  | "message";

export interface ApplicationState {
  status: "idle" | "success" | "error";
  /** Error code per field, translated in careers.json `form.validation`. */
  fieldErrors: Partial<Record<ApplicationField, string>>;
  /** Set when the error is not tied to a field. */
  error?: "unavailable" | "failed";
  /** Submitted values, so the form is not wiped when there are errors. */
  values: Partial<Record<ApplicationField, string>>;
}
