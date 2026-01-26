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
      <div className="lg: mt-10 mb-8 flex w-full flex-col flex-row items-end justify-between lg:mt-0 lg:mb-16">
        <div className="items start flex w-full flex-col gap-y-3 lg:w-auto lg:gap-y-5">
          <span className="tracking-tighter">• {subcategories.fewWords}</span>
          <h2 className="4xl-text-6xl font-inter 4xl:max-w-2xl w-full max-w-xs pr-10 text-2xl font-medium text-balance md:text-3xl lg:max-w-xl lg:pr-0 xl:text-5xl">
            {subcategories.title}
          </h2>
        </div>
        <PlayButton
          content={subcategories.getInTouch}
          width={200}
          color={{ text: "text-background", bg: "bg-secondary" }}
          className="font-inter my-6 lg:my-0 lg:px-6"
        />
      </div>
      <div className="grid grid-cols-1 grid-rows-6 gap-x-8 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3">
        {subcategoriesArr.map((category, i) => {
          const Icon = icons[i];
          return (
            <div
              key={i}
              className="mb-8 flex flex-col gap-2 border-b-[0.2px] border-solid border-gray-300 pb-8 lg:mb-12 lg:pb-12"
            >
              <div className="flex flex-row items-center gap-2">
                <Icon className="bg-secondary text-background rounded-sm text-2xl" />
                <p className="text-2xl font-bold">
                  {subcategories[category].title}
                </p>
              </div>
              <p className="w-full max-w-sm text-sm">
                {subcategories[category].description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
