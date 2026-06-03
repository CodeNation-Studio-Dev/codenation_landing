"use client";

import Link from "next/link";
import "./SwiperButton.css";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaLinkedin,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useTranslations } from "@/src/_providers/translationProvider";

const SwiperButton = () => {
  const { bigButton } = useTranslations();
  const router = useRouter();
  return (
    <div
      className="bigtext-container gap-6 self-center justify-self-center"
      onClick={() => router.push("/contact-method")}
    >
      <h2 className="text-center text-2xl">{bigButton.catch}</h2>
      <div className="bigtext-wrapper">
        <div className="marquee">
          <div className="marquee-content px-2 py-4 text-5xl sm:text-7xl md:text-8xl lg:px-3 lg:py-6 lg:text-9xl xl:px-4">
            {bigButton.phrases.map((phrase: string, i: number) => (
              <p key={i}>{phrase} • </p>
            ))}
            {bigButton.phrases.map((phrase: string, i: number) => (
              <p key={i}>{phrase} • </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-6 text-xl">
        <Link
          href="https://www.instagram.com/codenationstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="group border-outline/30 relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border-[1px]"
        >
          <FaSquareInstagram className="absolute transition-all duration-500 group-hover:-translate-y-12" />
          <FaSquareInstagram className="absolute translate-y-12 transition-all duration-500 group-hover:translate-y-0" />
        </Link>
        <Link
          href="https://www.facebook.com/CodenationStudio"
          target="_blank"
          rel="noopener noreferrer"
          className="group border-outline/30 relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border-[1px]"
        >
          <FaSquareFacebook className="absolute transition-all duration-500 group-hover:-translate-y-12" />
          <FaSquareFacebook className="absolute translate-y-12 transition-all duration-500 group-hover:translate-y-0" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/codenation-studio/"
          target="_blank"
          rel="noopener noreferrer"
          className="group border-outline/30 relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border-[1px]"
        >
          <FaLinkedin className="absolute transition-all duration-500 group-hover:-translate-y-12" />
          <FaLinkedin className="absolute translate-y-12 transition-all duration-500 group-hover:translate-y-0" />
        </Link>
        <Link
          href="https://wa.me/523339556808"
          target="_blank"
          rel="noopener noreferrer"
          className="group border-outline/30 relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border-[1px]"
        >
          <FaSquareWhatsapp className="absolute transition-all duration-500 group-hover:-translate-y-12" />
          <FaSquareWhatsapp className="absolute translate-y-12 transition-all duration-500 group-hover:translate-y-0" />
        </Link>
        <Link
          href="mailto:info@codenation-studio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group border-outline/30 relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border-[1px]"
        >
          <MdEmail className="absolute transition-all duration-500 group-hover:-translate-y-12" />
          <MdEmail className="absolute translate-y-12 transition-all duration-500 group-hover:translate-y-0" />
        </Link>
      </div>
    </div>
  );
};

export default SwiperButton;
