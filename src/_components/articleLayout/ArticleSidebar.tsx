"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { TranslationDict } from "@providers/translationProvider";
import { getLinkOfText } from "@lib/helpers/textHandler";

gsap.registerPlugin(ScrollTrigger);

interface Section {
  heading: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

export const ArticleSidebar = ({ article }: { article: TranslationDict }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("");

  useGSAP(() => {
    article.sections.forEach((section: Section) => {
      ScrollTrigger.create({
        trigger: `#${getLinkOfText(section.heading)}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(getLinkOfText(section.heading)),
        onEnterBack: () => setActiveSection(getLinkOfText(section.heading)),
      });
    });
  });

  useGSAP(
    () => {
      if (!progressRef.current || !ref.current) return;

      gsap.to(progressRef.current, {
        width: "100%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    },
    { scope: ref, revertOnUpdate: true },
  );

  return (
    <div
      className="font-inter 4xl:max-w-lg mb-10 w-full px-2 lg:mb-0 lg:max-w-sm lg:px-3 xl:px-4"
      ref={ref}
    >
      <div className="sticky top-18 left-0 space-y-5">
        <div className="bg-surface-container w-full overflow-hidden rounded-2xl">
          <div className="flex flex-col items-start space-y-3">
            <div className="mt-5 px-5 text-sm">{article.sidebar.content}</div>
            <div className="px-5 pb-5">
              <ul className="">
                {article.sections.map((section: Section, index: number) => (
                  <li
                    key={section.heading + index}
                    className={`relative mb-1 w-full ${activeSection === getLinkOfText(section.heading) ? "translate-x-3" : ""} transform py-0.5 leading-tight transition-transform duration-500`}
                  >
                    <div className="absolute top-0 -left-8 h-full w-1 bg-gray-600"></div>
                    <a href={`#${getLinkOfText(section.heading)}`}>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden w-full lg:block">
          <div className="w-full">
            <div className="h-1 w-full rounded-full bg-gray-50">
              <div
                ref={progressRef}
                className="bg-secondary h-1 rounded-full"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
          <div className="mt-3 flex w-full items-center justify-center">
            <svg
              className="mr-2 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 0a256 256 0 110 512 256 256 0 110-512zm-24 120v148.8l10.7 7.1 96 64 20 13.3 26.6-39.9-20-13.3-85.3-56.8V96h-48v24z"></path>
            </svg>
            <div className="">{article.sidebar.read_time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
