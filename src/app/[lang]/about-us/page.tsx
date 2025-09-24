import { ShowUsGallery } from "@components/showUsGallery/ShowUsGallery";
import { TwoColumnText } from "@lib/components/twoColumnText/TwoColumnText";
import { getDictionary } from "@lib/helpers/getDictionary";
import { TranslationProvider } from "@providers/translationProvider";

const AboutUs = async ({
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) => {
  const { lang } = await params;
  const dict = await getDictionary(lang, "about");

  return (
    <TranslationProvider dict={dict}>
      <div className="px-4">
        <section className="flex w-full max-w-[1740px] justify-center pt-20 pb-[26px] lg:pb-[200px] xl:mx-auto">
          <div className="w-full text-3xl font-semibold sm:text-4xl md:text-5xl lg:px-[72px] lg:text-6xl xl:text-8xl">
            <h1>{dict.title}</h1>
            <h2>{dict.title_extra}</h2>
          </div>
        </section>
        <ShowUsGallery />
        <TwoColumnText
          rightText={dict.purpose.description}
          leftText={dict.purpose.title}
          className="w-full max-w-[1740px] pt-10 xl:mx-auto"
        />
        <TwoColumnText
          rightText={dict.solutions.description}
          leftText={dict.solutions.title}
          className="w-full max-w-[1740px] pt-10 xl:mx-auto"
          rotate
        />
      </div>
    </TranslationProvider>
  );
};

export default AboutUs;
