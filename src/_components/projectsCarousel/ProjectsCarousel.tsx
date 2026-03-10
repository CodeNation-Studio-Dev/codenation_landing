"use client";
import { useTranslations } from "@/src/_providers/translationProvider";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Navigation } from "swiper/modules";

interface Project {
  client: string;
  date: number;
  mediaType: string;
  asset: string;
}

export const ProjectsCarousel = () => {
  const { projects } = useTranslations();
  console.log(projects);
  return (
    <section className="4xl:pb-40 w-full pb-20 lg:pb-24 2xl:pb-32">
      <div className="px-0">
        <div className="flex w-full flex-wrap">
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
              {projects.map((project: Project, i: number) => (
                <SwiperSlide
                  key={i}
                  className="3xl:max-w-xl 4xl:max-w-3xl flex w-xs flex-col items-start px-2 md:max-w-sm lg:max-w-md lg:px-3 xl:max-w-lg xl:px-4 2xl:max-w-xl"
                >
                  <div>
                    <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl lg:rounded-3xl">
                      {project.mediaType === "img" ? (
                        <Image
                          src={`${project.asset}`}
                          alt={`Project for ${project.client}`}
                          fill
                        />
                      ) : (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          src={`${project.asset}`}
                        ></video>
                      )}
                    </div>
                    <div className="font-inter mb-2 flex items-center gap-x-2 text-sm lg:text-base">
                      <span>{project.date}</span>
                      <span>•</span>
                      <h4>{project.client}</h4>
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
