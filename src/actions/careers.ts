"use server";

import { z } from "zod";
import { getDictionary } from "@lib/helpers/getDictionary";
import {
  acceptsApplications,
  getJobBySlug,
  isLocale,
} from "@lib/helpers/careers";
import type {
  ApplicationField,
  ApplicationState,
  JobContent,
} from "@/src/models/careers";

const FIELDS: ApplicationField[] = [
  "name",
  "email",
  "portfolioUrl",
  "resumeUrl",
  "message",
];

/** Lets people type "behance.net/me" without the scheme. */
const withProtocol = (value: string) =>
  value && !/^[a-z][a-z0-9+.-]*:/i.test(value) ? `https://${value}` : value;

const urlSchema = z.url({
  protocol: /^https?$/,
  hostname: z.regexes.domain,
});

const urlField = (required: boolean) =>
  z
    .string()
    .transform(withProtocol)
    .refine((value) => !required || value !== "", { error: "required" })
    .refine((value) => value === "" || urlSchema.safeParse(value).success, {
      error: "invalid",
    });

function buildSchema(portfolioRequired: boolean) {
  return z.object({
    name: z.string().min(2, "required").max(120, "required"),
    email: z
      .string()
      .min(1, "required")
      .max(254, "invalid")
      .pipe(z.email({ error: "invalid" })),
    portfolioUrl: urlField(portfolioRequired),
    resumeUrl: urlField(false),
    message: z.string().max(1500, "tooLong"),
  });
}

function readValues(formData: FormData) {
  const values: Partial<Record<ApplicationField, string>> = {};
  for (const field of FIELDS) {
    const raw = formData.get(field);
    values[field] = typeof raw === "string" ? raw.trim() : "";
  }
  return values;
}

async function notifyRecruiters(text: string) {
  // Same Telegram webhook used by the contact form. Optionally route
  // applications to a dedicated recruitment chat with CAREERS_CHAT_ID.
  const webhook = process.env.NEXT_PUBLIC_CONTACT_FORM_URL;
  const chatId = process.env.CAREERS_CHAT_ID ?? process.env.NEXT_PUBLIC_CHAT_ID;
  if (!webhook || !chatId) return false;

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function applyToJob(
  _state: ApplicationState,
  formData: FormData,
): Promise<ApplicationState> {
  const values = readValues(formData);
  const slug = String(formData.get("slug") ?? "");
  const lang = String(formData.get("lang") ?? "");

  // The job must exist and still be open: never trust the client for this.
  const job = getJobBySlug(slug);
  if (!job || !isLocale(lang) || !acceptsApplications(job)) {
    return { status: "error", fieldErrors: {}, error: "unavailable", values };
  }

  // Honeypot: real people never see or fill this field.
  if (formData.get("website")) {
    return { status: "success", fieldErrors: {}, values: {} };
  }

  const parsed = buildSchema(Boolean(job.portfolioRequired)).safeParse(values);
  if (!parsed.success) {
    const fieldErrors: ApplicationState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as ApplicationField;
      if (FIELDS.includes(field) && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
    return { status: "error", fieldErrors, values };
  }

  const data = parsed.data;
  const dict = await getDictionary(lang, "careers");
  const content = dict.jobs[job.slug] as JobContent | undefined;
  if (!content) {
    return { status: "error", fieldErrors: {}, error: "unavailable", values };
  }

  const text = [
    "Nueva postulación de empleo:",
    `Puesto: ${content.title} (${job.id})`,
    `Idioma del sitio: ${lang}`,
    `Nombre: ${data.name}`,
    `Email: ${data.email}`,
    `Portafolio: ${data.portfolioUrl || "—"}`,
    `CV: ${data.resumeUrl || "—"}`,
    `Mensaje: ${data.message || "—"}`,
  ].join("\n\n");

  const delivered = await notifyRecruiters(text);
  if (!delivered) {
    return { status: "error", fieldErrors: {}, error: "failed", values };
  }

  return { status: "success", fieldErrors: {}, values: {} };
}
