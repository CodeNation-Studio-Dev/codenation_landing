"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "@providers/translationProvider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@hooks/windowSize";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { PlayButton } from "@lib/components/playButton/PlayButton";
import "./Header.css";
import { DropdownMenu } from "../dropdownMenu/DropdownMenu";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const { header } = useTranslations();
  const [open, setOpen] = useState<boolean>(false);
  const { lang } = useParams();
  const pathname = usePathname();
  const headerRef = useRef<HTMLHeadElement>(null);
  const windowSize = useWindowSize();
  const [openMenu, setOpenMenu] = useState(false);
  const searchParams = useSearchParams();
  const query = searchParams.toString();

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
    <div className="relative z-101 h-[82px] w-full">
      <header
        ref={headerRef}
        onMouseLeave={() => setOpenMenu(false)}
        className="font-inter absolute top-3 left-[50%] flex w-full translate-x-[-50%] justify-between px-8 py-4 transition-[width] duration-500"
      >
        <div className="flex w-full items-center justify-between">
          <section>
            <Link href={`/${lang}`} className="relative block h-9 w-36">
              <Image
                src="/assets/white-logo.png"
                alt="CodeNation Studio logo"
                fill
                sizes="15x35"
                priority
                className="rounded-4xl"
              />
            </Link>
          </section>

          {windowSize > 1024 && (
            <section className="flex gap-x-8 text-center">
              <button
                onMouseEnter={() => setOpenMenu(true)}
                onClick={() => setOpenMenu(true)}
                className="cursor-pointer"
              >
                {header.services}
              </button>
              <DropdownMenu open={openMenu} setOpen={setOpenMenu} lang={lang} />
              <a className="cursor-pointer" href={`/${lang}#showcase`}>
                {header.work}
              </a>
              <Link href={`/${lang}/about-us`}>{header.about}</Link>
              <Link href={`/${lang}/blog`}>{header.blog}</Link>
              <Link
                href="https://www.linkedin.com/company/codenation-studio/"
                rel="noopener no referrer"
                target="_blank"
              >
                {header.contact}
              </Link>
            </section>
          )}

          <section className="flex items-center gap-x-5">
            {lang === "es-MX" ? (
              <Link
                href={`${pathname.replace(/^\/es-MX/, "/en-US")}${query ? `?${query}` : ""}`}
                className="text-xs"
              >
                EN
              </Link>
            ) : (
              <Link
                href={`${pathname.replace(/^\/en-US/, "/es-MX")}${query ? `?${query}` : ""}`}
                className="text-xs"
              >
                ES
              </Link>
            )}

            {windowSize > 1024 ? (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={
                  "https://www.linkedin.com/in/francisco-javier-luna-figueroa/"
                }
              >
                <PlayButton content={header.start_project} width={150} />
              </Link>
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
          <Link href={`/${lang}/services/webpage`}>{header.services}</Link>
          <Link href={`/${lang}/#showcase`}>{header.work}</Link>
          <Link href={`/${lang}/about-us`}>{header.about}</Link>
          {/* <p>{header.blog}</p> */}
          <Link
            href="https://www.linkedin.com/company/codenation-studio/"
            rel="noopener no referrer"
            target="_blank"
          >
            {header.contact}
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.linkedin.com/in/francisco-javier-luna-figueroa/"}
          >
            <PlayButton content={header.start_project} width={150} />
          </Link>
        </section>
      </header>
    </div>
  );
};
