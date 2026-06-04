import { Article } from "@lib/components/article/Article";
import { getDictionary } from "@lib/helpers/getDictionary";
import { TranslationProvider } from "@providers/translationProvider";
import Link from "next/link";

export interface ArticleProps {
  title: string;
  image: string;
  read_time: string;
  link: string;
  author: { role: string; name: string; image: string };
}

const Blog = async ({
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}>) => {
  const { lang } = await params;
  const dict = await getDictionary(lang, "blog");
  const articles = dict.articles;

  const articlesType = Object.values(
    articles as Record<string, ArticleProps[]>,
  ).flat();

  const articleList = articlesType.map(
    (article: ArticleProps, index: number) => (
      <Article key={index + article.title} article={article} />
    ),
  );

  return (
    <TranslationProvider dict={dict}>
      <div className="font-inter 3xl:px-40 4xl:px-60 flex flex-col items-center justify-center gap-20 px-4 pt-5 sm:px-6 lg:pt-20 xl:px-12 2xl:px-20">
        <div className="flex w-full flex-col">
          <div className="flex items-center gap-2 pt-2 font-bold whitespace-nowrap lg:hidden">
            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
            <h1 className="font-light">{dict.title}</h1>
          </div>
          <div className="flex w-full flex-wrap gap-x-2 lg:gap-x-8 lg:gap-y-4">
            <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-20">
              <div className="hidden items-center gap-2 pt-2 font-bold whitespace-nowrap lg:flex">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                <h1 className="font-light">{dict.title}</h1>
              </div>
              <div className="flex gap-1">
                <Link
                  className="text-3xl text-white transition-colors duration-200 hover:text-white md:text-4xl xl:text-5xl"
                  href="/blog"
                >
                  {dict.categories.explore}
                </Link>
                <span className="text-sm">
                  {Object.values(articles).flat().length}
                </span>
              </div>
            </div>
            <div className="flex gap-1">
              <Link
                className="text-3xl text-gray-400 transition-colors duration-200 hover:text-white md:text-4xl xl:text-5xl"
                href="/blog/software"
              >
                {dict.categories.software}
              </Link>
              <span className="text-sm">{articles.software?.length || 0}</span>
            </div>
            <div className="flex gap-1">
              <Link
                className="text-3xl text-gray-400 transition-colors duration-200 hover:text-white md:text-4xl xl:text-5xl"
                href="/blog/design"
              >
                {dict.categories.design}
              </Link>
              <span className="text-sm">{articles.design?.length || 0}</span>
            </div>
            <div className="flex gap-1">
              <Link
                className="text-3xl text-gray-400 transition-colors duration-200 hover:text-white md:text-4xl xl:text-5xl"
                href="/blog/branding"
              >
                {dict.categories.branding}
              </Link>
              <span className="text-sm">{articles.branding?.length || 0}</span>
            </div>
            <div className="flex gap-1">
              <Link
                className="text-3xl text-gray-400 transition-colors duration-200 hover:text-white md:text-4xl xl:text-5xl"
                href="/blog/culture"
              >
                {dict.categories.culture}
              </Link>
              <span className="text-sm">{articles.culture?.length || 0}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-[2%] gap-y-8">{articleList}</div>
      </div>
    </TranslationProvider>
  );
};

export default Blog;
