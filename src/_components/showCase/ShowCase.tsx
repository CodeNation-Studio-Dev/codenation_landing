"use client";
import { useState } from "react";
import "./ShowCase.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useTranslations } from "@/src/_providers/translationProvider";
import Link from "next/link";

interface VideoProps {
  src: string;
  title: string;
  link: string;
  subtitle: string;
  subtitleLink: string;
  features: string;
}

const videos: VideoProps[] = [
  {
    src: "https://gsap.com/community/uploads/monthly_2025_01/trimmed.mp4.b3ee24a03e178b0c306dba74ff29e698.mp4",
    title: "GSAP Showreel 2024",
    link: "https://www.youtube.com/watch?v=ic-bHSoIUaA",
    subtitle: "Watch Previous Showreels",
    subtitleLink:
      "https://youtube.com/playlist?list=PLLLrVKlAVicLCG0u8WkwLueVU40z0U456&si=FtIszRBdaARjuaAA",
    features: "Watch Previous Showreels",
  },
  {
    src: "https://gsap.com/community/uploads/monthly_2025_06/mb-gsap-sm.mp4.a8bed83d69ab830e1a6368832644e176.mp4",
    title: "Michael Brown / Jordan Gilroy",
    link: "https://www.mbrown.work/",
    subtitle: "ScrollTrigger, Flip, SplitText",
    subtitleLink: "",
    features: "ScrollTrigger, Flip, SplitText",
  },
  {
    src: "https://gsap.com/community/uploads/monthly_2025_06/gsap-vid-flowfest-sm.mp4.3b5bc1bbbf8658fdfa01f6938622baf4.mp4",
    title: "Flowfest 2025 / Osmo",
    link: "https://www.flowfest.co.uk/",
    subtitle: "ScrollTrigger, DrawSVG, Draggable, Text, CustomEase",
    subtitleLink: "",
    features: "ScrollTrigger, DrawSVG, Draggable, Text, CustomEase",
  },
  {
    src: "https://gsap.com/community/uploads/monthly_2025_06/phantom-site-gsap-vid-2_22.mp4.def6189fa924b7769c0a0f52f2f748a9.mp4",
    title: "Phantom Land / Agency",
    link: "https://www.phantom.land/",
    subtitle: "CustomEase, useGSAP",
    subtitleLink: "",
    features: "CustomEase, useGSAP",
  },
  {
    src: "https://gsap.com/community/uploads/monthly_2025_05/gasp20submission20videos.mp4.6e16fb015e57976b93e6be4f0d1b58d1.mp4",
    title: "Navigate / Resn",
    link: "https://nvg8.io/",
    subtitle: "ScrollTrigger, SplitText",
    subtitleLink: "",
    features: "ScrollTrigger, SplitText",
  },
  {
    src: "https://gsap.com/community/uploads/monthly_2025_05/Meet-Your-Legend-GSAP-sm.mp4.529ab43da23e9add22f2714875611e79.mp4",
    title: "Meet Your Legend / Beaucoup",
    link: "https://meetyourlegend.com/",
    subtitle: "ScrollTrigger",
    subtitleLink: "",
    features: "",
  },
];
export const ShowCase = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const { showCase } = useTranslations();

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const getItemStyle = (index: number) => {
    const positionBase = -1 * ((activeIndex - 1) * 100);

    if (index === activeIndex) {
      return {
        transform: `translateX(${positionBase + 0.005}%) translate3d(0px, 0px, 0px)`,
        transition: "transform 0.8s ease-in-out",
      };
    }

    if (index < activeIndex) {
      return {
        transform: `translateX(${positionBase + 0.004}%) translate3d(0px, 0px, 0px)`,
        transition: "transform 0.8s ease-in-out",
      };
    }

    return {
      transform: `translateX(${positionBase + 0.006}%) translate3d(0px, 0px, 0px)`,
      transition: "transform 0.8s ease-in-out",
    };
  };

  const getItemClass = (index: number) =>
    index === activeIndex
      ? "showcase__item--active relative w-[33.33%] shrink-[0]"
      : "relative w-[33.33%] shrink-[0]";

  const getTitleClass = (index: number) =>
    index === activeIndex
      ? "translate-y-0 py-1.5 [grid-area:1/1] transition-transform duration-800 ease-out"
      : "translate-y-[100%] py-1.5 [grid-area:1/1] transition-transform duration-300 ease-in-out";

  const getSubtitleClass = (index: number) =>
    index === activeIndex
      ? "translate-y-0 flex pt-0.5 text-sm [grid-area:1/1] items-center transition-transform duration-800 ease-out"
      : "flex translate-y-[-100%] pt-0.5 text-sm [grid-area:1/1] items-center transition-transform duration-300 ease-in-out";

  return (
    <section className="relative overflow-hidden pt-20 pb-20">
      <div className="relative z-2">
        <h3 className="font-inter pl-[6vw] text-6xl font-bold sm:text-7xl xl:text-8xl">
          {showCase.title}
        </h3>
      </div>
      <div className="mx-[-100%] mt-[-.93rem] flex w-[300%] flex-col items-center sm:mx-[-50%] sm:w-[200%] xl:mt-[-1.5rem]">
        <div className="relative mb-5 flex w-full items-center overflow-hidden">
          {videos.map((data, index) => (
            <div
              className={getItemClass(index)}
              style={getItemStyle(index)}
              key={index}
            >
              <div className="relative h-0 origin-top scale-[.975] overflow-hidden rounded-lg pb-[56%]">
                <video
                  className="object-cover"
                  loop
                  autoPlay
                  muted
                  preload="metadata"
                >
                  <source src={data.src} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-[33.33%] px-6">
          <div className="mr-24 mb-0.5 grid overflow-hidden text-xl">
            {videos.map((data, index) => (
              <p className={getTitleClass(index)} key={index}>
                <a href={data.link} aria-hidden="true">
                  {data.title}
                </a>
              </p>
            ))}
          </div>

          <div className="mb-8 grid overflow-hidden pr-24">
            {videos.map((data, index) => (
              <p
                className={getSubtitleClass(index)}
                aria-hidden="true"
                key={index}
              >
                <svg
                  className="max-w-1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 27 78"
                  aria-hidden="true"
                >
                  <path
                    fill="#FFFCE1"
                    d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
                  ></path>
                </svg>

                <Link href={data.subtitleLink}>{data.subtitle}</Link>
                <svg
                  className="max-w-1.5 rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 27 78"
                  aria-hidden="true"
                >
                  <path
                    fill="#FFFCE1"
                    d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
                  ></path>
                </svg>
              </p>
            ))}
          </div>

          <Link
            href="/showcases"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-amber-50 px-6 py-3.5 sm:w-fit"
          >
            <span className="button__label">{showCase.explore}</span>
          </Link>

          <div className="absolute top-0 right-6 flex sm:top-auto sm:bottom-0">
            <button
              className="prev flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full border-2 border-amber-50 p-0"
              aria-label="Previous"
              data-block="button"
              onClick={handlePrev}
            >
              <FaArrowLeftLong />
            </button>

            <button
              className="next ml-3 flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full border-2 border-amber-50 p-0"
              aria-label="Next"
              data-block="button"
              onClick={handleNext}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
