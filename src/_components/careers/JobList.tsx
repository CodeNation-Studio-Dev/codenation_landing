import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import type { TranslationDict } from "@providers/translationProvider";
import type { JobContent, JobPosting } from "@/src/models/careers";
import { getJobDetails } from "./jobDetails";

interface JobListProps {
  jobs: JobPosting[];
  dict: TranslationDict;
  lang: string;
}

export const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="font-inter border-outline/50 text-on-surface-variant rounded-full border px-3 py-1 text-xs">
    {children}
  </span>
);

/** Listing of job cards. Also renders the empty state when there are no jobs. */
export const JobList = ({ jobs, dict, lang }: JobListProps) => {
  // A job without translated copy for this language is not listed.
  const items = jobs.flatMap((job) => {
    const content = dict.jobs[job.slug] as JobContent | undefined;
    return content ? [{ job, content }] : [];
  });

  if (items.length === 0) {
    return (
      <div className="border-outline/50 flex flex-col items-start gap-3 rounded-xl border border-dashed px-6 py-12 sm:px-10">
        <h3 className="text-2xl font-semibold">{dict.list.empty.title}</h3>
        <p className="font-inter text-on-surface-variant max-w-xl text-lg font-light">
          {dict.list.empty.description}
        </p>
      </div>
    );
  }

  return (
    <ul className="grid gap-6 lg:grid-cols-2">
      {items.map(({ job, content }) => {
        const tags = getJobDetails(job, dict, lang).filter(
          (detail) =>
            detail.key !== "experienceLevel" && detail.key !== "compensation",
        );
        return (
          <li
            key={job.id}
            className="border-outline/50 to-primary/5 hover:border-primary has-focus-visible:outline-primary relative flex flex-col gap-5 rounded-xl border bg-gradient-to-tr p-6 transition-colors has-focus-visible:outline-2 has-focus-visible:outline-offset-2 sm:p-8"
          >
            <div className="flex flex-wrap gap-2">
              <Pill>{content.department}</Pill>
              {tags.map((tag) => (
                <Pill key={tag.key}>{tag.value}</Pill>
              ))}
            </div>
            <h3 className="text-2xl font-semibold sm:text-3xl">
              {content.title}
            </h3>
            <p className="font-inter text-on-surface-variant font-light">
              {content.summary}
            </p>
            <Link
              href={`/${lang}/careers/${job.slug}`}
              aria-label={`${dict.list.viewPosition}: ${content.title}`}
              className="font-inter text-primary mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold outline-none after:absolute after:inset-0"
            >
              {dict.list.viewPosition}
              <GoArrowUpRight aria-hidden size={16} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
