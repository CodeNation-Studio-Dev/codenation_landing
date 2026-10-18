"use client";

import { useActionState, useEffect, useRef } from "react";
import { useTranslations } from "@providers/translationProvider";
import { applyToJob } from "@/src/actions/careers";
import type { ApplicationField, ApplicationState } from "@/src/models/careers";
import { primaryButtonClass } from "./styles";
import "@components/contactUs/contactMethod/Form/Form.css";

const initialState: ApplicationState = {
  status: "idle",
  fieldErrors: {},
  values: {},
};

interface ApplicationFormProps {
  slug: string;
  lang: string;
  jobTitle: string;
  portfolioRequired: boolean;
}

export const ApplicationForm = ({
  slug,
  lang,
  jobTitle,
  portfolioRequired,
}: ApplicationFormProps) => {
  const { form } = useTranslations();
  const [state, action, pending] = useActionState(applyToJob, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  // Move focus to the result so keyboard and screen reader users notice it.
  useEffect(() => {
    if (state.status === "idle") return;
    const invalid = formRef.current?.querySelector<HTMLElement>(
      '[aria-invalid="true"]',
    );
    (invalid ?? feedbackRef.current)?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div
        ref={feedbackRef}
        tabIndex={-1}
        role="status"
        className="border-primary/50 from-primary-container/15 via-primary-container/40 to-primary-container/15 rounded-xl border bg-gradient-to-t px-6 py-8 outline-none sm:p-8"
      >
        <h2 className="text-2xl font-semibold">{form.successTitle}</h2>
        <p className="font-inter text-on-surface-variant mt-2">
          {form.successDescription}
        </p>
      </div>
    );
  }

  const fieldError = (field: ApplicationField) => {
    const code = state.fieldErrors[field];
    return code
      ? (form.validation[field]?.[code] as string | undefined)
      : undefined;
  };

  const renderField = ({
    name,
    label,
    required,
    hint,
    children,
  }: {
    name: ApplicationField;
    label: string;
    required: boolean;
    hint?: string;
    children: (props: {
      id: string;
      describedBy: string | undefined;
      invalid: boolean;
    }) => React.ReactNode;
  }) => {
    const id = `apply-${name}`;
    const error = fieldError(name);
    const describedBy =
      [hint && `${id}-hint`, error && `${id}-error`]
        .filter(Boolean)
        .join(" ") || undefined;
    return (
      <div className="flex w-full flex-col gap-1">
        <label htmlFor={id} className="text-on-surface flex flex-wrap gap-x-2">
          {label}
          <span className="text-on-surface-variant font-inter text-sm">
            {required ? "" : `(${form.optional})`}
          </span>
        </label>
        {children({ id, describedBy, invalid: Boolean(error) })}
        {hint && (
          <p
            id={`${id}-hint`}
            className="text-on-surface-variant font-inter text-sm"
          >
            {hint}
          </p>
        )}
        {error && (
          <p id={`${id}-error`} className="text-error font-inter text-sm">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <form
      ref={formRef}
      action={action}
      noValidate
      className="border-outline/50 to-primary/5 flex w-full flex-col gap-5 rounded-xl border bg-gradient-to-tr px-6 py-8 sm:p-8"
    >
      <input type="hidden" name="slug" value={slug} />
      <input type="hidden" name="lang" value={lang} />
      {/* Honeypot for bots; hidden from people and assistive technology. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="sr-only"
      />

      <div>
        <h2 className="text-2xl font-semibold sm:text-3xl">{form.title}</h2>
        <p className="font-inter text-on-surface-variant mt-1">
          {form.applyingFor}{" "}
          <strong className="text-on-surface font-semibold">{jobTitle}</strong>
        </p>
      </div>

      {state.error && (
        <div
          ref={feedbackRef}
          tabIndex={-1}
          role="alert"
          className="border-error/40 bg-error-container/20 text-on-surface font-inter rounded-lg border px-4 py-3 text-sm outline-none"
        >
          {form.errors[state.error]}
        </div>
      )}

      <div className="flex flex-col gap-5 md:flex-row">
        {renderField({
          name: "name",
          label: form.name,
          required: true,
          children: ({ id, describedBy, invalid }) => (
            <input
              id={id}
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={120}
              defaultValue={state.values.name}
              aria-invalid={invalid}
              aria-describedby={describedBy}
              className="input-base h-10"
            />
          ),
        })}
        {renderField({
          name: "email",
          label: form.email,
          required: true,
          children: ({ id, describedBy, invalid }) => (
            <input
              id={id}
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              defaultValue={state.values.email}
              aria-invalid={invalid}
              aria-describedby={describedBy}
              className="input-base h-10"
            />
          ),
        })}
      </div>

      {renderField({
        name: "portfolioUrl",
        label: form.portfolioUrl,
        required: portfolioRequired,
        hint: form.portfolioHint,
        children: ({ id, describedBy, invalid }) => (
          <input
            id={id}
            name="portfolioUrl"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="https://"
            required={portfolioRequired}
            maxLength={500}
            defaultValue={state.values.portfolioUrl}
            aria-invalid={invalid}
            aria-describedby={describedBy}
            className="input-base h-10"
          />
        ),
      })}

      {renderField({
        name: "resumeUrl",
        label: form.resumeUrl,
        required: false,
        hint: form.resumeHint,
        children: ({ id, describedBy, invalid }) => (
          <input
            id={id}
            name="resumeUrl"
            type="text"
            inputMode="url"
            placeholder="https://"
            maxLength={500}
            defaultValue={state.values.resumeUrl}
            aria-invalid={invalid}
            aria-describedby={describedBy}
            className="input-base h-10"
          />
        ),
      })}

      {renderField({
        name: "message",
        label: form.message,
        required: false,
        children: ({ id, describedBy, invalid }) => (
          <textarea
            id={id}
            name="message"
            rows={5}
            maxLength={1500}
            defaultValue={state.values.message}
            aria-invalid={invalid}
            aria-describedby={describedBy}
            className="input-base"
          />
        ),
      })}

      <div className="flex justify-end">
        <button type="submit" disabled={pending} className={primaryButtonClass}>
          {pending ? form.submitting : form.submit}
        </button>
      </div>
    </form>
  );
};
