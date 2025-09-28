import Image from "next/image";
import { ReactElement } from "react";
import { AiOutlineAntDesign } from "react-icons/ai";

interface StoryCard {
  title: string;
  description: string;
  button: string;
  rotate?: boolean;
  className?: string;
}

interface StoryCardGallery extends StoryCard {
  variant: "gallery";
  gallery: ReactElement[];
}

interface StoryCardFull extends StoryCard {
  variant: "full";
  gallery: ReactElement;
}

type StoryCardProps = StoryCardGallery | StoryCardFull;

export const StoryCard = ({
  title,
  description,
  button,
  variant,
  gallery,
  className,
  rotate = false,
}: StoryCardProps) => {
  return (
    <section
      className={
        "font-inter flex flex-col gap-y-[36px] py-20 lg:flex-row lg:gap-x-[16px] lg:py-[200px] xl:gap-x-[30px] " +
        className
      }
    >
      <div
        className={`${rotate && "order-2"} bg-inverse-surface text-background flex h-[708px] flex-col justify-between rounded-3xl px-[36px] py-[54px] lg:w-1/2 lg:justify-start lg:gap-y-20 xl:h-[800px] xl:p-[72px] 2xl:p-[108px]`}
      >
        <h3 className="text-3xl font-bold md:text-4xl xl:text-6xl">{title}</h3>
        <footer className="flex flex-col gap-y-5 xl:gap-y-20">
          <p className="lg:text-2xl xl:text-2xl">{description}</p>
          <p className="w-fit border-b-1 pb-5">{button}</p>
        </footer>
      </div>
      {variant === "full" ? (
        <div
          className={`${rotate && "order-1"} relative h-[672px] w-full overflow-hidden rounded-3xl lg:h-[708px] lg:w-1/2 xl:h-[800px]`}
        >
          {gallery}
        </div>
      ) : (
        <div
          className={`${rotate && "order-1"} relative flex h-[100vw] w-full gap-x-5 lg:h-[708px] lg:w-1/2 xl:h-[800px]`}
        >
          <div className="flex w-[calc(50%-10px)] flex-col gap-y-5">
            <div className="relative h-[calc(40%-10px)] w-full overflow-hidden rounded-2xl">
              {gallery[0]}
            </div>
            <div className="relative h-[calc(60%-10px)] w-full self-end overflow-hidden rounded-2xl">
              {gallery[1]}
            </div>
          </div>
          <div className="flex w-[calc(50%-10px)] flex-col gap-y-6">
            <div className="relative h-[calc(60%-8px)] w-full overflow-hidden rounded-2xl">
              {gallery[2]}
            </div>
            <div className="bg-inverse-surface text-background relative flex h-[calc(10%-8px)] w-full items-center justify-center rounded-2xl text-4xl">
              <AiOutlineAntDesign />
            </div>
            <div className="relative h-[calc(30%-8px)] w-full self-end overflow-hidden rounded-2xl">
              {gallery[3]}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
