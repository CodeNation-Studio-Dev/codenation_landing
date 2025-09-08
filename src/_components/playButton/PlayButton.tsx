import { GoArrowUpRight } from "react-icons/go";

export const PlayButton = ({
  content,
  width,
}: {
  content: string;
  width: number;
}) => {
  return (
    <a
      className={`group text-tertiary relative flex`}
      style={{ width: width + 25 }}
    >
      <button
        className={`border-default bg-primary-container relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2 text-sm leading-tight shadow-none`}
        style={{ width }}
      >
        {content}
      </button>
      <div className="bg-primary-container absolute right-0 flex h-9 w-9 transform items-center justify-center rounded-full transition-transform group-hover:translate-x-3 group-hover:rotate-45">
        <GoArrowUpRight size="16px" />
      </div>
    </a>
  );
};
