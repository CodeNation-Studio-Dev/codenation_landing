"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "@providers/translationProvider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import "./Header.css";
import { useWindowSize } from "@hooks/windowSize";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { PlayButton } from "@components/playButton/PlayButton";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const { header } = useTranslations();
  const [open, setOpen] = useState<boolean>(false);
  const { lang } = useParams();
  const pathname = usePathname();
  const headerRef = useRef<HTMLHeadElement>(null);
  const windowSize = useWindowSize();

  useGSAP(() => {
    if (!headerRef.current) return;
    ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top top",
      end: "+=600",
      toggleClass: "header-fixed",
    });
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;

    if (open) {
      headerRef.current?.classList.add("header-dropdown");
    } else {
      headerRef.current?.classList.remove("header-dropdown");
    }
  }, [open]);

  useEffect(() => {
    if (windowSize > 1024) {
      setOpen(false);
    }
  }, [windowSize]);

  return (
    <div className="relative h-[82px] w-full">
      <header
        ref={headerRef}
        className="font-inter absolute top-0 left-[50%] flex w-full translate-x-[-50%] justify-between px-8 py-4 transition-[width] duration-500"
      >
        <div className="flex w-full items-center justify-between">
          <section className="relative h-10 w-20">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              fill
              sizes="10x10"
              priority
            />
          </section>

          {windowSize > 1024 && (
            <section className="flex gap-x-8 text-center">
              <p>{header.services}</p>
              <p>{header.work}</p>
              <p>{header.about}</p>
              <p>{header.blog}</p>
              <p>{header.contact}</p>
            </section>
          )}

          <section className="flex items-center gap-x-5">
            {lang === "es-MX" ? (
              <Link
                href={pathname.replace(/^\/es-MX/, "/en-US")}
                className="text-xs"
              >
                EN
              </Link>
            ) : (
              <Link
                href={pathname.replace(/^\/en-US/, "/es-MX")}
                className="text-xs"
              >
                ES
              </Link>
            )}

            {windowSize > 1024 ? (
              <PlayButton content={header.start_project} />
            ) : (
              <>
                {open ? (
                  <RxCross2 onClick={() => setOpen(false)} />
                ) : (
                  <GiHamburgerMenu onClick={() => setOpen(true)} />
                )}
              </>
            )}
          </section>
        </div>
        <section className="dropdown-menu mt-10 hidden flex-col items-start gap-y-4 text-4xl">
          <p>{header.services}</p>
          <p>{header.work}</p>
          <p>{header.about}</p>
          <p>{header.blog}</p>
          <p>{header.contact}</p>
          <PlayButton content={header.start_project} />
        </section>
      </header>
    </div>
  );
};
