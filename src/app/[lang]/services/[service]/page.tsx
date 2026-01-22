import { Tecnologies } from "@components/tecnologies/Tecnologies";
import { PlayButton } from "@lib/components/playButton/PlayButton";
import { TwoColumnImageContent } from "@lib/components/twoColumnImageContent/TwoColumnImageContent";
import { BigText } from "@lib/components/bigText/BigText";
import { CompleteImage } from "@lib/components/completeImage/CompleteImage";
import { TwoColumnText } from "@lib/components/twoColumnText/TwoColumnText";
import { getDictionary } from "@lib/helpers/getDictionary";
import { Subcategories } from "@components/subcategories/Subcategories";
import { TranslationProvider } from "@/src/_providers/translationProvider";

const Page = async ({
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string; service: string }>;
}>) => {
  const { lang, service } = await params;
  const dict = await getDictionary(lang, "services");
  console.log(dict.bigText);

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
        <CompleteImage src="/assets/complete-image.webp" />
        <BigText text={dict.bigText} />
        <TwoColumnImageContent
          rightImage="/assets/complete-image.webp"
          leftText={
            <div className="flex flex-col justify-center gap-9 pb-5 lg:px-[50px] lg:pb-0">
              <span className="text-sm">
                • {dict[service].explanation.fewWords}
              </span>
              <p className="text-3xl font-bold">
                {dict[service].explanation.title}
              </p>
              <p className="text-lg font-extralight">
                {dict[service].explanation.description}
              </p>
              <PlayButton
                content={dict[service].explanation.startProject}
                width={180}
                color={{ text: "text-background", bg: "bg-secondary" }}
                className="font-inter"
              />
            </div>
          }
        />
        <TwoColumnImageContent
          rightImage="/assets/talk.webp"
          leftText={
            <div className="flex flex-col justify-center gap-9 pb-5 lg:px-[50px] lg:pb-0">
              <p className="text-3xl font-bold">
                {dict[service].inhouse.title}
              </p>
              <p className="text-lg font-extralight">
                {dict[service].inhouse.description}
              </p>
            </div>
          }
          rotate
        />
        <Tecnologies />
        <Subcategories />
      </div>
    </TranslationProvider>
  );
};

export default Page;
