import { getDictionary } from "@/src/_lib/getDictionary";
import { TranslationProvider } from "@/src/_providers/translationProvider";
import { Footer } from "@components/footer/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "es-MX" | "en-US" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "home");

  return (
    <TranslationProvider dict={dict}>
      <Footer />
    </TranslationProvider>
  );
}
