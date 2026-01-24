"use client";
import { useTranslations } from "@/src/_providers/translationProvider";
import { PlayButton } from "@lib/components/playButton/PlayButton";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const mediaLinks = [
  "https://servd-made-byshape.b-cdn.net/production/uploads/videos/gary-neville-thumbnail_2024-06-03-125526_bljp.mp4",
  "https://servd-made-byshape.b-cdn.net/production/uploads/videos/olgam-thumbnail.mp4",
  "/assets/talk.webp",
  "/assets/talk.webp",
  "/assets/talk.webp",
  "/assets/talk.webp",
];

interface Project {
  title: string;
  client: string;
  date: number;
  mediaType: string;
}

export const FavoriteProducts = () => {
  const { favorites } = useTranslations();
  const projects = Object.values(favorites.projects) as Project[];
  return (
    <section className="4xl:pb-40 w-full pb-20 lg:pb-24 2xl:pb-32">
      <div className="px-0">
        <div className="flex w-full flex-wrap">
          <div className="3xl:px-40 4xl:px-60 mb-10 flex w-full flex-wrap items-end justify-between px-2 sm:px-6 xl:px-12 2xl:px-20">
            <div className="w-14/16 pr-2 pl-0 md:px-2 lg:w-auto lg:px-3 xl:px-4">
              <div className="items-left flex flex-col gap-y-3 lg:gap-y-5">
                <div className="inline-flex items-center space-x-2 text-sm font-light text-white lg:text-base">
                  • {favorites.fewWords}
                </div>
                <h2 className="4xl:text-6xl font-inter 4xl:max-w-lg max-w-md text-3xl leading-none font-medium tracking-tight text-balance text-white md:text-4xl xl:text-5xl">
                  {favorites.title}
                </h2>
              </div>
            </div>
            <PlayButton
              content={favorites.viewWork}
              width={150}
              color={{ text: "text-background", bg: "bg-secondary" }}
              className="font-inter my-4 lg:my-0"
            />
          </div>
          <div className="flex w-full flex-col">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".next-slide-fav",
                prevEl: ".previous-slide-fav",
              }}
              slidesPerView={"auto"}
              className="w-full"
              slidesOffsetBefore={8}
              breakpoints={{
                768: {
                  slidesOffsetBefore: 24,
                },
                1280: {
                  slidesOffsetBefore: 80,
                },
                1920: {
                  slidesOffsetBefore: 160,
                },
                2560: {
                  slidesOffsetBefore: 240,
                },
              }}
            >
              {projects.map((project, i) => (
                <SwiperSlide
                  key={i}
                  className="3xl:max-w-xl 4xl:max-w-3xl flex w-xs flex-col items-start px-2 md:max-w-sm lg:max-w-md lg:px-3 xl:max-w-lg xl:px-4 2xl:max-w-xl"
                >
                  <div>
                    <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl lg:rounded-3xl">
                      {project.mediaType === "img" ? (
                        <Image
                          src={mediaLinks[i]}
                          alt={`Image for ${project.title}`}
                          fill
                        />
                      ) : (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          src={mediaLinks[i]}
                        ></video>
                      )}
                    </div>
                    <div className="font-inter mb-2 flex items-center gap-x-2 text-sm lg:text-base">
                      <span>{project.date}</span>
                      <span>•</span>
                      <h4>{project.client}</h4>
                    </div>
                    <div>
                      <h2 className="4xl:text-4xl font-inter pr-10 text-xl leading-6 font-medium tracking-tight text-balance xl:text-3xl xl:leading-9">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-10 flex w-full justify-center gap-x-2">
              <button className="previous-slide-fav bg-surface-container inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
                <FaArrowLeft />
              </button>
              <button className="next-slide-fav bg-surface-container inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full justify-center">
          <div className="flex items-center space-x-2"></div>
        </div>
      </div>
    </section>
  );
};
