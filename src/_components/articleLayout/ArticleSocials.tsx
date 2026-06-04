"use client";

import { TranslationDict } from "@/src/_providers/translationProvider";
import { useEffect, useState } from "react";

export const ArticleSocials = ({ article }: { article: TranslationDict }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div className="hidden w-auto px-2 lg:flex lg:px-3 xl:px-4">
      <div className="sticky top-18 left-0 flex h-fit w-full flex-col items-center">
        <div className="mb-2 text-sm text-gray-400 dark:text-gray-200">
          {article.share.title}
        </div>
        <div className="inline-flex flex-col items-start space-y-2">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-background inline-flex h-8 w-8 translate-z-0 items-center justify-center rounded-full duration-400 xl:hover:bg-gray-600 xl:hover:text-white"
          >
            <svg
              className="h-3.5 w-3.5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-background inline-flex h-8 w-8 translate-z-0 items-center justify-center rounded-full duration-400 xl:hover:bg-gray-600 xl:hover:text-white"
          >
            <div className="sr-only">{article.share.twitter}</div>
            <svg
              className="h-3.5 w-3.5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"></path>
            </svg>
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-background inline-flex h-8 w-8 translate-z-0 items-center justify-center rounded-full duration-400 xl:hover:bg-gray-600 xl:hover:text-white"
          >
            <div className="sr-only">{article.share.facebook}</div>
            <svg
              className="h-3.5 w-3.5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
            </svg>
          </a>

          <a
            onClick={() => navigator.clipboard.writeText(url)}
            rel="noopener noreferrer"
            className="bg-secondary text-background inline-flex h-8 w-8 translate-z-0 items-center justify-center rounded-full duration-400 xl:hover:bg-gray-600 xl:hover:text-white"
          >
            <div className="sr-only">{article.share.link}</div>
            <svg
              className="h-3.5 w-3.5 fill-current"
              width="20"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M580.2 267.3c56.2-56.2 56.2-147.4 0-203.6s-147.4-56.3-203.6 0L365.3 75l45.3 45.3 11.3-11.3c31.2-31.2 81.9-31.2 113.1 0s31.2 81.9 0 113.1L421.8 335.2c-31.2 31.2-81.9 31.2-113.1 0-25.6-25.6-30.3-64.3-13.8-94.6 1.8-3.4 3.9-6.7 6.3-9.8L250 192.4c-4.3 5.7-8.1 11.6-11.4 17.8-29.5 54.6-21.3 124.2 24.9 170.3 56.2 56.2 147.4 56.2 203.6 0l113.1-113.2zM59.8 244.7c-56.2 56.2-56.2 147.4 0 203.6s147.4 56.2 203.6 0l11.3-11.3-45.3-45.3-11.3 11.3c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1l113.2-113.1c31.2-31.2 81.9-31.2 113.1 0 25.6 25.6 30.3 64.3 13.8 94.6-1.8 3.4-3.9 6.7-6.3 9.8l51.2 38.4c4.3-5.7 8.1-11.6 11.4-17.8 29.5-54.6 21.3-124.2-24.9-170.3-56.2-56.2-147.4-56.2-203.6 0L59.8 244.7z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
