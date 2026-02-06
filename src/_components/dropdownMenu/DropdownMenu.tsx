"use client";
import { useTranslations } from "@/src/_providers/translationProvider";
import Link from "next/link";

interface MenuItem {
  title: string;
  description: string;
  url: string;
}

export const DropdownMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const { dropdown } = useTranslations();
  return (
    <div
      onMouseLeave={() => setOpen(false)}
      className={`pointer-events-auto absolute top-12 flex-shrink-0 translate-x-[-160px] transform pt-8 transition ${open ? "opacity-100" : "hidden"} text-left`}
    >
      <div className="shadow-3xl dark:bg-grayDark-500 bg-surface-container relative flex w-[600px] rounded-2xl p-8 lg:rounded-3xl">
        <div className="dark:bg-grayDark-500 bg-surface-container absolute -top-1.5 left-1/3 h-3 w-3 -translate-x-full rotate-45 transform rounded-sm"></div>
        <div className="inline-flex w-7/12 flex-col items-start pr-2">
          {dropdown.menuItems.map((menuItem: MenuItem, i: number) => (
            <Link
              key={i}
              href={`/services/${menuItem.url}/`}
              className="group bg-opacity-0 dark:bg-grayDark-600 dark:bg-opacity-0 xl:hover:bg-opacity-100 bg-surface-container w-full flex-1 flex-col items-start justify-center rounded-2xl px-4 py-2.5 dark:text-white"
            >
              <div className="flex h-full flex-col justify-center">
                <div className="flex items-center justify-between">
                  <div className="text-base">{menuItem.title}</div>
                  <div className="-translate-x-2 translate-y-2 transform opacity-0 transition xl:group-hover:translate-x-0 xl:group-hover:translate-y-0 xl:group-hover:opacity-100">
                    <svg
                      className="h-3.5 w-3.5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                    </svg>
                  </div>
                </div>
                <div className="4xl:text-sm text-sm font-light text-gray-400 dark:text-gray-200">
                  {menuItem.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="inline-flex w-5/12 pl-3">
          <Link
            href="/services/webpage/"
            className="group dark:bg-grayDark-600 bg-background inline-flex w-full flex-col items-start justify-between rounded-2xl p-5"
          >
            <div className="flex w-full flex-wrap">
              <div className="mb-2 flex w-full items-center justify-between">
                <div className="text-md leading-tight dark:text-white">
                  {dropdown.sideTitle}
                </div>
                <div className="-translate-x-2 translate-y-2 transform opacity-0 transition xl:group-hover:translate-x-0 xl:group-hover:translate-y-0 xl:group-hover:opacity-100">
                  <svg
                    className="h-4 w-4 fill-current text-gray-600 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                  </svg>
                </div>
              </div>
              <div className="4xl:text-sm mb-5 w-full text-sm font-light text-gray-400 dark:text-white">
                {dropdown.sideDescription}
              </div>
            </div>
            <div className="relative w-full">
              <div className="relative w-full">
                <picture className="h-full w-full">
                  <img
                    src={"/assets/menu.webp"}
                    sizes="100vw"
                    alt="Shape April 2022 HR 219"
                    className="relative w-full rounded-2xl"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                </picture>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
