import type { TranslationDict } from "@providers/translationProvider";
import type { JobPosting, Locale } from "@/src/models/careers";

export interface JobDetailItem {
  key:
    | "employmentType"
    | "location"
    | "workArrangement"
    | "experienceLevel"
    | "compensation";
  label: string;
  value: string;
}

/**
 * Employment details that are configured for the job, already translated.
 * Anything that has not been confirmed (undefined) is left out.
 */
export function getJobDetails(
  job: JobPosting,
  dict: TranslationDict,
  lang: string,
): JobDetailItem[] {
  const candidates: [JobDetailItem["key"], string | undefined][] = [
    [
      "employmentType",
      job.employmentType && dict.enums.employmentType[job.employmentType],
    ],
    ["location", job.location],
    [
      "workArrangement",
      job.workArrangement && dict.enums.workArrangement[job.workArrangement],
    ],
    [
      "experienceLevel",
      job.experienceLevel && dict.enums.experienceLevel[job.experienceLevel],
    ],
    ["compensation", job.compensation?.[lang as Locale]],
  ];

  return candidates.flatMap(([key, value]) =>
    value ? [{ key, label: dict.labels[key] as string, value }] : [],
  );
}
