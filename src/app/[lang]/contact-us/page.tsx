import SwiperButton from "@/src/_components/contactUs/swiperButton/SwiperButton";
import { getDictionary } from "@/src/_lib/helpers/getDictionary";
import { TranslationProvider } from "@/src/_providers/translationProvider";

const Page = async ({
  params,
}: Readonly<{ params: Promise<{ lang: string }> }>) => {
  const { lang } = await params;
  const dict = await getDictionary(lang, "contact");
  return (
    <TranslationProvider dict={dict}>
      <div
        className="from-background via-primary/15 to-background flex w-full items-center justify-center bg-gradient-to-t"
        style={{ minHeight: "calc(100vh - 82px)" }}
      >
        <SwiperButton />
      </div>
    </TranslationProvider>
  );
};

export default Page;
