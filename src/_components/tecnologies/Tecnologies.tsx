"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "./Tecnologies.css";
import "swiper/css";
import Image from "next/image";

const TecnologiesList = [
  { name: "javascript", image: "/assets/logo-javascript.png" },
  { name: "next", image: "/assets/logo-next.png" },
  { name: "react", image: "/assets/logo-react.png" },
  { name: "typescript", image: "/assets/logo-typescript.png" },
  { name: "python", image: "/assets/logo-python.png" },
  { name: "sql", image: "/assets/logo-sql.png" },
  { name: "django", image: "/assets/logo-django.png" },
  { name: "net", image: "/assets/logo-net.png" },
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
                  <div className="relative flex h-40 w-40 items-center self-center">
                    <Image
                      src={data.image}
                      width={300}
                      height={300}
                      sizes="30x30"
                      alt={`${data.name} logo`}
                    />
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
