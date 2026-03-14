"use client";
import { useTranslations } from "@providers/translationProvider";
import FancyButton from "@lib/components/fancyButton/FancyButton";
import gsap from "gsap";
import InertiaPlugin from "gsap/InertiaPlugin";
import { SplitText } from "gsap/SplitText";
import { useRef, useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

gsap.registerPlugin(SplitText, InertiaPlugin);

const icons = {
  LinkedIn: {
    component: CiLinkedin,
  },
  GitHub: {
    component: FaGithub,
  },
  Phone: {
    component: FaPhone,
  },
  Email: {
    component: MdEmail,
  },
};

export const Profile = ({ user }: { user: string }) => {
  const member = useTranslations();
  const [info, setInfo] = useState<"about" | "socials">("about");

  const animation = useRef<gsap.core.Animation | null>(null);
  const iconsAnimated = useRef<HTMLSpanElement[]>([]);

  const handleClick = () => {
    if (animation.current !== null) {
      animation.current.revert();
    }

    const split = SplitText.create(".text", {
      type: "chars,words,lines",
      reduceWhiteSpace: false,
    });

    animation.current = gsap.from(split.words, {
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 0.4,
      ease: "back",
      stagger: 0.15,
    });
  };

  const hover = (i: number) => {
    gsap.to(iconsAnimated.current[i], {
      scale: 2,
      rotation: 15,
      duration: 0.3,
      ease: "back.out(3)",
    });
  };

  const leave = (i: number) => {
    gsap.to(iconsAnimated.current[i], {
      scale: 1,
      rotation: 0,
      duration: 0.4,
    });
  };

  return (
    <section>
      <main className="relative mb-150 flex justify-center lg:mb-0">
        <div
          className="relative -top-20.5 flex w-full items-end overflow-hidden bg-gray-50"
          style={{ height: "calc(var(--vh, 1vh) * 100)" }}
        >
          <img
            src={`/assets/${user}-profile.jpg`}
            alt=""
            className="absolute top-0 left-0 z-10 h-full w-full object-cover object-bottom opacity-95"
            width="2500"
            height="1667"
          />
        </div>
        <div className="font-inter absolute top-[72%] z-10 flex w-full max-w-380 flex-col gap-5 p-1 sm:top-[80%] sm:pl-5 lg:top-[35%] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:gap-5 lg:flex-col lg:gap-0">
              <h1 className="text-7xl font-bold lg:text-8xl">
                {member[user].name.split(" ")[0]}
              </h1>
              <h1 className="text-7xl font-bold lg:text-8xl">
                {member[user].name.split(" ")[1]}
              </h1>
            </div>
            <div className="mt-8 flex max-w-150 flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button className="bg-surface-container/60 w-fit p-1.5 font-mono text-[12px] sm:p-2 sm:text-[1rem] lg:p-1.5 lg:text-[15px]">
                POSITION - {member[user].position.toUpperCase()}
              </button>
              <button className="bg-surface-container/60 w-fit p-1.5 font-mono text-[12px] sm:p-2 sm:text-[1rem] lg:p-1.5 lg:text-[15px]">
                CAREER - {member[user].career.toUpperCase()}
              </button>
              <button className="bg-surface-container/60 w-fit p-1.5 font-mono text-[12px] sm:p-2 sm:text-[1rem] lg:p-1.5 lg:text-[15px]">
                LOCATION - {member[user].location.toUpperCase()}
              </button>
              <button className="bg-surface-container/60 w-fit p-1.5 font-mono text-[12px] sm:p-2 sm:text-[1rem] lg:p-1.5 lg:text-[15px]">
                TIME ZONE - {member[user].zone.toUpperCase()}
              </button>
              <div className="mt-5 flex w-full flex-col gap-2">
                <div className="flex gap-2">
                  {member[user].languages.map((language: string) => (
                    <button
                      key={language}
                      className="bg-surface-container/60 p-1.5 font-mono text-[12px] sm:p-2 sm:text-[1rem] lg:p-1.5 lg:text-[15px]"
                    >
                      {language.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-90 w-full max-w-150 flex-col lg:max-w-100">
            <div className="text-background flex gap-2">
              <FancyButton
                className="px-4 py-2 text-sm"
                onClick={() => {
                  setInfo("about");
                  handleClick();
                }}
              >
                <span className="flex items-center gap-2">About</span>
              </FancyButton>
              <FancyButton
                className="px-4 py-2 text-sm"
                onClick={() => {
                  setInfo("socials");
                }}
              >
                <span className="flex items-center gap-2">Socials</span>
              </FancyButton>
            </div>
            <div className="bg-surface-container/60 mt-5 h-auto p-3">
              <span
                className={`text font-mono whitespace-pre-line lg:text-[15px] ${info === "about" ? "block" : "hidden"}`}
              >
                {member[user].about}
              </span>

              <div
                className={`flex flex-col gap-2 ${info === "socials" ? "block" : "hidden"}`}
              >
                {member[user].socials.map(
                  (
                    social: { platform: string; url: string; name: string },
                    idx: number,
                  ) => {
                    const iconData =
                      icons[social.platform as keyof typeof icons];

                    const Icon = iconData.component;
                    return (
                      <div
                        className="flex cursor-pointer items-center gap-2"
                        onClick={() => window.open(social.url, "_blank")}
                        key={social.platform}
                        onMouseEnter={() => hover(idx)}
                        onMouseLeave={() => leave(idx)}
                      >
                        <span
                          ref={(el) => {
                            iconsAnimated.current[idx] = el as HTMLSpanElement;
                          }}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <p>{social.name}</p>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
