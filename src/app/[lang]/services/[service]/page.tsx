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
    main: "/assets/webpage-main.png",
    secondary: "/assets/webpage-secondary.png",
    tertiary: "/assets/webpage-tertiary.png",
  },
  mvp: {
    main: "/assets/mvp-main.png",
    secondary: "/assets/mvp-secondary.png",
    tertiary: "/assets/mvp-tertiary.png",
  },
  design: {
    main: "/assets",
    secondary: "/",
    tertiary: "/",
  },
  automatization: {
    main: "/assets",
    secondary: "/",
    tertiary: "/",
  },
  cloud: {
    main: "/assets",
    secondary: "/",
    tertiary: "/",
  },
};

const Page = async ({
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    lang: string;
    service: "webpage" | "mvp" | "design" | "automatization" | "cloud";
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
