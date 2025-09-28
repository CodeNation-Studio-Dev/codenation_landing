interface TwoColumnTextProps {
  rightText: string;
  leftText: string;
  className?: string;
  rotate?: boolean;
}

export const TwoColumnText = ({
  rightText,
  leftText,
  className,
  rotate = false,
}: TwoColumnTextProps) => {
  return (
    <section
      className={
        "flex flex-col justify-center text-sm md:gap-8 md:text-lg lg:flex-row lg:text-2xl " +
        className
      }
    >
      <div
        className={`hidden max-w-[765px] md:flex ${rotate && "lg:order-2 lg:justify-end"} lg:w-1/2`}
      >
        <p className="font-bold">{leftText}</p>
      </div>
      <div
        className={`max-w-[765px] text-justify ${rotate && "lg:order-1"} lg:w-1/2`}
      >
        <p className="whitespace-pre-line">{rightText}</p>
      </div>
    </section>
  );
};
