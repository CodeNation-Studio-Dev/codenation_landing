import { TranslationDict } from "@providers/translationProvider";
import { PlayButton } from "@lib/components/playButton/PlayButton";
import { MdDesignServices, MdInstallMobile } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsDatabaseFillUp } from "react-icons/bs";
import { FaDocker } from "react-icons/fa";
import { FaUsersRays, FaWandMagicSparkles } from "react-icons/fa6";
import { GoCodescan } from "react-icons/go";
import { GrCloudComputer, GrCycle } from "react-icons/gr";
import { HiArrowsExpand } from "react-icons/hi";
import { HiRocketLaunch } from "react-icons/hi2";
import { LuImageUpscale } from "react-icons/lu";
import { ImCloudCheck, ImSoundcloud } from "react-icons/im";
import { IoMdAnalytics } from "react-icons/io";
import { IoColorPaletteOutline, IoLayers } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { PiIntersectFill, PiStrategyBold } from "react-icons/pi";
import { RiLayout5Fill, RiShoppingBag4Fill } from "react-icons/ri";
import { TiPointOfInterest } from "react-icons/ti";
import Link from "next/link";

const icons = {
  webpage: [
    TiPointOfInterest,
    RiShoppingBag4Fill,
    MdInstallMobile,
    HiArrowsExpand,
    GrCycle,
    PiStrategyBold,
  ],
  mvp: [
    PiIntersectFill,
    MdDesignServices,
    IoLayers,
    HiRocketLaunch,
    IoMdAnalytics,
    BiSupport,
  ],
  design: [
    IoColorPaletteOutline,
    LuImageUpscale,
    FaUsersRays,
    GoCodescan,
    FaWandMagicSparkles,
    RiLayout5Fill,
  ],
  cloud: [
    ImSoundcloud,
    GrCloudComputer,
    ImCloudCheck,
    FaDocker,
    BsDatabaseFillUp,
    MdSecurity,
  ],
};

interface Category {
  title: string;
  description: string;
}

export const Subcategories = ({ service }: TranslationDict) => {
  const iconKey = service.name as "webpage" | "mvp" | "cloud";
  return (
    <section className="3xl:px-40 4xl:px-60 bg-surface-container-low w-full px-2 py-10 sm:px-6 lg:py-16 xl:px-12 2xl:px-20 2xl:py-24">
      <div className="mt-10 mb-8 flex w-full flex-col items-start px-2 lg:mt-0 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:px-3 xl:px-4">
        <div className="items start flex w-full flex-col gap-y-3 lg:w-auto lg:gap-y-5">
          <span className="tracking-tighter">
            • {service.subcategories.fewWords}
          </span>
          <h2 className="4xl-text-6xl font-inter 4xl:max-w-2xl w-full max-w-xs pr-10 text-2xl font-semibold text-balance text-white md:text-4xl lg:max-w-xl lg:pr-0 xl:text-5xl">
            {service.subcategories.title}
          </h2>
        </div>
        <Link
          href="https://www.linkedin.com/company/codenation-studio/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <PlayButton
            content={service.subcategories.getInTouch}
            width={200}
            color={{ text: "text-background", bg: "bg-secondary" }}
            className="font-inter mt-6 font-semibold lg:my-0 lg:px-6"
          />
        </Link>
      </div>
      <div className="grid w-full grid-cols-1 grid-rows-6 gap-x-8 px-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:px-3 xl:px-4">
        {service.subcategories.allsubcategories.map(
          (category: Category, i: number) => {
            const Icon = icons[iconKey][i];
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
                    {category.title}
                  </p>
                </div>
                <p className="font-inter text-inverse-surface w-full max-w-sm text-base leading-7 font-light tracking-tight xl:text-lg">
                  {category.description}
                </p>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
};
