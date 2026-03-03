"use client";
import { PlayButton } from "@lib/components/playButton/PlayButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { TranslationDict } from "@/src/_providers/translationProvider";
import Link from "next/link";

export const Testimonials = ({ service }: TranslationDict) => {
  return (
    <div className="4xl:pb-40 mt-20 w-full pb-20 lg:pb-24 2xl:pb-32">
      <div className="3xl:pl-40 4xl:pl-60 pl-2 sm:pl-6 xl:pl-12 2xl:pl-20">
        <div className="flex w-full flex-wrap">
          <div className="mb-5 inline-flex w-full flex-row items-end justify-between px-2 lg:mb-0 lg:w-4/16 lg:flex-col lg:items-start lg:justify-between lg:px-3 xl:px-4">
            <div className="flex flex-col items-start space-y-3 lg:space-y-5">
              <div className="inline-flex items-center space-x-2">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                <div className="text-sm font-light text-white">
                  {service.testimonials.subtitle}
                </div>
              </div>
              <h2 className="font-inter max-w-xs text-2xl leading-none tracking-tight text-balance text-white md:text-4xl lg:mb-10 xl:text-6xl">
                {service.testimonials.title}
              </h2>
              <div className="group relative inline-flex items-center">
                <Link
                  href="https://www.linkedin.com/in/francisco-javier-luna-figueroa/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <PlayButton
                    content={service.testimonials.contact}
                    width={120}
                    color={{ text: "text-background", bg: "bg-secondary" }}
                    className="font-inter"
                  />
                </Link>
                <div className="absolute top-0 right-0 z-20 flex h-9 w-9 transform items-center justify-center transition-transform xl:group-hover:translate-x-3 xl:group-hover:rotate-45">
                  <div className="relative overflow-hidden text-gray-600">
                    <div className="relative top-0 left-0 transform transition-transform">
                      <svg
                        className="h-3 w-3 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                      </svg>
                    </div>
                    <div className="js-button-arrow-icon-secondary absolute top-0 left-0 -translate-x-full translate-y-full transform transition-transform">
                      <svg
                        className="h-3 w-3 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="previous-slide bg-surface-container inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
                <FaArrowLeft />
              </button>
              <button className="next-slide bg-surface-container inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="relative w-full lg:w-12/16">
            <div className="dark:from-background pointer-events-none absolute top-0 left-0 z-20 hidden h-full w-20 bg-gradient-to-r lg:block"></div>
            <div className="relative w-full">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".next-slide",
                  prevEl: ".previous-slide",
                }}
                slidesPerView={"auto"}
                loop
                className="w-full"
              >
                {service.testimonials.alltestimonials.map(
                  (
                    testimonial: {
                      message: string;
                      user: string;
                      company: string;
                    },
                    index: number,
                  ) => (
                    <SwiperSlide
                      key={index}
                      className="flex !h-[440px] !w-[350px] px-2 md:!h-[400px] md:!w-[570px] lg:px-3 xl:px-4"
                    >
                      <div className="bg-surface-container flex h-full flex-col items-start justify-between rounded-2xl p-6 lg:rounded-3xl lg:p-10">
                        <div className="w-full">
                          <div className="leading-relaxed">
                            {testimonial.message}
                          </div>
                        </div>
                        <div className="flex items-end space-x-2 lg:space-x-3">
                          <div className="bg-secondary relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-md lg:h-12 lg:w-12 lg:rounded-lg">
                            <div className="text-background mt-px text-xl">
                              {testimonial.user.charAt(0).toUpperCase()}
                            </div>
                          </div>
                          <div className="leading-tight tracking-tight">
                            <div className="dark:text-grayDark-100 text-gray-600">
                              {testimonial.user}
                            </div>
                            <div className="dark:text-grayDark-200 text-xs font-light text-gray-400 lg:text-sm">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ),
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
