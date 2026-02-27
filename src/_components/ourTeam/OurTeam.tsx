"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "@providers/translationProvider";
import { PlayButton } from "@lib/components/playButton/PlayButton";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface member {
  name: string;
  position: string;
  profile: string;
  gallery: string[];
  linkedin: string;
}

const team: member[] = [
  {
    name: "Anna Durán",
    position: "Junior Developer",
    profile: "/assets/ana-1.jpeg",
    gallery: [
      "/assets/ana-2.jpeg",
      "/assets/ana-3.jpeg",
      "/assets/ana-4.jpeg",
      "/assets/ana-5.jpeg",
      "/assets/ana-1.jpeg",
    ],
    linkedin: "",
  },
  {
    name: "Ángel Morán",
    position: "Junior Developer",
    profile: "/assets/angel-1.jpeg",
    gallery: [
      "/assets/angel-2.jpeg",
      "/assets/angel-3.jpeg",
      "/assets/angel-4.jpeg",
      "/assets/angel-1.jpeg",
    ],
    linkedin: "https://www.linkedin.com/in/angel-moran-342840264/",
  },
  {
    name: "Antonio Cabrera",
    position: "Senior Developer",
    profile: "/assets/antonio-1.jpeg",
    gallery: ["/assets/antonio-2.jpg", "/assets/antonio-1.jpeg"],
    linkedin: "https://www.linkedin.com/in/arafael-cabrera/",
  },
  {
    name: "Francisco Marmolejo",
    position: "Senior Developer",
    profile: "/assets/francisco-1.jpg",
    gallery: [
      "/assets/francisco-2.jpeg",
      "/assets/francisco-3.jpeg",
      "/assets/francisco-1.jpg",
    ],
    linkedin: "https://www.linkedin.com/in/francisco-marmolejo-martinez/",
  },
  {
    name: "Joel Martínez",
    position: "Director General",
    profile: "/assets/joel-1.jpeg",
    gallery: [
      "/assets/joel-2.jpg",
      "/assets/joel-3.jpeg",
      "/assets/joel-1.jpeg",
    ],
    linkedin: "https://www.linkedin.com/in/joel-martinez-palacios/",
  },
  {
    name: "Joshua Torres",
    position: "Co-Director",
    profile: "/assets/joshua-1.jpeg",
    gallery: [
      "/assets/joshua-2.jpeg",
      "/assets/joshua-3.jpeg",
      "/assets/joshua-1.jpeg",
    ],
    linkedin: "",
  },
  {
    name: "Mario Gómez",
    position: "Junior Developer",
    profile: "/assets/mario-1.jpeg",
    gallery: ["/assets/mario-2.jpeg", "/assets/mario-1.jpeg"],
    linkedin: "https://www.linkedin.com/in/mariogomezseguame/",
  },
  {
    name: "Paco Luna",
    position: "Senior Developer",
    profile: "/assets/paco-1.jpeg",
    gallery: [
      "/assets/paco-2.jpeg",
      "/assets/paco-3.jpeg",
      "/assets/paco-4.jpeg",
      "/assets/paco-1.jpeg",
    ],
    linkedin: "https://www.linkedin.com/in/francisco-javier-luna-figueroa/",
  },

  {
    name: "Sandra Delgado",
    position: "Junior Developer",
    profile: "/assets/sandra-1.jpeg",
    gallery: [
      "/assets/sandra-2.jpeg",
      "/assets/sandra-3.jpeg",
      "/assets/sandra-4.jpeg",
      "/assets/sandra-5.jpeg",
      "/assets/sandra-1.jpeg",
    ],
    linkedin: "https://www.linkedin.com/in/sandra-cdt15/",
  },
  {
    name: "Víctor Zamora",
    position: "Senior Developer",
    profile: "/assets/victor-1.jpeg",
    gallery: [
      "/assets/victor-2.jpeg",
      "/assets/victor-3.jpeg",
      "/assets/victor-4.jpeg",
      "/assets/victor-1.jpeg",
    ],
    linkedin:
      "https://www.linkedin.com/in/victor-martin-zamora-casta%C3%B1eda/",
  },
];

export const OurTeam = () => {
  const { our_team } = useTranslations();

  return (
    <section className="flex w-full max-w-[1540px] flex-col py-10 xl:mx-auto">
      <header className="font-inter self-center text-center">
        <span className="relative text-sm lg:text-base">
          {our_team.caption}
        </span>
        <h3 className="text-2xl font-bold whitespace-pre-line lg:text-4xl xl:text-5xl">
          {our_team.title}
        </h3>
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
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={true}
        speed={20000}
        className="relative my-10 w-full overflow-hidden xl:my-20"
      >
        {team.map((member, index) => (
          <SwiperSlide
            className={`!w-[248px] px-2 md:!w-[385px] lg:!w-[292px] lg:px-3 xl:!w-[25vw] xl:px-4 ${index % 2 === 0 && "mt-10 xl:mt-20"}`}
            key={index}
          >
            <ImageElement member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
      <footer className="font-inter self-center text-center">
        <PlayButton
          content={our_team.meet}
          width={185}
          color={{ text: "text-background", bg: "bg-secondary" }}
          className="mt-5 h-[36px]"
        />
      </footer>
    </section>
  );
};

export const ImageElement = ({ member }: { member: member }) => {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const images = Array.from(gallery.querySelectorAll("img"));
    images.forEach((img) => (img.style.opacity = "0"));

    const tl = gsap.timeline({ paused: true, repeat: -1 });

    images.forEach((img) => {
      tl.to(img, {
        opacity: 1,
        duration: 0.1,
        ease: "power2.inOut",
      }).to(
        img,
        {
          opacity: 0,
          duration: 0.1,
          ease: "power2.inOut",
        },
        "+=0.6",
      );
    });

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  const HandleMouseEnter = () => {
    galleryRef.current?.classList.remove("hidden");
    profileRef.current?.classList.replace("opacity-100", "opacity-0");
    tlRef.current?.play(0);
  };

  const HandleMouseLeave = () => {
    galleryRef.current?.classList.add("hidden");
    profileRef.current?.classList.replace("opacity-0", "opacity-100");
    tlRef.current?.pause(0);
  };

  return (
    <div
      onMouseEnter={() => HandleMouseEnter()}
      onMouseLeave={() => HandleMouseLeave()}
      className="group relative flex w-full flex-wrap pl-px"
    >
      <a
        href={member.linkedin}
        className="absolute top-0 left-0 z-10 h-full w-full"
      >
        <div className="sr-only">{member.name}</div>
      </a>
      <div className="absolute top-3 right-3 z-20 inline-flex items-center space-x-1.5">
        <div className="flex items-center space-x-1.5">
          {!!member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-secondary inline-flex h-8 w-8 translate-z-0 items-center justify-center rounded-full text-gray-600 duration-400 xl:hover:bg-gray-600 xl:hover:text-white"
            >
              <div className="sr-only">Codenation</div>
              <svg
                className="h-3.5 w-3.5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
          )}
        </div>
        <a
          href={member.linkedin}
          className="bg-secondary inline-flex h-8 w-8 transform items-center justify-center rounded-full transition-transform xl:group-hover:rotate-90"
        >
          <div className="sr-only">{member.name} profile</div>
          <svg
            className="h-4 w-4 fill-current text-gray-600"
            width="14"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M240 64V48h-32v192H16v32h192v192h32V272h192v-32H240V64z"></path>
          </svg>
        </a>
      </div>
      <div className="relative w-full">
        <div
          ref={galleryRef}
          className="absolute top-0 left-0 hidden h-full w-full overflow-hidden rounded-2xl opacity-100 lg:rounded-3xl xl:flex"
        >
          {member.gallery.map((image, index) => (
            <Image
              key={index}
              src={image}
              fill
              className="absolute top-0 left-0 h-full w-full object-cover object-center"
              alt="F30 DDB5 B 0050 440 E B4 CE DC86871 BEE31"
              loading="lazy"
            />
          ))}
        </div>
        <div
          ref={profileRef}
          className="bg-background w-full overflow-hidden rounded-2xl opacity-100 lg:rounded-3xl"
        >
          <div className="relative w-full overflow-hidden pt-[133%]">
            <picture className="absolute top-0 left-0 h-full w-full">
              <Image
                src={member.profile}
                sizes="100vw"
                alt={`${member.name} portrait codenation`}
                className="w-full"
                width="800"
                height="1067"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-20 w-full pr-14">
        <div className="bg-background pointer-events-none relative inline-flex w-auto flex-wrap rounded-tr-2xl pt-3 pr-5 lg:rounded-tr-3xl lg:pr-8">
          <svg
            id="Layer_1"
            className="dark:text-grayDark-600 text-background absolute right-px -bottom-px h-10 w-10 translate-x-full rotate-180 transform fill-current lg:h-12 lg:w-12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 100 100"
          >
            <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
          </svg>
          <svg
            id="Layer_1"
            className="text-background absolute top-px left-0 h-10 w-10 -translate-y-full rotate-180 transform fill-current lg:h-12 lg:w-12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 100 100"
          >
            <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
          </svg>
          <div className="">
            <div className="text-on-surface">{member.name}</div>
            <div className="4xl:text-base text-on-surface text-sm leading-tight font-light">
              {member.position}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
