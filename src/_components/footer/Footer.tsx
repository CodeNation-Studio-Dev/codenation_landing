"use client";
import { useTranslations } from "@providers/translationProvider";
import { GoArrowUpRight } from "react-icons/go";
import { FaSquareFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  const { footer } = useTranslations();

  return (
    <footer className="bg-background grid w-full px-5 py-24 sm:px-15 lg:place-content-center">
      <article className="text-on-surface grid w-full grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 xl:w-[1130px]">
        <section className="grid gap-y-4 sm:col-span-3 lg:col-span-2">
          <h2 className="font-inter mb-3 text-sm font-bold tracking-[3px] uppercase">
            {footer.contactUs.title}
          </h2>
          <p className="max-w-[350px]">{footer.contactUs.address}</p>
          <p>{footer.contactUs.phone}</p>
          <button className="bg-primary-container text-tertiary group grid w-[300px] cursor-pointer grid-flow-col items-center justify-between gap-4 rounded-full px-7 py-4 backdrop-blur-2xl">
            <div className="text-left">
              <p className="text-sm font-bold">{footer.contactUs.callUs}</p>
              <span className="text-sm">{footer.contactUs.analyze}</span>
            </div>
            <figure className="bg-opacity-30 relative h-[55px] w-[55px] overflow-hidden rounded-full">
              <GoArrowUpRight className="absolute top-1/2 left-1/2 h-[25px] w-[25px] -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:translate-x-8 group-hover:-translate-y-12 group-hover:opacity-0" />
              <GoArrowUpRight className="absolute h-[25px] w-[25px] -translate-x-4 translate-y-12 opacity-0 transition-all duration-500 group-hover:translate-x-[19px] group-hover:translate-y-3 group-hover:opacity-100" />
            </figure>
          </button>
        </section>
        <section>
          <h2 className="font-inter mb-3 text-sm font-bold tracking-[3px] uppercase">
            {footer.services.title}
          </h2>
          <ul className="grid gap-y-2">
            <li>{footer.services.web}</li>
            <li>{footer.services.mobile}</li>
            <li>{footer.services.design}</li>
          </ul>
        </section>
        <section>
          <h2 className="font-inter mb-3 text-sm font-bold tracking-[3px] uppercase">
            {footer.solutions.title}
          </h2>
          <ul className="grid gap-y-2">
            <li>{footer.solutions.contactCenter}</li>
            <li>{footer.solutions.cloud}</li>
            <li>{footer.solutions.ai}</li>
          </ul>
        </section>
        <section>
          <h2 className="font-inter mb-3 text-sm font-bold tracking-[3px] uppercase">
            {footer.company.title}
          </h2>
          <ul className="mb-10 grid gap-y-2">
            <li>{footer.company.aboutUs}</li>
            <li>{footer.company.careers}</li>
            <li>{footer.company.blog}</li>
          </ul>
          <footer className="grid grid-cols-4 text-2xl">
            <a href="https://www.facebook.com/CodenationStudio">
              <FaSquareFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/codenation-studio/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/523317255576"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a href="mailto:info@codenation-studio.com">
              <MdEmail />
            </a>
          </footer>
        </section>
      </article>
    </footer>
  );
};
