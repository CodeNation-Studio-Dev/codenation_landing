import { GoArrowUpRight } from "react-icons/go";

interface PlayButtonProps {
  content: string;
  width: number;
  color?: { text: string; bg: string };
  className?: string;
}

export const PlayButton = ({
  content,
  width,
  color = { text: "text-tertiary", bg: "bg-primary-container" },
  className,
}: PlayButtonProps) => {
  return (
    <button
      className={`group ${color.text} relative flex ` + className}
      style={{ width: width + 25 }}
    >
      <div
        className={`border-default ${color.bg} relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2 text-sm leading-tight shadow-none`}
        style={{ width }}
      >
        {content}
      </div>
      <div
        className={`${color.bg} absolute right-0 flex h-9 w-9 transform items-center justify-center rounded-full transition-transform group-hover:translate-x-3 group-hover:rotate-45`}
      >
        <GoArrowUpRight size="16px" />
      </div>
    </button>
  );
};
