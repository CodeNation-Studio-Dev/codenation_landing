"use client";
import "./Clients.css";
import { PlayButton } from "@lib/components/playButton/PlayButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "@providers/translationProvider";

const brands = [
  { name: "doctoradvisor", image: "doctoradvisor.svg" },
  { name: "kristenseed", image: "kristenseed.jpg" },
  { name: "meddo", image: "meddo.jpg" },
  { name: "meddo", image: "meddo.jpg" },
  { name: "meddo", image: "meddo.jpg" },
  { name: "meddo", image: "meddo.jpg" },
  { name: "meddo", image: "meddo.jpg" },
];

const companies = [
  { name: "doctoradvisor", image: "doctoradvisor.svg" },
  { name: "kristenseed", image: "kristenseed.jpg" },
  { name: "meddo", image: "meddo.jpg" },
  { name: "meddo", image: "meddo.jpg" },
  { name: "meddo", image: "meddo.jpg" },
  { name: "meddo", image: "meddo.jpg" },
  { name: "meddo", image: "meddo.jpg" },
];

export const Clients = () => {
  const { clients } = useTranslations();

  return (
    <section className="4xl:pb-40 mt-20 w-full px-2 pb-20 lg:px-3 lg:pb-24 xl:px-4 2xl:pb-32">
      <div className="3xl:px-40 4xl:px-60 px-2 sm:px-6 xl:px-12 2xl:px-20">
        <div className="bg-surface-container-low 4xl:py-40 relative w-full transform-gpu overflow-hidden rounded-2xl rounded-tl-none py-20 lg:rounded-3xl lg:rounded-tl-none lg:py-24 2xl:py-32">
          <figure className="bg-background absolute top-0 left-0 h-12 w-5/16 rounded-br-2xl lg:h-20 lg:w-3/16 lg:rounded-br-3xl">
            <svg
              id="Layer_1"
              className="text-background absolute -top-px right-px h-10 w-10 translate-x-full transform fill-current lg:h-12 lg:w-12"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 100 100"
            >
              <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
            </svg>
            <svg
              id="Layer_1"
              className="text-background absolute bottom-px -left-px h-10 w-10 translate-y-full transform fill-current lg:h-12 lg:w-12"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 100 100"
            >
              <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
            </svg>
          </figure>
          <header className="3xl:px-40 4xl:px-60 font-inter flex w-full flex-wrap px-2 sm:px-6 lg:justify-end xl:px-12 2xl:px-20">
            <div className="flex w-auto flex-col items-start space-y-3 px-2 lg:space-y-5 lg:px-3 xl:px-4">
              <div className="inline-flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                <div className="text-sm text-white lg:text-base">
                  {clients.plug}
                </div>
              </div>
              <h2 className="4xl:text-6xl max-w-2xl text-2xl leading-none tracking-tight text-balance text-white md:text-4xl xl:max-w-3xl xl:text-5xl">
                {clients.title}
              </h2>
              <PlayButton
                content={clients.contact}
                width={175}
                color={{ text: "text-background", bg: "bg-secondary" }}
                className="mt-5"
              />
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
            speed={10000}
            className="relative mt-10 w-full overflow-hidden lg:mt-16"
          >
            {brands.map((data, index) => (
              <SwiperSlide
                className="!w-[171px] px-2 sm:!w-[250px] lg:!w-[270px] lg:px-3 xl:!w-[300px] xl:px-4 2xl:!w-[320px]"
                key={index}
              >
                <figure className="4xl:h-44 bg-background flex h-28 w-full transform-gpu items-center justify-center overflow-hidden rounded-2xl lg:h-40 lg:rounded-3xl">
                  <div className="4xl:px-16 4xl:h-14 relative h-12 w-full px-8 md:h-12 md:px-14 lg:px-14">
                    <svg
                      className="h-full w-full fill-current text-gray-600 dark:text-white"
                      width="178"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 178 30"
                    >
                      <path d="M0 22.0145V19.7559L6.85409 18.4641V22.0516C6.85409 23.7836 7.41772 24.915 8.78771 24.915C10.1577 24.915 10.6432 23.8659 10.6432 22.7386V21.4879C10.6432 20.1179 10.3593 19.3897 8.82885 18.4641L4.23341 15.7241C1.25069 13.9509 0.242729 11.8939 0.242729 8.75069V7.22024C0.242729 2.13933 4.27455 0 8.79182 0C13.9921 0 17.5014 1.8966 17.5014 7.61931V9.7175L10.7666 10.927V7.45886C10.7666 6.08886 10.2811 4.92046 8.79182 4.92046C7.62342 4.92046 6.97751 5.80911 6.97751 6.89523V8.10477C6.97751 9.27318 7.70159 10.24 8.79182 10.8859L13.3503 13.5889C16.6168 15.5225 17.5014 17.3779 17.5014 20.3236V22.9855C17.5014 26.898 14.4775 30 8.75069 30C3.02386 30 0 26.7334 0 22.0145ZM29.5928 23.4261H24.8739L24.0675 29.3134H17.3328L22.7798 0.6875H31.691L37.1751 29.3134H30.3991L29.5928 23.4261ZM28.9469 18.6702L27.7785 10.08C27.7254 9.65287 27.6724 9.25275 27.6192 8.8515L27.6191 8.85132C27.5114 8.03903 27.4031 7.22213 27.293 6.16748H27.1737C27.0918 7.24611 26.9712 8.07862 26.8503 8.91241C26.7951 9.29346 26.7398 9.67478 26.6882 10.08L25.5198 18.6702H28.9469ZM37.0104 9.23204V21.0066H37.0022C37.0022 27.0584 40.1454 30 46.0738 30C51.6813 30 55.0672 27.0954 55.0672 21.6525V18.4682L48.2131 17.1393V21.6566C48.2131 23.7095 47.489 24.7998 46.0779 24.7998C44.6668 24.7998 43.9427 23.5902 43.9427 21.2534V8.71366C43.9427 6.37685 44.6668 5.16731 46.119 5.16731C47.489 5.16731 48.1761 6.17526 48.1761 8.15003V12.5027L55.1125 11.2521V7.98546C55.1125 2.7441 52.1297 0 46.2425 0C40.3552 0 37.0104 3.18431 37.0104 9.23204ZM74.7531 29.3134H68.0183V17.3373H63.8261V29.3134H57.0913V0.6875H63.8261V12.2193H68.0183V0.6875H74.7531V29.3134ZM83.7794 23.4261H88.4983H88.5024L89.3088 29.3134H96.0806L90.5965 0.6875H81.6853L76.2383 29.3134H82.9731L83.7794 23.4261ZM86.684 10.08L87.8524 18.6702H84.4253L85.5937 10.08C85.6454 9.6748 85.7006 9.2935 85.7558 8.91247C85.8767 8.07866 85.9973 7.24614 86.0792 6.16748H86.1985C86.3087 7.22217 86.417 8.03909 86.5247 8.85141C86.5779 9.25269 86.6309 9.65284 86.684 10.08ZM105.132 0.6875H111.866V23.5084H118.762V29.3134H105.132V0.6875ZM119.083 9.43363V20.5623C119.083 26.61 122.629 29.9959 128.438 29.9959C134.247 29.9959 137.793 26.61 137.793 20.5623V9.43363C137.793 3.3859 134.243 0 128.438 0C122.633 0 119.083 3.3859 119.083 9.43363ZM130.857 8.5491V21.4509C130.857 23.6684 129.968 24.8368 128.438 24.8368C126.908 24.8368 126.019 23.6684 126.019 21.4509V8.5491C126.019 6.3316 126.908 5.16319 128.438 5.16319C129.968 5.16319 130.857 6.3316 130.857 8.5491ZM148.235 17.942H146.622V29.3134H139.887V0.6875H148.276C154.809 0.6875 157.348 3.71136 157.348 8.63182V9.80023C157.348 13.0668 156.138 15.165 154.122 16.2923L157.952 29.3175H150.938L148.235 17.9461V17.942ZM147.791 13.8279C149.765 13.8279 150.411 12.7007 150.411 10.2404V8.22453C150.411 5.96589 149.724 5.15952 147.791 5.15952H146.622V13.8279H147.791ZM167.547 0.6875H159.24V29.3175H167.505C173.837 29.3175 177.264 25.8905 177.264 19.6V10.043C177.264 4.03226 173.755 0.6875 167.547 0.6875ZM170.332 20.0032C170.332 22.7843 169.324 24.5575 167.386 24.5575V24.5616H165.975V5.44751H167.386C169.484 5.44751 170.332 6.81751 170.332 9.68092V20.0032Z"></path>
                    </svg>
                  </div>
                </figure>
              </SwiperSlide>
            ))}
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
            speed={10000}
            className="relative mt-10 w-full overflow-hidden lg:mt-16"
          >
            {companies.map((data, index) => (
              <SwiperSlide
                className="!w-[171px] px-2 sm:!w-[250px] lg:!w-[270px] lg:px-3 xl:!w-[300px] xl:px-4 2xl:!w-[320px]"
                key={index}
              >
                <figure className="4xl:h-44 bg-background flex h-28 w-full transform-gpu items-center justify-center overflow-hidden rounded-2xl lg:h-40 lg:rounded-3xl">
                  <div className="4xl:px-16 4xl:h-14 relative h-12 w-full px-8 md:h-12 md:px-14 lg:px-14">
                    <svg
                      className="h-full w-full fill-current text-gray-600 dark:text-white"
                      width="178"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 178 30"
                    >
                      <path d="M0 22.0145V19.7559L6.85409 18.4641V22.0516C6.85409 23.7836 7.41772 24.915 8.78771 24.915C10.1577 24.915 10.6432 23.8659 10.6432 22.7386V21.4879C10.6432 20.1179 10.3593 19.3897 8.82885 18.4641L4.23341 15.7241C1.25069 13.9509 0.242729 11.8939 0.242729 8.75069V7.22024C0.242729 2.13933 4.27455 0 8.79182 0C13.9921 0 17.5014 1.8966 17.5014 7.61931V9.7175L10.7666 10.927V7.45886C10.7666 6.08886 10.2811 4.92046 8.79182 4.92046C7.62342 4.92046 6.97751 5.80911 6.97751 6.89523V8.10477C6.97751 9.27318 7.70159 10.24 8.79182 10.8859L13.3503 13.5889C16.6168 15.5225 17.5014 17.3779 17.5014 20.3236V22.9855C17.5014 26.898 14.4775 30 8.75069 30C3.02386 30 0 26.7334 0 22.0145ZM29.5928 23.4261H24.8739L24.0675 29.3134H17.3328L22.7798 0.6875H31.691L37.1751 29.3134H30.3991L29.5928 23.4261ZM28.9469 18.6702L27.7785 10.08C27.7254 9.65287 27.6724 9.25275 27.6192 8.8515L27.6191 8.85132C27.5114 8.03903 27.4031 7.22213 27.293 6.16748H27.1737C27.0918 7.24611 26.9712 8.07862 26.8503 8.91241C26.7951 9.29346 26.7398 9.67478 26.6882 10.08L25.5198 18.6702H28.9469ZM37.0104 9.23204V21.0066H37.0022C37.0022 27.0584 40.1454 30 46.0738 30C51.6813 30 55.0672 27.0954 55.0672 21.6525V18.4682L48.2131 17.1393V21.6566C48.2131 23.7095 47.489 24.7998 46.0779 24.7998C44.6668 24.7998 43.9427 23.5902 43.9427 21.2534V8.71366C43.9427 6.37685 44.6668 5.16731 46.119 5.16731C47.489 5.16731 48.1761 6.17526 48.1761 8.15003V12.5027L55.1125 11.2521V7.98546C55.1125 2.7441 52.1297 0 46.2425 0C40.3552 0 37.0104 3.18431 37.0104 9.23204ZM74.7531 29.3134H68.0183V17.3373H63.8261V29.3134H57.0913V0.6875H63.8261V12.2193H68.0183V0.6875H74.7531V29.3134ZM83.7794 23.4261H88.4983H88.5024L89.3088 29.3134H96.0806L90.5965 0.6875H81.6853L76.2383 29.3134H82.9731L83.7794 23.4261ZM86.684 10.08L87.8524 18.6702H84.4253L85.5937 10.08C85.6454 9.6748 85.7006 9.2935 85.7558 8.91247C85.8767 8.07866 85.9973 7.24614 86.0792 6.16748H86.1985C86.3087 7.22217 86.417 8.03909 86.5247 8.85141C86.5779 9.25269 86.6309 9.65284 86.684 10.08ZM105.132 0.6875H111.866V23.5084H118.762V29.3134H105.132V0.6875ZM119.083 9.43363V20.5623C119.083 26.61 122.629 29.9959 128.438 29.9959C134.247 29.9959 137.793 26.61 137.793 20.5623V9.43363C137.793 3.3859 134.243 0 128.438 0C122.633 0 119.083 3.3859 119.083 9.43363ZM130.857 8.5491V21.4509C130.857 23.6684 129.968 24.8368 128.438 24.8368C126.908 24.8368 126.019 23.6684 126.019 21.4509V8.5491C126.019 6.3316 126.908 5.16319 128.438 5.16319C129.968 5.16319 130.857 6.3316 130.857 8.5491ZM148.235 17.942H146.622V29.3134H139.887V0.6875H148.276C154.809 0.6875 157.348 3.71136 157.348 8.63182V9.80023C157.348 13.0668 156.138 15.165 154.122 16.2923L157.952 29.3175H150.938L148.235 17.9461V17.942ZM147.791 13.8279C149.765 13.8279 150.411 12.7007 150.411 10.2404V8.22453C150.411 5.96589 149.724 5.15952 147.791 5.15952H146.622V13.8279H147.791ZM167.547 0.6875H159.24V29.3175H167.505C173.837 29.3175 177.264 25.8905 177.264 19.6V10.043C177.264 4.03226 173.755 0.6875 167.547 0.6875ZM170.332 20.0032C170.332 22.7843 169.324 24.5575 167.386 24.5575V24.5616H165.975V5.44751H167.386C169.484 5.44751 170.332 6.81751 170.332 9.68092V20.0032Z"></path>
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
