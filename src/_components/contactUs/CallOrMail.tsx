"use client";
import Link from "next/link";
import { useState } from "react";

const CallOrMail = () => {
  const [active, setActive] = useState("call");

  const activeClassName =
    "border-primary text-primary brightness-105 shadow-[inset_0_0_20px_rgba(255,255,255,0.12),inset_0_0_40px_rgba(255,255,255,0.08),inset_0_0_80px_rgba(255,255,255,0.05)]";
  const inactiveClassName = "border-outline";
  return (
    <div className="border-outline/50 from-background to-primary/5 w-[90%] max-w-[1200px] items-center rounded-xl border-[1px] bg-gradient-to-tr px-6 py-8 sm:p-12 lg:w-2/3 xl:w-1/2">
      <h1 className="text-on-surface-variant pb-12 text-4xl font-semibold">
        What&apos;s this about
      </h1>
      <div className="flex w-full flex-col gap-2 md:flex-row">
        <div
          className={`border-outline flex w-1/2 w-full cursor-pointer flex-col justify-center gap-6 rounded-lg border-[1px] px-6 py-12 ${active === "call" ? activeClassName : inactiveClassName}`}
          onClick={() => setActive("call")}
        >
          <h2 className="h-1/4 text-center text-2xl">
            I want to make a project enquiry
          </h2>
          <p className="text-on-surface-variant h-1/2 pb-6 text-center">
            Perfect if you already have an idea and want us to take a look.
            Share some details and we&apos;ll get back to you with a plan.
          </p>
          <Link
            href=""
            className={`h-1/4 text-center ${active === "call" ? "text-primary text-lg font-bold underline" : "no-underline"}`}
          >
            Let&apos;s book it!
          </Link>
        </div>
        <div
          className={`border-outline flex w-1/2 w-full cursor-pointer flex-col justify-center gap-6 rounded-lg border-[1px] px-6 py-12 ${active === "mail" ? activeClassName : inactiveClassName}`}
          onClick={() => setActive("mail")}
        >
          <h2 className="h-1/4 text-center text-2xl">I want to write to you</h2>
          <p className="text-on-surface h-1/2 pb-6 text-center">
            Have a quick question or just want to say hi? You&apos;re in the
            right place.
          </p>
          <Link
            href=""
            className={`h-1/4 text-center ${active === "mail" ? "text-primary text-lg font-bold underline" : "no-underline"}`}
          >
            Write to us!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallOrMail;
