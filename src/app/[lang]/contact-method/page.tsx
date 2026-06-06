import Calendar from "@components/contactUs/contactMethod/Calendar";
import CallOrMail from "@components/contactUs/contactMethod/CallOrMail";
import ContactForm from "@components/contactUs/contactMethod/Form/Form";
import { getDictionary } from "@lib/helpers/getDictionary";
import { TranslationProvider } from "@providers/translationProvider";

const Page = async ({
  params,
  searchParams,
}: Readonly<{
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ election: string }>;
}>) => {
  const { lang } = await params;
  const { election } = await searchParams;

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
