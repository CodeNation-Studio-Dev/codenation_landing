import { ShowUsGallery } from "@/src/_components/showUsGallery/ShowUsGallery";
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
      <section className="flex w-full max-w-[1740px] justify-center pt-20 pb-[26px] lg:pb-[200px] xl:mx-auto">
        <div className="w-full px-2 text-3xl font-semibold sm:text-4xl md:text-5xl lg:px-[72px] lg:text-6xl xl:text-8xl">
          <h1>{dict.title}</h1>
          <h2>{dict.title_extra}</h2>
        </div>
      </section>
      <ShowUsGallery />
    </TranslationProvider>
  );
};

export default AboutUs;
