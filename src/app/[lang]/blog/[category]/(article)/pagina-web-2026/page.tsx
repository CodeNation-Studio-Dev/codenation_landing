import Image from "next/image";
import { getDictionary } from "@lib/helpers/getDictionary";
import { ArticleSidebar } from "@/src/_components/articleLayout/ArticleSidebar";
import { ArticleSocials } from "@/src/_components/articleLayout/ArticleSocials";
import { getLinkOfText } from "@/src/_lib/helpers/textHandler";

const Page = async ({
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}>) => {
  const { lang } = await params;
  const dict = await getDictionary(lang, "pagina-web-2026");

  return (
    <>
      <ArticleSidebar article={dict} />
      <article className="text-white">
        <section className="relative overflow-hidden">
          <div className="relative mx-auto max-w-6xl px-6 py-2 lg:py-8">
            <p className="bg-surface-container mb-4 inline-flex rounded-full px-4 py-1 text-sm font-light tracking-widest uppercase">
              Updated {dict.updatedAt}
            </p>

            <h1 className="max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
              {dict.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
              {dict.heroDescription}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img
              src={dict.sections[0].image}
              alt={dict.sections[0].imageAlt}
              className="rounded-2xl border border-white/10"
            />

            <div>
              <h2
                className="mb-6 text-3xl font-bold md:text-4xl"
                id={getLinkOfText(dict.sections[0].heading)}
              >
                {dict.sections[0].heading}
              </h2>

              <p className="mb-6 leading-8 text-gray-300">
                {dict.sections[0].paragraphs[0]}
              </p>

              <p className="leading-8 text-gray-300">
                {dict.sections[0].paragraphs[1]}
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2
                  className="mb-6 text-3xl font-bold md:text-4xl"
                  id={getLinkOfText(dict.sections[1].heading)}
                >
                  {dict.sections[1].heading}
                </h2>

                <p className="mb-4 leading-8 text-gray-300">
                  {dict.sections[1].paragraphs[0]}
                </p>

                <p className="mb-4 leading-8 text-gray-300">
                  {dict.sections[1].paragraphs[1]}
                </p>

                <p className="mb-8 leading-8 text-gray-300">
                  {dict.sections[1].paragraphs[2]}
                </p>

                <div className="grid gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    ✓ {dict.sections[1].list[0]}
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    ✓ {dict.sections[1].list[1]}
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    ✓ {dict.sections[1].list[2]}
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    ✓ {dict.sections[1].list[3]}
                  </div>
                </div>
              </div>

              <img
                src={dict.sections[1].image}
                alt={dict.sections[1].imageAlt}
                className="rounded-2xl border border-white/10"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img
              src={dict.sections[2].image}
              alt={dict.sections[2].imageAlt}
              className="rounded-2xl border border-white/10"
            />

            <div>
              <h2
                className="mb-6 text-3xl font-bold md:text-4xl"
                id={getLinkOfText(dict.sections[2].heading)}
              >
                {dict.sections[2].heading}
              </h2>

              <p className="mb-6 leading-8 text-gray-300">
                {dict.sections[2].paragraphs[0]}
              </p>

              <p className="mb-6 leading-8 text-gray-300">
                {dict.sections[2].paragraphs[1]}
              </p>

              <p className="leading-8 text-gray-300">
                {dict.sections[2].paragraphs[2]}
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2
                  className="mb-6 text-3xl font-bold md:text-4xl"
                  id={getLinkOfText(dict.sections[3].heading)}
                >
                  {dict.sections[3].heading}
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                  {dict.sections[3].paragraphs[0]}
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                  {dict.sections[3].paragraphs[1]}
                </p>

                <p className="leading-8 text-gray-300">
                  {dict.sections[3].paragraphs[2]}
                </p>
              </div>

              <img
                src={dict.sections[3].image}
                alt={dict.sections[3].imageAlt}
                className="rounded-2xl border border-white/10"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-8 text-center">
          <h2
            className="mb-8 text-4xl font-bold"
            id={getLinkOfText(dict.sections[4].heading)}
          >
            {dict.sections[4].heading}
          </h2>

          <p className="text-xl leading-9 text-gray-300">
            {dict.sections[4].paragraphs[0]}
          </p>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-10 text-center md:p-14">
            <h3 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Start?
            </h3>

            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300">
              {dict.callToAction}
            </p>

            <a
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Get a Free Consultation
            </a>
          </div>
        </section>
      </article>
      <ArticleSocials article={dict} />
    </>
  );
};

export default Page;
