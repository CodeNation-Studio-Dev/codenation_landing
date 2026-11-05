import type { IconType } from "react-icons";
import {
  FaArrowUpRightFromSquare,
  FaFacebookF,
  FaBriefcase,
  FaCode,
  FaInstagram,
  FaLinkedinIn,
  FaWandMagicSparkles,
} from "react-icons/fa6";

export type LinkInBioItem = {
  key: "website" | "services" | "work" | "contact";
  href: string;
  icon: IconType;
  external?: boolean;
};

export type LinkInBioSocial = {
  key: "linkedin" | "instagram" | "facebook" | "github" | "x";
  href: string;
  icon: IconType;
};

export const linkInBioLinks: LinkInBioItem[] = [
  {
    key: "website",
    href: "https://codenation-studio.com/",
    icon: FaArrowUpRightFromSquare,
    external: true,
  },
  {
    key: "services",
    href: "/en-US/services/webpage",
    icon: FaWandMagicSparkles,
  },
  {
    key: "work",
    href: "/en-US#showcase",
    icon: FaCode,
  },
  {
    key: "contact",
    href: "/en-US/contact-us",
    icon: FaBriefcase,
  },
];

// Keep this list easy to update as official profiles are confirmed.
export const linkInBioSocials: LinkInBioSocial[] = [
  {
    key: "linkedin",
    href: "https://www.linkedin.com/company/codenation-studio/",
    icon: FaLinkedinIn,
  },
  {
    key: "instagram",
    href: "https://www.instagram.com/codenationstudio/",
    icon: FaInstagram,
  },
  {
    key: "facebook",
    href: "https://www.facebook.com/CodenationStudio",
    icon: FaFacebookF,
  },
];
