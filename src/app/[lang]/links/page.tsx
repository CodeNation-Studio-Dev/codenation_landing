import type { Metadata } from "next";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { getDictionary } from "@lib/helpers/getDictionary";
import { linkInBioLinks, linkInBioSocials } from "@config/linkInBio";

type LinksPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: LinksPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang, "links");

  return {
    metadataBase: new URL("https://codenation-studio.com"),
    title: dict.metadata.title,
    description: dict.metadata.description,
    alternates: {
      canonical: `/${lang}/links`,
      languages: {
        "en-US": "/en-US/links",
        "es-MX": "/es-MX/links",
        "x-default": "/en-US/links",
      },
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: `https://codenation-studio.com/${lang}/links`,
      siteName: "CodeNation Studio",
      locale: lang === "es-MX" ? "es-MX" : "en-US",
      type: "website",
      images: [
        {
          url: "https://codenation-studio.com/assets/opengraph-image.png",
          width: 512,
          height: 512,
          alt: "CodeNation Studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ["https://codenation-studio.com/assets/opengraph-image.png"],
    },
  };
}

export default async function LinksPage({ params }: LinksPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "links");
  const year = new Date().getFullYear();

  return (
    <main className="-mx-2 w-[calc(100%+1rem)] relative min-h-svh overflow-hidden bg-[radial-gradient(circle_at_50%_-10%,rgb(155_214_121_/_0.18),transparent_34rem),radial-gradient(circle_at_100%_70%,rgb(209_239_67_/_0.08),transparent_24rem),#11140e] font-inter text-[#f5f8ec] before:pointer-events-none before:fixed before:top-[9%] before:left-[-14rem] before:z-0 before:h-72 before:w-72 before:rounded-full before:border before:border-[#9bd6791f] before:shadow-[0_0_0_2rem_#9bd67908,0_0_0_4rem_#9bd67905] after:pointer-events-none after:fixed after:right-[-14rem] after:bottom-[15%] after:z-0 after:h-72 after:w-72 after:rounded-full after:border after:border-[#d1ef431f] after:shadow-[0_0_0_2rem_#d1ef4308,0_0_0_4rem_#d1ef4305] motion-reduce:[&_*]:transition-none">
      <div className="relative z-1 mx-auto w-[calc(100%-2rem)] max-w-xl py-14 sm:py-20">
        <section
          className="mb-9 grid justify-items-center text-center"
          aria-labelledby="profile-title"
        >
          <div className="relative mb-8 h-15 w-[min(75vw,17rem)]">
            <Image
              src="/assets/white-logo.png"
              alt="CodeNation Studio logo"
              fill
              priority
              sizes="272px"
            />
          </div>
          <p className="mb-3 font-mono text-[0.7rem] font-bold tracking-[0.18em] text-[#9bd679] uppercase">
            {dict.profile.eyebrow}
          </p>
          <h1
            className="m-0 text-[clamp(1.7rem,7vw,2.4rem)] font-bold tracking-[-0.05em]"
            id="profile-title"
          >
            CodeNation Studio
          </h1>
          <p className="mt-3.5 max-w-100 text-[0.95rem] leading-[1.65] text-[#aeb8a4]">
            {dict.profile.description}
          </p>
        </section>

        <nav className="grid gap-3" aria-label={dict.links.title}>
          {linkInBioLinks.map((link) => {
            const Icon = link.icon;
            const content = dict.links[link.key];
            const href = link.href.replace("/en-US", `/${lang}`);

            return (
              <a
                className="group flex min-h-[4.7rem] items-center gap-4 rounded-[1.2rem] border border-[#f5f8ec1f] bg-[linear-gradient(105deg,rgb(39_47_33_/_0.92),rgb(28_34_25_/_0.82))] px-4 py-3 text-[#f5f8ec] no-underline shadow-[0_0.75rem_2rem_rgb(0_0_0_/_0.12)] transition duration-180 hover:-translate-y-0.5 hover:border-[#9bd679a6] hover:bg-[linear-gradient(105deg,rgb(53_69_42_/_0.96),rgb(34_43_29_/_0.92))] hover:shadow-[0_1rem_2.5rem_rgb(0_0_0_/_0.24)] focus-visible:outline-2 focus-visible:outline-[#d1ef43] focus-visible:outline-offset-4 sm:min-h-20 sm:px-5"
                href={href}
                key={link.key}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span
                  className="grid h-11 w-11 flex-none place-items-center rounded-[0.85rem] bg-[#9bd679] text-[#172012]"
                  aria-hidden="true"
                >
                  <Icon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.95rem] font-bold">
                    {content.label}
                  </span>
                  <span className="mt-0.5 block overflow-hidden font-mono text-[0.68rem] text-ellipsis whitespace-nowrap text-[#aeb8a4]">
                    {content.description}
                  </span>
                </span>
                <FaArrowUpRightFromSquare
                  className="text-[0.85rem] text-[#9bd679] transition-transform duration-180 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        {linkInBioSocials.length > 0 && (
          <section
            className="mt-11 text-center"
            aria-labelledby="social-title"
          >
            <h2
              className="mb-4 font-mono text-[0.65rem] tracking-[0.18em] text-[#aeb8a4] uppercase"
              id="social-title"
            >
              {dict.social.title}
            </h2>
            <div className="flex justify-center gap-3">
              {linkInBioSocials.map((social) => {
                const Icon = social.icon;
                const label = dict.social.labels[social.key];

                return (
                  <a
                    className="grid h-11.5 w-11.5 place-items-center rounded-full border border-[#f5f8ec26] text-[#f5f8ec] transition duration-180 hover:border-[#9bd679] hover:bg-[#9bd6791f] hover:text-[#9bd679] focus-visible:outline-2 focus-visible:outline-[#d1ef43] focus-visible:outline-offset-4"
                    href={social.href}
                    key={social.key}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </section>
        )}

        <footer className="mt-14 text-center font-mono text-[0.65rem] tracking-[0.08em] text-[#aeb8a4]">
          <p>CodeNation Studio</p>
          <p className="my-[0.45rem] text-[#9bd679]">{dict.footer.tagline}</p>
          <p>{dict.footer.copyright.replace("{year}", String(year))}</p>
        </footer>
      </div>
    </main>
  );
}
