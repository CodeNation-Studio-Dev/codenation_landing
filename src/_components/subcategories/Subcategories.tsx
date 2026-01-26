"use client";
import { useTranslations } from "@providers/translationProvider";
import { PlayButton } from "@lib/components/playButton/PlayButton";
import { TiPointOfInterest } from "react-icons/ti";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { HiArrowsExpand } from "react-icons/hi";
import { RiLayout3Line } from "react-icons/ri";
import { PiStrategyBold } from "react-icons/pi";

const icons = [
  TiPointOfInterest,
  RiShoppingBag4Fill,
  MdDesignServices,
  HiArrowsExpand,
  RiLayout3Line,
  PiStrategyBold,
];

const subcategoriesArr = [
  "webDesign",
  "eCommerce",
  "uxDesign",
  "responsiveDesign",
  "wireframes",
  "strategy",
];

export const Subcategories = () => {
  const { subcategories } = useTranslations();
  return (
    <section className="3xl:px-40 4xl:px-60 bg-surface-container-low w-full px-2 py-10 sm:px-6 lg:py-16 xl:px-12 2xl:px-20 2xl:py-24">
      <div className="mt-10 mb-8 flex w-full flex-col items-start px-2 lg:mt-0 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:px-3 xl:px-4">
        <div className="items start flex w-full flex-col gap-y-3 lg:w-auto lg:gap-y-5">
          <span className="tracking-tighter">• {subcategories.fewWords}</span>
          <h2 className="4xl-text-6xl font-inter 4xl:max-w-2xl w-full max-w-xs pr-10 text-2xl font-semibold text-balance text-white md:text-4xl lg:max-w-xl lg:pr-0 xl:text-5xl">
            {subcategories.title}
          </h2>
        </div>
        <PlayButton
          content={subcategories.getInTouch}
          width={200}
          color={{ text: "text-background", bg: "bg-secondary" }}
          className="font-inter mt-6 font-semibold lg:my-0 lg:px-6"
        />
      </div>
      <div className="grid w-full grid-cols-1 grid-rows-6 gap-x-8 px-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:px-3 xl:px-4">
        {subcategoriesArr.map((category, i) => {
          const Icon = icons[i];
          return (
            <div
              key={i}
              className="mb-8 flex flex-col border-b border-solid border-b-[var(--color-outline-variant)] pb-8 lg:mb-12 lg:pb-12"
            >
              <div className="mb-3 flex w-full items-center gap-x-4">
                <div className="bg-secondary 4xl:w-12 4xl:h-12 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl">
                  <Icon className="text-background 4xl:text-4xl flex-shrink-0 fill-current text-3xl" />
                </div>
                <p className="4xl:text-4xl font-inter text-2xl font-semibold tracking-tighter text-balance text-white xl:text-3xl">
                  {subcategories[category].title}
                </p>
              </div>
              <p className="font-inter text-inverse-surface w-full max-w-sm text-base leading-7 font-light tracking-tight xl:text-lg">
                {subcategories[category].description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
