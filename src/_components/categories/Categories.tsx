"use client";
import { useGSAP } from "@gsap/react";
import { PlayButton } from "@lib/components/playButton/PlayButton";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useWindowSize } from "@/src/_hooks/windowSize";
import { useTranslations } from "@/src/_providers/translationProvider";

gsap.registerPlugin(ScrollTrigger);

const serviceCategories = [
  {
    title: "Edelman’s Coins",
    subtitle: "(USA)",
    description:
      "Front-end development, animations, optimization, web accessibility.",
    link: "",
  },
  {
    title: "Edelman’s Coins",
    subtitle: "(USA)",
    description:
      "Front-end development, animations, optimization, web accessibility.",
    link: "",
  },
  {
    title: "Edelman’s Coins",
    subtitle: "(USA)",
    description:
      "Front-end development, animations, optimization, web accessibility.",
    link: "",
  },
  {
    title: "Edelman’s Coins",
    subtitle: "(USA)",
    description:
      "Front-end development, animations, optimization, web accessibility.",
    link: "",
  },
  {
    title: "Edelman’s Coins",
    subtitle: "(USA)",
    description:
      "Front-end development, animations, optimization, web accessibility.",
    link: "",
  },
];

export const Categories = () => {
  const ref = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const { categories } = useTranslations();

  useGSAP(
    () => {
      if (windowSize < 1024) return;
      const scrollDistance = 3350 - windowSize;

      gsap.to(panelRef.current, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 10svh",
          scrub: true,
          pin: true,
        },
      });
    },
    { dependencies: [windowSize], scope: ref, revertOnUpdate: true },
  );

  return (
    <section
      ref={ref}
      className="font-inter mt-20 flex w-full overflow-hidden px-2 py-[10svh] sm:px-7 lg:h-[930px] lg:px-3 xl:px-4"
    >
      <div className="categories-container h-[80svh]">
        <div
          ref={panelRef}
          className="bg-surface-container-low flex h-full w-full flex-col overflow-hidden rounded-[20px] lg:flex-row"
        >
          <header className="flex flex-col gap-y-6 px-[25px] py-[30px] lg:w-[850px] lg:min-w-[850px] lg:justify-between lg:pr-[180px] lg:pl-[50px]">
            <div>
              <p className="mb-[20px] border-b-1 text-xl lg:mb-[40px] lg:border-b-0">
                {categories.title}
              </p>
              <h2 className="indent-[50px] text-4xl">{categories.subtitle}</h2>
            </div>
            <span className="text-md flex indent-[50px] font-light lg:w-[400px] lg:self-end">
              {categories.description}
            </span>

            <PlayButton
              content={"Contáctanos hoy"}
              width={155}
              color={{ text: "text-background", bg: "bg-secondary" }}
              className="mt-5 lg:self-end"
            />
            <p>{categories.extra}</p>
          </header>
          <section className="flex flex-col lg:flex-row">
            {serviceCategories.map((data, index) => (
              <div
                className="group border-on-surface hover:bg-on-tertiary-container flex flex-col gap-y-6 border-t-1 px-[25px] py-[30px] transition-all duration-300 ease-in-out lg:w-[30rem] lg:justify-between lg:border-t-0 lg:border-l-1 lg:px-[50px] lg:pb-[100px]"
                key={index}
              >
                <h3 className="text-8xl lg:text-[200px]">{index + 1}</h3>
                <div className="flex flex-col gap-y-4">
                  <p className="text-4xl">{data.title}</p>
                  <p className="text-lg">{data.subtitle}</p>
                  <p className="text-md">{data.description}</p>
                  <a
                    href={data.link}
                    className="bg-secondary flex h-[50px] w-[50px] items-center justify-center rounded-full group-hover:scale-110 lg:scale-0 lg:self-end lg:transition-transform lg:duration-300 lg:ease-[cubic-bezier(0.215,0.61,0.355,1)]"
                  >
                    <GoArrowUpRight className="text-background h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};
