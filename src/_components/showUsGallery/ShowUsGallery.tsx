"use client";
import { useTranslations } from "@/src/_providers/translationProvider";
import Image from "next/image";

export const ShowUsGallery = () => {
  const { show_us } = useTranslations();

  return (
    <section className="mb-[96px] flex max-w-[1740px] flex-col justify-center gap-y-12 lg:flex-row lg:gap-x-[10px] xl:mx-auto xl:px-[72px]">
      <p className="hidden w-[100%] text-3xl sm:flex lg:w-[calc(20%-5px)] lg:self-end xl:w-[calc(30%-5px)]">
        {show_us.title}
      </p>
      <div className="flex w-[100%] flex-col gap-y-5 lg:w-[calc(80%-5px)] xl:w-[calc(70%-5px)]">
        <div className="flex gap-x-5">
          <div className="relative h-[50vw] w-[70%] overflow-hidden rounded-2xl lg:h-[500px]">
            <Image
              src="/assets/team.jpeg"
              alt="team"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[40vw] w-[25%] self-end overflow-hidden rounded-2xl lg:h-[400px]">
            <Image
              src="/assets/working.jpeg"
              alt="team"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex gap-x-[10px]">
          <div className="relative h-[40vw] w-[calc(50%-5px)] overflow-hidden rounded-2xl lg:h-[400px]">
            <Image
              src="/assets/teammate.jpeg"
              alt="team"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[40vw] w-[calc(50%-5px)] self-end overflow-hidden rounded-2xl lg:h-[400px]">
            <Image
              src="/assets/activities.jpeg"
              alt="team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
