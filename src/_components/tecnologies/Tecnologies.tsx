"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "./Tecnologies.css";
import "swiper/css";

const TecnologiesList = [
  { name: "doctoradvisor", image: "doctoradvisor.svg" },
  { name: "kristenseed", image: "kristenseed.jpg" },
  { name: "meddo", image: "meddo.jpg" },
  { name: "meddo", image: "meddo.jpg" },
  { name: "meddo", image: "meddo.jpg" },
  { name: "meddo", image: "meddo.jpg" },
  { name: "meddo", image: "meddo.jpg" },
];

export const Tecnologies = () => {
  return (
    <section className="4xl:pb-40 mt-20 w-full px-2 pb-20 lg:px-3 lg:pb-24 xl:px-4 2xl:pb-32">
      <div className="3xl:px-40 4xl:px-60 px-2 sm:px-6 xl:px-12 2xl:px-20">
        <div className="swipper-tecnologies bg-surface-container-low relative w-full transform-gpu overflow-hidden rounded-2xl py-10 sm:py-20 lg:rounded-3xl">
          <header className="3xl:px-40 4xl:px-60 font-inter flex w-full flex-wrap px-2 sm:px-6 xl:px-12 2xl:px-20">
            <div className="flex w-auto flex-col items-start space-y-3 px-2 lg:space-y-5 lg:px-3 xl:px-4">
              <h2 className="4xl:text-6xl max-w-2xl text-2xl leading-none tracking-tight text-balance text-white md:text-4xl xl:max-w-3xl xl:text-5xl">
                We use the latest technologies available to create timeless
                designs.
              </h2>
            </div>
          </header>
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
            className="relative mt-10 w-full overflow-hidden lg:mt-16"
          >
            {TecnologiesList.map((data, index) => (
              <SwiperSlide
                className="!w-[151px] px-2 sm:!w-[230px] lg:!w-[250px] lg:px-3 xl:!w-[280px] xl:px-4 2xl:!w-[300px]"
                key={index}
              >
                <figure className="4xl:h-44 bg-background flex h-28 w-full transform-gpu items-center justify-center overflow-hidden rounded-2xl lg:h-40 lg:rounded-3xl">
                  <div className="4xl:px-16 4xl:h-14 relative h-12 w-full px-8 md:h-12 md:px-14 lg:px-14">
                    <svg
                      className="h-full w-full fill-current text-gray-600 dark:text-white"
                      width="630"
                      height="630"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 630 630"
                    >
                      <path d="M0 0H630V630H0V0ZM481.598 528.141C452.398 528.141 435.891 512.91 423.199 492.191L375.09 520.141C392.469 554.48 427.988 580.68 482.969 580.68C539.199 580.68 581.07 551.48 581.07 498.18C581.07 448.742 552.668 426.75 502.367 405.18L487.57 398.84C462.168 387.84 451.168 380.652 451.168 362.891C451.168 348.52 462.16 337.52 479.5 337.52C496.5 337.52 507.449 344.691 517.598 362.891L563.699 333.289C544.199 298.992 517.141 285.891 479.5 285.891C426.629 285.891 392.801 319.691 392.801 364.09C392.801 412.289 421.18 435.09 463.898 453.289L478.699 459.641C505.699 471.449 521.801 478.641 521.801 498.941C521.801 515.879 506.129 528.141 481.598 528.141ZM252.168 527.77C231.828 527.77 223.367 513.82 214.07 497.32L165.879 526.496C179.84 556.039 207.289 580.57 254.688 580.57C307.148 580.57 343.09 552.672 343.09 491.371V289.27H283.891V490.57C283.891 520.16 271.617 527.77 252.168 527.77Z"></path>
                    </svg>
                  </div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
