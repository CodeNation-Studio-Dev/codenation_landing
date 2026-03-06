import type { Metadata } from "next";
import { PlayButton } from "@lib/components/playButton/PlayButton";
import { TwoColumnImageContent } from "@lib/components/twoColumnImageContent/TwoColumnImageContent";
import { BigText } from "@lib/components/bigText/BigText";
import { CompleteImage } from "@lib/components/completeImage/CompleteImage";
import { TwoColumnText } from "@lib/components/twoColumnText/TwoColumnText";
import { getDictionary } from "@lib/helpers/getDictionary";
import { TranslationProvider } from "@providers/translationProvider";
import { servicesStructure } from "@/src/config/servicesStructure";
import Link from "next/link";

const images = {
  webpage: {
    main: "/assets/software-main.png",
    secondary: "/assets/software-secondary.png",
    tertiary: "/assets/software-tertiary.png",
  },
  mvp: {
    main: "/assets/mvp-main.png",
    secondary: "/assets/mvp-secondary.png",
    tertiary: "/assets/mvp-tertiary.png",
  },
  design: {
    main: "/assets/automatization-main.png",
    secondary: "/",
    tertiary: "/",
  },
  automatization: {
    main: "/assets/automatization-main.png",
    secondary: "/assets/automatization-secondary.png",
    tertiary: "/assets/automatization-tertiary.png",
  },
  cloud: {
    main: "/assets/cloud-main.png",
    secondary: "/assets/cloud-secondary.png",
    tertiary: "/assets/cloud-tertiary.png",
  },
};

type ServiceKey = "webpage" | "mvp" | "design" | "automatization" | "cloud";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; service: ServiceKey }>;
}): Promise<Metadata> {
  const { lang, service } = await params;

  return {
    alternates: {
      canonical: `/${lang}/services/${service}`,
      languages: {
        "en-US": `/en-US/services/${service}`,
        "es-MX": `/es-MX/services/${service}`,
      },
    },
  };
}

const Page = async ({
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    lang: string;
    service: ServiceKey;
  }>;
}>) => {
  const { lang, service } = await params;
  const dict = await getDictionary(lang, "services");
  const sections = servicesStructure[service];

  return (
    <TranslationProvider dict={dict}>
      <div className="flex flex-col gap-20 px-2 pt-20 lg:px-0">
        <TwoColumnText
          leftText={dict[service].main.title}
          rightText={dict[service].main.description}
          leftClassName="text-5xl lg:text-7xl text-center md:text-left mb-6 lg:mb-0"
          rightClassName="text-lg font-thin"
          topHidden={false}
        />
        <CompleteImage src={images[service].main} />
        <BigText text={dict[service].bigText} />
        <TwoColumnImageContent
          rightImage={images[service].secondary}
          leftText={
            <div className="flex flex-col justify-center gap-9 pb-5 lg:px-[50px] lg:pb-0">
              <span className="text-sm">
                • {dict[service].explanation.fewWords}
              </span>
              <p className="text-3xl font-bold">
                {dict[service].explanation.title}
              </p>
              <p className="text-lg font-extralight whitespace-pre-line">
                {dict[service].explanation.description}
              </p>
              <Link
                href="https://www.linkedin.com/in/francisco-javier-luna-figueroa/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <PlayButton
                  content={dict[service].explanation.startProject}
                  width={180}
                  color={{ text: "text-background", bg: "bg-secondary" }}
                  className="font-inter"
                />
              </Link>
            </div>
          }
        />
        <TwoColumnImageContent
          rightImage={images[service].tertiary}
          leftText={
            <div className="flex flex-col justify-center gap-9 pb-5 lg:px-[50px] lg:pb-0">
              <p className="text-3xl font-bold">
                {dict[service].inhouse.title}
              </p>
              <p className="text-lg font-extralight whitespace-pre-line">
                {dict[service].inhouse.description}
              </p>
            </div>
          }
          rotate
        />
        {sections.map((section) => {
          const Component = section.component;
          return <Component key={section.key} service={dict[service]} />;
        })}
      </div>
    </TranslationProvider>
  );
};

export default Page;
