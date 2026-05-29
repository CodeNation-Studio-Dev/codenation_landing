"use client";

import { PlayButton } from "@/src/_lib/components/playButton/PlayButton";
import { SetStateAction, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import "./Form.css";
import { useTranslations } from "@/src/_providers/translationProvider";

const ContactForm = ({
  setFillForm,
}: {
  setFillForm: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { form } = useTranslations();
  const [selected, setSelected] = useState(1);

  return (
    <div className="mb-10 flex h-full w-full max-w-[1440px] flex-col items-center gap-4 lg:gap-2">
      <div className="flex w-full items-end justify-end text-lg">
        <button
          className="top-10 left-20 flex cursor-pointer items-center gap-4"
          onClick={() => setFillForm(false)}
        >
          {<IoArrowBack />} {form.back}
        </button>
      </div>
      <div className="border-outline/50 to-primary/5 w-[90%] items-center rounded-xl border-[1px] bg-gradient-to-tr px-6 py-8 sm:p-8 md:w-[70%] lg:my-0 xl:w-1/2">
        <form className="flex h-full w-full flex-col items-start gap-4 md:items-center">
          <label className="text-on-surface flex w-full flex-col gap-1 md:w-2/3">
            {form.name}:
            <input
              type="text"
              name="name"
              required
              className="input-base h-10"
            />
          </label>
          <label className="text-on-surface flex w-full flex-col gap-1 md:w-2/3">
            {form.email}:
            <input
              type="email"
              name="email"
              required
              className="input-base h-10"
            />
          </label>
          <label className="text-on-surface flex w-full flex-col gap-1 md:w-2/3">
            {form.company}:
            <input type="text" name="company" className="input-base h-10" />
          </label>
          <label className="text-on-surface flex w-full flex-col gap-1 md:w-2/3">
            {form.brief}:
            <textarea rows={4} name="brief" required className="input-base" />
          </label>
          <label className="text-on-surface flex w-full flex-col gap-2 md:w-2/3">
            {form.budget}
            <div className="w-full max-w-2xl">
              <div className="relative flex items-center justify-between">
                {form.budgetOptions.map((budget: string, i: number) => {
                  const active = i <= selected;

                  return (
                    <div
                      key={budget}
                      className="relative flex flex-1 flex-col items-center"
                    >
                      {i !== form.budgetOptions.length - 1 && (
                        <div className="absolute top-4 left-1/2 h-[2px] w-full">
                          <div className="h-full bg-gray-300" />

                          <div
                            className={`bg-primary absolute inset-0 transition-all duration-300 ${i < selected ? "w-full" : "w-0"} `}
                          />
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => setSelected(i)}
                        className={`bg-background z-10 flex size-8 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                          active
                            ? "border-primary bg-primary"
                            : "border-gray-300"
                        } `}
                      >
                        <div
                          className={`size-2 rounded-full ${
                            active ? "bg-white" : "bg-gray-300"
                          } `}
                        />
                      </button>
                      <span
                        className={`mt-3 text-sm transition-colors ${
                          active ? "text-foreground" : "text-gray-400"
                        } `}
                      >
                        {budget}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </label>
          <label className="text-on-surface flex w-full flex-col gap-1 md:w-2/3">
            {form.hear}:
            <div className="relative">
              <select
                className="border-primary/50 focus:bg-surface-container-high focus:border-primary w-full appearance-none rounded-xl border bg-transparent px-4 py-3 pr-12 text-sm transition-colors outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  {form.hearDefault}
                </option>

                {form.hearOptions.map(
                  (option: { value: string; name: string }, i: number) => (
                    <option value={option.value} key={i} className="rounded-xl">
                      {option.name}
                    </option>
                  ),
                )}
              </select>

              <svg
                className="text-muted-foreground pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </label>
          <PlayButton
            content={form.button}
            width={200}
            color={{ text: "text-background", bg: "bg-primary-fixed" }}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
