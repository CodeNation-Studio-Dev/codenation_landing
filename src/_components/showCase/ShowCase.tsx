"use client";
import { useEffect, useRef, useState } from "react";
import "./ShowCase.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useTranslations } from "@providers/translationProvider";
import Link from "next/link";
import { useParams } from "next/navigation";

interface VideoProps {
  videoId: string;
  title: string;
  link: string;
  subtitle: string;
  subtitleLink: string;
  features: string;
}

const videos: VideoProps[] = [
  {
    videoId: "lwEFX89iciM",
    title: "Casino Radar",
    link: "https://casinoradar.mx/",
    subtitle: "Datos en tiempo real con búsqueda por ubicación",
    subtitleLink: "",
    features: "ScrollTrigger, DrawSVG, Draggable, Text, CustomEase",
  },
  {
    videoId: "J4HPaBDWVLs",
    title: "Keskinube",
    link: "https://keskinube.com/",
    subtitle: "Plataforma SaaS full-stack para retail y e-commerce",
    subtitleLink: "",
    features: "ScrollTrigger, Flip, SplitText",
  },
  {
    videoId: "PTLOJ23gTLE",
    title: "Mercadomi",
    link: "",
    subtitle: "Plataforma para contratación de servicios",
    subtitleLink: "",
    features: "ScrollTrigger, SplitText",
  },
  {
    videoId: "dLSPu9wpnHw",
    title: "Joypack for Business",
    link: "https://rewards.joypack.com.mx/",
    subtitle: "Recompensas B2B con enfoque API-first",
    subtitleLink: "",
    features: "CustomEase, useGSAP",
  },
];
export const ShowCase = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const { showCase } = useTranslations();
  const { lang } = useParams();

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

  const videoRefs = useRef<HTMLIFrameElement[]>([]);
  const players = useRef<YT.Player[]>([]);

  useEffect(() => {
    if (window.YT && window.YT.Player) return;

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    type YouTubeWindow = Window & {
      onYouTubeIframeAPIReady?: () => void;
    };

    (window as YouTubeWindow).onYouTubeIframeAPIReady = () => {
      videoRefs.current.forEach((iframe, index) => {
        if (!iframe) return;

        players.current[index] = new window.YT.Player(iframe, {
          events: {
            onStateChange: (event: YT.OnStateChangeEvent) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(0, true);
                event.target.playVideo();
              }
            },
          },
        });
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = videoRefs.current.findIndex(
            (iframe) => iframe === entry.target,
          );

          const player = players.current[index];
          if (!player) return;

          if (entry.isIntersecting) {
            player.playVideo();
          } else {
            player.stopVideo();
          }
        });
      },
      { threshold: 0.5 },
    );

    videoRefs.current.forEach((iframe) => {
      if (iframe) observer.observe(iframe);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="showcase" className="relative overflow-hidden pt-20 pb-20">
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
              <div className="relative h-0 origin-top scale-[.975] overflow-hidden pb-[56%]">
                <iframe
                  ref={(element) => {
                    if (element) videoRefs.current[index] = element;
                  }}
                  className="pointer-events-none absolute h-full w-full rounded-4xl"
                  src={`https://www.youtube.com/embed/${data.videoId}?enablejsapi=1&autoplay=0&mute=1&loop=1&playlist=${data.videoId}&controls=0&rel=0&modestbranding=1&iv_load_policy=3&rel=0&vq=hd1080`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-[33.33%] px-6">
          <div className="mr-24 mb-0.5 grid overflow-hidden text-xl">
            {videos.map((data, index) => (
              <p className={getTitleClass(index)} key={index}>
                {data.link ? (
                  <Link
                    href={data.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-hidden="true"
                  >
                    {data.title}
                  </Link>
                ) : (
                  data.title
                )}
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
                {data.subtitleLink ? (
                  <Link href={data.subtitleLink}>{data.subtitle}</Link>
                ) : (
                  data.subtitle
                )}
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
            href={`${lang}/contact-us`}
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
