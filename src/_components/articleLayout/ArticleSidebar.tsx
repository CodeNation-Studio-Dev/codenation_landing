"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const ArticleSidebar = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

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
            <div className="mt-5 px-5 text-sm">Contents</div>
            <div className="px-5 pb-5">
              <ul className="">
                <li className="relative mb-1 w-full translate-x-3 transform py-0.5 leading-tight transition-transform duration-500">
                  <div className="absolute top-0 -left-8 h-full w-1 bg-gray-600"></div>
                  <a
                    href="#about-madebyshape-1"
                    className="underline transition-none xl:hover:underline"
                  >
                    About MadeByShape
                  </a>
                </li>
                <li className="relative mb-1 w-full transform py-0.5 leading-tight transition-transform duration-500">
                  <div className="absolute top-0 -left-8 h-full w-1 bg-gray-600"></div>
                  <a
                    href='#&lt;strong-className="font-medium"&gt;what-we-actually-do&lt;/strong&gt;-2'
                    className="transition-none xl:hover:underline"
                  >
                    <strong className="font-medium">What we actually do</strong>
                  </a>
                </li>
                <li className="relative mb-1 w-full transform py-0.5 leading-tight transition-transform duration-500">
                  <div className="absolute top-0 -left-8 h-full w-1 bg-gray-600"></div>
                  <a
                    href="#branding:-more-than-a-logo-3"
                    className="transition-none xl:hover:underline"
                  >
                    Branding: more than a logo
                  </a>
                </li>
                <li className="relative mb-1 w-full transform py-0.5 leading-tight transition-transform duration-500">
                  <div className="absolute top-0 -left-8 h-full w-1 bg-gray-600"></div>
                  <a
                    href="#websites:-development,-design,-build-and-launch-properly-4"
                    className="transition-none xl:hover:underline"
                  >
                    Websites: development, design, build and launch properly
                  </a>
                </li>
                <li className="relative mb-1 w-full transform py-0.5 leading-tight transition-transform duration-500">
                  <div className="absolute top-0 -left-8 h-full w-1 bg-gray-600"></div>
                  <a
                    href="#organic-seo-and-content-writing-5"
                    className="transition-none xl:hover:underline"
                  >
                    Organic SEO and content writing
                  </a>
                </li>
                <li className="relative mb-1 w-full transform py-0.5 leading-tight transition-transform duration-500">
                  <div className="absolute top-0 -left-8 h-full w-1 bg-gray-600"></div>
                  <a
                    href="#hosting,-support-and-the-technical-bits-clients-don’t-want-to-worry-about-6"
                    className="transition-none xl:hover:underline"
                  >
                    Hosting, support and the technical bits clients don’t want
                    to worry about
                  </a>
                </li>
                <li className="relative mb-1 w-full transform py-0.5 leading-tight transition-transform duration-500">
                  <div className="absolute top-0 -left-8 h-full w-1 bg-gray-600"></div>
                  <a
                    href="#our-culture:-no-egos,-multiple-personalities-7"
                    className="transition-none xl:hover:underline"
                  >
                    Our culture: no egos, multiple personalities
                  </a>
                </li>
                <li className="relative mb-1 w-full transform py-0.5 leading-tight transition-transform duration-500">
                  <div className="absolute top-0 -left-8 h-full w-1 bg-gray-600"></div>
                  <a
                    href="#who-we-work-with-and-why-clients-refer-us-8"
                    className="transition-none xl:hover:underline"
                  >
                    Who we work with and why clients refer us
                  </a>
                </li>
                <li className="relative mb-1 w-full transform py-0.5 leading-tight transition-transform duration-500">
                  <div className="absolute top-0 -left-8 h-full w-1 bg-gray-600"></div>
                  <a
                    href="#so,-that’s-shape-in-a-nutshell-9"
                    className="transition-none xl:hover:underline"
                  >
                    So, that’s Shape in a nutshell
                  </a>
                </li>
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
            <div className="">18 min read</div>
          </div>
        </div>
      </div>
    </div>
  );
};
