"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { useWindowSize } from "@hooks/windowSize";
import { useTranslations } from "@/src/_providers/translationProvider";
import "./TrophyShelf.css";
import "swiper/css";
import Image from "next/image";

interface trophysProps {
  name: string;
  image: string;
  awards: string[];
  title?: string;
}
const trophys: trophysProps[] = [
  {
    name: "retozapopan",
    title: "Reto Zapopan",
    image: "/assets/reto-zapopan.png",
    awards: ["2021 - Finalist"],
  },
  {
    name: "endeavor",
    title: "Endeavor",
    image: "/assets/endeavor.png",
    awards: ["2023 - Graduates"],
  },
  {
    name: "codelaunch",
    title: "CodeLaunch",
    image: "/assets/codelaunch.png",
    awards: ["2024 - Finalist"],
  },
  {
    name: "emprelatam",
    title: "Emprelatam",
    image: "/assets/emprelatam.png",
    awards: ["2025 - Graduates"],
  },
  {
    name: "itjalisco",
    title: "IT Jalisco",
    image: "/assets/it-jalisco.png",
    awards: ["Since 20XX Proud Partner"],
  },
  {
    name: "itcolima",
    title: "IT Colima",
    image: "/assets/it-colima.png",
    awards: ["Since 20XX Proud Partner"],
  },
  {
    name: "retozapopan",
    title: "Reto Zapopan",
    image: "/assets/reto-zapopan.png",
    awards: ["2021 - Finalist"],
  },
  {
    name: "endeavor",
    title: "Endeavor",
    image: "/assets/endeavor.png",
    awards: ["2023 - Graduates"],
  },
  {
    name: "codelaunch",
    title: "CodeLaunch",
    image: "/assets/codelaunch.png",
    awards: ["2024 - Finalist"],
  },
  {
    name: "emprelatam",
    title: "Emprelatam",
    image: "/assets/emprelatam.png",
    awards: ["2025 - Graduates"],
  },
  {
    name: "itjalisco",
    title: "IT Jalisco",
    image: "/assets/it-jalisco.png",
    awards: ["Since 20XX Proud Partner"],
  },
  {
    name: "itcolima",
    title: "IT Colima",
    image: "/assets/it-colima.png",
    awards: ["Since 20XX Proud Partner"],
  },
];

export const TrophyShelf = () => {
  const windowSize = useWindowSize();
  const { trophy_shelf } = useTranslations();

  return (
    <section className="swipper-trophy flex w-full max-w-[1540px] flex-col xl:mx-auto">
      <div className="flex w-full gap-x-[20%] lg:w-[90%] lg:self-center xl:gap-x-[30%]">
        <header className="max-w-[300px] lg:max-w-[400px]">
          <span className="trophy-count relative text-[8px] xl:text-xs">
            {trophy_shelf.count}
          </span>
          <h3 className="text-2xl lg:text-4xl">{trophy_shelf.title}</h3>
        </header>

        {windowSize > 1024 && (
          <div className="flex flex-col gap-y-2 lg:self-end">
            <p className="max-w-[300px] text-[11px]">
              {trophy_shelf.description}
            </p>
            <a href="" className="text-lg font-bold">
              {trophy_shelf.link}
            </a>
          </div>
        )}
      </div>
      <Swiper
        modules={[FreeMode, Autoplay]}
        slidesPerView={"auto"}
        spaceBetween={0}
        loop
        freeMode
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        speed={10000}
        className="relative my-10 w-full overflow-hidden xl:my-20"
      >
        {trophys.map((data, index) => (
          <SwiperSlide
            className="!w-[181px] px-2 lg:px-3 xl:!w-[245px] xl:px-4"
            key={index}
          >
            <figure className="bg-surface-container-low bg-opacity-[0.6] flex h-[231px] w-full transform-gpu flex-col justify-between overflow-hidden rounded-2xl p-4 xl:h-[280px]">
              <div className="4xl:h-14 relative h-12 w-full md:h-12">
                <h3 className="text-center text-2xl font-black">
                  {data.title}
                </h3>
              </div>
              <div className="relative flex h-30 w-30 items-center self-center">
                <Image
                  src={data.image}
                  width={200}
                  height={200}
                  sizes="20x20"
                  alt={`${data.name} logo`}
                />
              </div>
              <div>
                <p className="text-center text-[10px] xl:text-xs">
                  {trophy_shelf.alltrophies[data.name]}
                </p>
              </div>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
      {windowSize <= 1024 && (
        <div className="flex w-full flex-col gap-y-2 lg:w-[90%] lg:self-center">
          <p className="max-w-[300px] text-[11px]">
            {trophy_shelf.description}
          </p>
          <a href="" className="text-lg font-bold">
            {trophy_shelf.link}
          </a>
        </div>
      )}
    </section>
  );
};
