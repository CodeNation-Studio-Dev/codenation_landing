"use client";
import { useWindowSize } from "@hooks/windowSize";
import { useTranslations } from "@providers/translationProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CallOrMail = () => {
  const { contactMethod } = useTranslations();
  const [active, setActive] = useState("call");
  const router = useRouter();
  const windowSize = useWindowSize();

  const activeClassName =
    "cursor-default border-primary text-primary brightness-105 shadow-[inset_0_0_20px_rgba(255,255,255,0.12),inset_0_0_40px_rgba(255,255,255,0.08),inset_0_0_80px_rgba(255,255,255,0.05)]";
  const inactiveClassName = "border-outline cursor-pointer";
  return (
    <div className="border-outline/50 from-background to-primary/5 xs:w-[90%] h-[80%] w-full max-w-[1200px] items-center rounded-xl border-[1px] bg-gradient-to-tr px-6 py-8 sm:p-12 md:w-[70%] lg:w-[85%] xl:w-2/3">
      <h1 className="text-on-surface-variant pb-10 text-4xl font-semibold xl:pb-14 xl:text-5xl">
        {contactMethod.title}
      </h1>
      <div className="flex h-full w-full flex-col gap-8 lg:flex-row lg:gap-12">
        <div
          className={`border-outline flex w-full flex-col justify-center gap-6 rounded-lg border-[1px] px-6 py-12 lg:h-[75%] lg:w-[75%] xl:gap-10 xl:py-18 ${active === "call" ? activeClassName : inactiveClassName}`}
          onClick={() => (
            setActive("call"),
            windowSize < 1024 && router.push("/contact-method?election=call")
          )}
        >
          <h2 className="text-center text-xl xl:text-3xl">
            {contactMethod.call.title}
          </h2>
          <p className="text-on-surface-variant text-md pb-6 text-center xl:text-xl">
            {contactMethod.call.description}
          </p>
          {active === "call" ? (
            <Link
              href="/contact-method?election=call"
              className="text-primary hover:text-secondary cursor-pointer text-center text-lg font-bold underline xl:text-2xl"
            >
              {contactMethod.call.button}
            </Link>
          ) : (
            <p className="text-md cursor-pointer text-center xl:text-xl">
              {contactMethod.call.button}
            </p>
          )}
        </div>
        <div
          className={`border-outline flex w-full flex-col justify-center gap-6 rounded-lg border-[1px] px-6 py-12 lg:h-[75%] lg:w-[75%] xl:gap-10 xl:py-18 ${active === "mail" ? activeClassName : inactiveClassName}`}
          onClick={() => (
            setActive("mail"),
            windowSize < 1024 && router.push("/contact-method?election=mail")
          )}
        >
          <h2 className="text-center text-xl xl:text-3xl">
            {contactMethod.email.title}
          </h2>
          <p className="text-on-surface-variant text-md pb-6 text-center xl:text-xl">
            {contactMethod.email.description}
          </p>
          {active === "mail" ? (
            <Link
              href="/contact-method?election=mail"
              className="text-primary hover:text-secondary cursor-pointer text-center text-lg font-bold underline xl:text-2xl"
            >
              {contactMethod.email.button}
            </Link>
          ) : (
            <p className="text-md cursor-pointer text-center xl:text-xl">
              {contactMethod.email.button}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallOrMail;
