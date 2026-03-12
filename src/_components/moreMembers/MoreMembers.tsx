"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "@providers/translationProvider";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { PlayButton } from "@lib/components/playButton/PlayButton";
import { useParams } from "next/navigation";

interface member {
  name: string;
  profile: string;
  gallery: string[];
  linkedin: string;
}

const team: member[] = [
  {
    name: "Joel Martínez",
    profile: "/assets/joel-profile.png",
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
    profile: "/assets/joshua-profile.png",
    gallery: [
      "/assets/joshua-2.jpeg",
      "/assets/joshua-3.jpeg",
      "/assets/joshua-1.jpeg",
    ],
    linkedin: "",
  },
  {
    name: "Francisco Marmolejo",
    profile: "/assets/francisco-profile.png",
    gallery: [
      "/assets/francisco-2.jpeg",
      "/assets/francisco-3.jpeg",
      "/assets/francisco-1.jpg",
    ],
    linkedin: "https://www.linkedin.com/in/francisco-marmolejo-martinez/",
  },
  {
    name: "Francisco Luna",
    profile: "/assets/paco-profile.png",
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
    profile: "/assets/rafa-profile.png",
    gallery: ["/assets/rafa-1.png", "/assets/rafa-2.jpg"],
    linkedin: "https://www.linkedin.com/in/arafael-cabrera/",
  },
  {
    name: "Víctor Zamora",
    profile: "/assets/victor-profile.png",
    gallery: [
      "/assets/victor-2.jpeg",
      "/assets/victor-3.jpeg",
      "/assets/victor-4.jpeg",
      "/assets/victor-1.png",
    ],
    linkedin:
      "https://www.linkedin.com/in/victor-martin-zamora-casta%C3%B1eda/",
  },
  {
    name: "Aldair González",
    profile: "/assets/aldair-profile.png",
    gallery: [],
    linkedin: "https://www.linkedin.com/in/aldair-gonzalez-conde-3441b21a9/",
  },
];

export const MoreMembers = ({ user }: { user: string }) => {
  const members = useTranslations();
  const { lang } = useParams<{ lang: string }>();

  return (
    <section className="flex flex-col px-5 sm:flex-row">
      <div className="flex w-full flex-col justify-end gap-y-2 sm:my-10 lg:gap-y-4">
        <h3 className="text-5xl font-light uppercase sm:text-4xl lg:text-7xl">
          {members.our}
        </h3>
        <h3 className="text-5xl font-black uppercase sm:text-4xl lg:text-7xl">
          {members.other}
        </h3>
        <h3 className="text-5xl font-black uppercase sm:text-4xl lg:text-7xl">
          {members.temmates}
        </h3>
        <Link href={`/${lang}/about-us#our-team`}>
          <PlayButton
            content={members.button}
            width={200}
            className="uppercase"
          />
        </Link>
      </div>
      <div className="flex h-[540px] justify-center gap-x-1 sm:justify-end md:h-[630px] lg:h-[760px] xl:h-[840px]">
        <Swiper
          modules={[FreeMode, Autoplay]}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          allowTouchMove={true}
          speed={20000}
          direction="vertical"
          slidesPerView={2}
          spaceBetween={0}
          className="relative !mx-0 my-10 flex w-[170px] md:w-[200px] lg:w-[250px] xl:w-[280px]"
        >
          {team.map(
            (member, index) =>
              members[user].name !== member.name && (
                <SwiperSlide
                  className="!w-[170px] self-end md:!w-[200] lg:!w-[250px] xl:!w-[280px]"
                  key={index}
                >
                  <ImageElement member={member} />
                </SwiperSlide>
              ),
          )}
        </Swiper>
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
          slidesPerView={2}
          spaceBetween={0}
          initialSlide={2}
          className="relative !mx-0 my-10 flex w-[170px] md:w-[200px] lg:w-[250px] xl:w-[280px]"
        >
          {team.toReversed().map(
            (member, index) =>
              members[user].name !== member.name && (
                <SwiperSlide
                  className="!w-[170px] self-end md:!w-[200] lg:!w-[250px] xl:!w-[280px]"
                  key={index}
                >
                  <ImageElement member={member} />
                </SwiperSlide>
              ),
          )}
        </Swiper>
      </div>
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
