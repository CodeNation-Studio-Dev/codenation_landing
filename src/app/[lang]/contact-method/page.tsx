import MethodsContainer from "@/src/_components/contactUs/contactMethod/MethodsContainer";
import { getDictionary } from "@/src/_lib/helpers/getDictionary";
import { TranslationProvider } from "@/src/_providers/translationProvider";

const Page = async ({
  params,
}: Readonly<{ params: Promise<{ lang: string }> }>) => {
  const { lang } = await params;
  const dict = await getDictionary(lang, "contact");
  return (
    <TranslationProvider dict={dict}>
      <div className="font-inter from-background via-primary/15 to-background flex min-h-[calc(100vh-82px)] w-full items-center justify-center bg-gradient-to-t p-4 md:p-8 lg:p-12">
        <MethodsContainer />
      </div>
    </TranslationProvider>
  );
};

export default Page;
