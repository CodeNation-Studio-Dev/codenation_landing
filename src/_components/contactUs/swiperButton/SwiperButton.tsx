"use client";

import Link from "next/link";
import "./SwiperButton.css";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";

const SwiperButton = () => {
  const router = useRouter();
  return (
    <div
      className="bigtext-container gap-6 self-center justify-self-center"
      onClick={() => router.push("/contact-method")}
    >
      <h2 className="text-center text-2xl">
        Let&apos;s see if we&apos;re a good fit
      </h2>
      <div className="bigtext-wrapper font-inter">
        <div className="marquee">
          <div className="marquee-content px-2 py-4 text-5xl sm:text-7xl md:text-8xl lg:px-3 lg:py-6 lg:text-9xl xl:px-4">
            <p>Book a Call •</p>
            <p>Share Your Project •</p>
            <p>Let&apos;s Talk •</p>

            <p>Book a Call •</p>
            <p>Share Your Project •</p>
            <p>Let&apos;s Talk •</p>
          </div>
        </div>
      </div>
      <div className="flex gap-6 text-xl">
        <Link
          href="https://www.facebook.com/CodenationStudio"
          className="hover:mx-10"
        >
          <FaSquareFacebook />
        </Link>
        <Link
          href="https://www.linkedin.com/company/codenation-studio/"
          className="hover:mx-10"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://wa.me/523339556808"
          className="hover:mx-10"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareWhatsapp />
        </Link>
        <Link href="mailto:info@codenation-studio.com" className="hover:mx-10">
          <MdEmail />
        </Link>
      </div>
    </div>
  );
};

export default SwiperButton;
