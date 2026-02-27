"use client";
import { useWindowSize } from "@hooks/windowSize";
import { PinButton } from "@lib/components/pinButton/PinButton";
import { PlayButton } from "@lib/components/playButton/PlayButton";
import Image from "next/image";
import { useTranslations } from "@providers/translationProvider";
import Link from "next/link";

export const Banner = () => {
  const { banner } = useTranslations();
  const windowSize = useWindowSize();

  return (
    <main className="w-full pt-10 pb-10 lg:pt-22 lg:pb-16 xl:pt-20">
      <section className="relative">
        <header className="font-inter gooey-content absolute left-0 z-10 text-4xl md:text-6xl lg:left-[10%] 2xl:text-7xl">
          <div className="bg-background flex w-full items-center gap-x-3 pr-7 pl-5 text-sm md:py-2">
            {banner.hi}
            <div className="relative h-[34px] w-[40px]">
              <Image
                src="/assets/like.gif"
                alt="Like"
                loading="lazy"
                fill
                unoptimized
                sizes="10x10"
              />
            </div>
          </div>
          <p className="bg-background w-fit rounded-br-2xl pr-7 pb-3 pl-5 md:py-2">
            {banner.title}
          </p>
          <p className="bg-background w-fit rounded-br-2xl pr-4 pb-3 pl-5 md:py-2">
            {banner.title2}
          </p>
          <p className="bg-background w-fit rounded-br-2xl pr-4 pb-3 pl-5 md:py-2">
            {banner.title3}
          </p>
          <div className="bg-background flex w-fit gap-x-6 rounded-b-2xl pr-6 pb-5 pl-5 md:pt-4">
            <Link href="#showcase">
              <PlayButton content={banner.viewOurWork} width={160} />
            </Link>
            {windowSize > 1024 && (
              <Link href="/about-us">
                <PinButton content={banner.meetTeam} />
              </Link>
            )}
          </div>
        </header>
        <section className="3xl:px-40 4xl:px-60 px-2 sm:px-6 xl:px-12 2xl:px-20">
          <div className="relative aspect-9/16 w-full transform-gpu overflow-hidden rounded-2xl md:aspect-1/1 lg:aspect-16/9 lg:rounded-3xl">
            <iframe
              className="pointer-events-none absolute h-full w-full rounded-4xl"
              src="https://www.youtube.com/embed/GAR-Os8yvcI?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=GAR-Os8yvcI&controls=0&rel=0&modestbranding=1&iv_load_policy=3&rel=0&vq=hd1080"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </section>
        <footer className="3xl:px-42 4xl:px-62 absolute top-0 right-0 z-20 flex h-full bg-transparent px-3 pb-4 sm:px-7 xl:px-13 2xl:px-22">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/francisco-javier-luna-figueroa/"
            className="bg-background group sticky bottom-6 flex h-fit cursor-pointer items-center self-end rounded-full py-1.5 pr-8 pl-1.5"
          >
            <div className="relative z-20 mr-3 flex h-14 w-14 transform items-center justify-center overflow-hidden rounded-full transition-all duration-700 group-hover:-translate-x-[-204px]">
              <Image
                src="/assets/cofounder.jpeg"
                alt="Co-founder"
                width="80"
                height="80"
                className="object-cover"
              />
            </div>
            <div className="font-inter relative z-10 w-[166px] transform leading-tight tracking-tight transition duration-500 lg:group-hover:-translate-x-12">
              <p className="text-md">{banner.contact.hear}</p>
              <span className="text-on-surface text-sm font-light">
                {banner.contact.co_founder}
              </span>
            </div>
          </a>
        </footer>
      </section>
    </main>
  );
};
