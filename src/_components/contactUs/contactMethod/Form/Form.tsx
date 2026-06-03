"use client";

import { PlayButton } from "@/src/_lib/components/playButton/PlayButton";
import { useActionState, useEffect, useRef, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import "./Form.css";
import { useTranslations } from "@/src/_providers/translationProvider";
import { manageForm } from "@/src/actions/contact";
import Link from "next/link";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaLinkedin,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { countries } from "@/src/models/contries";
import Image from "next/image";

const ContactForm = () => {
  const { form } = useTranslations();
  const [state, action] = useActionState(manageForm, { errors: {} });
  const [selected, setSelected] = useState(1);
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);
  const defaultCountry =
    countries.find((country) => country.code === "52") ?? countries[0];

  const [countrySearch, setCountrySearch] = useState(defaultCountry.code);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const filteredCountries = countries.filter((country) => {
    const query = countrySearch.toLowerCase();

    return (
      country.code.includes(query) ||
      country.iso.toLowerCase().includes(query) ||
      country.name?.toLowerCase().includes(query)
    );
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-10 flex h-full w-full max-w-[1440px] flex-col items-center gap-4 lg:gap-2">
      <div className="flex w-full items-end justify-end text-lg">
        <Link
          href="/contact-method"
          className="top-10 left-20 flex cursor-pointer items-center gap-4"
        >
          {<IoArrowBack />} {form.back}
        </Link>
      </div>
      <div className="flex h-full w-full max-w-[1200px] flex-col items-center justify-center gap-4 md:flex-row md:items-start">
        <div className="border-outline/50 to-primary/5 w-[90%] items-center rounded-xl border-[1px] bg-gradient-to-tr px-6 py-8 sm:p-8 md:w-[70%] lg:my-0 xl:w-1/2">
          <div className="flex flex-col pb-4">
            <h1 className="text-3xl font-semibold">{form.title}</h1>
            <h2 className="text-on-surface-variant text-2xl">
              {form.subtitle1}
            </h2>
            <h2 className="text-on-surface-variant text-2xl">
              {form.subtitle2}
            </h2>
          </div>

          <form
            action={action}
            className="flex h-full w-full flex-col items-start gap-5 md:items-center"
          >
            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <label className="text-on-surface flex w-full flex-col gap-1">
                {form.name}:
                <input
                  type="text"
                  name="name"
                  required
                  className="input-base h-10"
                />
                {state.errors.name && (
                  <p className="text-error">
                    {form.validation.name[state.errors.name[0]]}
                  </p>
                )}
              </label>
              <label className="text-on-surface flex w-full flex-col gap-1">
                {form.email}:
                <input
                  type="email"
                  name="email"
                  required
                  className="input-base h-10"
                />
                {state.errors.email && (
                  <p className="text-error">
                    {form.validation.email[state.errors.email[0]]}
                  </p>
                )}
              </label>
            </div>

            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <label className="text-on-surface flex w-full flex-col gap-1">
                {form.company}:
                <input type="text" name="company" className="input-base h-10" />
              </label>
              <label className="text-on-surface flex w-full flex-col gap-1">
                {form.phone}:
                <div className="flex w-full gap-[4px]">
                  <div ref={containerRef} className="relative h-10 w-1/4">
                    <input
                      type="text"
                      value={countrySearch}
                      onChange={(e) => {
                        setCountrySearch(e.target.value);
                        setIsCountryOpen(true);
                      }}
                      onFocus={() => setIsCountryOpen(true)}
                      className="border-primary/50 focus:bg-surface-container-high focus:border-primary h-full w-full rounded-lg border bg-transparent px-2 text-sm transition-colors outline-none"
                      required
                    />

                    <input
                      type="hidden"
                      name="countryCode"
                      value={selectedCountry.code}
                    />

                    <svg
                      className="text-muted-foreground absolute top-1/2 right-2 size-4 -translate-y-1/2 cursor-pointer"
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

                    {isCountryOpen && filteredCountries.length > 0 && (
                      <div className="bg-surface-container-high border-primary/50 absolute top-full z-20 mt-1 max-h-60 w-64 overflow-y-auto rounded-lg border shadow-lg">
                        {filteredCountries.map((country) => (
                          <button
                            key={country.iso}
                            type="button"
                            className="hover:bg-surface-container flex w-full gap-2 px-3 py-2 text-left text-sm"
                            onClick={() => {
                              setSelectedCountry(country);
                              setCountrySearch(country.code);
                              setIsCountryOpen(false);
                            }}
                          >
                            <Image
                              alt={`${country.name} flag`}
                              src={`https://codenation-studio-dev.github.io/country-flag-icons/3x2/${country.iso}.svg`}
                              width={16}
                              height={12}
                            />{" "}
                            {country.code + " " + country.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    pattern="\d{10}"
                    maxLength={10}
                    required
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                    onBlur={() => setTouched(true)}
                    className={`input-base h-10 w-3/4 ${
                      touched &&
                      phone.length > 0 &&
                      phone.length < 10 &&
                      "!border-red-500 focus:!border-red-500"
                    }`}
                  />
                </div>
              </label>
            </div>

            <label className="text-on-surface flex w-full flex-col gap-2">
              {form.budget}
              <div className="w-full max-w-2xl">
                <div className="border-primary/50 relative flex overflow-hidden rounded-xl border">
                  <div
                    className="bg-primary/50 absolute inset-y-0 rounded-lg transition-all duration-300"
                    style={{
                      width: `${100 / form.budgetOptions.length}%`,
                      left: `${selected * (100 / form.budgetOptions.length)}%`,
                    }}
                  />

                  {form.budgetOptions.map((budget: string, index: number) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelected(index)}
                      className={`relative z-10 flex-1 py-3 text-sm font-medium transition-colors duration-300 ${
                        selected === index
                          ? "text-primary-foreground"
                          : "text-muted-foreground"
                      } `}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>
              {state.errors.budget && (
                <p className="text-error">
                  {form.validation.budget[state.errors.budget[0]]}
                </p>
              )}
              <input
                type="hidden"
                name="budget"
                value={form.budgetOptions[selected]}
              />
            </label>
            <label className="text-on-surface flex w-full flex-col gap-1">
              {form.brief}:
              <textarea
                rows={6}
                maxLength={1750}
                name="brief"
                required
                className="input-base"
              />
              {state.errors.brief && (
                <p className="text-error">
                  {form.validation.brief[state.errors.brief[0]]}
                </p>
              )}
            </label>

            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <label className="text-on-surface flex w-full flex-col gap-1">
                {form.hear}:
                <div className="relative">
                  <select
                    className="border-primary/50 focus:bg-surface-container-high focus:border-primary w-full appearance-none rounded-xl border bg-transparent px-4 py-3 pr-12 text-sm transition-colors outline-none"
                    defaultValue=""
                    name="hear"
                    required
                  >
                    <option value="" disabled>
                      {form.hearDefault}
                    </option>

                    {form.hearOptions.map(
                      (option: { value: string; name: string }, i: number) => (
                        <option
                          value={option.value}
                          key={i}
                          className="rounded-xl"
                        >
                          {option.name}
                        </option>
                      ),
                    )}
                  </select>

                  <svg
                    className="text-muted-foreground absolute top-1/2 right-4 size-4 -translate-y-1/2 cursor-pointer"
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
                {state.errors.hear && (
                  <p className="text-error">
                    {form.validation.hear[state.errors.hear[0]]}
                  </p>
                )}
              </label>
              <label className="text-on-surface flex w-full flex-col gap-1">
                {form.projectType}:
                <div className="relative">
                  <select
                    className="border-primary/50 focus:bg-surface-container-high focus:border-primary w-full appearance-none rounded-xl border bg-transparent px-4 py-3 pr-12 text-sm transition-colors outline-none"
                    defaultValue=""
                    name="projectType"
                    required
                  >
                    <option value="" disabled>
                      {form.projectTypeDefault}
                    </option>

                    {form.projectTypeOptions.map(
                      (option: { value: string; name: string }, i: number) => (
                        <option
                          value={option.value}
                          key={i}
                          className="rounded-xl"
                        >
                          {option.name}
                        </option>
                      ),
                    )}
                  </select>

                  <svg
                    className="text-muted-foreground absolute top-1/2 right-4 size-4 -translate-y-1/2 cursor-pointer"
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
                {state.errors.hear && (
                  <p className="text-error">
                    {form.validation.hear[state.errors.hear[0]]}
                  </p>
                )}
              </label>
            </div>
            <div className="flex w-full items-end justify-end">
              <PlayButton
                content={form.button}
                width={200}
                color={{ text: "text-background", bg: "bg-primary-fixed" }}
                className="h-[40px]"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-4 md:flex-col lg:my-0">
          <Link
            href="https://www.instagram.com/codenationstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-outline/50 relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border-[1px]"
          >
            <FaSquareInstagram className="absolute transition-all duration-500 group-hover:-translate-x-12" />
            <FaSquareInstagram className="absolute translate-x-12 transition-all duration-500 group-hover:translate-x-0" />
          </Link>
          <Link
            href="https://www.facebook.com/CodenationStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-outline/50 relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border-[1px]"
          >
            <FaSquareFacebook className="absolute transition-all duration-500 group-hover:-translate-x-12" />
            <FaSquareFacebook className="absolute translate-x-12 transition-all duration-500 group-hover:translate-x-0" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/codenation-studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-outline/50 relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border-[1px]"
          >
            <FaLinkedin className="absolute transition-all duration-500 group-hover:-translate-x-12" />
            <FaLinkedin className="absolute translate-x-12 transition-all duration-500 group-hover:translate-x-0" />
          </Link>
          <Link
            href="https://wa.me/523339556808"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-outline/50 relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border-[1px]"
          >
            <FaSquareWhatsapp className="absolute transition-all duration-500 group-hover:-translate-x-12" />
            <FaSquareWhatsapp className="absolute translate-x-12 transition-all duration-500 group-hover:translate-x-0" />
          </Link>
          <Link
            href="mailto:info@codenation-studio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-outline/50 relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border-[1px]"
          >
            <MdEmail className="absolute transition-all duration-500 group-hover:-translate-x-12" />
            <MdEmail className="absolute translate-x-12 transition-all duration-500 group-hover:translate-x-0" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
