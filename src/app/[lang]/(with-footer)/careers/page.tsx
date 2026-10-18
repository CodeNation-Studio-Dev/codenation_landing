import type { Metadata } from "next";
import { JobList } from "@components/careers/JobList";
import { getDictionary } from "@lib/helpers/getDictionary";
import { buildCareersMetadata, getPublishedJobs } from "@lib/helpers/careers";
import { TranslationProvider } from "@providers/translationProvider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang, "careers");

  return buildCareersMetadata({
    lang,
    path: "/careers",
    title: dict.meta.title,
    description: dict.meta.description,
  });
}

const Careers = async ({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) => {
  const { lang } = await params;
  const dict = await getDictionary(lang, "careers");
  const jobs = getPublishedJobs();

  return (
    <TranslationProvider dict={dict}>
      <div className="px-4">
        <section className="mx-auto flex w-full max-w-[1540px] flex-col gap-6 pt-20 pb-16 lg:px-[72px] lg:pb-24">
          <p className="font-inter text-on-surface-variant flex items-center gap-2 text-sm">
            <span aria-hidden className="bg-primary h-1.5 w-1.5 rounded-full" />
            {dict.hero.eyebrow}
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
            {dict.hero.title}
          </h1>
          <p className="font-inter text-on-surface-variant max-w-3xl text-lg font-light">
            {dict.hero.description}
          </p>
        </section>

        <section
          aria-labelledby="open-positions"
          className="mx-auto w-full max-w-[1540px] pb-24 lg:px-[72px]"
        >
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
            <h2
              id="open-positions"
              className="text-2xl font-semibold sm:text-3xl"
            >
              {dict.list.title}
            </h2>
            {jobs.length > 0 && (
              <p className="font-inter text-on-surface-variant text-sm">
                {(jobs.length === 1
                  ? dict.list.count_one
                  : dict.list.count_other
                ).replace("{count}", String(jobs.length))}
              </p>
            )}
          </div>
          <JobList jobs={jobs} dict={dict} lang={lang} />
        </section>
      </div>
    </TranslationProvider>
  );
};

export default Careers;
