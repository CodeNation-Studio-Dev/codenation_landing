import Image from "next/image";
import { ReactNode } from "react";

interface TwoColumnImageContentProps {
  rightImage: string;
  leftText: ReactNode;
  className?: string;
  rotate?: boolean;
  leftClassName?: string;
  topHidden?: boolean;
  altImg: string;
}

export const TwoColumnImageContent = ({
  leftText,
  className,
  leftClassName = "",
  rightImage,
  rotate = false,
  topHidden = false,
  altImg = "",
}: TwoColumnImageContentProps) => {
  return (
    <section
      className={
        "flex flex-col justify-center text-sm md:gap-8 md:text-lg lg:flex-row lg:text-2xl " +
        className
      }
    >
      <div
        className={`${topHidden && "hidden"} max-w-[765px] md:flex ${rotate && "lg:order-2 lg:justify-end"} lg:w-1/2 ${leftClassName}`}
      >
        {leftText}
      </div>
      <div
        className={`max-w-[765px] text-justify ${rotate && "lg:order-1"} lg:w-1/2`}
      >
        <div className="relative h-[550px] w-full overflow-hidden rounded-xl">
          <Image src={rightImage} alt={altImg} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};
