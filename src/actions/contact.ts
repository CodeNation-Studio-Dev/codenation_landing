"use server";

import z from "zod";

const client = z.object({
  name: z
    .string("")
    .min(2, "required")
    .regex(/^[\p{L} ]+$/u, "specialChars"),
  email: z.string().trim().toLowerCase().email("invalid"),
  brief: z.string().trim().min(20, "required"),
  budget: z.enum(
    [
      "0-3k",
      "3k-6k",
      "6k-12k",
      "+12k",
      "0-50k",
      "50k-100k",
      "100k-200k",
      "200k+",
    ],
    {
      message: "required",
    },
  ),
  hear: z.enum(
    [
      "Google",
      "Linkedin",
      "Instagram",
      "Tiktok",
      "Youtube",
      "Referral",
      "Previous Client",
      "Gpt",
      "Other",
    ],
    {
      message: "required",
    },
  ),
  company: z.string().trim().optional(),
});

interface FormState {
  errors: {
    name?: string[];
    email?: string[];
    brief?: string[];
    budget?: string[];
    hear?: string[];
    company?: string[];
  };
}

export async function manageForm(state: FormState, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const company = formData.get("company");
  const phone = formData.get("phone");
  const countryCode = formData.get("countryCode");
  const budget = formData.get("budget");
  const brief = formData.get("brief");
  const hear = formData.get("hear");
  const projectType = formData.get("projectType");

  const validateFields = client.safeParse({
    name: name,
    email: email,
    company: company,
    budget: budget,
    brief: brief,
    hear: hear,
  });

  if (!validateFields.success) {
    console.log("Form error");
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  console.log("Form success");

  const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      company,
      phone,
      countryCode,
      budget,
      brief,
      hear,
      projectType,
    }),
  });
  if (!req.ok) {
    console.log("Error", req);
  }
  return { errors: {} };
}
