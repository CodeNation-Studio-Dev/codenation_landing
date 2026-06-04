import { getDictionary } from "@lib/helpers/getDictionary";
import { TranslationProvider } from "@providers/translationProvider";
import { ArticleHeader } from "@components/articleLayout/ArticleHeader";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string; lang: string }>;
}) => {
  const { lang, category } = await params;
  const dict = await getDictionary(lang, "blog");

  return (
    <div className="flex flex-col">
      <TranslationProvider dict={dict}>
        <ArticleHeader category={category} />
      </TranslationProvider>
      <div className="3xl:px-40 4xl:px-60 mt-20 flex w-full flex-col items-start px-2 sm:px-6 lg:flex-row lg:items-stretch xl:px-12 2xl:px-20">
        {children}
      </div>
    </div>
  );
};

export default Layout;
