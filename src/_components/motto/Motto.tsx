"use client";
import Counter from "@lib/components/Counter";
import { useTranslations } from "@providers/translationProvider";
import { FaArrowRight } from "react-icons/fa6";

export const Motto = () => {
  const { motto } = useTranslations();

  return (
    <section className="flex items-center justify-center">
      <section className="grid max-w-[1154] grid-cols-1 items-center gap-x-7 gap-y-16 px-5 lg:grid-cols-2">
        <h2 className="font-inter text-left text-3xl md:text-5xl">
          {motto.title}
        </h2>
        <div className="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2">
          <figure className="col-span-1 flex justify-between rounded-2xl bg-[#ffffff0d] p-5 sm:col-span-2 lg:p-8">
            <figcaption className="flex flex-col gap-y-1">
              <p className="text-5xl md:text-7xl">
                <Counter target={500} duration={2} animation={"circ.out"} />
                {motto.mainGraph.value}
              </p>
              <span className="text-xs">{motto.mainGraph.description}</span>
              <span>{motto.mainGraph.client}</span>
            </figcaption>
            <div aria-hidden="true" className="flex items-end">
              <FaArrowRight />
            </div>
          </figure>
          <figure className="col-span-1 flex justify-between rounded-2xl bg-[#ffffff0d] p-5 lg:p-8">
            <figcaption className="flex flex-col gap-y-1">
              <p className="text-5xl md:text-7xl">
                <Counter target={200} duration={4} animation={"circ.out"} />
                {motto.leftGraph.value}
              </p>
              <span className="text-xs">{motto.leftGraph.description}</span>
              <span>{motto.leftGraph.client}</span>
            </figcaption>
            <div aria-hidden="true" className="flex items-end">
              <FaArrowRight />
            </div>
          </figure>
          <figure className="col-span-1 flex justify-between rounded-2xl bg-[#ffffff0d] p-5 lg:p-8">
            <figcaption className="flex flex-col gap-y-1">
              <p className="text-5xl md:text-7xl">
                <Counter target={76} duration={5} animation={"circ.out"} />
                {motto.rightGraph.value}
              </p>
              <span className="text-xs">{motto.rightGraph.description}</span>
              <span>{motto.rightGraph.client}</span>
            </figcaption>
            <div aria-hidden="true" className="flex items-end">
              <FaArrowRight />
            </div>
          </figure>
        </div>
      </section>
    </section>
  );
};
