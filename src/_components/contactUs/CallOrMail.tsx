"use client";
import Link from "next/link";
import { useState } from "react";

const CallOrMail = () => {
  const [active, setActive] = useState("call");

  const activeClassName =
    " border-primary text-primary brightness-105 shadow-[inset_0_0_20px_rgba(255,255,255,0.12),inset_0_0_40px_rgba(255,255,255,0.08),inset_0_0_80px_rgba(255,255,255,0.05)]";
  const inactiveClassName = "border-outline";
  return (
    <div className="font-inter border-outline/50 from-background to-primary/5 my-8 h-[80%] w-[70%] max-w-[1200px] items-center rounded-xl border-[1px] bg-gradient-to-tr px-6 py-8 sm:p-12 lg:my-0 xl:w-2/3">
      <h1 className="text-on-surface-variant pb-10 text-4xl font-semibold xl:pb-14 xl:text-5xl">
        What&apos;s this about
      </h1>
      <div className="flex h-full w-full flex-col gap-8 lg:flex-row lg:gap-12">
        <div
          className={`border-outline flex w-full cursor-pointer flex-col justify-center gap-6 rounded-lg border-[1px] px-6 py-12 lg:h-[75%] lg:w-[75%] ${active === "call" ? activeClassName : inactiveClassName}`}
          onClick={() => setActive("call")}
        >
          <h2 className="text-center text-xl xl:text-3xl">
            I want to make a project enquiry
          </h2>
          <p className="text-on-surface-variant text-md pb-6 text-center xl:text-xl">
            Perfect if you already have an idea and want us to take a look.
            Share some details and we&apos;ll get back to you with a plan.
          </p>
          <Link
            href=""
            className={`text-center ${active === "call" ? "text-primary text-lg font-bold underline xl:text-2xl" : "text-md no-underline xl:text-xl"}`}
          >
            Let&apos;s book it!
          </Link>
        </div>
        <div
          className={`border-outline flex w-full cursor-pointer flex-col justify-center gap-6 rounded-lg border-[1px] px-6 py-12 lg:h-[75%] lg:w-[75%] ${active === "mail" ? activeClassName : inactiveClassName}`}
          onClick={() => setActive("mail")}
        >
          <h2 className="text-center text-xl xl:text-3xl">
            I want to write to you
          </h2>
          <p className="text-on-surface-variant text-md pb-6 text-center xl:text-xl">
            Have a quick question or just want to say hi? You&apos;re in the
            right place.
          </p>
          <Link
            href=""
            className={`text-center ${active === "mail" ? "text-primary text-lg font-bold underline xl:text-2xl" : "text-md no-underline xl:text-xl"}`}
          >
            Write to us!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallOrMail;
