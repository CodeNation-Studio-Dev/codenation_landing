import Link from "next/link";
import { GoArrowLeft, GoArrowUpRight } from "react-icons/go";
import type { TranslationDict } from "@providers/translationProvider";
import type { JobContent, JobPosting } from "@/src/models/careers";
import { acceptsApplications } from "@lib/helpers/careers";
import { ApplicationForm } from "./ApplicationForm";
import { getJobDetails } from "./jobDetails";
import { Pill } from "./JobList";
import { primaryButtonClass, secondaryLinkClass } from "./styles";

interface JobDetailProps {
  job: JobPosting;
  content: JobContent;
  dict: TranslationDict;
  lang: string;
}

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="font-inter text-on-surface-variant marker:text-primary flex list-disc flex-col gap-2 pl-5 text-lg font-light">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="flex flex-col gap-4">
    <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
    {children}
  </section>
);

/** Template shared by every job. All copy comes from the job record + locale. */
export const JobDetail = ({ job, content, dict, lang }: JobDetailProps) => {
  const open = acceptsApplications(job);
  const details = getJobDetails(job, dict, lang);
  const pills = details.filter(
    (detail) =>
      detail.key !== "experienceLevel" && detail.key !== "compensation",
  );
  const extraDetails = details.filter(
    (detail) =>
      detail.key === "experienceLevel" || detail.key === "compensation",
  );

  const external = Boolean(job.applicationUrl);
  const applyHref = job.applicationUrl ?? "#apply";
  const applyLink = (
    <a
      href={applyHref}
      className={primaryButtonClass}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {dict.detail.applyNow}
      <GoArrowUpRight aria-hidden size={16} />
    </a>
  );

  return (
    <article className="px-4 pb-24">
      <header className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6 pt-12 pb-12 lg:pt-20">
        <Link href={`/${lang}/careers`} className={secondaryLinkClass}>
          <GoArrowLeft aria-hidden size={16} />
          {dict.detail.backToCareers}
        </Link>
        <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          {content.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          <Pill>{content.department}</Pill>
          {pills.map((pill) => (
            <Pill key={pill.key}>{pill.value}</Pill>
          ))}
        </div>
        {extraDetails.length > 0 && (
          <dl className="font-inter grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {extraDetails.map((detail) => (
              <div key={detail.key}>
                <dt className="text-on-surface-variant text-sm">
                  {detail.label}
                </dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {open && applyLink}
      </header>

      {!open && (
        <div
          role="status"
          className="border-outline/50 mx-auto mb-12 flex w-full max-w-[1200px] flex-col items-start gap-3 rounded-xl border border-dashed px-6 py-8 sm:px-10"
        >
          <h2 className="text-2xl font-semibold">{dict.detail.closed.title}</h2>
          <p className="font-inter text-on-surface-variant max-w-xl">
            {dict.detail.closed.description}
          </p>
          <Link href={`/${lang}/careers`} className={primaryButtonClass}>
            {dict.detail.closed.cta}
          </Link>
        </div>
      )}

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12">
        <div className="flex max-w-3xl flex-col gap-12">
          <Section title={dict.detail.about}>
            <div className="font-inter text-on-surface-variant flex flex-col gap-4 text-lg font-light">
              {content.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Section>
          <Section title={dict.detail.responsibilities}>
            <BulletList items={content.responsibilities} />
          </Section>
          {content.learning && content.learning.length > 0 && (
            <Section title={dict.detail.learning}>
              <BulletList items={content.learning} />
            </Section>
          )}
          <Section title={dict.detail.requirements}>
            <BulletList items={content.requirements} />
          </Section>
          {content.niceToHave && content.niceToHave.length > 0 && (
            <Section title={dict.detail.niceToHave}>
              <BulletList items={content.niceToHave} />
            </Section>
          )}
          {content.portfolio && (
            <Section title={dict.detail.portfolio}>
              <p className="font-inter text-on-surface-variant text-lg font-light">
                {content.portfolio.intro}
              </p>
              <BulletList items={content.portfolio.items} />
              {content.portfolio.note && (
                <p className="font-inter text-on-surface-variant text-sm">
                  {content.portfolio.note}
                </p>
              )}
            </Section>
          )}
          {content.offer && content.offer.length > 0 && (
            <Section title={dict.detail.offer}>
              <BulletList items={content.offer} />
            </Section>
          )}
        </div>

        {open && (
          <section
            id="apply"
            aria-labelledby={external ? "apply-heading" : undefined}
            className="max-w-3xl scroll-mt-28"
          >
            {external ? (
              <div className="border-outline/50 to-primary/5 flex flex-col items-start gap-4 rounded-xl border bg-gradient-to-tr px-6 py-8 sm:p-8">
                <h2
                  id="apply-heading"
                  className="text-2xl font-semibold sm:text-3xl"
                >
                  {dict.form.title}
                </h2>
                {applyLink}
              </div>
            ) : (
              <ApplicationForm
                slug={job.slug}
                lang={lang}
                jobTitle={content.title}
                portfolioRequired={Boolean(job.portfolioRequired)}
              />
            )}
          </section>
        )}
      </div>
    </article>
  );
};
