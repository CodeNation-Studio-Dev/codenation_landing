"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { useWindowSize } from "@hooks/windowSize";
import { useTranslations } from "@/src/_providers/translationProvider";
import "./TrophyShelf.css";
import "swiper/css";

interface trophysProps {
  name: string;
  image: string;
  awards: string[];
}
const trophys: trophysProps[] = [
  {
    name: "doctoradvisor",
    image: "doctoradvisor.svg",
    awards: ["8 x OWDA", "1 x Site of the Month", "2 x Appreciation"],
  },
  {
    name: "kristenseed",
    image: "kristenseed.jpg",
    awards: [
      "1 x Silver: Best UX",
      "1 x Silver: Best Web",
      "1 x Gold: Web",
      "1 x Gold: Best UI",
      "1 x Gold: Best Visual",
    ],
  },
  { name: "meddo", image: "meddo.jpg", awards: ["1 x Spotted"] },
  {
    name: "meddo",
    image: "meddo.jpg",
    awards: [
      "1 x Silver: Best UX",
      "1 x Silver: Best Web",
      "1 x Gold: Web",
      "1 x Gold: Best UI",
      "1 x Gold: Best Visual",
    ],
  },
  {
    name: "meddo",
    image: "meddo.jpg",
    awards: [
      "1 x Silver: Best UX",
      "1 x Silver: Best Web",
      "1 x Gold: Web",
      "1 x Gold: Best UI",
      "1 x Gold: Best Visual",
    ],
  },
  {
    name: "meddo",
    image: "meddo.jpg",
    awards: ["1 x Silver: Best UX", "1 x Gold: Best Visual"],
  },
  {
    name: "meddo",
    image: "meddo.jpg",
    awards: ["1 x Silver: Best UX", "1 x Silver: Best Web"],
  },
  {
    name: "meddo",
    image: "meddo.jpg",
    awards: ["1 x Silver: Best UX", "1 x Silver: Best Web"],
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
                <svg
                  className="h-full w-full fill-current"
                  width="178"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 178 30"
                >
                  <path d="M0 22.0145V19.7559L6.85409 18.4641V22.0516C6.85409 23.7836 7.41772 24.915 8.78771 24.915C10.1577 24.915 10.6432 23.8659 10.6432 22.7386V21.4879C10.6432 20.1179 10.3593 19.3897 8.82885 18.4641L4.23341 15.7241C1.25069 13.9509 0.242729 11.8939 0.242729 8.75069V7.22024C0.242729 2.13933 4.27455 0 8.79182 0C13.9921 0 17.5014 1.8966 17.5014 7.61931V9.7175L10.7666 10.927V7.45886C10.7666 6.08886 10.2811 4.92046 8.79182 4.92046C7.62342 4.92046 6.97751 5.80911 6.97751 6.89523V8.10477C6.97751 9.27318 7.70159 10.24 8.79182 10.8859L13.3503 13.5889C16.6168 15.5225 17.5014 17.3779 17.5014 20.3236V22.9855C17.5014 26.898 14.4775 30 8.75069 30C3.02386 30 0 26.7334 0 22.0145ZM29.5928 23.4261H24.8739L24.0675 29.3134H17.3328L22.7798 0.6875H31.691L37.1751 29.3134H30.3991L29.5928 23.4261ZM28.9469 18.6702L27.7785 10.08C27.7254 9.65287 27.6724 9.25275 27.6192 8.8515L27.6191 8.85132C27.5114 8.03903 27.4031 7.22213 27.293 6.16748H27.1737C27.0918 7.24611 26.9712 8.07862 26.8503 8.91241C26.7951 9.29346 26.7398 9.67478 26.6882 10.08L25.5198 18.6702H28.9469ZM37.0104 9.23204V21.0066H37.0022C37.0022 27.0584 40.1454 30 46.0738 30C51.6813 30 55.0672 27.0954 55.0672 21.6525V18.4682L48.2131 17.1393V21.6566C48.2131 23.7095 47.489 24.7998 46.0779 24.7998C44.6668 24.7998 43.9427 23.5902 43.9427 21.2534V8.71366C43.9427 6.37685 44.6668 5.16731 46.119 5.16731C47.489 5.16731 48.1761 6.17526 48.1761 8.15003V12.5027L55.1125 11.2521V7.98546C55.1125 2.7441 52.1297 0 46.2425 0C40.3552 0 37.0104 3.18431 37.0104 9.23204ZM74.7531 29.3134H68.0183V17.3373H63.8261V29.3134H57.0913V0.6875H63.8261V12.2193H68.0183V0.6875H74.7531V29.3134ZM83.7794 23.4261H88.4983H88.5024L89.3088 29.3134H96.0806L90.5965 0.6875H81.6853L76.2383 29.3134H82.9731L83.7794 23.4261ZM86.684 10.08L87.8524 18.6702H84.4253L85.5937 10.08C85.6454 9.6748 85.7006 9.2935 85.7558 8.91247C85.8767 8.07866 85.9973 7.24614 86.0792 6.16748H86.1985C86.3087 7.22217 86.417 8.03909 86.5247 8.85141C86.5779 9.25269 86.6309 9.65284 86.684 10.08ZM105.132 0.6875H111.866V23.5084H118.762V29.3134H105.132V0.6875ZM119.083 9.43363V20.5623C119.083 26.61 122.629 29.9959 128.438 29.9959C134.247 29.9959 137.793 26.61 137.793 20.5623V9.43363C137.793 3.3859 134.243 0 128.438 0C122.633 0 119.083 3.3859 119.083 9.43363ZM130.857 8.5491V21.4509C130.857 23.6684 129.968 24.8368 128.438 24.8368C126.908 24.8368 126.019 23.6684 126.019 21.4509V8.5491C126.019 6.3316 126.908 5.16319 128.438 5.16319C129.968 5.16319 130.857 6.3316 130.857 8.5491ZM148.235 17.942H146.622V29.3134H139.887V0.6875H148.276C154.809 0.6875 157.348 3.71136 157.348 8.63182V9.80023C157.348 13.0668 156.138 15.165 154.122 16.2923L157.952 29.3175H150.938L148.235 17.9461V17.942ZM147.791 13.8279C149.765 13.8279 150.411 12.7007 150.411 10.2404V8.22453C150.411 5.96589 149.724 5.15952 147.791 5.15952H146.622V13.8279H147.791ZM167.547 0.6875H159.24V29.3175H167.505C173.837 29.3175 177.264 25.8905 177.264 19.6V10.043C177.264 4.03226 173.755 0.6875 167.547 0.6875ZM170.332 20.0032C170.332 22.7843 169.324 24.5575 167.386 24.5575V24.5616H165.975V5.44751H167.386C169.484 5.44751 170.332 6.81751 170.332 9.68092V20.0032Z"></path>
                </svg>
              </div>
              <div>
                {data.awards.map((award, index) => (
                  <p className="text-[10px] xl:text-xs" key={index}>
                    {award}
                  </p>
                ))}
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
