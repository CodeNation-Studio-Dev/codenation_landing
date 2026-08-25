import { GoArrowUpRight } from "react-icons/go";

export const PinButton = ({ content }: { content: string }) => {
  return (
    <button className="group text-tertiary relative flex items-center">
      <div
        className={`border-default relative inline-flex items-center justify-center overflow-hidden rounded-full px-2 py-2 text-sm leading-tight shadow-none`}
      >
        {content}
      </div>
      <figure className="bg-opacity-30 relative h-[15px] w-[15px] overflow-hidden rounded-full">
        <GoArrowUpRight className="relative top-0 left-0 h-[15px] w-[15px] transform transition-transform xl:group-hover:translate-x-full xl:group-hover:-translate-y-full" />
        <GoArrowUpRight className="absolute top-0 left-0 h-[15px] w-[15px] -translate-x-full translate-y-full transform transition-transform xl:group-hover:translate-x-0 xl:group-hover:translate-y-0" />
      </figure>
    </button>
  );
};
