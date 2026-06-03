import Calendar from "@/src/_components/contactUs/contactMethod/Calendar";
import CallOrMail from "@/src/_components/contactUs/contactMethod/CallOrMail";
import ContactForm from "@/src/_components/contactUs/contactMethod/Form/Form";
import { getDictionary } from "@/src/_lib/helpers/getDictionary";
import { TranslationProvider } from "@/src/_providers/translationProvider";

const Page = async ({
  params,
  searchParams,
}: Readonly<{
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ election: string }>;
}>) => {
  const { lang } = await params;
  const { election } = await searchParams;
  console.log(election);
  const dict = await getDictionary(lang, "contact");
  return (
    <TranslationProvider dict={dict}>
      <div className="font-inter from-background via-primary/15 to-background flex min-h-[calc(100vh-82px)] w-full items-center justify-center bg-gradient-to-t p-4 md:p-8 lg:p-12">
        {election === "mail" ? (
          <ContactForm />
        ) : election === "call" ? (
          <Calendar />
        ) : (
          <CallOrMail />
        )}
      </div>
    </TranslationProvider>
  );
};

export default Page;
