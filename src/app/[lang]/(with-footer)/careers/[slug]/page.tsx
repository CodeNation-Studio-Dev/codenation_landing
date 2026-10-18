import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JobDetail } from "@components/careers/JobDetail";
import { getDictionary } from "@lib/helpers/getDictionary";
import {
  acceptsApplications,
  buildCareersMetadata,
  getJobBySlug,
} from "@lib/helpers/careers";
import { TranslationProvider } from "@providers/translationProvider";
import type { JobContent } from "@/src/models/careers";

type Params = Promise<{ lang: string; slug: string }>;

async function loadJob(lang: string, slug: string) {
  const job = getJobBySlug(slug);
  if (!job) return null;
  const dict = await getDictionary(lang, "careers");
  const content = dict.jobs[slug] as JobContent | undefined;
  return content ? { job, content, dict } : null;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const data = await loadJob(lang, slug);
  if (!data) return { robots: { index: false, follow: false } };

  return buildCareersMetadata({
    lang,
    path: `/careers/${slug}`,
    title: `${data.content.title} | ${data.dict.meta.detailSuffix}`,
    description: data.content.summary,
    // Closed positions stay reachable but should leave search results.
    noIndex: !acceptsApplications(data.job),
  });
}

const CareerDetail = async ({ params }: Readonly<{ params: Params }>) => {
  const { lang, slug } = await params;
  const data = await loadJob(lang, slug);
  if (!data) notFound();

  return (
    <TranslationProvider dict={data.dict}>
      <JobDetail
        job={data.job}
        content={data.content}
        dict={data.dict}
        lang={lang}
      />
    </TranslationProvider>
  );
};

export default CareerDetail;
