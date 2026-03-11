"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "@providers/translationProvider";
import { PlayButton } from "@lib/components/playButton/PlayButton";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import "./MoreMembers.css";

interface member {
  name: string;
  profile: string;
  gallery: string[];
  linkedin: string;
}

const team: member[] = [
  {
    name: "Joel Martínez",
    profile: "/assets/joel-1.jpeg",
    gallery: [
      "/assets/joel-2.jpg",
      "/assets/joel-3.jpeg",
      "/assets/joel-4.jpeg",
      "/assets/joel-5.jpeg",
      "/assets/joel-1.jpeg",
    ],
    linkedin: "https://www.linkedin.com/in/joel-martinez-palacios/",
  },
  {
    name: "Joshua Torres",
    profile: "/assets/joshua-1.jpeg",
    gallery: [
      "/assets/joshua-2.jpeg",
      "/assets/joshua-3.jpeg",
      "/assets/joshua-1.jpeg",
    ],
    linkedin: "",
  },
  {
    name: "Francisco Marmolejo",
    profile: "/assets/francisco-1.jpg",
    gallery: [
      "/assets/francisco-2.jpeg",
      "/assets/francisco-3.jpeg",
      "/assets/francisco-1.jpg",
    ],
    linkedin: "https://www.linkedin.com/in/francisco-marmolejo-martinez/",
  },
  {
    name: "Paco Luna",
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
    name: "Rafael Cabrera",
    profile: "/assets/antonio-1.jpeg",
    gallery: ["/assets/antonio-2.jpg", "/assets/antonio-1.jpeg"],
    linkedin: "https://www.linkedin.com/in/arafael-cabrera/",
  },
  {
    name: "Víctor Zamora",
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
  {
    name: "Aldair González",
    profile: "/assets/aldair-1.jpeg",
    gallery: [],
    linkedin: "https://www.linkedin.com/in/aldair-gonzalez-conde-3441b21a9/",
  },
  {
    name: "Anna Durán",
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
    name: "Mario Gómez",
    profile: "/assets/mario-1.jpeg",
    gallery: ["/assets/mario-2.jpeg", "/assets/mario-1.jpeg"],
    linkedin: "https://www.linkedin.com/in/mariogomezseguame/",
  },
  {
    name: "Sandra Delgado",
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
];

export const MoreMembers = () => {
  return (
    <section className="flex h-[500px] md:h-[600px] lg:h-[800px] xl:h-[1000px]">
      <Swiper
        modules={[FreeMode, Autoplay]}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={true}
        speed={20000}
        direction="vertical"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        className="relative my-10 flex w-full"
      >
        {team.map((member, index) => (
          <SwiperSlide
            className="!w-[165px] self-end px-2 md:!w-[200px] lg:px-3 xl:!w-[250px]"
            key={index}
          >
            <ImageElement member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
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
    </div>
  );
};
