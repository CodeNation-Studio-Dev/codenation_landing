"use client";
import { ArticleProps } from "@/src/app/[lang]/blog/page";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export const Article = ({ article }: { article: ArticleProps }) => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <div
      className="flex w-full cursor-pointer flex-col gap-2 sm:w-[49%] lg:w-[32%]"
      onClick={() => {
        router.push(article.link);
      }}
    >
      <div className="relative flex w-full overflow-hidden">
        <img
          src={article.image}
          className="rounded-3xl object-cover"
          onMouseEnter={() => {
            ref.current?.classList.replace(
              "lg:-translate-x-full",
              "lg:translate-x-[20]",
            );
            ref.current?.classList.replace(
              "lg:translate-y-full",
              "lg:translate-y-[-20]",
            );
          }}
          onMouseLeave={() => {
            ref.current?.classList.replace(
              "lg:translate-x-[20]",
              "lg:-translate-x-full",
            );
            ref.current?.classList.replace(
              "lg:translate-y-[-20]",
              "lg:translate-y-full",
            );
          }}
        />
        <div
          ref={ref}
          className="bg-background absolute bottom-0 left-0 z-20 flex translate-x-[20] translate-y-[-20] transform rounded-tr-2xl pt-2 pr-2 transition-transform duration-400 lg:-translate-x-full lg:translate-y-full lg:rounded-tr-3xl lg:pt-3 lg:pr-3"
        >
          <svg
            className="text-background absolute top-px -left-px h-10 w-10 -translate-y-full rotate-180 transform fill-current lg:h-12 lg:w-12"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 100 100"
          >
            <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
          </svg>
          <svg
            className="text-background absolute right-px -bottom-px h-10 w-10 translate-x-full rotate-180 transform fill-current lg:h-12 lg:w-12"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 100 100"
          >
            <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
          </svg>
          <div className="relative h-12 w-12 transform-gpu overflow-hidden rounded-xl lg:h-16 lg:w-16 lg:rounded-2xl">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={article.author.image}
                sizes="100vw"
                alt="Author"
                className="absolute top-0 left-0 h-full w-full object-cover object-top"
                loading="lazy"
                width="200"
                height="200"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="flex items-center gap-1 text-sm font-light text-white lg:text-base">
          <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
          {article.read_time}
        </span>
        <p className="w-[80%] text-2xl sm:text-xl">{article.title}</p>
      </div>
    </div>
  );
};
