"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "./BigText.css";
import "swiper/css";

export const BigText = ({ text }: { text: string }) => {
  return (
    <div className="swiper-bigtext">
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
        speed={20000}
        className="relative w-full overflow-hidden"
      >
        <SwiperSlide className="!w-[125vw] px-2 py-3 lg:px-3 xl:px-4">
          <p className="text-[10vw] leading-none font-bold">{text}</p>
        </SwiperSlide>
        <SwiperSlide className="!w-[125vw] px-2 py-3 lg:px-3 xl:px-4">
          <p className="text-[10vw] leading-none font-bold">{text}</p>
        </SwiperSlide>
        <SwiperSlide className="!w-[125vw] px-2 py-3 lg:px-3 xl:px-4">
          <p className="text-[10vw] leading-none font-bold">{text}</p>
        </SwiperSlide>
      </Swiper>
      <Swiper
        modules={[FreeMode, Autoplay]}
        slidesPerView={"auto"}
        spaceBetween={0}
        loop
        freeMode
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        speed={20000}
        className="relative w-full overflow-hidden"
      >
        <SwiperSlide className="!w-[125vw] px-2 py-3 lg:px-3 xl:px-4">
          <p className="text-[10vw] leading-none font-bold">{text}</p>
        </SwiperSlide>
        <SwiperSlide className="!w-[125vw] px-2 py-3 lg:px-3 xl:px-4">
          <p className="text-[10vw] leading-none font-bold">{text}</p>
        </SwiperSlide>
        <SwiperSlide className="!w-[125vw] px-2 py-3 lg:px-3 xl:px-4">
          <p className="text-[10vw] leading-none font-bold">{text}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
