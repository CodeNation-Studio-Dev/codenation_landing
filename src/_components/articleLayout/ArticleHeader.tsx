"use client";

import { useTranslations } from "@/src/_providers/translationProvider";
import { ArticleProps } from "@/src/app/[lang]/blog/page";
import { useParams, usePathname } from "next/navigation";

export const ArticleHeader = ({ category }: { category: string }) => {
  const pathname = usePathname();
  const slug = "/" + pathname.split("/").slice(-3).join("/");
  const { articles } = useTranslations();
  const article = articles[category].find(
    (article: ArticleProps) => article.link === slug,
  );

  return (
    <div className="font-inter relative flex flex-col pl-2 sm:pl-6 md:mt-20 xl:pl-12 2xl:pl-20">
      <div className="xs:h-96 4xl:min-h-200 flex h-64 md:min-h-140 md:pl-[31.2%] xl:min-h-160 2xl:pl-[31.2%]">
        <div className="relative h-full w-full self-end md:top-0 md:right-0 md:order-2 md:inline-flex md:h-full md:pr-0">
          <div className="bg-background absolute top-0 left-0 z-20 h-14 w-28 rounded-br-2xl md:hidden">
            <svg
              id="Layer_1"
              className="dark:text-grayDark-600 text-background absolute bottom-px -left-px z-30 h-10 w-10 translate-y-full transform fill-current"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 100 100"
            >
              <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
            </svg>
            <svg
              id="Layer_1"
              className="dark:text-grayDark-600 text-background absolute -top-px right-px z-30 h-10 w-10 translate-x-full transform fill-current"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 100 100"
            >
              <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
            </svg>
          </div>
          <img
            src="/assets/software-main.png"
            alt="Software Main"
            className="absolute top-0 left-0 h-full w-full object-cover object-center md:rounded-l-3xl md:rounded-r-none"
          />
        </div>
      </div>
      <div className="absolute z-20 order-2 hidden h-full flex-col items-start justify-between md:order-1 md:flex lg:w-[calc(100%-24px)] xl:w-[calc(100%-48px)] 2xl:w-[calc(100%-80px)]">
        <div className="relative mt-5 mb-5 md:mt-28">
          <svg
            id="Layer_1"
            className="3xl:left-4/16 dark:text-grayDark-600 text-background absolute top-1 left-5/16 z-30 mt-px -ml-px hidden h-8 w-8 -translate-y-20 rotate-180 transform fill-current md:block md:h-12 md:w-12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 100 100"
          >
            <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
          </svg>
          <svg
            id="Layer_1"
            className="3xl:left-4/16 dark:text-grayDark-600 text-background absolute bottom-0 left-5/16 z-30 mb-px -ml-px hidden h-8 w-8 translate-y-12 transform fill-current md:block md:h-12 md:w-12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 100 100"
          >
            <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
          </svg>
          <div className="md:dark:bg-grayDark-600 md:bg-background mt-2 inline-flex w-auto rounded-r-2xl pr-4 pl-4 md:-mt-7 md:w-7/16 md:rounded-r-3xl md:p-10 md:pr-6 md:pl-0">
            <div className="flex flex-col items-start space-y-3 lg:space-y-5">
              <div className="inline-flex items-center space-x-2 md:relative md:left-2 lg:absolute lg:top-10 lg:left-3">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <div className="text-sm font-light lg:text-base">
                  {article.read_time}
                </div>
              </div>
              <h1 className="4xl:text-6xl mt-5 text-5xl leading-none tracking-tight md:pl-2 md:text-4xl lg:indent-32 lg:text-5xl xl:text-6xl">
                {article.title}
              </h1>
            </div>
          </div>
        </div>
        <div className="pl-4 md:pl-2">
          <a
            href="https://madebyshape.co.uk/about/andy-golpys/"
            className="flex items-end space-x-3 lg:space-x-5"
          >
            <div className="relative inline-flex h-16 w-16 overflow-hidden rounded-lg lg:rounded-xl">
              <div className="relative w-full overflow-hidden">
                <picture className="absolute top-0 left-0 h-full w-full">
                  <source type="image/webp" sizes="100vw" />
                  <img
                    src={article.author.image}
                    sizes="100vw"
                    alt={article.author.name}
                    className="absolute top-0 left-0 h-full w-full object-cover object-top"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                </picture>
              </div>
            </div>
            <div className="leading-tight tracking-tight">
              <div className="dark:text-grayDark-100 mb-1 text-xs font-light">
                Written by
              </div>
              <div className="dark:text-grayDark-100">
                {article.author.name}
              </div>
              <div className="dark:text-grayDark-200 text-xs font-light lg:text-sm">
                {article.author.role}
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="my-5 flex flex-col items-start gap-5 md:hidden md:gap-8 lg:gap-12">
        <div className="flex flex-col items-start space-y-3 lg:space-y-5">
          <div className="flex items-center gap-2">
            <div className="dark:bg-grayDark-100 h-1.5 w-1.5 rounded-full bg-white"></div>
            <div className="dark:text-grayDark-100 text-sm font-light lg:text-base">
              {article.read_time}
            </div>
          </div>
          <h1 className="4xl:text-6xl dark:text-grayDark-100 text-4xl leading-none tracking-tight md:pl-2 md:text-3xl lg:indent-32 lg:text-4xl xl:indent-40 2xl:text-5xl">
            {article.title}
          </h1>
        </div>
        <div className="">
          <a
            href="https://madebyshape.co.uk/about/andy-golpys/"
            className="flex items-end space-x-3 lg:space-x-5"
          >
            <div className="relative inline-flex h-16 w-16 overflow-hidden rounded-lg lg:rounded-xl">
              <div className="relative w-full overflow-hidden">
                <picture className="absolute top-0 left-0 h-full w-full">
                  <source type="image/webp" sizes="100vw" />
                  <img
                    src={article.author.image}
                    sizes="100vw"
                    alt={article.author.name}
                    className="absolute top-0 left-0 h-full w-full object-cover object-top"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                </picture>
              </div>
            </div>
            <div className="leading-tight tracking-tight">
              <div className="dark:text-grayDark-100 mb-1 text-xs font-light">
                Written by
              </div>
              <div className="dark:text-grayDark-100">
                {article.author.name}
              </div>
              <div className="dark:text-grayDark-200 text-xs font-light lg:text-sm">
                {article.author.role}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
