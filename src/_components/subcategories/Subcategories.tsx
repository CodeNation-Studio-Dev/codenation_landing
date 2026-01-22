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
    <section className="3xl:px-40 4xl:px-60 bg-surface-container-low rounded-2xl px-2 py-10 sm:px-6 lg:rounded-4xl lg:py-16 xl:px-12 2xl:px-60 2xl:py-24">
      <div className="flex flex-col lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="mb-7 inline-block">• {subcategories.fewWords}</span>
          <p className="w-full text-2xl font-bold text-balance md:w-1/2 md:text-3xl lg:w-2/3 xl:w-1/2 xl:text-4xl">
            {subcategories.title}
          </p>
        </div>
        <PlayButton
          content={subcategories.getInTouch}
          width={250}
          color={{ text: "text-background", bg: "bg-secondary" }}
          className="my-6 lg:my-0 lg:px-6"
        />
      </div>
      <div className="grid grid-cols-1 grid-rows-6 gap-x-8 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3">
        {subcategoriesArr.map((category, i) => {
          const Icon = icons[i];
          return (
            <div key={i} className="mb-8 flex flex-col gap-2 border-b-2 pb-8">
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
